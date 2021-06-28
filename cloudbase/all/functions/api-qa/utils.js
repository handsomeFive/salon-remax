function isOk(errMsg) {
  return errMsg.slice(-2) === 'ok';
}

async function getList(collection, event) {
  const MAX_LIMIT = 100;
  const { total } = await collection.count();
  if (event && event.limit) {
    const { start, limit } = event;
    const skip = Math.max(0, start - 1) * limit;
    const { data, errMsg } = await collection
      .skip(skip)
      .limit(event.limit)
      .get();
    if (isOk(errMsg)) {
      return {
        code: 200,
        message: 'success',
        list: data,
        total,
        more: total > skip + data.length,
      };
    } else {
      return { code: 500, message: errMsg };
    }
  } else {
    // 计算需分几次取
    const batchTimes = Math.ceil(total / 100);
    // 承载所有读操作的 promise 的数组
    const tasks = [];
    for (let i = 0; i < batchTimes; i++) {
      const promise = collection
        .skip(i * MAX_LIMIT)
        .limit(MAX_LIMIT)
        .get();
      tasks.push(promise);
    }
    if (tasks.length) {
      const resList = await Promise.all(tasks);
      const { data, errMsg, list } = resList.reduce((acc, cur) => {
        return {
          list: acc.data.concat(cur.data),
          errMsg: acc.errMsg,
        };
      });
      return { code: 200, list: list || data, message: errMsg };
    } else {
      return {
        code: 200,
        list: [],
        message: 'success',
      };
    }
  }
}

module.exports = { isOk, getList };
