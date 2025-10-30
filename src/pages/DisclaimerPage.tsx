import { AlertTriangle, ArrowRight } from 'lucide-react';

interface DisclaimerPageProps {
  onNavigate: (page: string) => void;
}

export default function DisclaimerPage({ onNavigate }: DisclaimerPageProps) {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0A1F44] via-[#0D2952] to-[#0A1F44] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertTriangle className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Legal Disclaimer
            </h1>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border-l-4 border-[#D4AF37] p-6 mb-8">
            <p className="text-gray-800 font-medium">
              Please read this disclaimer carefully before using the services of Bhanushali Associates.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4">
              General Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The information provided on this website is for general informational purposes only and does not constitute legal advice.
              While we strive to ensure the accuracy and completeness of the information presented, Bhanushali Associates makes no
              representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability,
              or availability of the information contained on this website.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 mt-8">
              No Attorney-Client Relationship
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Visiting this website or communicating with Bhanushali Associates through this website does not establish an attorney-client
              relationship. An attorney-client relationship is established only when a formal engagement letter or retainer agreement is
              signed by both parties. Please do not send any confidential information to us until such a relationship has been established.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 mt-8">
              Legal Advice Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The content on this website should not be considered as legal advice or a substitute for consultation with a qualified attorney.
              Every legal situation is unique and requires individual assessment. For specific legal advice tailored to your circumstances,
              please contact Bhanushali Associates directly to schedule a consultation.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 mt-8">
              Jurisdiction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bhanushali Associates primarily practices law in India and is governed by Indian legal regulations and the Bar Council of India.
              The information on this website is intended for individuals and entities within India. Laws vary by jurisdiction, and the
              information provided may not be applicable in other countries or regions.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 mt-8">
              Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This website may contain links to third-party websites for your convenience and information. Bhanushali Associates does not
              endorse or assume responsibility for the content, accuracy, or practices of these external sites. Accessing third-party links
              is at your own risk.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 mt-8">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In no event shall Bhanushali Associates be liable for any direct, indirect, incidental, consequential, or punitive damages
              arising out of your access to or use of this website, or any information contained herein. This includes, but is not limited to,
              loss of data, loss of profits, or business interruption.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 mt-8">
              Case Results
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Any testimonials or case results mentioned on this website are not a guarantee or prediction of the outcome of your legal matter.
              Every case is different, and results depend on the unique facts and legal circumstances involved.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 mt-8">
              Updates and Changes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bhanushali Associates reserves the right to modify, update, or remove any content on this website at any time without prior notice.
              We recommend that you periodically review this disclaimer for any changes.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 mt-8">
              Contact for Legal Assistance
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you require legal assistance or have specific questions about your legal situation, please contact Bhanushali Associates
              directly through the contact information provided on this website. We will be happy to discuss your needs and determine how
              we can best assist you.
            </p>
          </div>

          <div className="mt-12 bg-[#0A1F44] text-white p-8 rounded-lg text-center">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-white/90 mb-6">
              For personalized legal advice and professional consultation, contact us today.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#D4AF37] text-[#0A1F44] px-8 py-3 rounded-md font-semibold hover:bg-[#C4A137] transition-all duration-300 inline-flex items-center space-x-2 group"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
