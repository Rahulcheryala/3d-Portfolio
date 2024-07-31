import React from "react";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import { FaHandPointUp } from "react-icons/fa";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      <span>{btnText}</span>
      <MdArrowRightAlt size={28} className="text-blue-500" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-7">
      Hi, I am{" "}
      <span className="italic font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">
        Rahul
      </span>
      . I am a Software Engineer from India
    </h1>
  ),
  2: (
    <h1 className="w-fit h-fit">
      <InfoBox
        text={
          "I have developed several projects aimed at enhancing the welfare of the college community"
        }
        link="/about"
        btnText="Learn More"
      />
    </h1>
  ),
  3: (
    <h1 className="w-fit h-fit">
      <InfoBox
        text={"Transforming Ideas into Impact: Discover Our Community Projects"}
        link="/projects"
        btnText="View my Projects"
      />
    </h1>
  ),
  4: (
    <h1 className="w-fit h-fit">
      <InfoBox
        text={
          "Need a project done or looking for a dev? I'm just a few clicks away"
        }
        link="/contact"
        btnText="Let's Connect"
      />
    </h1>
  ),
};

const HomeInfo = ({ currentStage }) => {
  return (
    renderContent[currentStage] || (
      <p>
        Scroll to explore
        <FaHandPointUp size={28} className="text-blue-500 translate-x-3" />
      </p>
    )
  );
};

export default HomeInfo;
