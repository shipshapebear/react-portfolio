import React from 'react';
import { VscCode } from 'react-icons/vsc';
import { BsLayoutWtf } from 'react-icons/bs'
import { ReactComponent as Svg1 } from '../images/coding.svg';
import { MdOutlineDesignServices, MdCode } from 'react-icons/md'
import { FiPenTool } from 'react-icons/fi'
const Services = () => {
  return (
    <section id="services">
         <h1>What I do?</h1>
        <ul className='services-wrapper'>
           
            <li className='service-item'>
            <MdCode className='service-icon' />
                <h3>Web Devlopment</h3>
                <p>I do front end web development</p>

            </li>
            <li className='service-item'>
            <MdOutlineDesignServices className='service-icon' />

                <h3>UI/UX Design</h3>
                <p>I do UI/UX designs</p>
            </li>
            <li className='service-item'>
            <FiPenTool className='service-icon' />
                <h3>Graphic Design</h3>
                <p>I do graphic designs</p>

            </li>
        </ul>
    </section>
  )
}

export default Services