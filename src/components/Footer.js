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
            <p>Designed and built by <span>AARON JAY MALABANAN.</span> &copy; 2022.</p>
            <span>aaronmlbnn@gmail.com</span>
            </div>
            

        </div>
    </footer>
  )
}

export default Footer