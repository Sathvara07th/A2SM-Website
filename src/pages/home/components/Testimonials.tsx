const testimonials = [
  {
    id: 1,
    text: 'A2SM Global Innovations has consistently delivered premium quality jaggery products. Their attention to quality control and packaging standards is exceptional. We have been importing from them for our organic food chain and our customers love the authentic taste.',
    name: 'Sarah Mitchell',
    designation: 'Procurement Manager',
    company: 'Organic Foods Ltd.',
    rating: 5,
    initials: 'SM',
    color: 'from-[#1A365D] to-[#2B6CB0]',
  },
  {
    id: 2,
    text: 'Professional service from start to finish. The team handled all export documentation efficiently and ensured timely delivery. Their knowledge of international trade regulations and supply chain management is impressive. Highly recommended export partner.',
    name: 'David Chen',
    designation: 'Import Director',
    company: 'Global Naturals Inc.',
    rating: 5,
    initials: 'DC',
    color: 'from-[#2B6CB0] to-[#4A90E2]',
  },
  {
    id: 3,
    text: 'Reliable and trustworthy export company. The jaggery products are always fresh, properly packaged and arrive on schedule. Their commitment to maintaining quality standards and transparent communication makes them our preferred supplier.',
    name: 'Maria Rodriguez',
    designation: 'Senior Buyer',
    company: 'International Trading Co.',
    rating: 5,
    initials: 'MR',
    color: 'from-[#1A365D] to-[#4A90E2]',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#E8F4FF] rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#DBEAFE] rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#EBF5FF] text-[#4A90E2] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Client Reviews
          </span>
          <h2 className="text-4xl font-bold text-[#1A365D] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Trusted by international buyers across the globe for quality, reliability and professional export services.
          </p>
          {/* Divider */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-10 h-0.5 bg-[#4A90E2]"></div>
            <div className="w-3 h-3 rounded-full bg-[#4A90E2]"></div>
            <div className="w-10 h-0.5 bg-[#4A90E2]"></div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-400 border border-gray-100 hover:-translate-y-2 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-amber-400 text-base"></i>
                ))}
              </div>

              {/* Quote Icon */}
              <div className="mb-4">
                <i className="ri-double-quotes-l text-4xl text-[#4A90E2]/20 leading-none"></i>
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed text-sm flex-1 mb-8">
                {t.text}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 mb-6"></div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <span className="text-white font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-[#1A365D] text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.designation}</p>
                  <p className="text-xs text-[#4A90E2] font-medium">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust badge */}
        <div className="mt-14 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-shield-check-fill text-[#4A90E2] text-lg"></i>
            </div>
            <span>Verified International Buyers</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-global-line text-[#4A90E2] text-lg"></i>
            </div>
            <span>Clients Across Multiple Countries</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-star-fill text-amber-400 text-lg"></i>
            </div>
            <span>5-Star Rated Export Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
