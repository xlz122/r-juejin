import React from 'react';
import Message from '@/view/common/message';

// 注册Message提示全局方法
React.Message = {
  info: function () {},
  wraning: function () {},
  success: function () {},
  error: function () {}
};

React.Message.info = function (title) {
  Message.prototype.info(title);
};

React.Message.wraning = function (title) {
  Message.prototype.wraning(title);
};

React.Message.success = function (title) {
  Message.prototype.success(title);
};

React.Message.error = function (title) {
  Message.prototype.error(title);
};
