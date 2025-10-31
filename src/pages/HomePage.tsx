import { Scale, Users, Shield, Heart, CheckCircle, Star, Phone, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const practiceAreas = [
    {
      icon: Heart,
      title: 'Family Law',
      description: 'Divorce, Maintenance, Domestic Violence cases with compassionate legal support.'
    },
    {
      icon: Shield,
      title: 'Criminal Law',
      description: 'Expert defense in Bail, FIR, and Trial matters with proven track record.'
    },
    {
      icon: Scale,
      title: 'Civil Litigation',
      description: 'Property disputes, contract enforcement, and civil recovery solutions.'
    },
    {
      icon: Users,
      title: 'Corporate Law',
      description: 'Company formation, compliance, and comprehensive legal advisory services.'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      text: 'Advocate Karan Bhanushali handled my property dispute with utmost professionalism. His expertise and dedication resulted in a favorable outcome. Highly recommended!',
      rating: 5
    },
    {
      name: 'Priya Patel',
      text: 'I was facing a difficult family law case. The team at Bhanushali Associates provided compassionate support and excellent legal guidance throughout the process.',
      rating: 5
    },
    {
      name: 'Amit Desai',
      text: 'Outstanding legal services! Their attention to detail and commitment to client satisfaction sets them apart. Thank you for your excellent work.',
      rating: 5
    }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: 'Trust',
      description: 'Building lasting relationships through honest and reliable legal services.'
    },
    {
      icon: Scale,
      title: 'Transparency',
      description: 'Clear communication and straightforward approach to every case.'
    },
    {
      icon: Shield,
      title: 'Professionalism',
      description: 'Maintaining highest standards of legal practice and client care.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      <section
  className="relative w-full h-[90vh] sm:h-[100vh] flex items-center justify-center bg-black"
  style={{
    backgroundImage: "url('/Generated Image September 24, 2025 - 6_21PM.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>
  {/* Mobile-specific overlay to darken more for readability */}
  <div className="absolute inset-0 bg-black/40 sm:bg-black/30"></div>

  {/* Content wrapper */}
  <div className="relative z-10 text-center px-4 sm:px-0">
    <h1 className="text-white text-3xl sm:text-6xl font-bold mb-4">
      Bhanushali Associates Law Firm
    </h1>
    <p className="text-gray-200 text-sm sm:text-lg mb-6">
      Your Trusted Legal Partner in Justice
    </p>
    <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg text-sm sm:text-base transition-all duration-300">
      Book Consultation
    </button>
  </div>
</section>
  <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in">
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-8"></div>
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Bhanushali Associates<br />Law Firm
          </h1>
          <p className="text-xl md:text-2xl text-[#D4AF37] font-light mb-12 italic drop-shadow-lg">
            Your Trusted Legal Partner in Justice
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => scrollToSection('contact-section')}
              className="bg-[#D4AF37] text-[#0A1F44] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2 group"
            >
              <span>Book Consultation</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('about-section')}
              className="bg-[#0A1F44] text-white border-2 border-[#D4AF37] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-12">
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto"></div>
          </div>
        </div>
      </section>

      <section id="about-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
              About Our Firm
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Bhanushali Associates is a full-service law firm dedicated to delivering justice with integrity, diligence, and excellence.
              We provide comprehensive legal services across multiple practice areas, ensuring our clients receive the best possible representation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
              Our Practice Areas
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">Comprehensive legal services tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#D4AF37] group cursor-pointer"
                  onClick={() => onNavigate('practice')}
                >
                  <div className="bg-[#0A1F44] w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('practice')}
              className="text-[#D4AF37] font-semibold hover:text-[#0A1F44] transition-colors inline-flex items-center space-x-2 group"
            >
              <span>View All Practice Areas</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0A1F44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg text-white/80">Our commitment to excellence sets us apart</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-[#D4AF37] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-10 w-10 text-[#0A1F44]" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-[#D4AF37] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/Generated Image September 24, 2025 - 6_33PM.png"
                alt="Advocate Karan Bhanushali"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                Meet the Founder
              </h2>
              <div className="h-1 w-20 bg-[#D4AF37] mb-6"></div>
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-4">Advocate Karan Bhanushali</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                With years of dedicated legal practice, Advocate Karan Bhanushali has established himself as a trusted name in the legal community.
                His commitment to justice, combined with deep legal expertise across multiple domains, has helped countless clients navigate complex legal challenges successfully.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Specializing in Family Law, Criminal Law, Civil Litigation, Corporate Law, and Property Law, he brings a comprehensive approach to every case,
                ensuring clients receive personalized attention and expert representation.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="bg-[#D4AF37] text-[#0A1F44] px-6 py-3 rounded-md font-semibold hover:bg-[#C4A137] transition-all duration-300 inline-flex items-center space-x-2 group"
              >
                <span>Know More</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
              Client Testimonials
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">What our clients say about us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <p className="text-[#0A1F44] font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-section" className="py-16 bg-gradient-to-br from-[#0A1F44] to-[#0D2952] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a consultation and let us help you navigate your legal challenges with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#D4AF37] text-[#0A1F44] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Book Consultation
            </button>
            <a
              href="https://wa.me/917021029328"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0A1F44] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex items-center justify-center space-x-2"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
