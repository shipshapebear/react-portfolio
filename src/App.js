
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
const Home = React.lazy(() => import("./components/Home"));
const Contact = React.lazy(() => import("./components/Contact"));
const Story = React.lazy(() => import("./components/Story"));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="app-main">
        <Navbar />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/story" element={<Story />} />
        </Routes>
        
      </div>
    </Suspense>
  );
}

export default App;
