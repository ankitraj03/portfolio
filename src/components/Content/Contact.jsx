import React from "react";

function Contact() {
  return (
    <>
    <div className="flex items-center mt-10">
        <h1 className="text-[#07eafa] text-xl font-bold">
          4. <span className="ml-2 text-white">Wanna say hi?</span>
        </h1>
        <div className="border-t-[1px] border-gray-400 mt-4 ml-2 w-80"></div>
      </div>
    <div className=" flex flex-col items-center justify-center  text-white py-20 px-4" id="contact">
     
      
      <p className="text-lg text-gray-400 text-center max-w-2xl mb-10">
        Have a question or want to work together? I’d love to hear from you! Fill out the form below or drop me an email, and I’ll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-lg bg-[#112240] p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#07eafa] bg-slate-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-slate-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#07eafa]"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 bg-slate-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#07eafa]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#07eafa] hover:bg-[#06d2e2] text-white font-bold py-2 rounded-md transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
    </>
  );
}

export default Contact;
