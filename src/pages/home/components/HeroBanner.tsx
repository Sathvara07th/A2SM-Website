import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    headline: 'Premium Organic Jaggery Exporter',
    text: 'Delivering natural and organic jaggery products to global markets.',
    cta: 'Contact Us',
    ctaAction: 'contact',
    bgImage: 'https://readdy.ai/api/search-image?query=premium%20organic%20jaggery%20blocks%20and%20powder%20displayed%20on%20rustic%20wooden%20surface%20with%20sugarcane%20stalks%20in%20soft%20natural%20lighting%2C%20clean%20minimalist%20background%20with%20warm%20golden%20tones%2C%20professional%20product%20photography%20style%2C%20high%20quality%20export%20grade%20presentation&width=1920&height=1080&seq=hero1&orientation=landscape',
  },
  {
    id: 2,
    headline: 'Trusted Global Supplier of Natural Sweeteners',
    text: 'High quality jaggery powder, cubes and blocks processed using traditional methods.',
    cta: 'Get Quote',
    ctaAction: 'contact',
    bgImage: 'https://readdy.ai/api/search-image?query=natural%20jaggery%20cubes%20and%20powder%20arranged%20beautifully%20with%20traditional%20Indian%20clay%20pots%20and%20sugarcane%20in%20warm%20ambient%20lighting%2C%20clean%20simple%20background%2C%20professional%20export%20product%20photography%20with%20golden%20brown%20tones&width=1920&height=1080&seq=hero2&orientation=landscape',
  },
  {
    id: 3,
    headline: 'Reliable Export Partner from India',
    text: 'Export grade packaging, quality inspection and timely shipment worldwide.',
    cta: 'WhatsApp Now',
    ctaAction: 'whatsapp',
    bgImage: 'https://readdy.ai/api/search-image?query=professional%20export%20packaging%20of%20jaggery%20products%20with%20shipping%20containers%20and%20quality%20certification%20documents%2C%20clean%20modern%20warehouse%20setting%20with%20soft%20lighting%2C%20international%20trade%20and%20logistics%20theme%20with%20warm%20professional%20tones&width=1920&height=1080&seq=hero3&orientation=landscape',
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleCTA = (action: string) => {
    if (action === 'whatsapp') {
      window.open('https://wa.me/917218682605', '_blank');
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="relative h-[85vh] overflow-hidden mt-24">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30"></div>
          </div>

          <div className="relative h-full container mx-auto px-6 flex items-center">
            <div className="w-full lg:w-[45%]">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {slide.headline}
              </h1>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                {slide.text}
              </p>
              <button
                onClick={() => handleCTA(slide.ctaAction)}
                className={`px-12 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer ${
                  slide.ctaAction === 'whatsapp'
                    ? 'bg-[#4A90E2] text-white hover:bg-[#357ABD]'
                    : 'bg-white text-[#4A90E2] hover:bg-gray-100'
                }`}
              >
                {slide.ctaAction === 'whatsapp' && (
                  <i className="ri-whatsapp-line mr-2"></i>
                )}
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}