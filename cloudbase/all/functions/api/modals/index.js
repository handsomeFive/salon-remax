const userApi = require('./user');
const productApi = require('./product');
const authApi = require('./auth');
const orderApi = require('./order');

module.exports = {
  ...userApi,
  ...productApi,
  ...authApi,
  ...orderApi,
  ...printApi,
};
