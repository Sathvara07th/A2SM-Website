export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A365D] text-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-8 lg:mb-0">
            <img
              src="https://static.readdy.ai/image/57610a2a25a44577dbc5593c17f23216/faa8733677711f5e76f5629a776fe076.jpeg"
              alt="A2SM Global Innovations"
              className="h-16 w-auto"
            />
          </div>
          <div className="flex space-x-6">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer">
              <i className="ri-facebook-fill text-xl"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer">
              <i className="ri-twitter-fill text-xl"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer">
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer">
              <i className="ri-instagram-line text-xl"></i>
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('export-services')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Export Services
                </button>
              </li>
            </ul>
          </div>

          {/* Export Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Export Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Product Sourcing</li>
              <li>Quality Inspection</li>
              <li>Packaging & Processing</li>
              <li>Logistics Support</li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xl font-bold mb-4">Certifications</h4>
            <ul className="space-y-3 text-gray-300">
              <li>IEC Export License</li>
              <li>MSME Registered</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Pune, Maharashtra, India</li>
              <li>
                <a href="tel:+917218682605" className="hover:text-white transition-colors cursor-pointer">
                  +91 7218682605
                </a>
              </li>
              <li>
                <a href="https://wa.me/917218682605" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#0F1F3D] py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} A2SM Global Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}