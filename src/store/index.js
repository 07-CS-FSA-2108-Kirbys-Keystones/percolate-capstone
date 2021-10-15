import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import auth from "./auth";
import { getFirestore, reduxFirestore } from "redux-firestore";
import db from "../firebase";
import businessesReducer from "./businessesReducer";
import usersReducers from "./Reducers/usersReducer";
import singleCoffeeReducer from "./singleCoffee";

const reducer = combineReducers({
  auth,
  businesses: businessesReducer,
  users: usersReducers,
  singleCoffee: singleCoffeeReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ getFirestore }),
    createLogger({ collapsed: true })
  ),
  reduxFirestore(db)
);

//* Create the store
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
