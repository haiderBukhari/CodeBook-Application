import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "../Pages/Home/HomePage";
import { ProductList } from "../Pages/Products/ProductList";
import { ProductDetail } from "../Pages/ProductDetail";
import { Login, Register } from "../Pages";
import { Order, Loginrequired, CartList, Checkout, EmptyCart} from "../Pages/Cart/CartComponents/CartPage";
import { DashboardDeatils } from "../Pages/Dashboard/Components/DashboardDeatils";
import { useSelector } from "react-redux"
import { PageNotFound } from "../Pages/Cart/CartComponents/PageNotFound";
const AllRoutes = () =>{
    let islogin = useSelector(state=>state.loginState.islogin);
    let length = useSelector(state=>state.cartState.length);
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="products" element={<ProductList/>}/>
            <Route path="products/:id" element={<ProductDetail/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="cart" element={islogin?(length===0?<Navigate to="/empty-cart"/>:<CartList/>):<Navigate to='/Login-required'/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="checkout" element={islogin?<Checkout/>:<Navigate to='/Login-required'/>}/>
            <Route path="empty-cart" element={<EmptyCart/>}/>
            <Route path="Login-required" element={<Loginrequired/>}/>
            <Route path="order-confirmed" element={<Order/>}/>
            <Route path="user-dashboard" element={islogin?<DashboardDeatils/>:<Navigate to='/Login-required'/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}
export default AllRoutes;