import React from 'react';
import "../../styles/Portfolio.css"
import keepUpProject from "../../img/keepUp2.JPG"
import firstSite from "../../img/first-site.JPG"
import groupSite from "../../img/group-site.JPG"
import mountain from "../../img/mountain.jpg"
import website from "../../img/website.jpg"
import project4 from "../../img/project4.jpg"



const Portfolio = ()=>(
    
<section id="work" className="center-page py-3">
  <div className="container">
    <h2 className="title">My Work</h2>
    <div className="line"></div>
    <p className="paragraph">Check out some of my projects</p>
    <p className="paragraph">Click on picture to see repositories</p>

    <div className="cards">
      <div className="card">
        <div className="card-image">
          <img src={firstSite} alt="" height="100%" />
        </div>
        <a href="https://github.com/romeodixonll/CodeRefactor" target={"_blank"}>
        <div className="card-text">
          <div className="card-text-wrap">
            <p className="card-text-category">Web accessibility</p>
            <h2 className="card-text-title">Code Refactor</h2>
          </div>
        </div></a>
      </div>
      <div className="card">
        <div className="card-image">
          <img src={groupSite} alt="" height="100%"/>
        </div>
        <a href="https://github.com/sygmo/stellar-sights"target={"_blank"}>
        <div className="card-text">
          <div className="card-text-wrap">
            <p className="card-text-category">Group Project</p>
            <h2 className="card-text-title">Stellar Sights</h2>
          </div>
        </div></a>
      </div>
      <div className="card">
        <div className="card-image">
          <img src={keepUpProject} alt="" height="100%" />
        </div>
        <a href="https://github.com/inklein1997/ProManj"target={"_blank"}>
        <div className="card-text">
          <div className="card-text-wrap">
            <p className="card-text-category">Group Project</p>
            <h2 className="card-text-title">KeepUp</h2>
          </div>
        </div></a>
      </div>
      
     
      <div className="card">
        <div className="card-image">
          <img src={project4} alt="" />
        </div>
        <a href="https://github.com/romeodixonll/React-Portfolio"target={"_blank"}>
        <div className="card-text">
          <div className="card-text-wrap">
            <p className="card-text-category">Portfolio</p>
            <h2 className="card-text-title">React Portfolio</h2>
          </div>
        </div></a>
      </div>
       <div className="card">
        <div className="card-image">
          <img src={mountain} alt="" />
        </div>
        <a href="https://github.com/romeodixonll/React-Portfolio"target={"_blank"}>
        <div className="card-text">
          <div className="card-text-wrap">
            <p className="card-text-category">Photography & Design</p>
            <h2 className="card-text-title">Vanishing</h2>
          </div>
        </div></a>
      </div>
      <div className="card">
        <div className="card-image">
          <img src={website} alt="" />
        </div>
        <a href="https://github.com/romeodixonll/React-Portfolio"target={"_blank"}>
        <div className="card-text">
          <div className="card-text-wrap">
            <p className="card-text-category">Mobile UI Design</p>
            <h2 className="card-text-title">Face The Experience</h2>
          </div>
        </div></a>
      </div>
      
      </div>
  </div>
</section>
)



export default Portfolio