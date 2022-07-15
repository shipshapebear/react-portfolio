import React from 'react'
import Socials from './Socials';
import { NavLink, Link } from 'react-router-dom';
const removeActive = () => {
    const navWrapper = document.querySelector('.nav')
    const menu = document.querySelector('.menu-wrapper');
    const burger = document.querySelector('.hamburger');
    menu.classList.remove('active')
    burger.classList.remove('active')
    navWrapper.classList.remove('hide-bg')
}

const Menu = () => {
    return (
        <div className='menu-wrapper'>
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


            <div className='wrapper-socs'>
                <Socials className="mobile-socials" />
                <span>Aaron Jay. 2022</span>
            </div>
        </div>
    )
}

export default Menu