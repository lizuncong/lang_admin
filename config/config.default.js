/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1673154804761_2682';

  // add your middleware config here
  config.middleware = [];
  // 先关闭吧，不然post请求会报错
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.static = {
    prefix: '/static/',
  };
  // session本质上也是利用cookie存储，这里的key即是cookie的键
  config.session = {
    key: 'LANG_ADMIN',
    httpOnly: true,
    maxAge: 1000 * 60 * 60, // 1000 * 60 * 60 * 24, // 过期时间：1天
    renew: true, // cookie续期，本来5秒过期，但是只要5秒内继续访问页面，那过期时间就会重新计算
  };
  config.mysql = {
    app: true,
    agent: false,
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'root123456',
      database: 'lang_admin',
    },
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root123456',
    database: 'lang_admin',
    define: {
      timestamps: false, // 自动添加时间相关字段
      freezeTableName: true, // 冻结表名称
    },
  };
  config.jwt = {
    secret: 'lang_admin_jwt_123456',
  };
  // 配置egg-auth插件options
  config.auth = {
    whitelist: [ '/api/user/login', '/api/user/register' ],
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    passwordSalt: 'lang_admin_4324', // md5加密密码的盐值
  };

  return {
    ...config,
    ...userConfig,
  };
};
