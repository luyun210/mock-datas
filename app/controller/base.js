'use strict';

const Controller = require('egg').Controller;


class BaseController extends Controller {

  format(data, code = 200, msg = 'success') {
    if (data && data.code) {
      code = data.code;
      delete data.code;
    }
    if (data && data.msg) {
      msg = data.msg;
      delete data.msg;
    }

    return {
      code,
      msg,
      data,
    };
  }
}


module.exports = BaseController;
