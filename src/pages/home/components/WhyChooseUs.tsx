const benefits = [
  'On time delivery commitment',
  'Superior product quality',
  'Trusted export partner',
  'Tested and verified products',
  'Professionally managed export firm',
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#1A365D] mb-16">
          Why Choose Us
        </h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 p-8 flex flex-col items-center justify-center text-center cursor-pointer"
              style={{ width: '240px', height: '180px' }}
            >
              <div className="w-14 h-14 rounded-full bg-[#E8F4F8] flex items-center justify-center mb-4">
                <i className="ri-checkbox-circle-fill text-3xl text-[#4A90E2]"></i>
              </div>
              <p className="text-[#2C3E50] font-medium text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}