import { combineReducers, configureStore } from "redux";
import { reducer } from "./Reducer";

const rootReducer = combineReducers({
  reducer,
});
const store = createStore(rootReducer);
console.log(store.getState());
