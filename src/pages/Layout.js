import React, { useEffect } from 'react';
import { BrowserRouter as Link, Router } from 'react-router-dom';


import Hello from './Hello';
import Contact from './Contact';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Projects from './Projects';
import Footer from '../components/Footer';
import About from './About';
import Services from './Services'
import Socials2 from '../components/Socials2';
import Technology from './Technology';

const Layout = () => {
  useEffect(() => {
    document.title = "Aaron Jay Malabanan"
  }, []);
  return (
    <>
    <main className='home-main'>
      <Navbar />
      <Socials2 className='sticky-socials' />
      <Menu />
      <Hello />
      <About />
      <Technology />
      <Services />
      <Projects />
      <Contact />
      
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Layout