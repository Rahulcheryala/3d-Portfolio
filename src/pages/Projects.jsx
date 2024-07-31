import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My
        <span className="blue-gradient_text font-semibold drop-shadow ml-2">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Explore my collection of diverse projects where innovation meets
          functionality. Each project reflects my commitment to solving
          real-world problems through creative solutions. From web applications
          and mobile apps to backend systems , my work spans various domains and
          showcases my versatility as a software engineer. Dive in to see how I
          turn visionary ideas into practical applications, each meticulously
          crafted to deliver a seamless and impactful user experience.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`lg:w-96 w-full shadow-lg px-4 py-6 rounded-xl`}
          >
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <span className="text-sm text-gray-400">{project.subTitle}</span>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 mx-1">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-500 hover:text-white hover:bg-blue-500 px-3 py-1 rounded-full flex gap-3 items-center w-fit group transition-colors duration-200"
                >
                  Repo Link
                  <FaLongArrowAltRight className="text-blue-500 group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
