import React, { useEffect } from 'react';
import { BrowserRouter as Link, Router } from 'react-router-dom';
import Hello from './Hello';
import Contact from './Contact';
import Navbar from './Navbar';
import Menu from './Menu';
import Projects from './Projects';
import Footer from './Footer';
import About from './About';
import Services from './Services'
const Home = () => {
  useEffect(() => {
    document.title = "Aaron Jay Malabanan"
  }, []);
  return (
    <div className='home-main'>
      <Hello />
      <About />
      <Services />
      <Projects />
      <Footer />
      
    </div>

  )
}

export default Home 