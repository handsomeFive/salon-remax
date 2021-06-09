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
          data: { ...event, status: 1 },
        });
        if (isOk(res.errMsg)) {
          return {
            code: 200,
            message: '创建成功',
            data: { ...event, _id: res._id, status: 1 },
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

async function shiftProductStatus(event, cloud) {
  try {
    const productDB = cloud.database().collection('product');
    await productDB
      .where({ _id: event.id })
      .update({ data: { status: event.status } });
    return { code: 200, message: '更新成功' };
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}

async function addProductType(event, cloud) {
  try {
    const productTypeDB = cloud.database().collection('product_type');
    const { data, errMsg } = await productTypeDB
      .where({
        name: event.name,
      })
      .get();
    if (isOk(errMsg)) {
      if (data.length) {
        return { code: 300, message: '已存在' };
      } else {
        const res = await productTypeDB.add({
          data: { name: event.name, status: 1 },
        });
        if (isOk(res.errMsg)) {
          return {
            code: 200,
            message: '创建成功',
            data: { ...event, _id: res._id, status: 1 },
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
async function deleteProductType(event, cloud) {
  try {
    const productTypeDB = cloud.database().collection('product_type');
    await productTypeDB.doc(event.id).remove();
    const productDB = cloud.database().collection('product');
    productDB.where({ type: event.id }).remove();
    return { code: 200, message: '删除成功', data: { _id: event._id } };
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}

async function getProductType(event, cloud) {
  const productTypeDB = cloud.database().collection('product_type');
  return getList(productTypeDB, event);
}

async function updateProductType(event, cloud) {
  try {
    const productTypeDB = cloud.database().collection('product_type');
    await productTypeDB.doc(event.id).update({ data: { name: event.name } });
    return {
      code: 200,
      message: '更新成功',
      data: { _id: event.id, name: event.name },
    };
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}

async function shiftProductTypeStatus(event, cloud) {
  try {
    const productTypeDB = cloud.database().collection('product_type');
    await productTypeDB
      .where({ _id: event.id })
      .update({ data: { status: event.status } });
    return {
      code: 200,
      message: '更新成功',
      data: { _id: event.id, status: event.status },
    };
  } catch (error) {
    return { code: 500, message: error.errMsg };
  }
}

async function getProductByProductType(event, cloud) {
  // 聚合查询产品
  try {
    const db = cloud.database();
    const _ = db.command;
    const $ = db.command.aggregate;
    const { list = [] } = await db
      .collection('product_type')
      .aggregate()
      .match({ status: 1 })
      .lookup({
        from: 'product',
        as: 'productList',
        // localField: '_id',
        // foreignField: 'type',
        let: { product_type_status: '$status', product_type_id: '$_id' },
        pipeline: $.pipeline()
          .match(
            _.expr(
              $.and([
                $.eq(['$status', '$$product_type_status']),
                $.eq(['$type', '$$product_type_id']),
              ])
            )
          )
          .done(),
      })
      .end();
    return { code: 200, data: list };
  } catch (error) {
    return { code: 500, message: error };
  }
}

module.exports = {
  '/product/add': addProduct,
  '/product/delete': deleteProduct,
  '/product/list': getProduct,
  '/product/update': updateProduct,
  '/product/shiftStatus': shiftProductStatus,
  '/product/type/add': addProductType,
  '/product/type/delete': deleteProductType,
  '/product/type/list': getProductType,
  '/product/type/update': updateProductType,
  '/product/type/shiftStatus': shiftProductTypeStatus,
  '/product/aggregateByType': getProductByProductType,
};
