module.exports = options => {
  const { whitelist } = options;
  return async (ctx, next) => {
    // const url = ctx.request.url;
    // const token = ctx.request.header.token;
    // console.log('header...token', token, ctx.session);
    // const sessionToken = ctx.userInfo && ctx.userInfo.userId ? ctx.session[ctx.userInfo.userId] : undefined;
    // const user = sessionToken ? sessionToken === token : sessionToken;
    // console.log('【egg-auth】======', ctx.session, sessionToken);
    // if (!user && !whitelist.includes(url.split('?')[0])) {
    //   ctx.body = {
    //     status: 1001,
    //     errMsg: '用户未登录',
    //   };
    // } else {
    //   await next();
    // }
    await next();
  };

};
