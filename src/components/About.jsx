import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Mohit Kumar Gautam" },
    { id: 2, title: "Email:", text: "mohitrecson1610@gmail.com" },
    { id: 3, title: "Phone:", text: "8932923831" },
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
                I'm Mohit Kumar Gautam , Recently completed my Bachelor's of
                Technology in the field of Computer Science and Engineering at
                Rajkiya Engineering College Sonbhadra (Dr. A.P.J. Abdul Kalam
                Technical University). I was raised and grow up in Lucknow Uttar
                Pradesh. I have experience and knowledge of programming and
                completed certain projects in web development
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
