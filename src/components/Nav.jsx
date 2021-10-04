import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          {/* <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/circleFace.png" alt="logo" />
              
            </div>
          </ul> */}
          {state ? (
            <ul className="navbar__right">
              <li>
                {/* <a href="">Home</a> */}
                <NavLink
                  to="/"
                  
                >
                  Home
                </NavLink>
              </li>
              <li>
                {/* <a href="">Services</a> */}
                <NavLink
                  to="/education"
                  
                >
                  Education
                </NavLink>
              </li>
              <li>
                {/* <a href="">About</a> */}
                <NavLink
                  to="/projects"
                  
                >
                  Projects
                </NavLink>
              </li>
              <li>
                {/* <a href="">Skills</a> */}
                <NavLink
                  to="/about"
                  
                >
                  About
                </NavLink>
              </li>
              <li>
                {/* <a href="">Portfolio</a> */}
                <NavLink
                  to="/contact"
                  
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaFacebookF />
      </div>
    </nav>
  );
};

export default Nav;
