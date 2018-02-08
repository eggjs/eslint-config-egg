'use strict';

module.exports = appInfo => {
  const config = {};
  config.keys = appInfo.name;
  return config;
};

exports.view = {};
