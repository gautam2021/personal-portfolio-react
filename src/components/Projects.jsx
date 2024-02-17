import React from "react";
import {
  FaRupeeSign,
  FaCommentAlt,
  FaAtlas,
  FaDog,
  FaRegUserCircle,
  FaChalkboardTeacher,
} from "react-icons/fa";
const Projects = () => {
  const [header] = React.useState({
    subHeading: "My Projects",
    text: "CRAZY QUALITY ASSURACE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaRupeeSign className="commonIcons" />,
      heading: "OnlinePay (Web Application)",
      use: "Feature: Datbase (Firebase), Sweet Alert",
      text: "Tech Stack : HTML, CSS, JavaScript, Bootstrap, ReactJs *",
      explore:"https://onlinepayreactjs.netlify.app/"
    },
    {
      id: 2,
      icon: <FaCommentAlt className="commonIcons" />,
      heading: "To Do List (Web Application)",
      use: "Features: Add, Delete,Edit, View Tasks.",
      text: "Tech Stack: HTML, CSS, JavaScript, Bootstrap, ReactJs",
      explore:"https://reactjs-to-doapp.netlify.app/"
    },
    {
      id: 3,
      icon: <FaAtlas className="commonIcons" />,
      heading: "Responsive Resume (Web App)",
      use: "Feature:Smooth Scrolling, Auto Reveal",
      text: "Tech Stack: HTML5, CSS3, Bootstrap and JavaScript ,jQuery",
      explore:"https://responsiveresume2021.netlify.app/"
    },
    {
      id: 4,
      icon: <FaDog className="commonIcons" />,
      heading: "BigPups ( Web Application )",
      use: "Pups Lover, all types of breeds",
      text: "Tech Stack:  HTML, CSS,Bootstrap, JavaScript",
      explore:"https://bigpups.netlify.app/"
    },
    {
      id: 5,
      icon: <FaRegUserCircle className="commonIcons" />,
      heading: "Personal Portfolio (Web App)",
      use: "Described Complete Journey",
      text: "Tech Stack:  HTML, CSS,JavaScript (JSX), ReactJs",
      explore:"https://onlinepayreactjs.netlify.app/"
    },
    {
      id: 6,
      icon: <FaChalkboardTeacher className="commonIcons" />,
      heading: "volunteer (Umeed)",
      use: " spread knowledge among the children",
      text: " who are not financially sound to afford a better education",
      explore:"https://www.facebook.com/umeedrecsonbhadra/"
    },
  ]);
  return (
    <div className="projects">
      <div className="container">
        <div className="projects__header">
          <div className="common">
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="projects__box">
                  {info.icon}
                  <div className="projects__box-header">{info.heading}</div>
                  <div className="projects__box-p">
                    <p>{info.use}</p>
                    <p>{info.text}</p>
                  </div>
                  <div className="header__buttons">
                  
                  <a href={info.explore} target="blank" className="btn btn-outline" >Explore
                  </a>
                  
                </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
