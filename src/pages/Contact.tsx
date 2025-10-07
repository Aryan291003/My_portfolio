'use client';
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_3pjw44j",   // Replace with your EmailJS Service ID
        "template_eudaoij",  // Replace with your EmailJS Template ID
        form.current,
        "YTo7pUC_r_sn4qbXG"    // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess("Oops! Something went wrong.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-[#1e293b] rounded-xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
          <h2 className="text-3xl font-bold text-white">Contact Me</h2>
          <p className="text-gray-200 mt-1">Send me a message and I'll get back to you!</p>
        </div>

        {/* Form Body */}
        <div className="p-6 flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md mt-2 transition-colors"
          >
            Send Message
          </button>

          {success && (
            <p className="text-center text-green-400 mt-2 font-medium">{success}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
