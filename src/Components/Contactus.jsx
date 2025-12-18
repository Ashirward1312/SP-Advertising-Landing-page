import { useState, useEffect } from "react";

export default function LandingForm() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    // yahan kuch store karne ki zarurat nahi, sessionStorage already set ho chuka hoga
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "5086a787-47c0-416a-8498-f6751f82a234",
          from_name: formData.name,
          from_email: formData.email,
          subject: "New Landing Form Submission",
          message: `Name: ${formData.name}\nEmail: ${formData.email}\nNumber: ${formData.number}\nAddress: ${formData.address}`,
          sender_name: formData.name,
          reply_to: formData.email,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", number: "", address: "" });
        try {
          // optional: agar ensure karna ho ki submit ke baad bhi dobara na aaye
          sessionStorage.setItem("landingFormShown", "true");
        } catch {}
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting the form.");
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

        {!submitted ? (
          <>
            <h2 className="text-3xl font-bold text-center mb-2 text-orange-600">
              Let’s Connect 🚀
            </h2>
            <p className="text-center text-gray-500 mb-8">
              Fill in your details below — we’ll reach out shortly!
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.number}
                  onChange={handleChange}
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
                  value={formData.address}
                  onChange={handleChange}
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
          </>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-3xl font-bold mb-4 text-orange-600">
              🎉 Thank You!
            </h2>
            <p className="text-gray-600">
              Your details have been submitted successfully. <br />
              We’ll get in touch with you soon!
            </p>
            <button
              onClick={handleClose}
              className="mt-8 bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 rounded-lg font-semibold transition shadow-md"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}