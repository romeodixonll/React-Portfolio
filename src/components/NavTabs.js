import React from "react";
import "../styles/NavTabs.css"

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header id="header-inner">
      <div className="container">
        <nav id="main-nav">
          <ul >
            <li >
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? 'current' : ""
                }
              >
                About
              </a>
            </li>
            <li >
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio" ?  'current' : ""
                }
              >
                Portfolio
              </a>
            </li>
            <li >
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ?  'current' : ""
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavTabs;
