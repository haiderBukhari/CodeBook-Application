import './ProductData.css'
import { useNavigate } from 'react-router-dom';
import { add, remove } from '../Store/CartSlice';
import { useDispatch , useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import {appear_notification} from '../Components/ToastNotification'
export const ProductData = ({arr}) => {
  let [ispresent, setispresent] = useState(false);
  let cartdata = useSelector(state => state.cartState.cartList);
  let dispatch = useDispatch();
  let naviagte = useNavigate();
  function render(rating){
    let list = rating == 2?[true, true, false, false, false]:rating == 3?[true, true, true, false, false]:rating == 4?[true, true, true, true, false]:[true, true, true, true, true];
    return(
      list.map((arr)=>(
        arr?<i key={Math.floor(Math.random()*100000)} className="fa-solid fa-star fa-beat"></i>:<i className="fa-regular fa-star fa-beat"></i>
        )))
      }
      useEffect(()=>{
        let data = cartdata.find((arrs)=>arrs.id===arr.id);
        if(data){setispresent(true);}
        else {setispresent(false)}
      }, [cartdata])
      return (
        <div data-aos="fade-down" className="product-data dark:bg-slate-800 cursor-pointer">
        <div className="upper" onClick={()=>naviagte(`/products/${arr.id}`)}>
            <img src={arr.image_local} alt="product image" />
            {arr.best_seller && <p className='absolute top-4 left-2 px-3 bg-orange-500 bg-opacity-90 text-white rounded text-lg'>Best Seller</p>}
        </div>
        <div className="lower px-4 mt-6">
            <h1 onClick={()=>naviagte(`/products/${arr.id}`)} className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{arr.name}</h1>
            <p onClick={()=>naviagte(`/products/${arr.id}`)} className='mt-2 mb-3 font-normal text-gray-700 dark:text-gray-400 paragraph'>{arr.overview}</p>
            <div onClick={()=>naviagte(`/products/${arr.id}`)} className="stars text-yellow-600 my-4">
              {
                render(arr.rating)
              }
            </div>
            <div className="bottom">
                <p onClick={()=>{dispatch(!ispresent?add(arr):remove(arr)); appear_notification(!ispresent)}} className="text-2xl ml-2 dark:text-white">${arr.price}</p>
                <button onClick={()=>{arr.in_stock ? dispatch(!ispresent?add(arr):remove(arr)):appear_notification('out of stock'); arr.in_stock && appear_notification(!ispresent)}}className={`text-white ${!ispresent? `bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800`: `bg-red-600 hover:bg-red-500`} focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2 mr-2 focus:outline-none`}>{!ispresent?`Add to Cart`: `Remove from Cart`} {!ispresent? <i className="fa-solid fa-plus pl-2"></i>:<i className="fa-sharp fa-solid fa-trash pl-2"></i>} </button>
            </div>
        </div>
    </div>
  )
}
