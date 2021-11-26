import React from 'react'
import ReactDOM from 'react-dom'
import { FaChalkboardTeacher } from "react-icons/fa";

const Skills=()=>{
    return (
      <section className="skills">
        <div className="skill">
          <h1 class="skills-heading">
            <span>
              <FaChalkboardTeacher />
            </span>
            <span>SKILLS</span>
          </h1>
        </div>
        <div className="skill-container">
          <div className="skill-progress">
            <div className="seventy-percent mb-blue">
              <div className="skill-name">
                <span>JAVA</span>
              </div>
            </div>
          </div>
          <div className="skill-progress">
            <div className="eightyfive-percent">
              <div className="skill-name">
                <span>HTML</span>
              </div>
            </div>
          </div>
          <div className="skill-progress">
            <div className="fifty-percent">
              <div className="skill-name">
                <span>CSS</span>
              </div>
            </div>
          </div>
          <div className="skill-progress">
            <div className="fiftyfive-percent">
              <div className="skill-name">
                <span>JAVASCRIPT</span>
              </div>
            </div>
          </div>
          <div className="skill-progress">
            <div className="sixty-percent mb-blue">
              <div className="skill-name">
                <span>REACT JS</span>
              </div>
            </div>
          </div>
          <div className="skill-progress">
            <div className="fifty-percent">
              <div className="skill-name">
                <span>BOOTSTRAP</span>
              </div>
            </div>
          </div>
          <div className="skill-progress">
            <div className="fiftyfive-percent">
              <div className="skill-name">
                <span>MATERIAL UI</span>
              </div>
            </div>
          </div>
          <div className="skill-progress">
            <div className="seventy-percent mb-blue">
              <div className="skill-name">
                <span>Git & Github</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Skills;