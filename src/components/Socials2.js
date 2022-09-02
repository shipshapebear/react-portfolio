import React from 'react'
import { BrowserRouter as Link, Router } from 'react-router-dom';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { IconContext } from "react-icons";

const Socials2 = ({className}) => {
  return (
    <IconContext.Provider value={{ className: className }}>
    <div className="fixed-socials">
        <a target="_blank" rel="noreferrer" href="http://www.facebook.com/aaronmlbnn"><AiFillFacebook/></a>
        <a target="_blank" rel="noreferrer" href="http://www.instagram.com/corp.aaronjay"><AiFillInstagram/></a>
        <a target="_blank" rel="noreferrer" href="http://www.linkedin.com/malabanan.aaronjay"><AiFillLinkedin/></a>
        <a target="_blank" rel="noreferrer" href="http://www.github.com/aaronmlbnn23" style={{marginBottom: '30px'}}><AiFillGithub /></a>
    </div>
    </IconContext.Provider>
  )
}

export default Socials2