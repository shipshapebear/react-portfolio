import React from 'react'
import Socials from './Socials'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
const Footer = () => {
  return (
    <footer>
        <div className='footer-wrapper'>
            <div className='footer-upper'>
            <h3>Aaron Jay Malabanan</h3>
            <Link className='lets-talk' as={ NavLink } to="/contact">Lets Talk <HiOutlineArrowNarrowRight/></Link>
            </div>
            <div className="footer-bottom">
            <p>&copy; <span>AARON JAY MALABANAN.</span> ALL RIGHTS RESERVED. 2022</p>
            <Socials className="socials-footer"/>
            </div>
            

        </div>
    </footer>
  )
}

export default Footer