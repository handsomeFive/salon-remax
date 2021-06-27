const userApi = require('./user');
const authApi = require('./auth');
const productApi = require('./product');
const orderApi = require('./order');

module.exports = {
  ...userApi,
  ...authApi,
  ...productApi,
  ...orderApi,
};
