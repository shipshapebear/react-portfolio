import React from 'react'
import Spotify from '../images/spotify-app.png'
import nodejs from '../images/stacks/nodejs-logo.png'
import sass from '../images/stacks/sass-logo.png'
import react from '../images/stacks/react.png'
import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import php from '../images/stacks/php-logo.png'
import bootstrap from '../images/stacks/bs-logo.png'
import javascript from '../images/stacks/js-logo.png'
import RPT from '../images/rpt-app.png'
function Projects() {

  const Projects = [{
    id: 1,
    projectName: "Spotify Connected App",
    image: [Spotify],
    description: "You can play tracks with lyrics if you have premium subscription and you can also view your saved tracks, recently played tracks, top artists, top tracks and more.",
    techonologies: [
      nodejs, sass, react
    ],
    repositoryUrl: "fsdfs",
    externalUrl: "https://intone-spotify.herokuapp.com"
  },
  {
    id: 2,
    projectName: "Capstone Project",
    image: [RPT],
    description: "An application used to manage and monitor real property tax. This application uses datatable to visualize data of real properties and uses ajax to perform CRUD operations. ",
    techonologies: [
      php, javascript, bootstrap
    ],
    repositoryUrl: "asd",
    externalUrl: "http://agoncillo-rpt.online"
  }
]


  return (
    <section id="projects">
      <h1>Recent Projects</h1>
    
      {Projects && Projects.map((project) => (
        <div className='project-items'  key={project.id}>
          <img className="project-image" src={project.image} alt='project-avatar' />

          <div className='project-description'>
            <h3>{project.projectName}</h3>
            <div className='project-information'>
              <p>{project.description}</p>
            </div>
            <div className='project-stacks'>
              <h4 className='technology'>Technologies used</h4>
              <div className='technologies-used'>
                {project.techonologies.map((tech) => (<img src={tech} alt='techs-used'/>))}
              </div>
            </div>
            <div className='buttonGroup'>
              <a href="#" className='btn btn-link'> <AiFillGithub /> Github</a >
              <a href={project.externalUrl} target="_blank" rel="noreferrer" className='btn btn-link'> <BiLinkExternal /> Visit</a>
            </div>

          </div>
        </div>
        ))}

    </section>
  )
}

export default Projects