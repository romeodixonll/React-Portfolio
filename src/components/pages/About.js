import React from 'react';
import "../../styles/About.css"
import profilePic from '../../img/profilePic.jpg'


const About = ()=>(
    <div>
    <section id="about-a" className="text-center py-3">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="bottom-line"></div>
      <p className="lead">
        Let me tell you a little about myself and what i do...
      </p>
      <div className="about-info">
        <img src={profilePic} alt="" className="bio-image" />
        <div className="bio bg-light">
          
          <p style={{fontSize: "29px"}}>
          I'm a web developer with a Bachelor's Degree in Computer Science. I love to write code that makes life easier for people like you! I pride myself on my Javascript skills and my ability to focus on an issue until I find a solution. Being a full-stack developer my skills know no bounds. From front-end frameworks like React.js to back-end languages like Node.js. I can plan, design, build, launch, and maintain a website myself. When not at work you can find me either in the gym or competitive gaming.
          </p>
        </div>

        
        <div className="award-1">
        <i className="fas fa-brain fa-2x"></i>
        
            <h3>Analytical Thinking</h3>
         
        </div>
        <div className="award-2">
        <i className="fas fa-solid fa-lightbulb fa-2x"></i>
            <h3>Problem Solver</h3>
            
        </div>
        <div className="award-3">
        <i className="fas fa-solid fa-hourglass fa-2x"></i>
            <h3>Time Management</h3>
           
        </div>
        
      </div>
    </div>
    </section>
    <section id="about-b" className="bg-dark py-3">
    <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="bottom-line"></div>
        <h4>Javascript:</h4>
        <div className="progress">
          <div style={{width:"90%"}}></div>
        </div>
        <h4>ReactJS:</h4>
        <div className="progress">
          <div style={{width:"90%"}}></div>
        </div>
        <h4>NodeJS:</h4>
        <div className="progress">
          <div style={{width:"80%"}}></div>
        </div>
        <h4>HTML & CSS:</h4>
        <div className="progress">
          <div style={{width:"70%"}}></div>
        </div>
        <h4>ExpressJS:</h4>
        <div className="progress">
          <div style={{width:"70%"}}></div>
        </div>
        <h4>MongoDB:</h4>
        <div className="progress">
          <div style={{width:"80%"}}></div>
        </div>
      </div>
    
  </section>
  
  </div>
)



export default About