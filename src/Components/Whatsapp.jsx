import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppIcon() {
  return (
    <a
      href="https://wa.me/918871090476" // 91 (India) + 8871090476
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-4 bottom-6 z-50 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-md transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-white w-5 h-5" />
    </a>
  );
}