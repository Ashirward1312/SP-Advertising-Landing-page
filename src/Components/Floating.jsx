import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FloatingSocials = () => {
  const socials = [
    {
      icon: <FaFacebookF />,
      link:
        "https://www.facebook.com/people/Headquarter-HQ-In-Association-with-Kursi/61582888842094/",
      bg: "bg-blue-500",
      hover: "hover:bg-blue-600",
      label: "Facebook",
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/maheshwari95189",
      bg: "bg-sky-400",
      hover: "hover:bg-sky-500",
      label: "Twitter / X",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/headquarterkursi/",
      bg: "bg-pink-400",
      hover: "hover:bg-pink-500",
      label: "Instagram",
    },
   
  ];

  return (
    <div className="fixed top-1/3 right-0 z-50 flex flex-col space-y-3">
      {socials.map((s, index) => (
        <a
          key={index}
          href={s.link}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          title={s.label}
          className={`flex items-center justify-center w-12 h-12 ${s.bg} text-white rounded-l-full shadow-lg transition transform hover:scale-110 ${s.hover}`}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
};

export default FloatingSocials;