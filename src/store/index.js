import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "modules/reducer";
import appReducer from "modules/app/reducer";

const initialState = {
  app: appReducer
};

const middlewares = [thunk];
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
