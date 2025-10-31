import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface DisclaimerPopupProps {
  onAgree: () => void;
}

export default function DisclaimerPopup({ onAgree }: DisclaimerPopupProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const handleDisagree = () => {
    window.close();
  };

  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    onAgree();
  };

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${
      isAnimating ? 'opacity-100' : 'opacity-0'
    }`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Generated Image September 24, 2025 - 6_21PM.png')",
          filter: 'blur(2px) brightness(0.5)'
        }}
      ></div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative h-full flex items-center justify-center p-4">
        <div className={`bg-[#0A1F44] rounded-lg shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden transition-all duration-700 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <div className="md:w-1/3 bg-gradient-to-b from-[#0D2952] to-[#0A1F44] p-8 flex flex-col items-center justify-center text-center">
            <img
              src="/logo.png"
              alt="Bhanushali Associates"
              className="h-32 w-32 object-contain mb-4"
            />
            <h2 className="text-[#D4AF37] font-playfair text-2xl font-bold">
              Bhanushali Associates
            </h2>
            <p className="text-white/70 text-sm mt-2">Law Firm</p>
          </div>

          <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center overflow-y-auto max-h-96 md:max-h-none">
            <h3 className="text-[#D4AF37] font-playfair text-3xl font-bold mb-6">
              Disclaimer
            </h3>

            <div className="text-white/90 space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                The Bar Council of India does not permit solicitation of work and advertising by legal practitioners and advocates. By accessing the Bhanushali Associates Law Firm website (our "Website"), you acknowledge and confirm that:
              </p>

              <ul className="space-y-3 pl-4">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 flex-shrink-0">•</span>
                  <span>You wish to gain more information about us for your own information and use.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 flex-shrink-0">•</span>
                  <span>There has been no solicitation, invitation, or advertisement of any sort by us or any of our members.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 flex-shrink-0">•</span>
                  <span>Any information obtained or downloaded from this website does not create a lawyer–client relationship.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 flex-shrink-0">•</span>
                  <span>None of the information on this website should be construed as legal advice.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 flex-shrink-0">•</span>
                  <span>All content on this website is the intellectual property of Bhanushali Associates Law Firm.</span>
                </li>
              </ul>

              <p className="pt-4 border-t border-[#D4AF37]/30">
                Clicking "Agree" means you acknowledge the above and wish to proceed to view the website.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-[#D4AF37]/30">
              <button
                onClick={handleDisagree}
                className="flex-1 px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-md font-semibold hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                Disagree
              </button>
              <button
                onClick={handleAgree}
                className="flex-1 px-6 py-3 bg-[#D4AF37] text-[#0A1F44] rounded-md font-semibold hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Agree
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
