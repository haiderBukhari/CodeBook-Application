import Logo from '../../assets/logo.png'
import { Search } from '../Search'
import {useEffect, useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'; 
import './Navbar.css'
import { useSelector } from 'react-redux';
import { DropDownNotLogin, DropDownLogined } from '../../Pages/index';
export const Navbar = () => {
    let length = useSelector(state => state.cartState.length);
    let islogin = useSelector(state=>state.loginState.islogin);
    let navigate = useNavigate();
    let [dropdownshow, setdropdownshow] = useState(false);
    let [searchshow, setsearchshow] = useState(false); 
    let [mode, setmode] = useState(false)
    let location = useLocation();
    function handlemovehome(){
        if(location.pathname!=='/'){
            navigate('/');
        }
    }
    function handlemode () {
        setmode(!mode);
        if (mode) {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.remove('bg-slate-700');
            document.documentElement.classList.add('bg-white');
            const rotation = document.querySelector('.fa-sun');
            rotation.classList.remove('fa-spin-reverse');
        }
        else {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.add('bg-slate-700');
            document.documentElement.classList.remove('bg-white');
            const rotation = document.querySelector('.fa-sun');
            rotation.classList.add('fa-spin-reverse');
        }
    }
    return (
        <>
            <nav className='shadow-md px-3 bg-white dark:bg-slate-800'>
                <div onClick={handlemovehome} className="codebook cursor-pointer">
                    <img src={Logo} alt="" />
                    <h2 className="text-slate-800 dark:text-white">CodeBook</h2>
                </div>
                <div className="info text-slate-800 dark:text-white">
                    <i onClick={handlemode} className="fa-sharp fa-regular fa-sun fa-spin"></i>
                    <i onClick={()=>setsearchshow(!searchshow)} className="fa-brands fa-searchengin fa-fade"></i>
                    <i onClick={()=>navigate('/cart')} className="fa-solid fa-cart-shopping relat"><p className='para'>{length}</p></i>
                    <i onClick={()=>setdropdownshow(!dropdownshow)} className="fa-solid fa-circle-user"></i>
                    {dropdownshow && ( !islogin ? <DropDownNotLogin setdropdownshow={setdropdownshow}/>:<DropDownLogined setdropdownshow={setdropdownshow}/>)}

                </div>
            </nav>
            <hr className='bg-teal-700	h-px'/>
            {
                searchshow && (<Search setsearchshow={setsearchshow}/>)
            }
        </>
    )
}