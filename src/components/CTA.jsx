import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind?
        <br className="sm:block hidden" />
        <span className="text-2xl font-semibold">
          Let's work together to bring it to life!
        </span>
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
