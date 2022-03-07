import React from "react";
import "../../styles/Contact.css";

const Resume = ()=>(
<div>
<section id="about-b" className="bg-dark py-3" style={{"marginTop":"100px"}}>
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
  
<section id="contact-b" className="center-page py-2">
      <div className="container">
        <a href="https://drive.google.com/file/d/1OH3fWy6OHOSaQYUGqjtwZvRzBX_6_Or4/view?usp=sharing" target="_blank">
          <i class="fas fa-solid fa-file fa-10x"></i>
          <h3>My Resume</h3>
          <p>Click to download</p>
        </a>
        

        <div className="line"></div>
        {/* <div className="contact-me">
          <div>
            <i className="fas fa-phone fa-4x contact-me-icon my-2"></i>
            <h3>Phone</h3>
            <p>254-681-9741</p>
          </div>
          <div>
            <a href="mailto:romeodixonll@yahoo.com">
              <i className="fas fa-envelope-open-text fa-4x contact-me-icon my-2"></i>
              <h3>Email</h3>
              <p>romeodixonll@yahoo.com</p>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/romeodixonll/" target="_blank">
              <i className="fab fa-linkedin fa-4x contact-me-icon my-2"></i>
              <h3>LinkedIn</h3>
              <p>www.linkedIn.com</p>
            </a>
          </div>
          <div>
            <a href="https://github.com/romeodixonll" target="_blank">
              <i className="fab fa-github fa-4x contact-me-icon my-2"></i>
              <h3>GitHub</h3>
              <p>www.GitHub.com</p>
            </a>
          </div>
        </div> */}
      </div>
    </section>
    
</div>
)

export default Resume