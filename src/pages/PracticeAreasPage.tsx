import { Heart, Shield, Scale, Briefcase, Home, FileText, ArrowRight } from 'lucide-react';

interface PracticeAreasPageProps {
  onNavigate: (page: string) => void;
}

export default function PracticeAreasPage({ onNavigate }: PracticeAreasPageProps) {
  const practiceAreas = [
    {
      icon: Heart,
      title: 'Family Law',
      description: 'We understand that family matters are deeply personal and emotionally challenging. Our team provides compassionate legal support in all aspects of family law.',
      services: [
        'Divorce proceedings and mutual consent divorce',
        'Child custody and visitation rights',
        'Maintenance and alimony matters',
        'Domestic violence cases and protection orders',
        'Matrimonial disputes and settlements',
        'Adoption and guardianship matters'
      ]
    },
    {
      icon: Shield,
      title: 'Criminal Law',
      description: 'Facing criminal charges can be overwhelming. We provide robust defense and expert guidance through every stage of criminal proceedings.',
      services: [
        'Bail applications and anticipatory bail',
        'FIR quashing and legal consultation',
        'Trial representation in criminal courts',
        'Appeals and revisions',
        'White-collar crime defense',
        'Investigation support and legal advice'
      ]
    },
    {
      icon: Scale,
      title: 'Civil Litigation',
      description: 'Our civil litigation practice covers a wide range of disputes, ensuring your rights are protected and justice is served.',
      services: [
        'Property and land disputes',
        'Contract enforcement and breach matters',
        'Civil recovery and money suits',
        'Injunction and restraining orders',
        'Partition suits and inheritance disputes',
        'Defamation and reputation protection'
      ]
    },
    {
      icon: Briefcase,
      title: 'Corporate Law',
      description: 'We provide comprehensive corporate legal services to businesses of all sizes, ensuring compliance and protecting your business interests.',
      services: [
        'Company formation and incorporation',
        'Corporate compliance and governance',
        'Business contract drafting and review',
        'Mergers, acquisitions, and restructuring',
        'Intellectual property protection',
        'Employment law and HR matters'
      ]
    },
    {
      icon: Home,
      title: 'Property & Real Estate Law',
      description: 'Navigate property transactions and disputes with confidence. We handle all aspects of real estate law with precision and expertise.',
      services: [
        'Title verification and due diligence',
        'Property registration and transfer',
        'Sale and purchase agreements',
        'Property dispute resolution',
        'Landlord-tenant matters',
        'Real estate documentation'
      ]
    },
    {
      icon: FileText,
      title: 'Legal Drafting & Documentation',
      description: 'Properly drafted legal documents are essential for protecting your interests. We provide expert drafting services across all legal domains.',
      services: [
        'Contracts and business agreements',
        'Memorandum of Understanding (MoUs)',
        'Wills and estate planning documents',
        'Legal notices and demand letters',
        'Affidavits and declarations',
        'Power of Attorney and deeds'
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0A1F44] via-[#0D2952] to-[#0A1F44] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Our Practice Areas
            </h1>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive legal services tailored to meet your specific needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-[#0A1F44] to-[#0D2952] p-8 flex flex-col justify-center items-center text-center">
                      <div className="bg-[#D4AF37] w-20 h-20 rounded-full flex items-center justify-center mb-4">
                        <Icon className="h-10 w-10 text-[#0A1F44]" />
                      </div>
                      <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-2">
                        {area.title}
                      </h3>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {area.description}
                      </p>
                      <h4 className="font-semibold text-[#0A1F44] text-lg mb-4">Our Services Include:</h4>
                      <ul className="space-y-3">
                        {area.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-start">
                            <span className="text-[#D4AF37] mr-3 mt-1">▪</span>
                            <span className="text-gray-700">{service}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => onNavigate('contact')}
                        className="mt-6 bg-[#D4AF37] text-[#0A1F44] px-6 py-3 rounded-md font-semibold hover:bg-[#C4A137] transition-all duration-300 inline-flex items-center space-x-2 group"
                      >
                        <span>Consult Now</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0A1F44] to-[#0D2952] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Need Expert Legal Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't navigate legal challenges alone. Our experienced team is ready to provide the expert guidance and representation you need.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#D4AF37] text-[#0A1F44] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex items-center space-x-2 group"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
