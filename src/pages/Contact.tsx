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
        "service_3pjw44j",
        "template_eudaoij",
        form.current,
        "YTo7pUC_r_sn4qbXG"
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          setSuccess("Oops! Something went wrong.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#0F171E] flex items-center justify-center px-4 py-10 sm:py-0">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-sm sm:max-w-md bg-[#1A242D] rounded-xl shadow-2xl overflow-hidden border border-white/10"
      >
        <div className="bg-[#0F171E] border-b border-white/10 p-6 text-center relative">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Contact Me</h2>
          <p className="text-sm sm:text-base text-gray-400 mt-1">
            Send me a message and I'll get back to you!
          </p>
          <svg
            className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-24"
            height="6"
            viewBox="0 0 100 6"
            preserveAspectRatio="none"
          >
            <path
              d="M2,2 Q50,10 98,2"
              stroke="#FF9900"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-3 rounded-md bg-[#0F171E] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-[#0F171E] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="p-3 rounded-md bg-[#0F171E] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 h-32 resize-none"
            required
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-[#0F171E] font-bold py-3 rounded-md mt-2 transition-colors"
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