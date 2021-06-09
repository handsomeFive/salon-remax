const { isOk } = require('../utils');

async function add(event, cloud) {
  try {
    const userDB = cloud.database().collection('user');
    const { OPENID } = cloud.getWXContext();
    const { data, errMsg } = await userDB.doc(OPENID).get();
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

function update(event, cloud) {
  try {
    const userDB = cloud.database().collection('user');
    const { OPENID } = cloud.getWXContext();
    const { errMsg } = await userDB.doc(OPENID).update(event);
    if (isOk(errMsg)) {
      return { code: 200, message: '成功' };
    } else {
      return { code: 500, message: errMsg };
    }
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}
function getUserInfo() {
  try {
    const userDB = cloud.database().collection('user');
    const { OPENID } = cloud.getWXContext();
    const { data, errMsg } = await userDB.doc(OPENID).get();
    if (isOk(errMsg)) {
      return { code: 200, message: '成功', data };
    } else {
      return { code: 500, message: errMsg };
    }
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}

module.exports = {
  '/user/add': add,
  '/user/update': update,
  '/user/info': getUserInfo,
};
