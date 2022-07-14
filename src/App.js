
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Socials2 from './components/Socials2';
const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Story = React.lazy(() => import("./pages/Story"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="app-main">
        <Navbar />
        <Socials2 className='sticky-socials'/>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/story" element={<Story />} />
        </Routes>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
