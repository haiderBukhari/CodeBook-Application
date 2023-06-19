import './Search.css'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react';
export const Search = ({setsearchshow}) => {
  let navigate = useNavigate();
  let [search, setsearch] = useState();
  return (
    <div className='search'>
        <div className="sub-search">
            <input className='searchs dark:bg-gray-500 dark:text-white tracking-wider dark:placeholder:text-white' type="search" name="" value={search} id="" placeholder='Search ' onChange={(e)=>setsearch(e.target.value)}/>
            <i className="special-search fa-brands fa-searchengin"></i>
        </div>
        <div onClick={()=>{setsearchshow(false);navigate(`${search?`/products?q=${search}`:`/products`}`)}} className="search-bar">
            <i className="fa-brands fa-searchengin"></i>          
        </div>
    </div>
  )
}
