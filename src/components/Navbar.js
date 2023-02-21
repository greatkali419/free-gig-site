import React from 'react'
import { useState } from 'react'
import logo from '../img/LOGO.png'
import open from '../img/icon-hamburger.svg'
import close from '../img/icon-close.svg'
import { Link, animateScroll as scroll} from 'react-scroll'

const Navbar = () => {
  const [navbar, setNavbar] = useState('-1444px')
  const [navButton, setNavButton] = useState(false)
const handleMenu = ()=> {
  setNavbar('0px')
  setNavButton(true)
} 
const handleCloseMenu = ()=> {
  setNavbar('-1444px')
  setNavButton(false)

} 
  return (
    <nav>
      <header>
        <img src={logo} alt="logo" />   
      </header>
      <ul 
      style={{
        left: navbar
      }}
      >
        <Link to="hero"  spy={true} smooth={true} offset={-100} duration={500}  onClick={()=>{handleCloseMenu()}}>
        <li>Home</li>
        </Link>
        <Link to="about"  spy={true} smooth={true} offset={-100} duration={500}  onClick={()=>{handleCloseMenu()}}>
        <li>About Us</li>
        </Link>
        <Link to="mission"  spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{handleCloseMenu()}}>
        <li>Our Mission</li>
        </Link>
        <Link to="faqs" spy={true} smooth={true} offset={-100} duration={500}  onClick={()=>{handleCloseMenu()}}>
        <li>FAQs</li>
        </Link>
        <Link to="contact"  spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{handleCloseMenu()}}>
        <li>Contact</li>
        </Link>

        <Link to="subscribe" spy={true} smooth={true} offset={-100} duration={500}  onClick={()=>{handleCloseMenu()}}>
        <button>
          Subscribe 
        </button>
        </Link>
      </ul>
      <div>
        {!navButton ? <img onClick={()=> {
          handleMenu()
        }} src={open} alt="open" /> :
        <img onClick={()=> {
          handleCloseMenu()
        }}  src={close} alt="close" />}
      </div>
    </nav>
  )
}

export default Navbar