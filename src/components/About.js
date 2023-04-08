import { FaBootstrap } from 'react-icons/fa'
import React from 'react'
import resume from '../assets/resume.pdf'

const AboutMe = () => {
  return (
    <div className='container-fluid bg-light pt-5 d-flex flex-column align-items-center min-vh-100'>
      <p className="text-center lead m-4">
      I am a motivated and enthusiastic junior web developer who recently transitioned from the service industry into the tech industry. I am eager to apply my skills and knowledge to real-world projects. I am proficient in HTML, CSS, JavaScript, and other Fullstack technologies. I am excited about the possibilities that the tech industry offers!
      </p>
      <a href={resume} download className="btn btn-primary mt-5 custom-btn fw-bold">Download My Resume</a>
      <h3 className='pt-5 pb-2 custom-color'>Languages and tools I use:</h3>

      <p className='lead'>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" height="40" width="40" h/>
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" height="40" width="40" />
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" height="35" width="35" />
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" height="35" width="35" />
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" height="35" width="35" />
        <FaBootstrap className='m-2' style={{width:"35", height:"35", color: '#7a14f6'}}/>
      </p>
      <h4 className="pt-3 pb-3 custom-color">Currently Learning: </h4>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt='angular' height="35" width="35" />

    </div>
  )
}

export default AboutMe