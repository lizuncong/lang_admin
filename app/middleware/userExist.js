module.exports = options => {
  return async (ctx, next) => {
    const user = await ctx.service.user.getUser(ctx.userInfo.username);
    if (!user) {
      ctx.body = {
        status: 500,
        errMsg: '用户不存在',
      };
      return;
    }
    await next();

  };
};
