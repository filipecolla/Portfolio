import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto  mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-black sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-black block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-black font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[100%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-black rounded-3xl py-1 px-8 font-semibold text-xl text-black">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
                <div className="line w-[230px] bg-black h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-black shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Professional Experience
                </h1>
                <span className=" text-[.9rem] font-semibold text-black sm:text-base">

                </span>
                <span className=" text-[.9rem] font-semibold text-purple-900 sm:text-base">
                  June 2024 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-black">
                I have yet to seize the opportunity to join a company, but rest assured, I am actively pursuing this chance. Eager to contribute my skills and dedication to a dynamic organization, I am committed to making a meaningful impact in the professional realm. My journey towards securing a position in a forward-thinking company is driven by a steadfast determination to excel and grow alongside a team of talented individuals. Open to new challenges and experiences, I am excited about the prospect of contributing positively to the success of an organization that values innovation and teamwork.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-black rounded-3xl py-1 px-8 font-semibold text-xl text-black">
              About Me
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
                <div className="line w-[230px] bg-black h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-black shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Filipe Colla
                </h1>
                <span className=" text-[.9rem] font-semibold text-black sm:text-base">

                </span>
                <span className=" text-[.9rem] font-semibold text-purple-900 sm:text-base">
                  19 years old, currently living in São José dos Campos, Brazil.
                </span>
                <p className=" text-[.9rem] text-justify break-words text-black">
                Hello, my name is Filipe Colla, and I'm currently a dedicated software developer passionate about turning ideas into innovative solutions. I'm constantly seeking challenging opportunities to apply my experience and drive technological development. I have experience and adeptness in teamwork, as well as a keen interest in acquiring more knowledge in the field. I also enjoy playing games and have been programming bots in Python since I was young. I completed my high school education in 2022, and DSM was my first college experience.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-black rounded-3xl py-1 px-8 font-semibold text-xl text-black">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
                <div className="line w-[230px] bg-black h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-black"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-black shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Development Multiplataform
                </h1>
                <span className=" text-[.9rem] font-semibold text-purple-900 sm:text-base">
                  FATEC - São José dos Campos, Brazil
                </span>
                <span className=" text-[.9rem] font-semibold text-black sm:text-base">
                  Year 2023 - Year 2026
                </span>
                <p className=" text-[.9rem] text-justify text-black">
                I'm currently studying Software Development Multiplatform at FATEC - São José dos Campos. Exploring web, mobile, and desktop application development, along with APIs, microservices, databases, and cloud services. 
                My tech journey started with a love for gaming and tinkering with Python since high school. Now, I'm honing skills in Java, JavaScript, and Python, as well as frameworks like React. I'm also learning cloud services like AWS. I'm excited to continue growing as a developer.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
