import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    cartItems : [] ,
 }


export const cartSlice = createSlice({
    name : 'CartSlice',
    initialState,
    reducers : {
        addToCart : (state,action)=>{
            const isExsist = state.cartItems.find(item=>item.id == action.payload.id)
            if(isExsist){
                isExsist.quantity++;
            }else{
                state.cartItems.push({...action.payload,quantity:1});
            }
           
        },

        incrementQuantity : (state,action)=>{
            const findItem = state.cartItems.find(item=>item.id == action.payload)
            findItem.quantity++
        },

        decrementQuantity : (state,action)=>{
            const findItem = state.cartItems.find(item=>item.id == action.payload)
            findItem.quantity--
        },
        removeItem : (state,action)=>{
            let isApproved = confirm('Are you sure ?')
            if(isApproved){
                const filteredItems = state.cartItems.filter(item=>item.id != action.payload)
                state.cartItems = filteredItems;
            }
 
        },
    }
})

export const {addToCart ,incrementQuantity ,decrementQuantity,removeItem} = cartSlice.actions

export default cartSlice.reducer