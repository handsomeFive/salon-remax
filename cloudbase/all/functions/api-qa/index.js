const cloud = require('wx-server-sdk');
const api = require('./modals');

// dev:salon-qa-7gxk00q63f552c86
// pro:salon-6gzbd1yr731b7056

cloud.init({ env: 'salon-qa-7gxk00q63f552c86' });

exports.main = async (event, context) => {
  const { url, data } = event;
  if (api[url]) {
    return api[url](data, cloud);
  } else {
    return {
      code: 404,
      message: '您请求的接口不存在',
      apiList: Object.keys(api),
    };
  }
};
