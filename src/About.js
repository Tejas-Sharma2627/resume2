import React from 'react'
import ProfilePic from "./assets/profile.png";
const About=()=>{
    return (
      <div className="about">
        <div className="profile">
          <img src={ProfilePic} />
        </div>
        <div className="about-para">
          <p className="me">
            I am <span className="highlighter">Tejas Sharma</span>. I am 2nd
            year, Electrical Engineering, student at{" "}
            <span className="highlighter">Delhi Technological University</span>.
            I have passion to learn a lot of new things and my only ability which helps me the most is my ability to multi-task. 
          </p>
        </div>
      </div>
    );
}

export default About;