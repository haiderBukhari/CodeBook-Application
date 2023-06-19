import { useState } from "react";
import { FetchProducts } from "../../Components/FetchData";
import { ProductData } from "../../Components/ProductData";
export const FeatureBook = () => {
    let [data, setdata] = useState([]);
    let link = `${process.env.REACT_APP_HOST}/featured_products`;
    FetchProducts({setdata , link});
    return (
        <div className="featured-product">
            <h1 data-aos="fade-up" className='text-2xl text-center font-semibold dark:text-slate-100 mb-10 mt-7 underline underline-offset-8'>Featured eBooks</h1>
            <div className='featured-book flex justify-center items-center flex-wrap'>
                {
                    data.map((arr) => (
                        <ProductData key={arr.id} arr={arr}/>
                    ))
                }
            </div>
        </div>
    )
}