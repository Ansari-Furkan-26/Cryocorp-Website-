import React from 'react'
import { FaWhatsapp, FaTelegram, FaDiscord, FaRocketchat  } from "react-icons/fa"; // Importing icons

function FloatingButton() {
  return (
    <div className="fixed bottom-36 right-6 z-30 flex flex-col gap-3">
        {/* WhatsApp */}
        <a
            href="https://whatsapp.com/channel/0029Vao5Mx8DTkKAYtRf382R"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Contact us on WhatsApp"
        >
            <FaWhatsapp className="text-xl" />

        </a>

        {/* Telegram Bot */}
        <a
            href="https://agentivehub.com/chat/49559140-605e-458a-ab98-0708f11ddb21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Connect with our Telegram Bot"
        >
            <FaRocketchat  className="text-xl" />
        </a>

        {/* Discord Bot */}
        <a
            href="https://discord.com/yourdiscordbot"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Join our Discord Server"
        >
            <FaDiscord className="text-xl" />
        </a>
    </div>
  )
}

export default FloatingButton;