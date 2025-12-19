import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rohit Kumar",
    role: "Homeowner",
    message:
      "Maheshwari Ventures helped me find my dream home with complete transparency. Highly recommended!",
  },
  {
    name: "Priyanka  Verma",
    role: "Investor",
    message:
      "Professional team, quick responses, and excellent property insights. Very trustworthy.",
  },
  {
    name: "Ankit Mehta",
    role: "Entrepreneur",
    message:
      "Their property listings are detailed and verified. I made the right investment decision thanks to them.",
  },
  {
    name: "Sanya Kapoor",
    role: "Tenant",
    message:
      "Finding a rental apartment was so easy with Maheshwari Ventures. Smooth and hassle-free process!",
  },
];

const Testimonial = () => {
  return (
    <section
      className="bg-gradient-to-b from-orange-50 to-white py-16"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="heading-font text-4xl font-bold text-gray-900 mb-4">
          WHAT OUR <span className="text-orange-500">CLIENTS SAY</span>
        </h2>
        <p className="paragraph-font text-gray-600 max-w-2xl mx-auto mb-12">
          Hear From Our Clients And Partners About Their Experience Working With{" "}
          <span className="text-orange-500 font-semibold">MAHESH VENTURES</span>.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-orange-100 hover:border-orange-400"
            >
              {/* Quote Icon */}
              <div className="text-orange-500 text-3xl mb-4">
                <FaQuoteLeft />
              </div>

              {/* Testimonial Message */}
              <p className="paragraph-font text-gray-700 mb-4 italic leading-relaxed">
                “{t.message}”
              </p>

              {/* Client Name & Role (no avatar) */}
              <h3 className="heading-font text-gray-900 font-semibold">
                {t.name}
              </h3>
              <p className="paragraph-font text-gray-500 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;