import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Mohit Kumar Gautam" },
    { id: 2, title: "Email:", text: "mohitrecson1610@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 8932923831" },
    { id: 4, title: "Address", text: "Viraj Khand 5 Gomti Nagar Lucknow Uttar Pradesh" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/circleFace.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              My name is Mohit Kumar Gautam. I have been in this industry for a total of 2 years and 11 months, which includes 2.4 years of experience as a Software QA Engineer at SS&C Technologies. Along with this, I had the opportunity to obtain 7 months of Full Stack Web Development Trainee experience at Newton School.
              </div>
              <div className="about__info-p2">
              working regularly to update myself with the new era of Computer Technologies
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
