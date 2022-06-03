import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='w-full h-[90px] bg-black fixed'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <Link to="hero" spy={true} smooth={true} duration={500}><h1 className='text-cyan cursor-pointer'>Defi</h1></Link>
        <div className='hidden sm:flex'>
            <ul className='flex text-white items-center cursor-pointer'>
            <Link to="about" spy={true} smooth={true} duration={500}><li>Platform</li></Link>
            <Link to="developers" spy={true} smooth={true} duration={500}><li>Developers</li></Link>
            <Link to="community" spy={true} offset={500} smooth={true} duration={500}><li>Community</li></Link>
            <Link to="footer" spy={true} smooth={true} duration={500}><li>About</li></Link>
              <button>Use Defi</button>
            </ul>
        </div>
            {/* Mobile  */}
            
          <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white'/> : <AiOutlineMenu size={30} className='text-white'/>}
            
          </div>

          <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'hidden'}>
          <ul  className='text-2xl'>
          <Link to="about" spy={true} smooth={true} duration={500}><li onClick={handleNav}>Platform</li></Link>
            <Link to="developers" spy={true} smooth={true} duration={500}><li onClick={handleNav}>Developers</li></Link>
            <Link to="community" spy={true} offset={500} smooth={true} duration={500}><li onClick={handleNav}>Community</li></Link>
            <Link to="footer" spy={true} smooth={true} duration={500}><li onClick={handleNav}>About</li></Link>
              <button className='m-8 px-8'>Use Defi</button>
            </ul>
          </div>
       </div>
    </div>
  )
}

export default Navbar