import { useState } from "react";
import { FetchProducts } from "../../Components/FetchData";
import { ProductData } from "../../Components/ProductData";
export const FeatureBook = () => {
    let [loading, setloading] = useState(false);
    let [data, setdata] = useState([]);
    let link = `${process.env.REACT_APP_HOST}/featured_products`;
    FetchProducts({setdata , link});
    return (
        <div className="featured-product">
            <h1 data-aos="fade-up" className='text-2xl text-center font-semibold dark:text-slate-100 mb-10 mt-7 underline underline-offset-8'>Featured eBooks</h1>
            <div className='featured-book flex justify-center items-center flex-wrap'>
                {
                    !loading && <h1 className='text-2xl text-center font-semibold dark:text-slate-100  end m-0 p-0'>Loading ...</h1>
                }
                {
                    data.map((arr) => (
                        <>
                            <ProductData key={arr.id} arr={arr}/>
                            {!loading && setloading(true)}
                        </>
                    ))
                }
            </div>
        </div>
    )
}
