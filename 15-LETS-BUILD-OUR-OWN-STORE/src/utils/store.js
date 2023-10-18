import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "./cartSlice"

const store=configureStore({
    reducer: {
        cart: cartSlice,
    }
});

export default store;





// Steps 
/* 
*Create Store:
    -configureStore() - RTK
*Provided my store to app
    -<Provider store={store}> - import from react-redux
*Created a Slice
    -RTK - createSlice({
        name: "",
        initialState: 0,
        reducers:{
            addItem: (state,action)=>{state=action.payload / modify our state}
        }
    })
    export {addItem}=cartSlice.actions;
    export default cartSlice.reducer;
*Put that slice into store
    -{
        reducer: {
            cart: cartSlice
            user: userSlice
        }
    }
*Reading from the slice in our cart items(subscribing to our store)
    - useSelector () imported from react-redux
    -  const cartItems=useSelector(store=>store.cart.items)
    
*/