import React, { useEffect, useRef} from 'react'
import './login.css'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { registeration } from '../Components/ToastNotification'
import { add_user } from '../Store/LoginSlice'
import { useDispatch } from 'react-redux'
export const Register = () => {
  let dispatch = useDispatch();
  let name = useRef(), email = useRef(), pass = useRef();
  // let data = useSelector(state=>state.)
  let navigate = useNavigate();
  let handlesubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: name.current.value,
      email: email.current.value,
      password: pass.current.value
    }
    if (data.name === '' || data.email === '' || data.password === '') {
      data.email === '' ? registeration(false, 'Email is Required!') : data.name === '' ? registeration(false, 'Username is Required!') : registeration(false, 'Password is Required!');
      return;
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, {
      method: 'POST',
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    const final_data = await response.json();
    final_data.accessToken ? registeration(true, 'User Successfully Registered') : registeration(false, 'Email Already Exist');
    if (final_data.accessToken) {
      dispatch(add_user({name:data.name, email:data.email}))
      setTimeout(() => {
        navigate('/products')
      }, 1400);
    }
  }
  async function handlesignin(response){
    let data = jwt_decode(response.credential);
    const userdata = {
      name: data.given_name +' '+ data.family_name,
      email: data.email,
      password: 'qwertyuiopzxcvbnmasdfghjkl0123456789qwertyuiopasdfghjklzxcvbnm'
    }
    const response_user = await fetch(`${process.env.REACT_APP_HOST}/register`, {
      method: 'POST',
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(userdata)
    })
    const final_data = await response_user.json();
    final_data.accessToken ? registeration(true, 'User Successfully Registered') : registeration(false, 'Email Already Exist');
    if (final_data.accessToken) {
      dispatch(add_user({name:data.name, email:data.email}))
      setTimeout(() => {
        navigate('/products')
      }, 1400);
    }
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
  }, [])/*eslint-disable-line*/ 
  return (
    <>
      <div data-aos="fade-up"
        data-aos-duration="1000" className='main-login flex'>
        <div className="left-login l-login dark:bg-slate-800 rounded-tl-3xl rounded-bl-3xl">
          <div className="sign-in mt-10 px-10 ">
            <p className='signin font-light dark:text-white text-center'>Sign Up</p>
            {/* <i className="fa-brands fa-google fa-beat text-gray-600 google dark:text-white"></i> */}
          </div>
          <form onSubmit={handlesubmit} className="below-name mt-5 ml-10">
            <label className='font dark:text-white' htmlFor="name">Email</label>
            <input onChange={(e) => { email.current.value = e.target.value }} className='bg-gray-200 dark:bg-slate-500  dark:placeholder:text-white' type="email" name="name" id
              ="name" placeholder='Email' ref={email} />
            <label className='mt-2 font dark:text-white' htmlFor="name">USERNAME</label>
            <input onChange={(e) => { name.current.value = e.target.value }} className='bg-gray-200 dark:bg-slate-500 dark:placeholder:text-white' type="text" name="emial" id
              ="name" placeholder='User Name' ref={name} />
            <label className='font dark:text-white mt-3' htmlFor="pass ">PASSWORD</label>
            <input onChange={(e) => { pass.current.value = e.target.value }} className='bg-gray-200 dark:bg-slate-500 dark:placeholder:text-white' type="password" name="pass" id="pass" placeholder='Password' ref={pass} />
            <button type="submit" className='btn-signin'>Sign Up</button>
            <div className="google-signin flex justify-center mt-4 mr-4">
            </div>
            <hr className='hr-resourse' />
          </form>
        </div>
        <div className="right-login-main">
          <div className="right-login r-login">
            <h1 className='font-extrabold text-white welcome1'>Welcome to Register</h1>
            <p className='text-gray-100 font-lg my-4  font-semibold'>Already have an account</p>
            <button onClick={() => { navigate('/login') }} className='signbtn'>Sign In</button>
          </div>
        </div>
      </div>
    </>
  )
}