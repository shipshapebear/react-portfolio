import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
const menu = () => {
  const menuWrapper = document.querySelector(".menu-wrapper");
  const hamburger = document.querySelector('.hamburger');
  const navParent = document.querySelector(".nav");
  const logoWrapper = document.querySelector(".logo-wrapper");
  const body = document.querySelector('body')
  const html = document.querySelector('html')
  hamburger.classList.toggle("active");
  menuWrapper.classList.toggle("active");
  navParent.classList.toggle("hide-bg");
  logoWrapper.classList.toggle("hidden");
  body.classList.toggle('disabled')
  html.classList.toggle('disabled')
};

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY >= 170;
      setScroll(scrollCheck);
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
const Navbar = () => {
  const menuWrapper = document.querySelector(".menu-wrapper");
  const navParent = document.querySelector(".nav");
  const scroll = useScrollHandler();

  let navWrapper = ("nav-wrapper");
  if (scroll) {
    if (menuWrapper.classList.contains("active")) {
      navParent.classList.add("hide-bg");
      
    }
  }

  return (

    <nav className={`nav ${scroll ? 'nav-scrolled' : ''}`}>
      <div className={navWrapper}>
        <div className="logo-wrapper">
          {/*<img src={myLogo} alt="logo" />*/}
          <Link to="/" as={NavLink} className='logo-title'>Aaron Jay <span className='bull'>&bull;</span></Link>



          <ul>
            <li>
              <a href="#hello">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>

        </div>
        <div className="hamburger" onClick={() => menu()}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>


      </div>
    </nav>
  )
}

export default Navbar