const {createSlice} = require("@reduxjs/toolkit");
const cartitem = localStorage.getItem('cartList') !=null?JSON.parse(localStorage.getItem('cartList')):[];
const lengths = localStorage.getItem('length') !=null?JSON.parse(localStorage.getItem('length')):0;
const totals = localStorage.getItem('total') !=null?JSON.parse(localStorage.getItem('total')):0;

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: cartitem,
        length: lengths, 
        total: totals
    },
    reducers:{
        add(state, action){
            let data = state.cartList.concat(action.payload);
            let length = state.length + 1;
            let total = state.total + action.payload.price;
            localStorage.setItem('cartList', JSON.stringify(data.map(item=>item)))
            localStorage.setItem('length', JSON.stringify(length))
            localStorage.setItem('total', JSON.stringify(total))
            return {cartList:data, length:length, total:total};
        },
        remove(state, action){
            const data = state.cartList.filter((arr)=>arr.id!==action.payload.id)
            let length = state.length - 1;
            let total = state.total + action.payload.price;
            localStorage.setItem('cartList', JSON.stringify(data.map(item=>item)))
            localStorage.setItem('length', JSON.stringify(length))
            localStorage.setItem('total', JSON.stringify(total))
            return {cartList:data, length:length, total:total};
        },
        remove_all(state, action){
            localStorage.setItem('cartList', JSON.stringify([]))
            localStorage.setItem('length', JSON.stringify(0))
            localStorage.setItem('total', JSON.stringify(0))
            return {cartList:[], length:0, total:0};            
        }
    }
});
export const {add, remove, remove_all} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;