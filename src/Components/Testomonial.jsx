import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Homeowner",
    message:
      "Maheshwari Ventures helped me find my dream home with complete transparency. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "Investor",
    message:
      "Professional team, quick responses, and excellent property insights. Very trustworthy.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ankit Mehta",
    role: "Entrepreneur",
    message:
      "Their property listings are detailed and verified. I made the right investment decision thanks to them.",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Sanya Kapoor",
    role: "Tenant",
    message:
      "Finding a rental apartment was so easy with Maheshwari Ventures. Smooth and hassle-free process!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Our <span className="text-orange-500">Clients Say</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Hear from our clients and partners about their experience working with{" "}
          <span className="text-orange-500 font-semibold">Maheshwari Ventures</span>.
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
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                “{t.message}”
              </p>

              {/* Avatar */}
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-orange-400"
              />

              {/* Client Name & Role */}
              <h3 className="text-gray-900 font-semibold">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
