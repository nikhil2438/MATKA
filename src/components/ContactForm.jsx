const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      
      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full max-w-xl border border-orange-200">
        
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-2">
          Get Callback
        </h1>
        <p className="text-center text-gray-500 mb-6">
          We’ll help you plan your perfect trip ✈️
        </p>

        <form className="space-y-5">
          
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300"
          >
            🚀 Get Callback
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;