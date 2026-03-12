export default function About() {
  const highlights = [
    {
      icon: 'ri-plant-line',
      text: 'Organic agricultural product exporter',
    },
    {
      icon: 'ri-truck-line',
      text: 'Supply chain driven export company',
    },
    {
      icon: 'ri-award-line',
      text: 'International quality standards',
    },
    {
      icon: 'ri-global-line',
      text: 'Reliable export partner worldwide',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-5xl font-bold text-[#1A365D] mb-8">
              About A2SM Global Innovations
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                A2SM Global Innovations is a professional export company specializing in organic and natural jaggery products for international markets. The company focuses on delivering premium quality agricultural products supported by export-grade packaging and reliable logistics.
              </p>
              <p>
                The company is led by <em>Aniket Mahajan, Managing Director</em>, who holds a PGDM in Operations and Supply Chain Management from IIM Indore. With strong knowledge of global trade and supply chain systems, the company aims to deliver consistent quality and dependable export services.
              </p>
              <p>
                Our mission is to build long-term relationships with international buyers by maintaining trust, transparency, superior packaging standards, and timely delivery across global markets.
              </p>
              <p className="font-medium text-[#4A90E2]">
                Established in January 2025, we are certified with IEC Export License and MSME registration, serving worldwide markets with dedication and professionalism.
              </p>
            </div>
          </div>

          {/* Right Column - Highlight Cards */}
          <div className="space-y-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex items-center border-l-4 border-[#4A90E2]"
              >
                <div className="w-12 h-12 rounded-full bg-[#E8F4F8] flex items-center justify-center mr-5 flex-shrink-0">
                  <i className={`${item.icon} text-2xl text-[#4A90E2]`}></i>
                </div>
                <p className="text-[#2C3E50] font-medium text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}