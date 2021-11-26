import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom";


import social from "./data";
import Skills from "./Skills"
import About from "./About"
import Portfolio from "./Portfolio";
import Work from "./Work";
import Contact from "./Contact";
function App() {
  return (
    <>
      <header id="body-header">
        <div className="name-social-container">
          <div className="header-name">
            <h1 className="name">Tejas Sharma</h1>
          </div>
          <div className="social">
            <ul className="social-icons">
              {social.map((media) => {
                return (
                  <li id={media.id} className="icons">
                    <a
                      href={media.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {media.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
      <main>
        <About></About>
        <Skills id="skill"></Skills>
        <section className="education"></section>
        <Work />
        <Portfolio />
        <Contact/>
      </main>
    </>
  );
}

export default App;
