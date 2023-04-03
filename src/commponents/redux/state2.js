import { createSlice } from "@reduxjs/toolkit";

const CartState = createSlice({
  name: "CartState",
  initialState: {
    data: []
},

reducers: {
    addCart: (state, action) => {
        state.data.push(action.payload)
    },
    removeCart: (state, action) => {
        state.data.splice(action.payload.index, 1)
    },
    addQuantity: (state, action) => {
        
        state.data[action.payload.index].quantity += 1
    },
    subQuantity: (state, action) => {
        if (state.data[action.payload.index].quantity > 0) {
            state.data[action.payload.index].quantity -= 1
        }
        if (state.data[action.payload.index].quantity === 0) {
            state.data.splice(action.payload.index, 1)
        }
    }
}
})

export const { addCart, removeCart, addQuantity, subQuantity } =
  CartState.actions;
export default CartState;
