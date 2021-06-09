const ClientConfig = require('./app-client.config');
const BackstageConfig = require('./app-backstage.config');

const config =
  process.env.REMAX_APP_ENV === 'client' ? ClientConfig : BackstageConfig;

module.exports = config;
