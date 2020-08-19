import React from 'react';
import ReactDOM from 'react-dom';
import store from '@store';
// 引入react-redux提供器
import { Provider } from 'react-redux';
import AppRouter from '@router';
// 引入全局方法
import './global';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('juejin')
)