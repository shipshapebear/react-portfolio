import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as HelloBackground } from '../images/hello-background.svg'
const Hello = () => {
  return (
    <section id="hello">
      <div className="hello-wrapper">
        <div className='hero-left'>
          <span>Hello, I am</span>
          <h1>
            <span>FRONT-END</span> Web Developer
          </h1>
          <p>
            I am <b>Aaron Jay Malabanan</b>, a passionate front-end web developer based in the Philippines. <b>Welcome to my portfolio!</b>
          </p>
          <div className="hero-btn">
          <a href="../files/aaron-jay-resume.pdf" target="_blank" className='btn btn-primary'>VIEW RESUME</a>
          <Link to="/contact" as="NavLink" className='btn btn-secondary'>CONTACT ME</Link>
    
          </div>
        </div>
        <div className='hero-right'>
            <img src={require("../images/Me.png")} alt="Me" />

        </div>
        </div>
    </section>
  )
}

export default Hello