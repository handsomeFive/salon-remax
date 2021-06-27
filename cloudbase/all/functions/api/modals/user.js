const { isOk } = require('../utils');

async function add(event, cloud) {
  try {
    const userDB = cloud.database().collection('user_salon');
    const { OPENID } = cloud.getWXContext();
    const { data, errMsg } = await userDB
      .where({
        _openid: OPENID,
      })
      .get();
    if (isOk(errMsg)) {
      if (data.length) {
        return { code: 200, message: '已注册，欢迎回来', data };
      } else {
        const res = await userDB.add({ data: { ...event, _openid: OPENID } });
        if (isOk(res.errMsg)) {
          return { code: 200, message: '欢迎光临' };
        } else {
          return { code: 500, message: res.errMsg };
        }
      }
    } else {
      return { code: 500, message: errMsg };
    }
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}

async function update(event, cloud) {
  try {
    const userDB = cloud.database().collection('user_salon');
    const { errMsg } = await userDB
      .doc(event.id)
      .update({ data: { phoneNumber: event.phoneNumber } });
    if (isOk(errMsg)) {
      return { code: 200, message: '成功' };
    } else {
      return { code: 500, message: errMsg };
    }
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}
async function getUserInfo(event, cloud) {
  try {
    const userDB = cloud.database().collection('user_salon');
    const { OPENID } = cloud.getWXContext();
    const { data, errMsg } = await userDB.where({ _openid: OPENID }).get();
    if (isOk(errMsg)) {
      return { code: 200, message: '成功', data: data[0] };
    } else {
      return { code: 500, message: errMsg };
    }
  } catch (error) {
    return { code: 500, message: error.errMsg || error };
  }
}

module.exports = {
  '/user/add': add,
  '/user/update': update,
  '/user/info': getUserInfo,
};
