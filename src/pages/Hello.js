import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as HelloBackground } from '../images/hello-background.svg'
import Resume from '../document/aaronjaymalabanan.pdf'
import Loader from '../components/Loader'
const Hello = () => {


  return (
  
    <section id="hello">
      <div className="hello-wrapper">
        <div className='hero-left'>
          <span>Hi, my name is</span>
          <h2 className='name'>AARON JAY.</h2>
          <h3 className='title'>Front-end web developer.</h3>
          <p>
            I am a passionate front-end web developer based in the Philippines. <b>Welcome to my portfolio!</b>
          </p>
          <div className="hero-btn">
      
          <a href="#" className='btn btn-primary'>VIEW RESUME</a>
          <a href='#contact' className='btn btn-secondary'>CONTACT ME</a>
    
          </div>
        </div>
        </div>
    </section>
  )
}

export default Hello