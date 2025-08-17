import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
      My name is Irfan Hussain, and I am a Purdue University graduate with 
      a degree in Computer Science. I am currently pursuing my Master’s at the University of 
      Illinois Urbana-Champaign in Computer Science with a concentration in Data Science. 
      I am a driven and self-motivated individual who takes pride in delivering high-quality 
      work and continuously pushing myself to grow. I thrive on challenges and believe in improving 
      a little every day. What motivates me most is the opportunity to contribute to meaningful, impactful 
      projects, especially those that leverage modern technologies to solve real-world problems.
      </p>
      {/* <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan ">
          My Projects
      </button> */}
    </div>
  );
};

export default AboutMeText;