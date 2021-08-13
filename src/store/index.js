import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import repositoriesReducer from "./repositories";

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

console.log(store.getState());

export default store;
