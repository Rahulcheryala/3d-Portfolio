import React from "react";
import { skills } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm
        <span className="blue-gradient_text font-semibold drop-shadow ml-2">
          Rahul
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Empowering Innovation and Creating Lasting Impact: A Software Engineer
          based in India, specializing in building applications that turn
          visionary ideas into reality for a brighter future.
        </p>
      </div>

      <div className="py-5 flex flex-col">
        <h3 className="subhead-text">My skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="block-container sm:w-20 sm:h-20 w-12 h-12"
            >
              {/* <div className="btn-back rounded-xl" /> */}
              <div className="btn-front rounded-xl flex flex-col items-center justify-center group shadow-sm hover:shadow-md">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain  translate-y-2 group-hover:translate-y-0 duration-300"
                />
                <p className="opacity-0 group-hover:opacity-100 text-[8px] sm:text-xs duration-150 -translate-y-full group-hover:translate-y-0">
                  {skill.name}
                </p>
              </div>
              <p className="sr-only">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
