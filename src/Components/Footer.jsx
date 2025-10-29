import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
    const [showTop, setShowTop] = useState(false);

    // Show scroll-to-top button after scrolling down
    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-black/90 text-white pt-12 pb-6 border-t border-white/10 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* About Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-orange-400">
                        Mahesh Ventures
                    </h2>
                    <p className="text-white/70 text-sm leading-relaxed">
                        Mahesh Ventures is your trusted real estate partner — helping
                        you discover modern properties, premium offices, and verified homes
                        across India with transparency and ease.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 text-orange-400">
                        Quick Links
                    </h2>
                    <ul className="space-y-2 text-white/70 text-sm">
                        <li>
                            <a href="#home" className="hover:text-orange-400 transition duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#service" className="hover:text-orange-400 transition duration-300">
                                Service
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-orange-400 transition duration-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials" className="hover:text-orange-400 transition duration-300">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-orange-400 transition duration-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 text-orange-400">
                        Contact Us
                    </h2>
                    <ul className="space-y-3 text-white/70 text-sm">
                        <li>📍 Mahesh Ventures HQ, <br /> Raipur, Chhattisgarh, India</li>
                        <li>📞 +91 98765 43210</li>
                        <li>📧 contact@maheshventures.com</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 text-orange-400">
                        Follow Us
                    </h2>
                    <div className="flex space-x-4 text-white/80 text-xl">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-orange-400 transition transform hover:scale-110"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-orange-400 transition transform hover:scale-110"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-orange-400 transition transform hover:scale-110"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-orange-400 transition transform hover:scale-110"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="mt-10 border-t border-white/10 pt-6 text-center text-white/60 text-sm">
                © {new Date().getFullYear()} Mahesh Ventures. All rights reserved.
            </div>

            {/* Scroll to top button */}
            {showTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-orange-500 text-black p-3 rounded-full shadow-lg hover:bg-orange-400 transition z-50"
                >
                    <FaArrowUp />
                </button>
            )}
        </footer>
    );
};

export default Footer;
