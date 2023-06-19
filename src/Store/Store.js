import {configureStore} from "@reduxjs/toolkit"
import { cartReducer } from "./CartSlice"
import { loginReducer } from "./LoginSlice"
import { dashboardReducer } from "./DashboardSlice"
export const store = configureStore({
    reducer:{
        cartState: cartReducer,
        loginState: loginReducer,
        dashboardState: dashboardReducer
    }
})