'use strict';

module.exports = app => {
  return class UserController extends app.Controller {
    async render(...args) {
      this.ctx.body = { ...args };
    }
  };
};
