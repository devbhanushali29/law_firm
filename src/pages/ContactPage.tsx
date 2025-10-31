import { Phone, Mail, MapPin, Clock, MessageCircle, Youtube } from 'lucide-react';

export default function ContactPage() {

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0A1F44] via-[#0D2952] to-[#0A1F44] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Get in Touch with Us
            </h1>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-xl text-white/90">
              We're here to assist you with your legal needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-[#0A1F44] mb-6">
                Contact Information
              </h2>
              <div className="h-1 w-20 bg-[#D4AF37] mb-8"></div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-[#0A1F44] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                    <Phone className="h-6 w-6 text-[#D4AF37] group-hover:text-[#0A1F44]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1F44] mb-2">Phone</h3>
                    <a href="tel:+917021029328" className="text-gray-700 hover:text-[#D4AF37] transition-colors text-lg">
                      +91 7021029328
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-[#0A1F44] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                    <Mail className="h-6 w-6 text-[#D4AF37] group-hover:text-[#0A1F44]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1F44] mb-2">Email</h3>
                    <a href="mailto:bhanushaliassociateslawfirm@gmail.com" className="text-gray-700 hover:text-[#D4AF37] transition-colors block break-all">
                      bhanushaliassociateslawfirm@gmail.com
                    </a>
                    <a href="mailto:adv.karanbhanushali@gmail.com" className="text-gray-700 hover:text-[#D4AF37] transition-colors block break-all">
                      adv.karanbhanushali@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-[#0A1F44] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                    <MapPin className="h-6 w-6 text-[#D4AF37] group-hover:text-[#0A1F44]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1F44] mb-2">Office Address</h3>
                    <p className="text-gray-700">
                      Office No. B-5, Sai Rajya, B Bldg. C.H.S. Ltd.,<br />
                      Shirdi Nagar, Bhayandar (E),<br />
                      Thane - 401 105
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-[#0A1F44] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                    <Clock className="h-6 w-6 text-[#D4AF37] group-hover:text-[#0A1F44]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1F44] mb-2">Office Hours</h3>
                    <p className="text-gray-700">
                      10:00 AM – 8:00 PM<br />
                      Monday to Sunday
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-[#0A1F44] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                    <Youtube className="h-6 w-6 text-[#D4AF37] group-hover:text-[#0A1F44]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1F44] mb-2">Follow Us</h3>
                    <a
                      href="https://youtube.com/@adv.karanbhanushali?si=wMOg8kLUWG6_gOXx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#D4AF37] transition-colors"
                    >
                      YouTube Channel
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-playfair text-3xl font-bold text-[#0A1F44] mb-6">
                Connect with Us Instantly
              </h2>
              <div className="h-1 w-20 bg-[#D4AF37] mb-8"></div>

              <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-lg shadow-2xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                      <MessageCircle className="h-12 w-12 text-[#25D366]" />
                    </div>
                  </div>
                  <div className="flex-1 text-white text-center sm:text-left">
                    <h3 className="font-playfair text-2xl font-bold mb-3">
                      Let's Talk on WhatsApp
                    </h3>
                    <p className="text-white/90 text-lg mb-6 leading-relaxed">
                      Need quick legal guidance or want to book a consultation? Click below to instantly connect with our legal team on WhatsApp.
                    </p>
                    <a
                      href="https://wa.me/917021029328"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-white text-[#25D366] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group animate-pulse hover:animate-none"
                    >
                      <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-[#0A1F44] mb-6 text-center">
            Find Us on the Map
          </h2>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-8"></div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.8887847!2d72.8552!3d19.3073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzI2LjMiTiA3MsKwNTEnMTguNyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bhanushali Associates Office Location"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
