import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import app from "modules/reducer";

const initialState = {
  state: ""
};

const middlewares = [thunk];
// const composeEnhancers = composeWithDevTools({});

const store = createStore(
  app,
  initialState,
  compose(applyMiddleware(...middlewares))
  // composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
