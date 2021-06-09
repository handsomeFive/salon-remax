const { isOk, getList } = require('../utils');

async function addOrder(event, cloud) {
  try {
    const orderDB = cloud.database().collection('order');
    const res = await orderDB.add({
      data: { ...event },
    });
    if (isOk(res.errMsg)) {
      return {
        code: 200,
        message: '创建成功',
        data: { _id: res._id, ...event },
      };
    } else {
      return { code: 500, message: res.errMsg };
    }
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}

async function getTodayOrder(event, cloud) {
  try {
    const db = cloud.database();
    const orderDB = db.collection('order');
    const _ = db.command;
    const now = new Date();
    const tomorrow = new Date(Number(now) + 24 * 60 * 60 * 1000);
    const start = +new Date(
      `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
    );
    const end = +new Date(
      `${tomorrow.getFullYear()}-${
        tomorrow.getMonth() + 1
      }-${tomorrow.getDate()}`
    );
    return getList(orderDB.where({ date: _.gt(start).and(_.lt(end)) }));
  } catch (error) {
    return { code: 500, message: error.errMsg || error };
  }
}

async function getLog(event, cloud) {
  try {
    const orderDB = cloud.database().collection('order');
    // const res = await orderDB.
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}

module.exports = {
  '/order/add': addOrder,
  '/order/log': getLog,
  '/order/today': getTodayOrder,
};
