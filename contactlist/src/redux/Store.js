import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]
const store= createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

export default store;


// voir npm (redux thunk) et https://github.com/zalmoxisus/redux-devtools-extension