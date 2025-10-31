import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917021029328"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba58] transition-all duration-300 hover:scale-110 z-40 group"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute left-20 bg-[#25D366] text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat on WhatsApp
      </span>
    </a>
  );
}
