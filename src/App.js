import React, { Component } from 'react';
import store from './store';
// 引入提供器
import { Provider } from 'react-redux';
import AppRouter from './router';

class App extends Component {
  render() { 
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
 
export default App;