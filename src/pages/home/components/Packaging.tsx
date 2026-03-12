export default function Packaging() {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border-2 border-[#4A90E2] shadow-xl">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20export%20packaging%20of%20jaggery%20products%20in%20food%20grade%20laminated%20bags%20and%20strong%20cartons%2C%20clean%20warehouse%20setting%20with%20quality%20control%20labels%2C%20international%20shipping%20ready%2C%20organized%20stacking%2C%20professional%20logistics%20photography&width=800&height=600&seq=packaging1&orientation=landscape"
                alt="Export Packaging"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="pl-0 lg:pl-12">
            <h2 className="text-5xl font-bold text-[#1A365D] mb-8">
              Packaging
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Products packed using export quality packaging ensuring product freshness and safety during transportation. Packaging options include food grade laminated bags, strong cartons and secure container loading as per buyer requirements.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#4A90E2] flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <p className="text-gray-700">Food grade laminated bags for freshness</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#4A90E2] flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <p className="text-gray-700">Strong cartons for safe transportation</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#4A90E2] flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <p className="text-gray-700">Secure container loading as per requirements</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#4A90E2] flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <p className="text-gray-700">Quality control labels and documentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}