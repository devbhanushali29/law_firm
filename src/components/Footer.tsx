import { Phone, Mail, MapPin, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0A1F44] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.png" alt="Bhanushali Associates" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-[#D4AF37] font-playfair text-lg font-bold">Bhanushali Associates</h3>
                <p className="text-white/80 text-xs">Law Firm</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">Your Trusted Legal Partners in Justice</p>
          </div>

          <div>
            <h4 className="text-[#D4AF37] font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => onNavigate('home')} className="block text-white/70 hover:text-[#D4AF37] transition-colors">Home</button>
              <button onClick={() => onNavigate('about')} className="block text-white/70 hover:text-[#D4AF37] transition-colors">About</button>
              <button onClick={() => onNavigate('practice')} className="block text-white/70 hover:text-[#D4AF37] transition-colors">Practice Areas</button>
              <button onClick={() => onNavigate('contact')} className="block text-white/70 hover:text-[#D4AF37] transition-colors">Contact</button>
              <button onClick={() => onNavigate('disclaimer')} className="block text-white/70 hover:text-[#D4AF37] transition-colors">Disclaimer</button>
            </div>
          </div>

          <div>
            <h4 className="text-[#D4AF37] font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+917021029328" className="flex items-start space-x-2 text-white/70 hover:text-[#D4AF37] transition-colors">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+91 7021029328</span>
              </a>
              <a href="mailto:bhanushaliassociateslawfirm@gmail.com" className="flex items-start space-x-2 text-white/70 hover:text-[#D4AF37] transition-colors break-all">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">bhanushaliassociateslawfirm@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-white/70">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Office No. B-5, Sai Rajya, B Bldg. C.H.S. Ltd., Shirdi Nagar, Bhayandar (E), Thane - 401 105</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[#D4AF37] font-semibold mb-4">Office Hours</h4>
            <p className="text-white/70 text-sm mb-4">10:00 AM – 8:00 PM<br />Monday to Sunday</p>
            <h4 className="text-[#D4AF37] font-semibold mb-4">Follow Us</h4>
            <a
              href="https://youtube.com/@adv.karanbhanushali?si=wMOg8kLUWG6_gOXx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white/70 hover:text-[#D4AF37] transition-colors"
            >
              <Youtube className="h-6 w-6" />
              <span>YouTube Channel</span>
            </a>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">© 2025 Bhanushali Associates. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
