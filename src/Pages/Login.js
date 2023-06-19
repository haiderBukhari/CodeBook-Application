import React, { useEffect, useState, useRef } from 'react'
import './login.css'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { registeration, logedin } from "../Components/ToastNotification"
import { useDispatch } from 'react-redux'
import { add_user } from '../Store/LoginSlice'
export const Login = () => {
  let dispatch = useDispatch();
  let email = useRef(), password = useRef();
  let navigate = useNavigate();
  let [data, setdata] = useState({})
  let handleloginprocess = async (data, tocontinue) => {
    if ((data.email == '' || data.password == '') && tocontinue===true) {
      data.email == '' ? registeration(false, 'Username is Required!') : registeration(false, 'Password is Required!');
      return;
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST}/login`, {
        method: 'POST',
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      const final_data = await response.json();
      final_data.accessToken ? logedin(true, 'in') : logedin(false, final_data);
      if (final_data.accessToken) {
        dispatch(add_user({ name: final_data.user.name, email: final_data.user.email}))
        setTimeout(() => {
          navigate('/products')
        }, 1400);
      }
    }
    catch (err) {
    }
  }
  let handlesignin = (response) => {
    let userdata = jwt_decode(response.credential);
    const data = {
      name: userdata.given_name +' '+ userdata.family_name,
      email: userdata.email,
      password: 'qwertyuiopzxcvbnmasdfghjkl0123456789qwertyuiopasdfghjklzxcvbnm'
    }
    handleloginprocess(data, true);
  }
  useEffect(() => {
    try {
      /* global google*/
      google.accounts.id.initialize({
        client_id: "404506812550-sup4dpe8o7mmsaj725oa24ulvhbra0qf.apps.googleusercontent.com",
        callback: handlesignin
      })
      google.accounts.id.renderButton(
        document.querySelector('.google-signin'),
        {
          'scope': 'profile email',
          'prompt': 'select_account',
          'theme': 'outline',
          'size': 'large'
        }
      );
    }
    catch (err) {
    }
  }, [])
  let handleguest = ()=>{
    const data = {
      email: "apshaiderbukhari786@gmail.com",
      password: '12345678'
    }
    handleloginprocess(data, false);
  }
  let handlesubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value
    }
    handleloginprocess(data, true);
  }
  return (
    <>
      <div data-aos="fade-down"
        data-aos-duration="1000" className='main-login flex'>
        <div className="left-login">
          <div className="sign-in mt-10 px-10 ">
            <p className='signin font-light dark:text-white text-center'>Sign In</p>
          </div>
          <form onSubmit={handlesubmit} className="below-name mt-5 ml-10">
            <label className='font dark:text-white ' htmlFor="name">Email</label>
            <input onChange={(e) => email.current.value = e.target.value} className='bg-gray-200 dark:bg-slate-500 dark:placeholder:text-white' type="text" name="name" id
              ="name" placeholder='Email ' ref={email} />
            <label className='font dark:text-white mt-3' htmlFor="pass ">PASSWORD</label>
            <input onChange={(e) => password.current.value = e.target.value} className='bg-gray-200 dark:bg-slate-500 dark:placeholder:text-white' type="password" name="pass" id="pass" placeholder='Password' ref={password} />
            <button type="submit" className='btn-signin'>Sign In</button>
            <div className="google-signin flex justify-center mt-4 mr-4">
            </div>
            <div className="forgot">
              <p onClick={handleguest} className='mt-5 text-red-600 font-normal text-lg dark:text-gray-300 cursor-pointer hover:text-blue-800 ease-in duration-300' >Sign In as Guest</p>
            </div>
            <hr className='hr-resourse' />
          </form>
        </div>
        <div className="right-login-main">
          <div className="right-login">
            <h1 className='font-extrabold	 text-white welcome'>Welcome to Login</h1>
            <p className='text-gray-100 font-lg my-4  font-semibold'>Do not have an Account</p>
            <button onClick={() => navigate('/register')} className='signbtn'>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )
}
