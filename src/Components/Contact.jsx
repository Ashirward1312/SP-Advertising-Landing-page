import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    // email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [sending, setSending] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Name is required";
    if (!form.message.trim()) er.message = "Message is required";
    return er;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const er = validate();
    if (Object.keys(er).length) return setErrors(er);

    setSending(true);
    setStatus({ type: "", msg: "" });

    try {
      // 👇 Simple Web3Forms style: FormData + access_key
      const formData = new FormData(e.target);
      formData.append(
        "access_key",
        "363556af-2a82-49cc-84f0-1f8851f273ab"
      );
      formData.append("subject", "New Contact Form Submission");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("WEB3FORMS RESPONSE:", data);

      if (data.success) {
        setStatus({
          type: "success",
          msg: "Thanks! We’ll get back to you shortly.",
        });
        setForm({ name: "", phone: "", message: "" });
        e.target.reset();
      } else {
        setStatus({
          type: "error",
          msg: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        msg: "Error submitting the form. Please try again later.",
      });
    }

    setSending(false);
  };

  return (
    <section
      className="relative w-full bg-gradient-to-b from-slate-50 to-white py-10 sm:py-12 lg:py-14"
      id="contact"
    >
      {/* Soft orange backdrop */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[90vw] -translate-x-1/2 bg-gradient-to-tr from-orange-400/10 via-amber-400/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 🔙 Back to Home button */}
        <div className="mt-3 mb-4 flex justify-start">
  <button
    type="button"
    onClick={() => navigate("/")}
    className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-white/80 px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-orange-700 shadow-sm hover:bg-orange-50 hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition transform"
  >
    <FaArrowLeft className="h-3.5 w-3.5" />
    Back to Home
  </button>
</div>

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-100">
            CONTACT US
          </span>
          <h1 className="heading-font mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            WE’D LOVE TO HEAR FROM YOU
          </h1>
          <p className="paragraph-font mt-2 text-slate-600">
            Have A Question Or Want To Book A Site Visit? Send Us A Message And
            Our Team Will Respond Soon.
          </p>
        </div>

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Info card */}
          <div className="lg:col-span-1 rounded-2xl bg-white ring-1 ring-slate-200 p-5 sm:p-6">
            <h2 className="heading-font text-lg font-semibold text-slate-900">
              GET IN TOUCH
            </h2>
            <p className="paragraph-font mt-1 text-sm text-slate-600">
              Reach Out Via Phone, Or Visit Our Office During Working Hours.
            </p>

            <div className="mt-4 space-y-4">
              {/* Phone – footer wala number */}
             <a
  href="mailto:mventures011@gmail.com"
  className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-50 transition"
>
  <span className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-orange-50">
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      className="text-orange-600"
    >
      <path
        d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13 20 6.01V6H4zm0 12h16V8l-8 6-8-6v10z"
        fill="currentColor"
      />
    </svg>
  </span>
  <span className="paragraph-font text-sm text-slate-800">
    mventures011@gmail.com
  </span>
</a>


              {/* Address */}
              <div className="flex items-center gap-3 rounded-xl p-3">
                <span className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-orange-50">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="text-orange-600"
                  >
                    <path
                      d="M12 21s-7-4.35-7-10a7 7 0 1 1 14 0c0 5.65-7 10-7 10z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="11" r="2" fill="currentColor" />
                  </svg>
                </span>
                <div className="paragraph-font text-sm text-slate-800">
                  Mahesh Ventures, LK Logistic Park, Kursi, 3rd Floor, Near
                  Kamal Vihar, Raipur (C.G.)
                  <div>
                    <a
                      className="text-orange-600 hover:text-orange-700 underline underline-offset-2"
                      href="https://maps.google.com/?q=Mahesh Ventures, LK Logistic Park, Kursi, 3rd Floor, Near Kamal Vihar, Raipur (C.G.)"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                <div className="heading-font font-medium">Working hours</div>
                <div className="paragraph-font mt-0.5">
                  Mon–Sat: 9:30 AM – 6:30 PM
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 rounded-2xl bg-white ring-1 ring-slate-200 p-5 sm:p-6">
            {status.msg && (
              <div
                className={`paragraph-font mb-4 rounded-lg px-4 py-3 text-sm ring-1 ${
                  status.type === "success"
                    ? "bg-orange-50 text-orange-800 ring-orange-200"
                    : "bg-red-50 text-red-700 ring-red-200"
                }`}
                role="status"
                aria-live="polite"
              >
                {status.msg}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="heading-font block text-sm font-medium text-slate-800"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={`paragraph-font mt-1 w-full rounded-lg border bg-white px-3 py-2.5 text-slate-800 placeholder-slate-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 ${
                      errors.name ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="paragraph-font mt-1 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="heading-font block text-sm font-medium text-slate-800"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="paragraph-font mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-800 placeholder-slate-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    placeholder="+91 ..."
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="heading-font block text-sm font-medium text-slate-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`paragraph-font mt-1 w-full rounded-lg border bg-white px-3 py-2.5 text-slate-800 placeholder-slate-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 ${
                      errors.message ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="How can we help you?"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="paragraph-font mt-1 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="paragraph-font text-xs text-slate-500">
                  By submitting, you agree to our Terms &amp; Privacy Policy.
                </p>
                <button
                  type="submit"
                  disabled={sending}
                  className={`paragraph-font inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                    sending ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {sending ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeOpacity="0.25"
                          strokeWidth="4"
                        />
                        <path
                          d="M22 12a10 10 0 0 1-10 10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <svg width="16" height="16" viewBox="0 0 24 24">
                        <path
                          d="M5 12h14M13 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}