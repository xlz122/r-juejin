import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer.js';
import thunk from 'redux-thunk';

// react浏览器扩展插件和redux-thunk一起使用
// 使用增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	?	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
	: compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store;
