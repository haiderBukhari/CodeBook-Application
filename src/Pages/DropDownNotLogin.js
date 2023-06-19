import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Login } from './Login'
import { Register } from './Register'
import './drop.css'
import { recieve_email } from '../Components/ToastNotification'
export const DropDownNotLogin = ({setdropdownshow}) => {
  let navigate = useNavigate();
    return (
    <div data-aos="fade-down" className="drop-down bg-white dark:bg-slate-800">
        <p className='dark:hover:text-slate-800' onClick={()=>{setdropdownshow(false);navigate('/products')}}>All eBooks</p>
        <p className='dark:hover:text-slate-800' onClick={()=>{setdropdownshow(false);navigate('/login')}}>Login</p>
        <p className='dark:hover:text-slate-800' onClick={()=>{recieve_email();setdropdownshow(false);navigate('/register')}}>Register</p>
    </div>
  )
}
