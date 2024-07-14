import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import logo from '../../assets/educity.png'


const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);


  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'} >
        <li> <Link to='hero' smooth={true} duration={500} offset={0}>Home</Link></li>
        <li> <Link to='programs' smooth={true} duration={500} offset={-260}>Programs</Link></li>
        <li> <Link to='about' smooth={true} duration={500} offset={-150}>About Us</Link></li>
        <li> <Link to='campus' smooth={true} duration={500} offset={-260}>Campus</Link></li>
        <li> <Link to='testimonial' smooth={true} duration={500} offset={-260}>Testimonial</Link></li>
        <li className='btn'> <Link to='contact' smooth={true} duration={500} offset={-260}>Contact Us</Link></li>
      </ul>
      <i className="fa-solid fa-bars-progress menu-icon" onClick={toggleMenu}></i>
    </nav>
  )
}

export default Navbar
