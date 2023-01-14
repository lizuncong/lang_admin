'use strict';

const { Controller } = require('egg');
const md5 = require('md5');

class UserController extends Controller {
  async jwtSign(user) {
    const { ctx, app } = this;
    const token = app.jwt.sign({
      userId: user.id,
      username: user.username,
    }, app.config.jwt.secret);
    ctx.session[user.id] = token;
    return token;
  }
  async register() {
    const { ctx, app } = this;
    const params = ctx.request.body;
    const user = await ctx.service.user.getUser(params.username);
    if (user) {
      ctx.body = {
        status: 500,
        errMsg: '用户已经存在',
      };
      return;
    }
    const result = await ctx.service.user.addUser({
      ...params,
      password: md5(params.password + app.config.passwordSalt),
      createTime: ctx.helper.time(),
    });
    if (result) {
      const token = await this.jwtSign(result);

      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(result.dataValues, [ 'password' ]),
          createTime: ctx.helper.timestamp(result.createTime),
          token,
        },
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '注册失败',
      };
    }
  }
  async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    const user = await ctx.service.user.getUser(username, password);
    if (user) {
      const token = await this.jwtSign(user);
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(user.dataValues, [ 'password' ]),
          createTime: ctx.helper.timestamp(user.createTime),
          token,
        },
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '该用户不存在',
      };
    }
  }
  async detail() {
    const { ctx, app } = this;
    console.log('detail...', ctx.userInfo);
    const user = await ctx.service.user.getUser(ctx.userInfo.username);
    console.log('ctx.userInfo..', ctx.userInfo);
    if (user) {
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(user.dataValues, [ 'password' ]),
          createTime: ctx.helper.timestamp(user.createTime),
        },
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '该用户不存在',
      };
    }
  }

  async logout() {
    const { ctx } = this;
    try {
      ctx.session[ctx.userInfo.userId] = null;
      ctx.body = {
        status: 200,
        data: 'success',
      };
    } catch (error) {
      ctx.body = {
        status: 500,
        errMsg: '退出登录失败',
      };
    }
  }

  async edit() {
    const { ctx } = this;
    const res = await ctx.service.user.edit({
      ...ctx.request.body,
      updateTime: ctx.helper.time(),
    });
    ctx.body = {
      status: 200,
      data: res,
    };
  }
}

module.exports = UserController;
