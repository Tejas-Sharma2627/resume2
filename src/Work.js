import React from 'react'
import ReactDOM from 'react-dom'
import { FaBriefcase, FaUserGraduate } from "react-icons/fa";

const Work=()=>{
    return (
      <section className="about">
        <h1 class="work-heading">
          <span>
            <FaUserGraduate />
          </span>
          <span className="edu">EDUCATION</span>
        </h1>

        <div className="timeline">
          <div className="timeline-box">
            <div className="edu-content">
              <h3 className="deg">Class 10th</h3>
              <h4 className="year">2017-2018</h4>
              <h4 className="result"> 95.6%</h4>
              <h4 className="insti-name">Bal Bhavan Public School</h4>
              <h4 className="year">Delhi, India</h4>
            </div>
          </div>
          <div className="timeline-box">
            <div className="edu-content">
              <h3 className="deg">Class 12th</h3>
              <h4 className="year">2019-2020</h4>
              <h4 className="result"> 95.8%</h4>
              <h4 className="insti-name">Bal Bhavan Public School</h4>
              <h4 className="year">Delhi, India</h4>
            </div>
          </div>
          <div className="timeline-box">
            <div className="edu-content">
              <h3 className="deg">B.tech</h3>
              {/* <h3 className="deg">Electrical Engineering</h3> */}
              <h4 className="year">2020-2024</h4>
              <h4 className="result"> 9.3GPA</h4>
              <h4 className="insti-name">Delhi Technological University</h4>
              <h4 className="year">Delhi, India</h4>
            </div>
          </div>

          <div className="timeline-divider">
            <div className="timeline-traveller">
              <FaUserGraduate />
            </div>
          </div>
        </div>
      </section>
    );
}
export default Work;