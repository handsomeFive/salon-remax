const cloud = require('wx-server-sdk');
const api = require('./modals');

// dev:salon-2ghjr0kcb8610c74
// pro:salon-pro-9gyzqbsw939ef20a

cloud.init({ env: 'salon-pro-9gyzqbsw939ef20a' });

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
