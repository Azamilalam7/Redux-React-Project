import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-6 text-gray-800 text-center">
        Contact Us
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg mb-10 text-center max-w-xl">
        We'd love to hear from you. Please fill out the form below and we'll
        get back to you soon.
      </p>

      {/* Form structure only (UI) */}
      <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-black outline-none"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-black outline-none"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black outline-none"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="button"
          className="w-full bg-black text-white py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
