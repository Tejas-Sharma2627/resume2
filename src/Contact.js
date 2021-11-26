import React from 'react'
import ReactDOM from 'react-dom'
import { FaMobileAlt, FaAddressCard } from "react-icons/fa";
import social from './data';
const Contact=()=>{
    return (
      <section className="contact">
        <div className="contact-container">
          <div className="contact-heading">
            <h1 className="header-con">
              <span>
                <FaMobileAlt />
              </span>
              <span>GET IN TOUCH</span>
            </h1>
          </div>
          <div className="details-contact">
            <div className="form-part">
              <form>
                <div class="form__group field">
                  <input
                    type="input"
                    class="form__field"
                    placeholder="Name"
                    name="name"
                    id="name"
                    required
                  />
                  <label for="name" class="form__label">
                    Name
                  </label>
                </div>
                <div class="form__group field">
                  <input
                    type="email"
                    class="form__field"
                    placeholder="Contact"
                    name="Contact"
                    id="Contact"
                    required
                  />
                  <label for="Contact" class="form__label">
                    Email
                  </label>
                </div>
                <div class="form__group field">
                  <input
                    type="text"
                    class="form__field"
                    placeholder="Drop your message"
                    name="message"
                    id="message"
                    required
                  />
                  <label for="message" class="form__label">
                    Message
                  </label>
                </div>
              </form>
              <div className="address">
                <h3>
                  <span>MY ADDRESS</span>
                </h3>
                <div className="address-loc">
                  <h3 className="location">
                    <span>
                      <FaAddressCard />
                    </span>
                    <span className="loc-text">Delhi, India</span>
                  </h3>
                </div>
                <div className="address-phone">
                  <h3 className="phone">
                    <span>
                      <FaMobileAlt />
                    </span>
                    <span className="loc-text">9990528147</span>
                  </h3>
                </div>
              </div>
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
                        <h1>{media.icon}</h1>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Contact;
