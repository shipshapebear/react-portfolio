
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Socials2 from './components/Socials2';
import Loader from "./components/Loader";
const Layout = React.lazy(() => import("./pages/Layout"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Story = React.lazy(() => import("./pages/Story"));


function App() {
  return (
    
    <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/home" element={<Layout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/story" element={<Story />} />
        </Routes>

    </Suspense>
   
  );
}

export default App;
