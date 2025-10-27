import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Name is required";
    if (!form.email.trim()) er.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = "Enter a valid email";
    if (!form.message.trim()) er.message = "Message is required";
    return er;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const er = validate();
    if (Object.keys(er).length) return setErrors(er);

    setSending(true);
    setStatus({ type: "", msg: "" });

    // TODO: Replace with your API endpoint (EmailJS, Formspree, custom API)
    // For demo, simulating a network request
    await new Promise((r) => setTimeout(r, 1000));

    setSending(false);
    setStatus({ type: "success", msg: "Thanks! We’ll get back to you shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white py-10 sm:py-12 lg:py-14" id="contact">
      {/* Soft orange backdrop */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[90vw] -translate-x-1/2 bg-gradient-to-tr from-orange-400/10 via-amber-400/10 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-100">
            Contact us
          </span>
          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            We’d love to hear from you
          </h1>
          <p className="mt-2 text-slate-600 font-poppins">
            Have a question or want to book a site visit? Send us a message and our team will respond soon.
          </p>
        </div>

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Info card */}
          <div className="lg:col-span-1 rounded-2xl bg-white ring-1 ring-slate-200 p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-slate-900">Get in touch</h2>
            <p className="mt-1 text-sm text-slate-600 font-poppins">
              Reach out via phone or email, or visit our office during working hours.
            </p>

            <div className="mt-4 space-y-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-50 transition"
              >
                <span className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-orange-50">
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-orange-600">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.05 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" fill="currentColor"/>
                  </svg>
                </span>
                <span className="text-sm text-slate-800">+91 98765 43210</span>
              </a>

              <a
                href="mailto:hello@yourbrand.com"
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-50 transition"
              >
                <span className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-orange-50">
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-orange-600">
                    <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M4 6l8 6 8-6" stroke="currentColor" strokeWidth="1.6" fill="none"/>
                  </svg>
                </span>
                <span className="text-sm text-slate-800">hello@yourbrand.com</span>
              </a>

              <div className="flex items-center gap-3 rounded-xl p-3">
                <span className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-orange-50">
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-orange-600">
                    <path d="M12 21s-7-4.35-7-10a7 7 0 1 1 14 0c0 5.65-7 10-7 10z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                    <circle cx="12" cy="11" r="2" fill="currentColor"/>
                  </svg>
                </span>
                <div className="text-sm text-slate-800">
                  123 MG Road, Bengaluru, KA 560001
                  <div>
                    <a
                      className="text-orange-600 hover:text-orange-700 underline underline-offset-2"
                      href="https://maps.google.com/?q=123 MG Road, Bengaluru"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                <div className="font-medium">Working hours</div>
                <div className="mt-0.5">Mon–Sat: 9:30 AM – 6:30 PM</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 rounded-2xl bg-white ring-1 ring-slate-200 p-5 sm:p-6">
            {status.msg && (
              <div
                className={`mb-4 rounded-lg px-4 py-3 text-sm ring-1 ${
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-800">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-lg border bg-white px-3 py-2.5 text-slate-800 placeholder-slate-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 ${
                      errors.name ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-800">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-lg border bg-white px-3 py-2.5 text-slate-800 placeholder-slate-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 ${
                      errors.email ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-800">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-800 placeholder-slate-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    placeholder="+91 ..."
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-lg border bg-white px-3 py-2.5 text-slate-800 placeholder-slate-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 ${
                      errors.message ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="How can we help you?"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-slate-500 font-poppins">
                  By submitting, you agree to our Terms & Privacy Policy.
                </p>
                <button
                  type="submit"
                  disabled={sending}
                  className={`inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                    sending ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {sending ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" />
                        <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
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