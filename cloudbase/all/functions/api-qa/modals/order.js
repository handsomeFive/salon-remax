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
      } else if (data[0].balance < 0) {
        return { code: 300, message: '该会员余额小于0无法扣费' };
      } else if (data[0].balance < event.cost) {
        return { code: 300, message: '余额' + data[0].balance + ',不足消费' };
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

async function getCollect(event, cloud) {
  try {
    const db = cloud.database();
    const _ = db.command;
    const $ = _.aggregate;
    const orderDB = db.collection('order');
    const { type, start, end, ...other } = event;
    const collection = orderDB
      .where({
        type,
        date: _.gt(start).and(_.lt(end)),
      })
      .orderBy('date', 'desc');
    const { list = [] } = await orderDB
      .aggregate()
      .match({
        type,
        date: _.gt(start).and(_.lt(end)),
      })
      .group({ _id: null, total: $.sum('$money') })
      .end();
    const result = await getList(collection, other);
    return { ...result, total: list.length ? list[0].total : 0 };
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}

module.exports = {
  '/order/recharge': recharge,
  '/order/consume': consume,
  '/order/list': getOrder,
  '/order/collect': getCollect,
};
