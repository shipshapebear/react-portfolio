import React from 'react';
import { VscCode } from 'react-icons/vsc';
import { BsLayoutWtf } from 'react-icons/bs'
import { ReactComponent as Svg1 } from '../images/coding.svg';
import { MdOutlineDesignServices, MdCode } from 'react-icons/md'
import { FiPenTool } from 'react-icons/fi'
const Services = () => {
  return (
    <section id="services">
         <h2>What I do?</h2>
        <div className='services-wrapper'>
           
            <div className='service-item'>
            <MdCode className='service-icon' />
                <h3>Web Devlopment</h3>
                <p>Delivering a elegant and </p>

            </div>
            <div className='service-item'>
            <MdOutlineDesignServices className='service-icon' />

                <h3>UI/UX Design</h3>
                <p>I do UI/UX designs</p>
            </div>
            <div className='service-item'>
            <FiPenTool className='service-icon' />
                <h3>Graphic Design</h3>
                <p>I do graphic designs</p>

            </div>
        </div>
    </section>
  )
}

export default Services