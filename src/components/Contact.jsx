import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaHeart ,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/circleFace.png" alt="" />
              </div>
              <p>
                Are you looking for a Software QA Engineer | Automation | SDET | Functional, Integration, Regression, and API Testing  ? 
                Then Mohit kumar Gautam is here for you.
              </p>
                <div className="header__buttons">
                <a href="mailto: mohitrecson1610@gmail.com" className="btn btn-outline" >Hire Me</a>
                </div>
                <br />
              <ul className="contactCircles">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                <li>
                  <FaPinterest className="contactIcon" />
                </li>
                <li>
                  

                     <Link to="https://www.freecodecamp.org/news/how-to-use-react-icons/">
                        <FaHeart  className="contactIcon" />          
                    </Link> 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
