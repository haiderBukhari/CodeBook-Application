import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../../Store/CartSlice";
import { appear_notification } from "../../../Components/ToastNotification";
import { useNavigate } from "react-router-dom";
import "./CartList.css";
import { Checkout } from "./Checkout";
import { useState } from "react";
import { DynamicTitile } from "../../../DynamicPageTitle";
export const CartList = () => {
    DynamicTitile('CartPage')
    let navigate = useNavigate();
    let [checkout, setcheckout] = useState(false);
    const data = useSelector(state => state.cartState.cartList);
    const length = useSelector(state => state.cartState.length);
    const total = useSelector(state => state.cartState.total);
    let dispatch = useDispatch();
    let handleorder = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className="main-above">
        <div className="main-cart-list">
        {checkout && <Checkout setcheckout={setcheckout}/>}
            {length ? (
                <div >
                    <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-10 mt-10 pt-5 underline underline-offset-8">
                        My Cart ({length})
                    </h1>
                    {data.map(arr => (
                        <>
                            <div key={arr.id} className="section-cart-data">
                                <div className="cart-left-data">
                                    <img src={`../..${arr.image_local}`} alt=""  />
                                    <div className="info">
                                        <h1 className="text-lg font-semibold dark:text-white ml-4">{arr.name}</h1>
                                        <button onClick={()=>{dispatch(remove(arr)); appear_notification(false)}} className="p-2 px-3 mt-4 m-2 btn-cart font-bold text-white delete">Remove</button>
                                    </div>
                                </div>
                                <p className="dark:text-white text-xl font-bold">${arr.price}</p>
                            </div>
                            <hr className="hr-cart" />
                        </>
                    ))}
                    <div className="total">
                        <h1 className="text-lg font-semibold dark:text-white ml-4">Total Amount:</h1>
                        <p className="dark:text-white text-xl font-bold">${total}</p>
                    </div>
                    <hr className="hr-cart" />
                    <div className="btn-end">
                        <button onClick={()=>{handleorder(); setcheckout(!checkout)}}  className="btn-cart text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 mb-10 mt-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-lg">
                            Place Order<i className="fa-solid fa-arrow-right ml-2 text-xl"></i>
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className='text-2xl text-center font-semibold dark:text-slate-100 mt-10 underline underline-offset-8 end'>
                        Your cart is empty
                    </h1>
                </div>
            )}
        </div>
        </div>
    );
};