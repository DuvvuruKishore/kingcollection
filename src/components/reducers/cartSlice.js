import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
}
export const addReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
   addToCart(state,action){
    const itemIndex=state.cartItems.findIndex(
        (item)=>item.id===action.payload.id
    );
    if(itemIndex>=0){
        state.cartItems[itemIndex].cartQuantity +=1;
    }else{
        const tempProduct={...action.payload,cartQuantity:1}
        state.cartItems.push(tempProduct)
    }
   }
  },
});
export const { addToCart } =addReducer.actions;
export default addReducer.reducer;

