import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export const ScrolltoTop = () => {
    let current_location = useLocation();
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }, [current_location])
    return null;
}