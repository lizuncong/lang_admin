const Service = require('egg').Service;
const md5 = require('md5');

class UserService extends Service {
  async getUser(username, password) {
    try {
      const { ctx } = this;
      const where = password ? { username, password: md5(password + this.app.config.passwordSalt) } : { username };
      const res = await ctx.model.User.findOne({
        where,
      });
      return res;
    } catch (error) {
      console.log('【UserService/getUser】', error);
      return null;
    }
  }
  async addUser(params) {
    try {
      const { ctx } = this;
      const res = await ctx.model.User.create(params);
      return res;
    } catch (error) {
      console.log('【UserService/addUser', error);
      return null;
    }
  }
  async edit(params) {
    try {
      const { ctx } = this;
      const res = await ctx.model.User.update(params, {
        where: {
          id: ctx.userInfo.userId,
        },
      });
      return res;
    } catch (error) {
      console.log('【UserService/edit', error);
      return null;
    }
  }
}

module.exports = UserService;
