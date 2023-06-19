import React, { useEffect, useState } from 'react'
import '../Pages/Home/CSS/detailpage.css'
import { useParams } from 'react-router-dom'
import { add, remove } from '../Store/CartSlice';
import { FetchProducts } from '../Components/FetchData';
import { useDispatch, useSelector } from 'react-redux';
import { appear_notification } from '../Components/ToastNotification';
import { DynamicTitile } from '../DynamicPageTitle';
export const ProductDetail = () => {
    DynamicTitile('Products Detail')
    let dispatch = useDispatch();
    let cartdata = useSelector(state => state.cartState.cartList);
    let params = useParams();
    let [data, setdata] = useState();
    let [link, selink] = useState(`${process.env.REACT_APP_HOST}/products/${params.id}`)
    FetchProducts({ setdata, link })
    function render(rating) {
        let list = rating == 2 ? [true, true, false, false, false] : rating == 3 ? [true, true, true, false, false] : rating == 4 ? [true, true, true, true, false] : [true, true, true, true, true];
        return (
            list.map((arr) => (
                arr ? <i className="fa-solid fa-star fa-beat"></i> : <i className="fa-regular fa-star fa-beat"></i>
            )))
    }
    return (
        <main className='detail-section'>
            {
                data && (
                    <>
                        <div className="above-data mt-10">
                            <h1 data-aos="fade-up-right"  className='text-3xl text-center font-bold dark:text-white px-2'>{data.name}</h1>
                            <p data-aos="fade-up-left" className='text-normal text-center my-5 dark:text-gray-300 px-2'>{data.overview}</p>
                        </div>
                        <div data-aos="flip-up" className='division mt-9'>
                            <div className="below-data">
                                <div className="left">
                                    <img className='imgs' src={data.image_local} alt="product-image" />
                                </div>
                                <div className="right ml-6 part-down">
                                    <p className='text-3xl dark:text-white pricez space'>${data.price}</p>
                                    <div className="stars start1 text-yellow-600 my-4 space">
                                        {render(data.rating)}
                                    </div>
                                    <div className="main-functionality">
                                        {
                                            data.best_seller &&
                                            <button className='font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2 space'>Best Seller</button>
                                        }
                                        <button className='font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2'>{`${data.in_stock ? `InStock`:   `Out of Stock`}`}</button>
                                        <button className='font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2'>{data.size} MB</button>
                                    </div>
                                    <button onClick={()=>{data.in_stock ? dispatch(!cartdata.find((arrs)=>arrs.id===data.id)?add(data):remove(data)):appear_notification('out of stock'); data.in_stock && appear_notification(!cartdata.find((arrs)=>arrs.id===data.id))}} className={`btn-add-remove text-center space text-white ${!cartdata.find((arrs)=>arrs.id===data.id)?"bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cart-pges0" : "cart-pges1 bg-red-600 hover:bg-red-500"} cursor-pointer focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base py-2 mr-2 ml-1 mt-3  focus:outline-none`}>{!cartdata.find((arrs)=>arrs.id===data.id)?`Add to Cart`:`Remove from Cart`} {!cartdata.find((arrs)=>arrs.id===data.id)? <i className="fa-solid fa-plus pl-2"></i>:<i className="fa-sharp fa-solid fa-trash pl-2"></i>} </button>
                                    <p className='para dark:text-gray-200 mb-8 space'>{data.long_description}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </main>
    )
}
