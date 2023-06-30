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
            Hello! My name is Aaron Jay and I specialize in Front-end web development
            and my passion is all about building attractive and professional
            user interfaces and websites.
          </p>
          <p>
            My goal is to continuously enhance my knowledge and 
            learn new things. I am focusing on front end development since 
            I feel that this career path fits me extremely well.
          </p>

          <Link className="story-link" to="#" as={NavLink}>More of my story &nbsp; <HiOutlineArrowNarrowRight /></Link>

        </div>
        <div className='me-wrapper'>
          <div className='image-cover'></div>
          <img className="about-profile" src={require("../images/gradpic.jpg")} alt="Me" />
        </div>
      </div>
    </section>
  )
}

export default About