import React, { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Fox from "../models/Fox";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {
    setCurrentAnimation("walk");
  };

  const handleBlur = (e) => {
    setCurrentAnimation("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Rahul Cheryala",
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_EMAILJS_USER_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsSubmitting(false);
        showAlert({
          show: true,
          msg: "Message sent successfully!",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, 2000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        showAlert({
          show: true,
          msg: "Message not sent. Please try again later.",
          type: "danger",
        });
        setCurrentAnimation("idle");
        console.error(error);
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      {/* <Alert {...alert} /> */}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-3 mt-14"
        >
          <label htmlFor="name" className="text-black-500 font-semibold">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="input"
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email" className="text-black-500 font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input"
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="example@gmail.com"
            required
          />

          <label htmlFor="message" className="text-black-500 font-semibold">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            className="textarea"
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Let me know how I can help you!"
            rows={4}
            required
          />

          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={0.25} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[1.2, 0, 0]}
              rotation={[0.15, -0.8, 0]}
              // rotation={[12.7, -0.8, 0]}
              scale={0.5}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
