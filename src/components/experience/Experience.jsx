import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiChakraui,
  SiExpress,
  SiNetlify,
  SiPostman,
  SiRedux,
} from "react-icons/si";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { ImNpm } from "react-icons/im";

import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineHtml5 className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="experience__details">
              <SiChakraui className="experience__details-icon" />
              <h4>ChakraUI</h4>
            </article>
            <article className="experience__details">
              <ImNpm className="experience__details-icon" />
              <h4>Npm</h4>
            </article>
            <article className="experience__details">
              <SiNetlify className="experience__details-icon" />
              <h4>Netlify</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <h4>Node Js</h4>
            </article>
            {/* <article className="experience__details">
              <BsGithub className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </article> */}
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <h4>Expressjs</h4>
            </article>
            {/* <article className="experience__details">
              <SiPostman className="experience__details-icon" />
              <h4>Postman</h4>
            </article> */}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
