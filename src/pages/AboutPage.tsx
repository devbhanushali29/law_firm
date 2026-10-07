import { Phone, Mail, ArrowRight, Scale, Target, Heart, Award } from 'lucide-react';
import founderImage from '../assets/IMG_5563_2 copy.jpg';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Scale,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in every case we handle, ensuring complete honesty and transparency with our clients.'
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Understanding the emotional and personal nature of legal matters, we approach each case with empathy and genuine care.'
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'Clear communication and straightforward advice are at the core of our client relationships, keeping you informed every step of the way.'
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'We maintain the highest standards of legal practice, continuously updating our knowledge and skills to serve you better.'
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0A1F44] via-[#0D2952] to-[#0A1F44] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              About Bhanushali Legal LLP
            </h1>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={founderImage}
                alt="Adv. Karan Bhanushali"
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
                Our Story
              </h2>
              <div className="h-1 w-20 bg-[#D4AF37] mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Bhanushali Legal LLP is a full-service law firm dedicated to delivering justice with integrity, diligence, and excellence.
                Founded by <span className="font-semibold text-[#0A1F44]">Advocate Karan Bhanushali</span>, the firm provides comprehensive legal
                services in Civil, Criminal, Family, Corporate, and Property Law.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Our philosophy is built on providing transparent, reliable, and effective legal solutions for individuals and organizations.
                We take pride in combining strong legal expertise with personalized client attention, ensuring that every client receives
                the dedication and representation they deserve.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                With a commitment to excellence and a deep understanding of the Indian legal system, we have successfully represented
                numerous clients across various legal domains, earning their trust and confidence.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#0A1F44] mb-6 text-center">
              Meet Advocate Karan Bhanushali
            </h3>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Advocate Karan Bhanushali is the founder and principal attorney at Bhanushali Legal LLP. With extensive experience
              in multiple areas of law, he has built a reputation as a trusted legal advisor and fierce advocate for his clients' rights.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              His approach combines deep legal knowledge with practical wisdom, ensuring that clients not only understand their legal
              position but also receive strategic guidance tailored to their specific circumstances. Whether handling complex litigation
              or providing advisory services, Advocate Bhanushali brings dedication, professionalism, and a results-oriented mindset to every case.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              His commitment to justice extends beyond the courtroom, as he actively works to make quality legal representation accessible
              and understandable for all clients, regardless of their legal background.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0A1F44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Our Vision
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              To make quality legal representation accessible and dependable for everyone, ensuring that justice is not just a concept
              but a tangible reality for all our clients. We envision a legal practice where expertise meets empathy, and where every
              individual and organization receives the representation they deserve.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
              Our Core Values
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every case we handle
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#D4AF37]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#0A1F44] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0A1F44] to-[#0D2952] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Why Work With Us?
              </h2>
              <div className="h-1 w-20 bg-[#D4AF37] mb-6"></div>
              <ul className="space-y-4 text-lg text-white/90">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-2xl">•</span>
                  <span>Personalized attention to every case, treating each client's matter with the importance it deserves</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-2xl">•</span>
                  <span>Comprehensive legal expertise across multiple practice areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-2xl">•</span>
                  <span>Proven track record of successful case outcomes and satisfied clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-2xl">•</span>
                  <span>Available 7 days a week to address your legal needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-2xl">•</span>
                  <span>Clear, transparent communication throughout your legal journey</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-2xl">•</span>
                  <span>Strategic approach combining legal expertise with practical solutions</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="font-playfair text-2xl font-bold text-[#D4AF37] mb-6 text-center">
                Get in Touch Today
              </h3>
              <div className="space-y-4 mb-8">
                <a href="tel:+917021029328" className="flex items-center space-x-3 text-white hover:text-[#D4AF37] transition-colors">
                  <Phone className="h-6 w-6" />
                  <span className="text-lg">+91 7021029328</span>
                </a>
                <a href="mailto:bhanushaliassociateslawfirm@gmail.com" className="flex items-center space-x-3 text-white hover:text-[#D4AF37] transition-colors">
                  <Mail className="h-6 w-6" />
                  <span className="text-sm">bhanushaliassociateslawfirm@gmail.com</span>
                </a>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-[#D4AF37] text-[#0A1F44] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2 group"
              >
                <span>Book Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
