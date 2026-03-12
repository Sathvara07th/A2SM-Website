import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'message') {
      if (value.length <= 500) {
        setFormData({ ...formData, [name]: value });
        setCharCount(value.length);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    if (charCount > 500) {
      alert('Message cannot exceed 500 characters');
      return;
    }

    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams();
      formBody.append('fullName', formData.fullName);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('subject', formData.subject);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d6paphkddmmni7ck7uv0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setCharCount(0);
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-5xl font-bold text-[#1A365D] mb-8">
              Get In Touch
            </h2>
            <h3 className="text-3xl font-medium text-[#4A90E2] mb-8">
              A2SM Global Innovations
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#E8F4F8] flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-map-pin-line text-2xl text-[#4A90E2]"></i>
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    HQ8R+RRC, Adarsh Nagar, Vinayak Nagar,<br />
                    Pimple Nilakh, Pimpri-Chinchwad,<br />
                    Maharashtra 411027, India
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8F4F8] flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-phone-line text-2xl text-[#4A90E2]"></i>
                </div>
                <a href="tel:+917218682605" className="text-lg text-gray-700 hover:text-[#4A90E2] transition-colors cursor-pointer">
                  +91 7218682605
                </a>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8F4F8] flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-whatsapp-line text-2xl text-[#4A90E2]"></i>
                </div>
                <a href="https://wa.me/917218682605" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-[#4A90E2] transition-colors cursor-pointer">
                  +91 7218682605
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8!2d73.79!3d18.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM3JzEyLjAiTiA3M8KwNDcnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form
              id="contact-form"
              data-readdy-form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-xl p-10"
            >
              <h3 className="text-3xl font-bold text-[#1A365D] mb-8">
                Send Us a Message
              </h3>

              {showSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg flex items-center">
                  <i className="ri-checkbox-circle-fill text-green-600 text-2xl mr-3"></i>
                  <p className="text-green-700 font-medium">
                    Thank you. Your message has been sent successfully.
                  </p>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full h-14 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-14 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-14 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-14 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition-all resize-none"
                  ></textarea>
                  <p className="text-sm text-gray-500 text-right mt-1">
                    {charCount}/500 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#4A90E2] text-white rounded-lg font-medium text-lg hover:bg-[#357ABD] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}