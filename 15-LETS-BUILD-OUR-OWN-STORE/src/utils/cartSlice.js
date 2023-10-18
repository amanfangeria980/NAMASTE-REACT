import { createSlice } from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            // state.items.pop()
            const itemToRemove = action.payload;
            state.items = state.items.filter(item => item !== itemToRemove);
        },
        clearCart: (state)=>{
            state=[];
        },
    }
});


export const {addItem,removeItem,clearCart}=cartSlice.actions;


export default cartSlice.reducer;

/* 

we have to export in the above way because, it is internally working like this

cartSlice={
    actions: {
        addItem,
        removeItem,
        clearCart
    },
    reducer: reducers
}

*/