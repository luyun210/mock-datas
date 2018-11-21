'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542790178173_7427';

  // add your config here
  config.middleware = [];


  config.security = {
    // methodnoallow: {
    //   enable: false
    // },
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
    // credentials: false,
    // origin: '*',
  };
  config.cors = {
    // origin: '*',
    // credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  return config;
};
