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
                    <p>I do front end web development, spends my time in personal projects and exploring APIs to visualize data into applications.
                        My skills in styling components allows me to transfer a design into elegant looking and responsive web application.

                    </p>

                </li>
                <li className='service-item'>
                    <MdOutlineDesignServices className='service-icon' />

                    <h3>UI/UX Design</h3>
                    <p>I do have experience in UI/UX designing and I also put my time in learning figma since I have to create layout of my project before I put it into code.
                        My knowledge in photoshop helped me a lot to understand how to create layout and design in figma.
                    </p>
                </li>
                <li className='service-item'>
                    <FiPenTool className='service-icon' />
                    <h3>Graphic Design</h3>
                    <p>Graphic designing was my first hobby and became my side hustle in college until now. I love how I look up into small details that makes a huge impact
                        in the design and makes my clients satisfied in my output. 
                    </p>

                </li>
            </ul>
        </section>
    )
}

export default Services