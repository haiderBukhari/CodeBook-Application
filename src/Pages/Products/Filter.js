import React from 'react'
import './filter.css'
import { useRef } from 'react'
export const Filter = ({setshowfilter, setlink, setrating, setbestseller, setinstock, rating, bestseller, instock, setasc, asc, querry}) => {
  let lth = useRef();
  function handleclear(){
        setrating(0);
        setlink(`${process.env.REACT_APP_HOST}/products`);
        setbestseller('mm');
        setinstock('mm'); 
        setasc('mm');
  }  
  return (
    <section data-aos="fade-right" className='filter-section dark:bg-gray-700'>
        <div className='main-filter'>
            <div className="upper mt-2 mb-8 hrs">
                <p className='text-gray-500 font-semibold text-xl dark:text-white apply--filter'>FILTERS</p>
                <i onClick={()=>setshowfilter(false)} className="cursor-pointer fa-solid fa-xmark fa-beat dark:text-white"></i>
            </div>
            <hr className='h-0.3 bg-black dark:text-white'/>
            <div className="lower">
                <div className="sort mb-5">
                    <p className='dark:text-white mt-6 mb-2 font-semibold text-base text-gray-700 apply-filter'>Sort by</p>
                    <div className="flex">
                        <input onClick={()=>{setlink(`${process.env.REACT_APP_HOST}/products?_sort=price&_order=asc&&q=${querry?querry:''}`); setasc(true)}} checked={asc===true?true:false} className='mr-3 dark:text-white' type="radio" name="low" id="low"/>
                        <label className = "dark:text-gray-300" htmlFor="low">Price - Low to High</label>
                    </div>
                    <div className="flex">
                        <input onClick={()=>{setlink(`${process.env.REACT_APP_HOST}/products?_sort=price&_order=desc&&q=${querry?querry:''}`); setasc(false)}} checked={!asc===true?true:false} className='mr-3 dark:text-white' type="radio" name="low" id="high" />
                        <label className='dark:text-gray-300' htmlFor="high">Price - High to Low</label>
                    </div>
                </div>
                <div className="rating">
                    <p className='mt-6 mb-2 font-semibold text-base text-gray-700 dark:text-white apply-filter'>Rating</p>
                    <div className="flex">
                        <input onClick={()=>setrating(4)} className='mr-3 dark:text-white' checked={rating==4?true:false} type="radio" name="stars" id="four" />
                        <label className='dark:text-gray-300' htmlFor="four">4 Stars & Above</label>
                    </div>
                    <div className="flex">
                        <input onClick={()=>setrating(3)} className='mr-3 dark:text-white' checked={rating==3?true:false} type="radio" name="stars" id="three" />
                        <label className='dark:text-gray-300' htmlFor="three">3 Stars & Above</label>
                    </div>
                    <div className="flex">
                        <input onClick={()=>setrating(2)} className='mr-3 dark:text-white' checked={rating==2?true:false} type="radio" name="stars" id="two" />
                        <label className='dark:text-gray-300' htmlFor="two">2 Stars & Above</label>
                    </div>
                    <div className="flex">
                        <input onClick={()=>setrating(1)} className='mr-3 dark:text-white' checked={rating==1?true:false} type="radio" name="stars" id="one" />
                        <label className='dark:text-gray-300' htmlFor="one">1 Stars & Above</label>
                    </div>
                </div>
                <div className="filter">
                    <p className='mt-6 mb-2 font-semibold text-base text-gray-700 dark:text-white apply-filters'>Other Filter</p>
                    <div className="flex">
                        <input onClick={()=>setbestseller(e=>e==='mm'?true:'mm')} className='mr-3 dark:text-white' checked={bestseller===true?true:false} type="checkbox" name="filter" id="seller" />
                        <label className='dark:text-gray-300' htmlFor="seller">Best Seller Only</label>
                    </div>
                    <div className="flex">
                        <input onClick={()=>setinstock(e=>e==='mm'?true:'mm')} className='mr-3 dark:text-white' checked={instock===true?true:false}  type="checkbox" name="filter" id="instock" />
                        <label className='dark:text-gray-300' htmlFor="instock">Instock Only</label>
                    </div>
                </div>
            </div>
        </div>
        <button onClick={handleclear} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-2.5 mr-2 mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Clear Filter</button>

    </section>
  )
}
