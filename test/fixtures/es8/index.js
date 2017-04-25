'use strict';

module.exports = app => {
  return class UserController extends app.Controller {
    async render() {
      await this.ctx.render();
    }
  };
};
