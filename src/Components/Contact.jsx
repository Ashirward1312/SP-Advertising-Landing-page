import React, { useState } from "react";
import { Mail, MapPin, Clock, Phone, Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "918871090476";

    const message = `Hello, I'm interested in your services.

Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");

    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* ═══════════════════════════════════════════════════════════════
          DARK HERO BANNER — gives contrast for the white Nav text
       ═══════════════════════════════════════════════════════════════ */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative glowing orbs */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "250px",
            height: "250px",
            background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "140px 24px 60px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "12px",
              letterSpacing: "4px",
              color: "#f97316",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "16px",
              background: "rgba(249,115,22,0.1)",
              padding: "6px 20px",
              borderRadius: "30px",
              border: "1px solid rgba(249,115,22,0.2)",
            }}
          >
            Contact Us
          </span>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              color: "#ffffff",
              margin: "16px 0",
              lineHeight: 1.2,
            }}
          >
            We'd Love To Hear{" "}
            <span style={{ color: "#f97316" }}>From You</span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            Have a question or want to book a site visit? Send us a message and
            our team will respond soon.
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MAIN CONTENT
       ═══════════════════════════════════════════════════════════════ */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px 80px" }}>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* Info Card */}
            <div
              style={{
                background: "#ffffff",
                padding: "32px",
                borderRadius: "16px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                border: "1px solid #e5e7eb",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)"}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)"}
            >

              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: "24px",
                }}
              >
                Get In Touch
              </h2>

              {/* Email Box */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "16px",
                  borderRadius: "12px",
                  transition: "background 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(249,115,22,0.05)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                <div
                  style={{
                    background: "rgba(249,115,22,0.1)",
                    padding: "12px",
                    borderRadius: "10px",
                    flexShrink: 0,
                  }}
                >
                  <Mail style={{ width: "20px", height: "20px", color: "#f97316" }} />
                </div>
                <div>
                  <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "4px" }}>Email</p>
                  <p style={{ color: "#111827", fontWeight: 500, fontSize: "15px" }}>
                    mventures011@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone Box */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "16px",
                  borderRadius: "12px",
                  transition: "background 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(249,115,22,0.05)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                <div
                  style={{
                    background: "rgba(249,115,22,0.1)",
                    padding: "12px",
                    borderRadius: "10px",
                    flexShrink: 0,
                  }}
                >
                  <Phone style={{ width: "20px", height: "20px", color: "#f97316" }} />
                </div>
                <div>
                  <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "4px" }}>Phone</p>
                  <p style={{ color: "#111827", fontWeight: 500, fontSize: "15px" }}>
                    +91 88710 90476
                  </p>
                </div>
              </div>

              {/* Address Box */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "16px",
                  borderRadius: "12px",
                  transition: "background 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(249,115,22,0.05)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                <div
                  style={{
                    background: "rgba(249,115,22,0.1)",
                    padding: "12px",
                    borderRadius: "10px",
                    flexShrink: 0,
                  }}
                >
                  <MapPin style={{ width: "20px", height: "20px", color: "#f97316" }} />
                </div>
                <div>
                  <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "4px" }}>Office Address</p>
                  <p style={{ color: "#374151", lineHeight: 1.7, fontSize: "15px" }}>
                    Mahesh Ventures, LK Logistic Park, Kursi,
                    <br />
                    3rd Floor, Near Kamal Vihar, Raipur (C.G.)
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "16px",
                  borderRadius: "12px",
                  transition: "background 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(249,115,22,0.05)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                <div
                  style={{
                    background: "rgba(249,115,22,0.1)",
                    padding: "12px",
                    borderRadius: "10px",
                    flexShrink: 0,
                  }}
                >
                  <Clock style={{ width: "20px", height: "20px", color: "#f97316" }} />
                </div>
                <div>
                  <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "4px" }}>Working Hours</p>
                  <p style={{ color: "#111827", fontWeight: 500, fontSize: "15px" }}>
                    Mon – Sat : 9:30 AM – 6:30 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              border: "1px solid #e5e7eb",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)"}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)"}
          >

            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "24px",
              }}
            >
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Name */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#374151",
                    marginBottom: "8px",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  style={{
                    width: "100%",
                    border: "1px solid #d1d5db",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    fontSize: "15px",
                    outline: "none",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#f97316";
                    e.target.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#d1d5db";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#374151",
                    marginBottom: "8px",
                  }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91..."
                  style={{
                    width: "100%",
                    border: "1px solid #d1d5db",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    fontSize: "15px",
                    outline: "none",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#f97316";
                    e.target.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#d1d5db";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#374151",
                    marginBottom: "8px",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="How can we help you?"
                  style={{
                    width: "100%",
                    border: "1px solid #d1d5db",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    fontSize: "15px",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#f97316";
                    e.target.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#d1d5db";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Footer */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  paddingTop: "8px",
                }}
              >
                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                    color: "#ffffff",
                    fontWeight: 600,
                    padding: "14px 32px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 4px 14px rgba(249,115,22,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(249,115,22,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 14px rgba(249,115,22,0.3)";
                  }}
                >
                  <Send style={{ width: "16px", height: "16px" }} />
                  Send Message
                </button>
                <p style={{ fontSize: "12px", color: "#9ca3af", textAlign: "center" }}>
                  By submitting, you agree to our Terms & Privacy Policy.
                </p>
              </div>

            </form>
          </div>
        </div>

        {/* MAP SECTION */}
        <div
          style={{
            marginTop: "80px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            border: "1px solid #e5e7eb",
            transition: "box-shadow 0.5s ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.15)"}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)"}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.6855460329543!2d81.69086307495537!3d21.196152882008708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c34ae4f42f47%3A0x4fbb8df483243127!2sL.K.%20Corporate%20And%20Logistic%20Park!5e1!3m2!1sen!2sin!4v1778655402925!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;