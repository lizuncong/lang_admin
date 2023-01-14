module.exports = app => {
  const store = {};
  app.sessionStore = {
    async get(key) {
      console.log('session get=========', store);
      return store[key];
    },
    async set(key, value, maxAge) {
      console.log('session set=========', store);

      store[key] = value;
    },
    async destroy(key) {
      console.log('session destroy=========', store);

      store[key] = null;
    },
  };
  // // 将egg-auth插件添加进数组
  app.config.coreMiddleware.push('auth');
  // app.beforeStart(async () => {
  //   await app.model.sync({
  //     alter: process.env.NODE_ENV === 'development', // 当前开发环境的时候每次重刷测试数据库
  //   });
  // });
};
