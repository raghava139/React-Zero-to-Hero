import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //mutatint the state here 
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearItem: (state, action) => {
            console.log(state)
            console.log(',,,', current(state))
            console.log(state.items)
            state.items.length = 0; // []
            // state.items = []
        },
    }
})

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
