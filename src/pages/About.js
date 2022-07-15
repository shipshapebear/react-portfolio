import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
const About = () => {
  return (
    <section id='about'>
 
      <div className='about-wrapper'>
        <div className='story-wrapper'>
        <h1 className='title'>About Me</h1>
          <p>
           Hello! My name is Aaron Jay Malabanan and I specialize in Front-end web development
          and my passion is all about building attractive and professional
          user interfaces and websites.
          </p>

          <Link className="story-link" to="#" as={NavLink}>More of my story &nbsp; <HiOutlineArrowNarrowRight/></Link>

          <h2 style={{marginTop: "50px"}}>Technology Stack</h2>
          <div className='tech-wrapper'>
          <img src={require("../images/stacks/sass-logo.png")} alt="Sass" />
          <img src={require("../images/stacks/bs-logo.png")} alt="Bootstrap" />
          <img src={require("../images/stacks/tw-logo.png")} alt="Tailwind" />
          <img src={require("../images/stacks/js-logo.png")} alt="Javascript" />
          <img src={require("../images/stacks/react.png")} alt="React" />
          <img src={require("../images/stacks/figma-logo.png")} alt="Figma" />
          </div>
        </div>
        <div className='me-wrapper'>
          <div className='image-cover'></div>
        <img src={require("../images/Me2.png")} alt="Me" />
        </div>
      </div>
    </section>
  )
}

export default About