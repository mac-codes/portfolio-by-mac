import { FaBootstrap } from 'react-icons/fa'
import React from 'react'
import resume from '../assets/resume.docx'

const AboutMe = () => {
  return (
    <div className='container-fluid bg-light pt-5 d-flex flex-column align-items-center min-vh-100'>
      <p className="text-center lead m-4">
        I'm a fullstack web developer currently enrolled in the University of Kansas Coding Bootcamp. I love creating responsive websites using ReactJS, JavaScript, HTML5, CSS3, and Bootstrap. 
        I've done multiple small projects to learn basics and I plan on building one larger project before going out into the world and working! Feel free to contact me for any reason involving web development. 
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
      <img src='https://www.moveoapps.com/blog/wp-content/uploads/2021/12/mern-stack.png' alt='mern' className='mern' height='40'/>
    </div>
  )
}

export default AboutMe