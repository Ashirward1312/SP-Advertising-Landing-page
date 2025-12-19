"use client";

import { useState, useEffect } from "react";

export default function LandingForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  // 👉 Page pe ek hi baar popup dikhana (per tab / session)
  useEffect(() => {
    try {
      const alreadyShown = sessionStorage.getItem("landingFormShown");
      if (!alreadyShown) {
        setOpen(true); // pehli baar tab me page open hua → popup dikhao
        sessionStorage.setItem("landingFormShown", "true");
      }
    } catch (e) {
      // agar sessionStorage available na ho, normal open
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    // 👇 yahan naya access_key use kar rahe hain
    formData.append(
      "access_key",
      "363556af-2a82-49cc-84f0-1f8851f273ab"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("WEB3FORMS RESPONSE:", data);

      if (data.success) {
        setResult("Thank you! We’ll get in touch with you soon.");
        event.target.reset();

        try {
          sessionStorage.setItem("landingFormShown", "true");
        } catch {}
      } else {
        setResult(data.message || "Error submitting the form. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setResult("Error submitting the form. Please try again.");
    }

    setLoading(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-100/60 to-white/60 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white/90 border border-orange-200 shadow-2xl rounded-3xl w-11/12 md:w-1/2 p-10 relative font-[Poppins]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-6 text-orange-600 hover:text-orange-800 text-2xl font-semibold"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-center mb-2 text-orange-600">
          Let’s Connect
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Fill in your details below — we’ll reach out shortly!
        </p>

        <form className="space-y-5" onSubmit={onSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 rounded-lg border border-orange-300 bg-white focus:ring-2 focus:ring-orange-400 outline-none transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              required
              className="w-full px-4 py-3 rounded-lg border border-orange-300 bg-white focus:ring-2 focus:ring-orange-400 outline-none transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="number"
              placeholder="+91 98765 43210"
              required
              className="w-full px-4 py-3 rounded-lg border border-orange-300 bg-white focus:ring-2 focus:ring-orange-400 outline-none transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600 font-medium">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Your full address"
              required
              className="w-full px-4 py-3 rounded-lg border border-orange-300 bg-white focus:ring-2 focus:ring-orange-400 outline-none transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-400 text-white py-3 rounded-lg font-semibold transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Send Message"}
          </button>
        </form>

        {result && (
          <p className="mt-4 text-center text-sm text-gray-700">{result}</p>
        )}
      </div>
    </div>
  );
}