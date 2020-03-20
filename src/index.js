import React from 'react';
import ReactDOM from 'react-dom';
import store from '@store';
import { Provider } from 'react-redux';
import AppRouter from '@router';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)