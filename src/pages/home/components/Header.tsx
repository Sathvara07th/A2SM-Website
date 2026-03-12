import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://static.readdy.ai/image/57610a2a25a44577dbc5593c17f23216/faa8733677711f5e76f5629a776fe076.jpeg"
              alt="A2SM Global Innovations"
              className="h-20 w-auto cursor-pointer"
              onClick={() => scrollToSection('home')}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <button onClick={() => scrollToSection('home')} className="text-[#2C3E50] hover:text-[#4A90E2] font-medium transition-colors duration-300 relative group whitespace-nowrap cursor-pointer">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A90E2] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[#2C3E50] hover:text-[#4A90E2] font-medium transition-colors duration-300 relative group whitespace-nowrap cursor-pointer">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A90E2] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('products')} className="text-[#2C3E50] hover:text-[#4A90E2] font-medium transition-colors duration-300 relative group whitespace-nowrap cursor-pointer">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A90E2] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('certifications')} className="text-[#2C3E50] hover:text-[#4A90E2] font-medium transition-colors duration-300 relative group whitespace-nowrap cursor-pointer">
              Certifications
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A90E2] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[#2C3E50] hover:text-[#4A90E2] font-medium transition-colors duration-300 relative group whitespace-nowrap cursor-pointer">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A90E2] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Google Translate */}
            <div className="flex-shrink-0 min-w-[150px]">
              <div id="google_translate_element"></div>
            </div>

            {/* Contact Us CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-[#4A90E2] text-white rounded-lg font-medium hover:bg-[#357ABD] transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#2C3E50] text-2xl cursor-pointer"
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-[#2C3E50] hover:text-[#4A90E2] font-medium transition-colors duration-300 text-left cursor-pointer whitespace-nowrap">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[#2C3E50] hover:text-[#4A90E2] font-medium transition-colors duration-300 text-left cursor-pointer whitespace-nowrap">
                About
              </button>
              <button onClick={() => scrollToSection('products')} className="text-[#2C3E50] hover:text-[#4A90E2] font-medium transition-colors duration-300 text-left cursor-pointer whitespace-nowrap">
                Products
              </button>
              <button onClick={() => scrollToSection('certifications')} className="text-[#2C3E50] hover:text-[#4A90E2] font-medium transition-colors duration-300 text-left cursor-pointer whitespace-nowrap">
                Certifications
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#2C3E50] hover:text-[#4A90E2] font-medium transition-colors duration-300 text-left cursor-pointer whitespace-nowrap">
                Contact
              </button>
              <div className="pt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-2 bg-[#4A90E2] text-white rounded-lg font-medium hover:bg-[#357ABD] transition-colors duration-300 whitespace-nowrap cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
