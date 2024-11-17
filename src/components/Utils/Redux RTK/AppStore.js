import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './slices/Cartslice'
const appStore = configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default appStore;