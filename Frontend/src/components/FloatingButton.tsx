import React, { useState } from 'react';
import { FaWhatsapp, FaRocketchat, FaDiscord, FaTimes } from 'react-icons/fa';
import AIwidget from './AIwidget';

function FloatingButton() {
  const [showAIWidget, setShowAIWidget] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDiscordClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowAIWidget(true);
    }, 3000); // simulate loading time (adjust as needed)
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Show AI Widget or Loader */}
      {(loading || showAIWidget) && (
        <div className="relative top-[170px] right-[260px] rounded-xl drop-shadow-2xl ">
          <div className="flex justify-end ">
            <button
              onClick={() => {
                setShowAIWidget(false);
                setLoading(false);
              }}
              className="text-gray-500 hover:text-gray-900 transition z-10"
              aria-label="Close AI Widget"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
          <div className="p-4  flex items-center justify-center">
            {loading ? (
              <div className="w-6 h-6 -mr-60 top-10 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin" />
            ) : (
              <AIwidget />
            )}
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className={`flex flex-col items-end gap-3 transition-all duration-300 ${showAIWidget || loading ? 'mb-32' : ''}`}>
        {/* WhatsApp */}
        <a
          href="https://whatsapp.com/channel/0029Vao5Mx8DTkKAYtRf382R"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 shadow-lg transition-all"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="text-xl" />
        </a>

        {/* Telegram */}
        <a
          href="https://agentivehub.com/chat/49559140-605e-458a-ab98-0708f11ddb21"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 shadow-lg transition-all"
          aria-label="Connect with Telegram Bot">
          <FaRocketchat className="text-xl" />
        </a>

        {/* Discord Button (hidden when widget is open or loading) */}
        {!showAIWidget && !loading && (
          <button
            onClick={handleDiscordClick}
            className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:bg-gray-300"
            aria-label="Open AI Widget"
          >
            <FaDiscord className="text-xl" />
            <img
              src="data:image/png;base64,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"
              alt="elevenlab"
              className="rounded-full p-2"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default FloatingButton;
