import { recieve_email } from '../../../Components/ToastNotification';
import { DynamicTitile } from '../../../DynamicPageTitle';
import Image from '../../assets/images/10010.avif'
import './login-first.css'
import { useNavigate } from 'react-router-dom'
export const Loginrequired = () => {
  DynamicTitile('Login')
  let navigate = useNavigate();
    return(
    <div data-aos="zoom-in" className="first-login">
      <div className="sec-first-login">
        <img data-aos="flip-right" src={Image} alt="" />
        <h1 className="paragraph-tl text-2xl text-center font-semibold dark:text-slate-100 mb-10 mt-10 underline underline-offset-8">
        You need to first Login/Register to view the cart
        </h1>
        <div className="btns-list">
          <button onClick={()=>navigate('/login')} className={`text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2 mr-2 focus:outline-none`}> Login <i className="fa-solid fa-arrow-right ml-2 text-xl"></i></button>

          <button onClick={()=>{recieve_email();navigate('/register')}} className={`text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2 mr-2 focus:outline-none`}> Register <i className="fa-solid fa-arrow-right ml-2 text-xl"></i></button>
        </div>

      </div>
    </div>
  )
}
