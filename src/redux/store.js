import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxLogger, thunk))
);

export default store;