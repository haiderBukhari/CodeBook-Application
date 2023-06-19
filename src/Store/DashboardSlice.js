const {createSlice} = require("@reduxjs/toolkit");
const cartitem = localStorage.getItem('List') !=null?JSON.parse(localStorage.getItem('List')):[];

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        cartList: cartitem
    },
    reducers:{
        add_data(state, action){
            let updated_cart_list = state.cartList.concat(action.payload);
            localStorage.setItem('List', JSON.stringify(updated_cart_list.map(item=>item)))
            return {cartList:updated_cart_list}
        },
        remove_all_data(state, action){
            let updated_cart_list = [];
            localStorage.setItem('List', JSON.stringify([]))
            return {cartList:updated_cart_list}
        },
    }
})
export const {add_data, remove_all_data} = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;