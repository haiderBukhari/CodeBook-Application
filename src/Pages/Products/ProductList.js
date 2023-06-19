import { useEffect, useState } from "react";
import { FetchProducts } from "../../Components/FetchData";
import { ProductData } from "../../Components/ProductData";
import { Filter } from "./Filter";
import { useSearchParams, useNavigate } from "react-router-dom";
export const ProductList = () => {
    let navigate = useNavigate();
    let [search] = useSearchParams();
    let [showfilter, setshowfilter] = useState(false);
    let [data, setdata] = useState([]);
    let [rating, setrating] = useState(0);
    let [link, setlink] = useState(`${process.env.REACT_APP_HOST}/products?name_like=${search.get('q')?search.get('q'):''}`);
    useEffect(()=>{
        setlink(`${process.env.REACT_APP_HOST}/products?name_like=${search.get('q')?search.get('q'):''}`);
    }, [search.get('q')])
    let [length, setlength] = useState(0);
    let [bestseller, setbestseller] = useState('mm');
    let [instock, setinstock] = useState('mm'); 
    let [asc, setasc] = useState('mm');
    FetchProducts({setdata , link});
    useEffect(()=>{
        let length1 = 0;
        data.map((arr)=>{
            if(arr.name.toLowerCase().includes(search.get('q')?search.get('q').toLowerCase():'') && (((bestseller===arr.best_seller || bestseller=='mm') && (instock===arr.in_stock || instock=='mm') && rating<=arr.rating))){
                length1+=1;
            }
        })
        setlength(length1);
    }, [data, showfilter, link, setrating, bestseller, instock])
    return (
        <div className="featured-product">
            {showfilter && <Filter setshowfilter={setshowfilter} setlink={setlink} setrating={setrating} setbestseller={setbestseller} setinstock={setinstock} rating={rating} bestseller={bestseller} instock={instock} setasc={setasc} asc={asc} querry={search.get('q')}/>}
            <div className="product-list flex justify-between items-center">
                <h1 className='text-3xl text-start font-medium dark:text-slate-100 mb-10 mt-9 ml-9'>All eBooks ({length})</h1>
                <i onClick={()=>{setshowfilter(e=>!e)}} className="cursor-pointer fa-solid fa-bars fa-beat-fade mr-20 text-3xl dark:text-white"></i>
            </div>
            {
                    search.get('q') && <h1 data-aos="fade-up" className='text-2xl text-center font-semibold dark:text-slate-100 mb-7 mt-1 underline underline-offset-8'>Searching the Result for "{search.get('q')}"</h1>
            }
            {
                search.get('q') && <div onClick={()=>navigate('/products')} className="flex justify-center">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-2.5 mr-2 mb-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reset Search</button>
                </div>
            }
            {
                length===0 && <h1 data-aos="fade-up" className='text-2xl text-center font-semibold dark:text-slate-100 underline underline-offset-8 end'>Searched Item for the product does not exist</h1>
            }
            <div className='featured-book flex justify-center items-center flex-wrap'>
                {
                    data.map((arr) => (
                        arr.name.toLowerCase().includes(search.get('q')?search.get('q').toLowerCase():'')?(((bestseller===arr.best_seller || bestseller=='mm') && (instock===arr.in_stock || instock=='mm') && rating<=arr.rating))?<ProductData key={arr.id} arr={arr} />:null:null
                    ))
                }
            </div>
        </div>
    )
}