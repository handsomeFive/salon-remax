const { isOk, getList } = require('../utils');

async function recharge(event, cloud) {
  try {
    const db = cloud.database();
    const _ = db.command;
    const orderDB = db.collection('order');
    const userDB = db.collection('user_salon');
    const { data, errMsg } = await userDB
      .where({
        phoneNumber: event.phoneNumber,
      })
      .get();
    if (isOk(errMsg)) {
      if (!data.length) {
        return { code: 300, message: '未查到该用户或未开通会员' };
      } else {
        await userDB.doc(data[0]._id).update({
          data: { balance: _.inc(event.recharge), updateTime: +new Date() },
        });
        await orderDB.add({
          data: {
            type: 1,
            date: +new Date(),
            user: data[0].nickName,
            userPhoneNumber: event.phoneNumber,
            money: event.payment,
            info: event,
          },
        });
        return { code: 200, message: '充值成功' };
      }
    } else {
      return { code: 500, message: errMsg };
    }
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}

async function consume(event, cloud) {
  try {
    const db = cloud.database();
    const _ = db.command;
    const orderDB = db.collection('order');
    const userDB = db.collection('user_salon');
    const { data, errMsg } = await userDB
      .where({
        phoneNumber: event.phoneNumber,
      })
      .get();
    if (isOk(errMsg)) {
      if (!data.length) {
        return { code: 300, message: '未查到该用户或未开通会员' };
      } else if (data[0].balance < 100) {
        return { code: 300, message: '该会员余额小于100无法扣费' };
      } else if (data[0].balance < event.cost) {
        return { code: 300, message: '余额不足，请充值' };
      } else {
        await userDB.doc(data[0]._id).update({
          data: { balance: _.inc(0 - event.cost), updateTime: +new Date() },
        });
        await orderDB.add({
          data: {
            type: 2,
            date: +new Date(),
            user: data[0].nickName,
            userPhoneNumber: event.phoneNumber,
            money: event.cost,
            info: event,
          },
        });
        return { code: 200, message: '充值成功' };
      }
    } else {
      return { code: 500, message: res.errMsg };
    }
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}

async function getOrder(event, cloud) {
  try {
    const db = cloud.database();
    const orderDB = db.collection('order');
    return getList(orderDB.orderBy('date', 'desc').where({ ...event }));
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}

module.exports = {
  '/order/recharge': recharge,
  '/order/consume': consume,
  '/order/list': getOrder,
};
