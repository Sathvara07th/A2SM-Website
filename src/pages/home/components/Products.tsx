import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Organic Jaggery',
    description: 'Traditional natural sweetener made from pure sugarcane juice.',
    image: 'https://readdy.ai/api/search-image?query=organic%20jaggery%20blocks%20stacked%20beautifully%20on%20clean%20white%20surface%20with%20natural%20lighting%2C%20traditional%20Indian%20sweetener%2C%20pure%20golden%20brown%20color%2C%20simple%20minimalist%20background%2C%20professional%20product%20photography&width=600&height=800&seq=prod1&orientation=portrait',
  },
  {
    id: 2,
    name: 'Natural Jaggery',
    description: 'Unrefined healthy alternative to refined sugar.',
    image: 'https://readdy.ai/api/search-image?query=natural%20jaggery%20chunks%20and%20pieces%20displayed%20on%20white%20background%2C%20unrefined%20brown%20sugar%20alternative%2C%20warm%20golden%20tones%2C%20clean%20simple%20setting%2C%20high%20quality%20product%20photography&width=600&height=800&seq=prod2&orientation=portrait',
  },
  {
    id: 3,
    name: 'Jaggery Powder',
    description: 'Fine powdered jaggery used in cooking and food processing.',
    image: 'https://readdy.ai/api/search-image?query=fine%20jaggery%20powder%20in%20glass%20bowl%20on%20white%20surface%2C%20powdered%20natural%20sweetener%2C%20golden%20brown%20color%2C%20clean%20minimalist%20background%2C%20professional%20food%20photography%20with%20soft%20lighting&width=600&height=800&seq=prod3&orientation=portrait',
  },
  {
    id: 4,
    name: 'Jaggery Cubes',
    description: 'Small jaggery cubes ideal for tea, beverages and snacks.',
    image: 'https://readdy.ai/api/search-image?query=small%20jaggery%20cubes%20arranged%20neatly%20on%20white%20background%2C%20uniform%20cube%20shapes%2C%20golden%20brown%20natural%20sweetener%2C%20clean%20simple%20setting%2C%20professional%20product%20photography&width=600&height=800&seq=prod4&orientation=portrait',
  },
];

export default function Products() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="products" className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#1A365D] mb-16">
          Our Products
        </h2>

        <div className="flex gap-5 items-stretch">
          {products.map((product, index) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                hoveredIndex === index ? 'flex-[1.3]' : 'flex-1'
              }`}
              style={{ minHeight: '500px' }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {product.name}
                </h3>
                <p
                  className={`text-white/90 text-base transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                  }`}
                >
                  {product.description}
                </p>
                {hoveredIndex === index && (
                  <div className="mt-4 flex items-center text-white font-medium cursor-pointer hover:text-[#4A90E2] transition-colors">
                    Learn More <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}