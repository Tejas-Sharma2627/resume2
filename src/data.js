import React from "react";
import ReactDom from "react-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const social = [
  {
    id: 1,
    url: "https://github.com/Tejas-Sharma2627",
    icon: <FaGithub className="icon" />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/tejas-sharma-0b2b2419b/",
    icon: <FaLinkedin className="icon" />,
  },
  {
    id: 4,
    url: "www.instagram.com",
    icon: <FaInstagram className="icon" />,
  },
];
export default social;
