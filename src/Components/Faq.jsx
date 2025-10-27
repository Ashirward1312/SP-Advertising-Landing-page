import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I start with your services?",
    answer: "You can get in touch via our contact form or WhatsApp, and our team will guide you step by step.",
  },
  {
    question: "Are your agents verified?",
    answer: "Yes! All our agents are KYC-verified to ensure a safe and transparent process.",
  },
  {
    question: "What is the average time to close a deal?",
    answer: "Depending on the property and process, it usually takes 2–3 weeks from initial contact to closure.",
  },
  {
    question: "Do you assist with documentation?",
    answer: "Absolutely! Our team helps you with all legal paperwork, agreements, and registration support.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center relative inline-block">
          Frequently Asked Questions
          <span className="block w-16 h-1 bg-orange-400 rounded mt-2 mx-auto" />
        </h2>
        <p className="text-gray-600 text-center mb-12 font-poppins">
          Answers to the most common questions our clients ask. Hover or click to reveal details.
        </p>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl shadow-sm transition hover:shadow-md cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center p-5">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <span className="text-orange-500">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              <div
                className={`px-5 pb-5 text-gray-600 font-poppins text-sm transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
