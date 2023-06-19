import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove_user } from '../Store/LoginSlice'
import { logedin } from '../Components/ToastNotification'
import { remove_all_data } from '../Store/DashboardSlice'
import './drop.css'
export const DropDownLogined = ({setdropdownshow}) => {
  let location = useLocation();
  let move = () =>{
  }
  let handlelogout = () =>{
    location.pathname==='/'?navigate('/products'):navigate('/');
    logedin(false, 'out')
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setdropdownshow(false);
      dispatch(remove_all_data());
      dispatch(remove_user()); 
    }
    let dispatch = useDispatch();
    let email = useSelector(state=>state.loginState.email)
    let navigate = useNavigate();
    return (
    <div data-aos="fade-down" className="drop-down1 bg-white dark:bg-slate-800">
        <h1 onClick={move} className='mail text-center'>{email}</h1>
        <hr />
        <p className='dark:hover:text-slate-800' onClick={()=>{setdropdownshow(false);navigate('/products')}}>All eBooks</p>
        <p className='dark:hover:text-slate-800' onClick={()=>{setdropdownshow(false); navigate('/user-dashboard')}}>Dashboard</p>
        <hr />
        <p className="dark:hover:text-slate-800" onClick={handlelogout}>Logout</p>
    </div>
  )
}
