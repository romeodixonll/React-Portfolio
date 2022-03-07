import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <footer id="main-footer">
    <div className="footer-content container">
      <p>Copyright &copy; 2022. All Rights Resevred</p>
      <div className="social">
        <a href="https://github.com/romeodixonll" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/romeodixonll/" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
