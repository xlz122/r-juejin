import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '@router/index';
// 引入react-redux提供器
import { Provider } from 'react-redux';
import store from '@store/index';
// 引入全局方法
import './global';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRouter />
    </Router>
  </Provider>,
  document.getElementById('juejin')
);
