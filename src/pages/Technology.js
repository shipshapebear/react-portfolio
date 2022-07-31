import React from 'react'
import Reactjs from '../images/stacks/react.png'
import Sass from '../images/stacks/sass-logo.png'
import Bootstrap from '../images/stacks/bs-logo.png'
import Tailwind from '../images/stacks/tw-logo.png'
import Javascript from '../images/stacks/js-logo.png'
import Figma from '../images/stacks/figma-logo.png'
const Technology = () => {
  return (
    <section id='technology-stack' className='technology-wrapper'>
      <h1 className='title'>Technology Stack</h1>
      <div className='stack-container'>
        <div className='stack-item'>
          <div className='stack-wrapper'>
            <img className='stack-image' src={Javascript} alt="react" />
          </div>
          <h1 className='stack-label'>Javascript</h1>
        </div>
        <div className='stack-item'>
          <div className='stack-wrapper'>
            <img className='stack-image' src={Reactjs} alt="react" />
          </div>
          <h1 className='stack-label'>React</h1>
        </div>
        <div className='stack-item'>
          <div className='stack-wrapper'>
            <img className='stack-image' src={Sass} alt="react" />
          </div>
          <h1 className='stack-label'>Sass</h1>
        </div>
        <div className='stack-item'>
          <div className='stack-wrapper'>
            <img className='stack-image' src={Bootstrap} alt="react" />
          </div>
          <h1 className='stack-label'>Bootstrap</h1>
        </div>
        <div className='stack-item'>
          <div className='stack-wrapper'>
            <img className='stack-image' src={Tailwind} alt="react" />
          </div>
          <h1 className='stack-label'>Tailwind</h1>
        </div>
        <div className='stack-item'>
          <div className='stack-wrapper'>
            <img className='stack-image' src={Figma} alt="react" />
          </div>
          <h1 className='stack-label'>Figma</h1>
        </div>

      </div>
    </section>
  )
}

export default Technology