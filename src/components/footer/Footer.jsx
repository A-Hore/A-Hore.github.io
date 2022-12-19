import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="permalinks">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#experience">SKILLS</a>
        </li>
        <li>
          <a href="#portfolio">PROJECTS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <a href="#resume">RESUME</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/arjun-hore-4411a1232/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/A-Hore" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Design By Arjun Hore </small>
      </div>
    </footer>
  );
};

export default Footer;
