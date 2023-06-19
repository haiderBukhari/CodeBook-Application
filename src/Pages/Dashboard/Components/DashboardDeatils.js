import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { DashboardEmpty } from './DashboardEmpty';
import '../../Cart/CartComponents/CartList.css'

export function DashboardDeatils() {
    const email = useSelector(state => state.loginState.email);
    let [all_datas, setall_datas] = useState([]);
    let [length, setlength] = useState(false);
    let [loading, setloading] = useState(false);
    useEffect(() => {
        let ftn = async () => {
            setloading(true)
            const response = await fetch(`${process.env.REACT_APP_HOST}/orders`, {
                method: 'GET',
                headers: { "content-Type": "application/json" },
            })
            const data_res = await response.json();
            setloading(false)
            setall_datas(data_res);
            setlength(0);
            {
                setloading(true)
                data_res!==0 && data_res.map((arr)=>{
                    arr.user.email === email && setlength(true)
                })
            }
            setloading(false);
        }
        ftn();
    }, [])

    return (
        <div data-aos="flip-up" className='for-all'>
            <h1 className="paragraph-tl text-2xl text-center font-semibold dark:text-slate-100 mb-0 mt-6 pt-7 underline underline-offset-8">
                Dashboard Detail
            </h1>
            {
                loading && 
                <h1 className="paragraph-tl text-2xl text-center font-semibold dark:text-slate-100 mb-0 mt-6 pt-7 underline underline-offset-8">
                    Loading ....
                </h1>
            }
            {console.log(all_datas, length)}
            {(!length && !loading) ? <DashboardEmpty /> :
                (
                    all_datas.map((arr, index) => (
                        arr.user.email === email && (
                            <div className='boundary'>
                                {arr.user.email === email &&
                                    <>
                                        <div className="quanity mt-5 px-3">
                                            <div className="left-quantity">
                                                <p className='order dark:text-white'>Order id: <span className='font-bold dark:text-white'>{index}</span></p>
                                            </div>
                                            <p className='order dark:text-white'>Total Price: <span className='font-bold dark:text-white'>${arr.amount_paid}</span></p>
                                            <p className='order orders dark:text-white'>Total Quantity: <span className='font-bold dark:text-white'>{arr.quantity}</span></p>
                                        </div>
                                    </>
                                }
                                {
                                    arr.cartList.map(data => (
                                        <>
                                            <div key={data.id} className="section-cart-data">
                                                <div className="cart-left-data left-left">
                                                    <img src={`../..${data.image_local}`} alt="" />
                                                    <div className="info">
                                                        <h1 className="text-lg font-semibold dark:text-white ml-4">{data.name}</h1>
                                                    </div>
                                                </div>
                                                <p className="dark:text-white text-xl font-bold pr-3 pl-2 text-red-800">${data.price}</p>
                                            </div>
                                            <hr className="hr-cart" />
                                        </>
                                    ))
                                }
                            </div>
                        )
                    ))
                )}
        </div>
    )
}
