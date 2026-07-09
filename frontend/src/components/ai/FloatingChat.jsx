import { useState } from "react";
import { Bot, X } from "lucide-react";
import AIChat from "./AIChat";

function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed
            bottom-8
            right-8
            z-50
            w-16
            h-16
            rounded-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            shadow-2xl
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:scale-110
          "
        >
          <Bot size={30} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="
            fixed
            bottom-8
            right-8
            w-[420px]
            h-[600px]
            bg-white
            rounded-2xl
            shadow-2xl
            border
            border-gray-200
            flex
            flex-col
            overflow-hidden
            z-50
          "
        >
          {/* Header */}
          <div className="bg-blue-600 text-white px-5 py-4 flex justify-between items-center">

            <div>

              <h2 className="font-bold text-lg">
                🤖 FinOps Copilot
              </h2>

              <p className="text-sm opacity-90">
                AI Cloud Assistant
              </p>

            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="hover:rotate-90 transition-all duration-300"
            >
              <X size={22} />
            </button>

          </div>

          {/* Chat */}

          <div className="flex-1 overflow-auto p-4">

            <AIChat />

          </div>

        </div>
      )}
    </>
  );
}

export default FloatingChat;