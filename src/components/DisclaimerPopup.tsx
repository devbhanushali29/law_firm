import { useEffect, useState } from 'react';

interface DisclaimerPopupProps {
  onAgree: () => void;
}

export default function DisclaimerPopup({ onAgree }: DisclaimerPopupProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const handleDisagree = () => {
    window.location.href = 'https://google.com';
  };

  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    onAgree();
  };

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${
      isAnimating ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative h-full flex items-center justify-center p-4">
        <div className={`bg-[#0A1F44] rounded-lg shadow-2xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden transition-all duration-700 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <div className="md:w-1/3 bg-[#0A1F44] p-8 md:p-12 flex flex-col items-center justify-center text-center relative">
            <img
              src="/images/BAD4D664-54E2-4861-8A6C-243759E694CB.PNG"
              alt="Bhanushali Legal LLP"
              className="h-40 w-40 object-contain mb-6"
            />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-[#D4AF37] hidden md:block"></div>
          </div>

          <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center overflow-y-auto max-h-96 md:max-h-none bg-[#0A1F44]">
            <h3 className="text-white font-playfair text-3xl md:text-4xl font-bold mb-6">
              Disclaimer
            </h3>

            <div className="text-white/80 space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                The Bar Council of India does not permit solicitation of work and advertising by legal practitioners and advocates. By accessing the Bhanushali Legal LLP website (our "Site"), the user acknowledges that:
              </p>

              <ul className="space-y-3 pl-0">
                <li className="flex items-start">
                  <span className="text-white/80 mr-3 flex-shrink-0">•</span>
                  <span>The user wishes to gain more information about us for their own use.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/80 mr-3 flex-shrink-0">•</span>
                  <span>There has been no attempt by us to advertise or solicit work.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/80 mr-3 flex-shrink-0">•</span>
                  <span>Any information obtained or downloaded from our Site does not create a client–attorney relationship.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/80 mr-3 flex-shrink-0">•</span>
                  <span>Nothing on this website amounts to legal advice or opinion.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/80 mr-3 flex-shrink-0">•</span>
                  <span>Our website uses cookies to improve your experience. By using our site, you agree to our Privacy Policy.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/80 mr-3 flex-shrink-0">•</span>
                  <span>All content on this website is the intellectual property of the Firm.</span>
                </li>
              </ul>

              <p className="pt-2">
                Click <a href="/disclaimer" className="text-[#D4AF37] underline hover:text-[#C4A137]">here</a> for important public notice from the Firm.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <button
                onClick={handleDisagree}
                className="px-8 py-3 border-2 border-white/30 text-white rounded-md font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Disagree
              </button>
              <button
                onClick={handleAgree}
                className="px-8 py-3 bg-[#D4AF37] text-[#0A1F44] rounded-md font-semibold hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:shadow-xl"
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
