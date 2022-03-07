import React from "react";
import "../styles/NavTabs.css";

const styles = {
  namePlate: {
    "font-size": "50px",
    "font-family": "Arial, Helvetica, sans-serif",
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header id="header-inner">
      <div className="container">
        {/* style={{"font-size": "50px"}} style={{"font-family": "Arial, Helvetica, sans-serif"}} */}
        <nav id="main-nav">
          <h1 style={styles.namePlate}>Romeo</h1>
          <ul>
            <li>
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={currentPage === "About" ? "current" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={currentPage === "Portfolio" ? "current" : ""}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={currentPage === "Contact" ? "current" : ""}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={currentPage === "Resume" ? "current" : ""}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavTabs;
