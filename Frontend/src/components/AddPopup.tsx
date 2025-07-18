import React, { useState, useEffect } from "react";
import { X, Play, Search, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PopupBannerAds = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentAd, setCurrentAd] = useState(null);
  const navigate = useNavigate();

  const ads = [
    {
      id: 1,
      title: "Test Your Knowledge!",
      description: "Take our interactive quiz and discover how much you really know. Challenge yourself with fun questions!",
      buttonText: "Play the Quiz",
      icon: <Play className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500",
      section: "/quiz",
      img: "/about/quiz4.jpg"
    },
    {
      id: 2,
      title: "Discover Our Services",
      description: "Explore our comprehensive range of services designed to meet your needs. Find the perfect solution for you!",
      buttonText: "Explore Services",
      icon: <Search className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-500",
      section: "/services",
      img: "/services/img7.png"
    },
    {
      id: 3,
      title: "Get Instant Help",
      description: "Chat with our intelligent AI assistant 24/7. Get answers, support, and guidance whenever you need it!",
      buttonText: "Chat Now",
      icon: <MessageCircle className="w-5 h-5" />,
      gradient: "from-green-500 to-emerald-500",
      section: "",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  useEffect(() => {
    const randomAd = ads[Math.floor(Math.random() * ads.length)];
    setCurrentAd(randomAd);

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setShowPopup(false);

  const handleNavigation = (section) => {
    if(section == ""){
      closePopup();
      setTimeout(() => {
        window.location.href = "https://agentivehub.com/chat/49559140-605e-458a-ab98-0708f11ddb21"
      }, 300);
    }
    closePopup();
    setTimeout(() => {
      navigate(section);
    }, 300);
  };

  return (
    <AnimatePresence>
      {showPopup && currentAd && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ y: -50, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 50, scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all hover:scale-110 shadow-sm"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Content Section (Left) */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-gradient-to-r ${currentAd.gradient} text-white text-sm font-medium`}>
                    {currentAd.icon}
                    <span>Featured</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{currentAd.title}</h2>
                  <p className="text-gray-600 mb-6">{currentAd.description}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleNavigation(currentAd.section)}
                    className={`w-full bg-gradient-to-r ${currentAd.gradient} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all flex items-center justify-center gap-2`}
                  >
                    {currentAd.icon}
                    {currentAd.buttonText}
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">No credit card required</p>
                </div>
              </div>

              {/* Image Section (Right) */}
              <div className="w-full md:w-1/2 h-48 md:h-auto relative">
                <img
                  src={currentAd.img}
                  alt={currentAd.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${currentAd.gradient}`} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupBannerAds;