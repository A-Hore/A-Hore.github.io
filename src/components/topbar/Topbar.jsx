import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaFileDownload } from "react-icons/fa";
import { Tooltip } from "@chakra-ui/react";

import "./topbar.css";

const Topbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <div style={{ position: "absolute" }}>
      <nav>
        {/* <h1 className="name">Arjun </h1> */}
        <Tooltip hasArrow label="Home"  color="white" >
          <a
            href="#home"
            onClick={() => setActiveNav("#home")}
            className={activeNav === "#home" ? "active" : ""}
          >
            <AiOutlineHome size={30} />
          </a>
        </Tooltip>
        <Tooltip hasArrow label="About"  color="white" >
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser size={30} />
        </a>
        </Tooltip>
        <Tooltip hasArrow label="Skills"  color="white" >
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook size={30} />
        </a>
        </Tooltip>
        <Tooltip hasArrow label="Projects"  color="white" >
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <RiServiceLine size={30} />
        </a>
        </Tooltip>
        <Tooltip hasArrow label="Contact"  color="white" >
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail size={30} />
        </a>
        </Tooltip>
        <Tooltip hasArrow label="Resume"  color="white" >
        <a
          target={"_blank"}
          href="https://drive.google.com/uc?export=download&id=1JfFnfYRlAGfjvrQYTQ6a1l2uVZHBltP_"
          onClick={() => setActiveNav("#resume")}
          className={activeNav === "#resume" ? "active" : ""}
        >
          <FaFileDownload size={30} />
        </a>
        </Tooltip>
      </nav>
    </div>
  );
};

export default Topbar;
