'use strict';

const { Controller } = require('egg');

class ProjectController extends Controller {
  async add() {
    const { ctx } = this;

    ctx.body = '';
  }

  async list() {
    const { ctx } = this;

    ctx.body = '';
  }
}

module.exports = ProjectController;
