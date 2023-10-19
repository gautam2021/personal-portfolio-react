import React from "react";

const Education= () => {
  const [header] = React.useState({
    mainHeader: "Just have a look",
    subHeading: "What I do",
    text:
      "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "SS&C Technologies",
      price: "Software QA Engineer",
      msg1: "Worked on several critical projects in the investment banking-based company",
      msg2: "Tested and validated software systems to ensure functionality, usability, and reliability for multiple clients, resulting in a 98% client satisfaction rating",
      msg3: "Collaborated with cross-functional teams to identify and prioritize software defects, leading to a 25% reduction in post-release defects and a 20% decrease in bug resolution time",
      msg4:"Conducted root cause analysis and provided actionable recommendations to development teams, resulting in a 30% decrease in software defects in subsequent releases."
      
      
      
    },
    {
      id: 2,
      heading: "Newton School ",
      price: "Full Stack 6 Months",
      msg1: "Web Development Bootcamp",
      msg2: "Data Structure and algorithms (Java)",
      msg3: "HTML, CSS, JavaScript",
      msg4: "ReactJs NodeJs Mongo DB",
     
    },
    {
      id: 3,
      heading: "Cetpa Info Tech ",
      price: "Summer Traning",
      msg1: "Python",
      msg2: "Data Structure (Python)",
      msg3: "My SQL Databases",
      msg4: "Numpy Pandas Scipy OpenCv",
     
    },
    {
      id: 4,
      heading: "Rajkiya Engineering",
      price: "College",
      msg1: "Sonbhadra U.P.",
      msg2: "Bachelor of Technology (2017-2021)",
      msg3: "Percentage : 76 %",
      msg4: "Computer Science and Engineering",
      
    },
    {
      id: 5,
      heading: "The Indian Public",
      price: "Inter College",
      msg1: "Gomti Nagar Lucknow",
      msg2: "Intermediate ( 12th ) (2014-2016)",
      msg3: "Percentage : 85 % ",
      msg4: "Physics Chemestry Mathematics",
      
    },
    {
      id: 1,
      heading: "The Indian Public",
      price: "Inter College",
      msg1: "Gomti Nagar Lucknow",
      msg2: "High School ( 10th ) (2013-2014)",
      msg3: "Percentage : 85.83 %",
      msg4: "* * * * * * *",
      
    },
  ]);
  return (
    <div className="education">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((educations) => (
            <div className="col-4" key={educations.id}>
              <div className="price">
                <div className="priceHeading">{educations.heading}</div>
                <div className="price__rs">
                  <span></span>
                  {educations.price}
                </div>
                <ul>
                  <li>{educations.msg1}</li>
                  <li>{educations.msg2}</li>
                  <li>{educations.msg3}</li>
                  <li>{educations.msg4}</li>
                  
                </ul>
                <div className="price__btn">
                 
                  <a href="mailto: mohitrecson1610@gmail.com" className="btn btn-outline" >Click Here</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
