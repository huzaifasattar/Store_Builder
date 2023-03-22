import { combineReducers } from "redux";
import Products from "./state";
const reducer = combineReducers({
  Products: Products.reducer,
});

export default reducer;
