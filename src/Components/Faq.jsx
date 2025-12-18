import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I start with your services?",
    answer:
      "You can get in touch via our contact form or WhatsApp, and our team will guide you step by step.",
  },
  {
    question: "Are your agents verified?",
    answer:
      "Yes! All our agents are KYC-verified to ensure a safe and transparent process.",
  },
  {
    question: "What is the average time to close a deal?",
    answer:
      "Depending on the property and process, it usually takes 2–3 weeks from initial contact to closure.",
  },
  {
    question: "Do you assist with documentation?",
    answer:
      "Absolutely! Our team helps you with all legal paperwork, agreements, and registration support.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAnswer = (index) =>
    setActiveIndex((prev) => (prev === index ? null : index));

  return (
    <section
      id="faq"
      className="w-full bg-gray-50 py-10 px-4 sm:py-14 sm:px-8 lg:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-4xl w-full text-center">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
          FREQUENTLY ASKED QUESTIONS
          <span className="block w-20 h-1 bg-orange-400 rounded mt-3 mx-auto"></span>
        </h2>

        <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg">
          Answers To The Most Common Questions Our Clients Ask. Click To Reveal Details.
        </p>

        {/* FAQ List */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => {
            const open = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            const btnId = `faq-trigger-${index}`;

            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl shadow-sm transition hover:shadow-md"
              >
                {/* Question button */}
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => toggleAnswer(index)}
                  className="w-full flex justify-between items-center p-4 sm:p-6 text-left"
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="text-orange-500 text-lg sm:text-xl">
                    {open ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>

                {/* Answer section */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`px-4 sm:px-6 transition-all duration-300 grid ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg pb-4 sm:pb-5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
