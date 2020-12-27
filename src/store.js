import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import immutableMiddleware from 'redux-immutable-state-invariant';
import { reducer as appReducer } from './App';

const reducer = combineReducers({
  app: appReducer
});

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(immutableMiddleware());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares)
);

export default createStore(reducer, {}, storeEnhancers);