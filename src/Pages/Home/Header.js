import HeaderImage from './hero.avif'
import './CSS/Header.css'
import { useNavigate } from 'react-router-dom';
import Typed from 'typed.js';
import { useEffect } from 'react';
export const Header = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        let type = new Typed('.ebook', {
            strings: ["Store.", "Emporium.", "Enclave.", "Sanctuary.", "Citadel.", "Oasis.", "Treasury.","Nexus.", "Expedition.", "Arcadia.", "Galaxy."],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        })
    })
    return (
        <header data-aos="fade-up" className=''>
            <div className="upper-part" data-aos="fade-right">
                <h1 className='font-extrabold text-black dark:text-white' data-aos="fade-down">The Ultimate eBook <span className='ebook text-blue-700 dark:text-amber-600'>Store</span></h1>
                <p className='paraoi text-black dark:text-white'>CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
                <button onClick={()=>{navigate('/products')}} className='button text-black dark:text-white shadow-2xl'>Explore eBooks</button>
            </div>
            <div className="lower">
            <img data-aos="zoom-in-up" className="hero-img" src={HeaderImage}  alt="" />
            </div>
        </header>
    );
}