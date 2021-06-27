const { isOk, getList } = require('../utils');

async function addProduct(event, cloud) {
  try {
    const productDB = cloud.database().collection('product');
    const { data, errMsg } = await productDB
      .where({
        name: event.name,
      })
      .get();
    if (isOk(errMsg)) {
      if (data.length) {
        return { code: 300, message: '已存在该产品' };
      } else {
        const res = await productDB.add({
          data: event,
        });
        if (isOk(res.errMsg)) {
          return {
            code: 200,
            message: '创建成功',
            data: { ...event, _id: res._id },
          };
        } else {
          return { code: 500, message: res.errMsg };
        }
      }
    } else {
      return { code: 500, message: res.errMsg };
    }
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}
async function deleteProduct(event, cloud) {
  try {
    const productDB = cloud.database().collection('product');
    await productDB.doc(event.id).remove();
    return { code: 200, message: '删除成功' };
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}

async function getProduct(event, cloud) {
  const productDB = cloud.database().collection('product');
  return getList(productDB, event);
}

async function updateProduct(event, cloud) {
  try {
    const productDB = cloud.database().collection('product');
    await productDB.doc(event.id).update({ data: event.data });
    return {
      code: 200,
      message: '更新成功',
      data: { _id: event.id, ...event.data },
    };
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}

module.exports = {
  '/product/add': addProduct,
  '/product/delete': deleteProduct,
  '/product/list': getProduct,
  '/product/update': updateProduct,
};
