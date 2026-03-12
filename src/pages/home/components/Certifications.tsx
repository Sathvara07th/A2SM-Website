const certifications = [
  {
    name: 'IEC Export License',
    icon: 'ri-file-shield-2-line',
  },
  {
    name: 'MSME Registered Enterprise',
    icon: 'ri-government-line',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#1A365D] mb-16">
          Certifications
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-12 flex flex-col items-center justify-center cursor-pointer hover:scale-105"
              style={{ width: '280px', height: '200px' }}
            >
              <div className="w-24 h-24 rounded-full bg-[#E8F4F8] flex items-center justify-center mb-6">
                <i className={`${cert.icon} text-5xl text-[#4A90E2]`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] text-center">
                {cert.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}