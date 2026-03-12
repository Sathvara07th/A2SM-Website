const services = [
  {
    icon: 'ri-search-line',
    title: 'Product Sourcing',
    description: 'Reliable sourcing from verified farmers and processors.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Quality Inspection',
    description: 'Products tested and verified for quality and purity.',
  },
  {
    icon: 'ri-box-3-line',
    title: 'Packaging & Processing',
    description: 'Export grade packaging for safe international transportation.',
  },
  {
    icon: 'ri-ship-line',
    title: 'Logistics Support',
    description: 'Handling export documentation, freight coordination and shipment tracking.',
  },
];

export default function ExportServices() {
  return (
    <section id="export-services" className="py-20 bg-[#F0F8FF]">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#1A365D] mb-16">
          Export Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{ minHeight: '300px' }}
            >
              <div className="w-20 h-20 rounded-full bg-[#E8F4F8] flex items-center justify-center mx-auto mb-6">
                <i className={`${service.icon} text-4xl text-[#1A365D]`}></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1A365D] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed px-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}