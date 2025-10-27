import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppIcon() {
  return (
    <a
      href="https://wa.me/yourNumber" // replace with your WhatsApp number in international format
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-4 bottom-32 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-white w-6 h-6" />
    </a>
  );
}