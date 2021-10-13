import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import auth from './auth';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import db from '../firebase';
import businessesReducer from './businessesReducer'

const reducer = combineReducers({
  auth,
  businesses: businessesReducer
});
const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware.withExtraArgument({getFirestore }),
    createLogger({ collapsed: true })
  ),
  reduxFirestore(db),
);

//* Create the store
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
