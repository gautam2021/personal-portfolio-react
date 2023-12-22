import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,

} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "Mohit Kumar Gautam",
    text:
      "A passionate Software QA Engineer at SS&C Technologies.I have a great understanding of testing tools, automation frameworks, and methodologies and excel in designing, scripting, and carrying out complicated test cases and scenarios. Expert in Functional Testing, Integration testing, Regression testing as well as Performance testing, API testing and much more."
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li>
                  <li>
                    <FaTwitter className="headerIcon" />
                  </li>
                  <li>
                    <FaPinterest className="headerIcon" />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="mailto: mohitrecson1610@gmail.com" className="btn btn-outline" >
                    Hire Me
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Banner;
