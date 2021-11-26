import React from 'react'
import ReactDOM from 'react-dom'
import {FaFolder} from 'react-icons/fa';
const portfolio =()=>{
    return (
      <section className="portfolio">
        <div className="portfolio-heading">
          <h1>
            <span>
              <FaFolder />
            </span>
            <span>PORTFOLIO</span>
          </h1>
        </div>

        <div id="portfolio-container">
          <a href="https://keeper-tejas.netlify.app/">
            <div className="portfolio-image-container">
              <img src="https://www.kindpng.com/picc/m/69-691535_clipart-sticky-note-png-transparent-png.png" />
              <div className="portfolio-details">
                <h2>KEEPER APP</h2>
                <p>An app which can maintain the sticky notes on the go</p>
              </div>
            </div>
          </a>
          <a href="https://color-generator-tejas27.netlify.app/">
            <div className="portfolio-image-container">
              <img src="https://static-cse.canva.com/_next/static/assets/monochromatic-colors.1356x780.506130aeaaa7e994988cc45da583f038.png" />
              <div className="portfolio-details">
                <h2>COLOR GENERATOR</h2>
                <p>
                  Confused about tints and shades? No worries, this help is here
                  to help you
                </p>
              </div>
            </div>
          </a>
          <a href="https://covid-19-tracker-tejas.netlify.app/">
            <div className="portfolio-image-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Pr2NuUIFDbiR8dpz-sThETLQ83xsiRu3uQ&usqp=CAU" />
              <div className="portfolio-details">
                <h2>COVID-TRACKER</h2>
                <p>A real time coronavirus tracker using API</p>
              </div>
            </div>
          </a>
          <a href="https://listme-tejas.netlify.app/">
            <div className="portfolio-image-container">
              <img src="https://www.pinclipart.com/picdir/big/321-3212809_check-clipart-todo-list-cartoon-to-do-list.png" />
              <div className="portfolio-details">
                <h2>List-Me</h2>
                <p>
                  Interactive list for you. Create, delete, add, edit items with
                  notifications
                </p>
              </div>
            </div>
          </a>
          <a href="https://tejas-sharma2627.github.io/Simon-game/">
            <div className="portfolio-image-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3aul_wY9ZSkjt4FXqyBA6nDUODHQ7AkWdA&usqp=CAU" />
              <div className="portfolio-details">
                <h2>Simon Game</h2>
                <p>On the go, your packet.</p>
              </div>
            </div>
          </a>
        </div>
      </section>
    );
}

export default portfolio;