import { combineReducers } from "redux";
import Products from "./state";
import cartState from "./state2";
const reducer = combineReducers({
  Products: Products.reducer,
  cartState: cartState.reducer,
});

export default reducer;
