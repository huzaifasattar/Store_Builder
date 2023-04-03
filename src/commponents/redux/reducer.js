import { combineReducers } from "redux";
import Products from "./state";
import CartState from "./state2";
const reducer = combineReducers({
  Products: Products.reducer,
  CartState: CartState.reducer,
});

export default reducer;
