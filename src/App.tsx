import { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(true);

  function handleSubmit() {
    setIsSubmitted(false);
  }
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center p-4">
      {isSubmitted ? (
        <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-6">
              Calculate Future Partner's Beauty
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder="First letter of your name"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl 
                           text-gray-200 placeholder-gray-400 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 
                           transition-all duration-300"
              />

              <input
                type="number"
                name="age"
                placeholder="Your current age"
                required
                min="18"
                max="100"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl 
                           text-gray-200 placeholder-gray-400 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 
                           transition-all duration-300"
              />

              <input
                type="text"
                name="city"
                placeholder="Your current city"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl 
                           text-gray-200 placeholder-gray-400 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 
                           transition-all duration-300"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-3 rounded-xl 
                         hover:bg-blue-700 transition-colors duration-300 
                         flex items-center justify-center font-semibold"
            >
              Calculate Beauty
            </motion.button>
          </form>
        </div>
      ) : (
        <div className="w-full max-w-4xl h-[80vh] flex items-center justify-center">
          <video
            className="max-w-full max-h-full rounded-2xl shadow-2xl object-cover"
            src="/Meme.mp4"
            autoPlay
            loop
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default App;
