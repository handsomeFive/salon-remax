const cloud = require('wx-server-sdk');
const api = require('./modals');

// dev:stone-spring-4gx0gbwre6def5a3
// pro:pro-5gukjhm8763571a0

cloud.init({ env: 'stone-spring-4gx0gbwre6def5a3' });

exports.main = async (event) => {
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
