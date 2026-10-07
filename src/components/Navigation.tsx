import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Practice Areas', page: 'practice' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0A1F44] shadow-lg' : 'bg-[#0A1F44]/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <img src="/images/BAD4D664-54E2-4861-8A6C-243759E694CB.PNG" alt="Bhanushali Legal LLP" className="h-12 w-12 object-contain" />
            <div>
              <h1 className="text-[#D4AF37] font-playfair text-xl font-bold">Bhanushali Legal LLP</h1>
              <p className="text-white/80 text-xs">Law Firm</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium relative group ${
                  currentPage === link.page ? 'text-[#D4AF37]' : ''
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] transform origin-left transition-transform duration-300 ${
                  currentPage === link.page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
            <a
              href="tel:+917021029328"
              className="bg-[#D4AF37] text-[#0A1F44] px-6 py-2.5 rounded-md font-semibold hover:bg-[#C4A137] transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A1F44] border-t border-[#D4AF37]/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium py-2 ${
                  currentPage === link.page ? 'text-[#D4AF37]' : ''
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+917021029328"
              className="block w-full bg-[#D4AF37] text-[#0A1F44] px-6 py-3 rounded-md font-semibold text-center hover:bg-[#C4A137] transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
