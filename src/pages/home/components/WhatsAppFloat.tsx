export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917218682605"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 z-50 animate-pulse cursor-pointer"
      style={{ boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)' }}
    >
      <i className="ri-whatsapp-line text-white text-3xl"></i>
    </a>
  );
}