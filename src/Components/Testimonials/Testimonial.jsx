import React, { useRef } from 'react'
import './Testimonial.css'
import Userlist from './Userlist'


const Testimonial = () => {
    const slider = useRef();
    let tx = 0;
        
    const slideForword = () => {
       if (tx > -75) {
           tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    
    const slideBackword = () => {
        if (tx < 0) {
            tx += 25;
         }
         slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
      <div className='testimonial'>
         <i className="fa-solid fa-angles-left back-btn" onClick={slideBackword}></i>
         <i className="fa-solid fa-angles-right next-btn" onClick={slideForword}></i>
          <div className="slider">
              <div className="slider-content" ref={slider}>
              <Userlist/>
              </div>
          </div>
    </div>
  )
}

export default Testimonial
