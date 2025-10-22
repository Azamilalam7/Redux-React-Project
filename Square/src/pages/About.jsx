import React, { useContext } from "react";
import { InputContext } from "../context/Input";

const About = () => {

  const [value1 ,value2] = useContext(InputContext)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <h1 className="text-5xl font-bold mb-6 text-gray-800">About Us</h1>


      <p className="max-w-2xl text-lg text-gray-600 leading-relaxed">
        Welcome to our website! We're a passionate team dedicated to building
        modern, user-friendly web experiences. Our goal is to create digital
        products that not only look great but also perform seamlessly.
      </p>

      <p className="max-w-2xl text-lg text-gray-600 leading-relaxed mt-4">
        This project is built with <span className="font-semibold">React</span> and{" "}
        <span className="font-semibold">TailwindCSS</span> — a combination that
        helps us move fast, stay organized, and focus on creativity.
      </p>

      <p className="text-gray-500 mt-8">
        🚀 Keep exploring to learn more about what we do!
      </p>
    </div>
  );
};

export default About;
