import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const FloatingSocials = () => {
  const socials = [
    { icon: <FaFacebookF />, link: "https://facebook.com", bg: "bg-blue-500", hover: "hover:bg-blue-600" },
    { icon: <FaTwitter />, link: "https://twitter.com", bg: "bg-sky-400", hover: "hover:bg-sky-500" },
    { icon: <FaInstagram />, link: "https://instagram.com", bg: "bg-pink-400", hover: "hover:bg-pink-500" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com", bg: "bg-blue-700", hover: "hover:bg-blue-800" },
  ];

  return (
    <div className="fixed top-1/3 right-0 z-50 flex flex-col space-y-3">
      {socials.map((s, index) => (
        <a
          key={index}
          href={s.link}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center justify-center w-12 h-12 ${s.bg} text-white rounded-l-full shadow-lg transition transform hover:scale-110 ${s.hover}`}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
};

export default FloatingSocials;
