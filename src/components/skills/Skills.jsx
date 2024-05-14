import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJava,
  SiTypescript,
  SiMysql,
  SiPython,
  SiGithub,
  SiNodedotjs,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaAws, FaDocker, FaGit, FaGitAlt, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-black sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-black block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-black font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<SiTypescript />} name={"TypeScript"} value={95} />
                <ProgressBar logo={<SiJava />} name={"Java"} value={88} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={84}
                />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={72} />
                <ProgressBar
                  logo={<SiPython />}
                  name={"Python"}
                  value={93}
                />
                <ProgressBar logo={<SiNodedotjs />} name={"Node Js"} value={85} />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<FaDocker />}
                black={"white"}
                white={"black"}
                skill={"Docker"}
              />
              <SkillBox
                logo={<SiMysql />}
                black={"white"}
                white={"black"}
                skill={"MySql"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<FaGitAlt />}
                black={"black"}
                white={"white"}
                skill={"Git"}
              />
              <SkillBox
                className=""
                logo={
                  <FaAws/>
                }
                black={"black"}
                white={"white"}
                skill={"AWS"}
              />
              {/* <SkillBox
                className=""
                logo={
                  <SiNextdotjs className=" text-white bg-black rounded-full h-fit border-white overflow-hidden" />
                }
                black={"black"}
                white={"white"}
                skill={"Next Js"}
              /> */}
            </div>
          </div>
        </div>

        {/* icons */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5 right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full"
        >
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/python--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/officel/40/react.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/typescript.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/git.png"
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src="https://img.icons8.com/color/48/mysql-logo.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/external-those-icons-flat-those-icons/48/external-Docker-Logo-social-media-those-icons-flat-those-icons.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/amazon-web-services.png"
          />
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/javascript--v1.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/nodejs.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/html-5--v1.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/css3.png"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
