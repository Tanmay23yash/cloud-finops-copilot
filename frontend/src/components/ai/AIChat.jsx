import { Bot, User, Send } from "lucide-react";
import { useState } from "react";

function AIChat() {
  const [message, setMessage] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-8">

      <div className="flex items-center gap-3 mb-6">

        <div className="bg-blue-100 p-3 rounded-xl">
          <Bot className="text-blue-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            FinOps Copilot
          </h2>

          <p className="text-gray-500">
            Ask questions about your cloud spending.
          </p>
        </div>

      </div>

      {/* User Message */}

      <div className="flex gap-3 mb-6">

        <div className="bg-blue-600 p-2 rounded-full h-fit">
          <User className="text-white" size={18} />
        </div>

        <div className="bg-blue-50 rounded-xl p-4 w-fit max-w-2xl">

          <p className="font-semibold mb-1">
            You
          </p>

          <p>
            What caused the EC2 spend spike yesterday?
          </p>

        </div>

      </div>

      {/* AI Response */}

      <div className="flex gap-3 mb-8">

        <div className="bg-green-600 p-2 rounded-full h-fit">
          <Bot className="text-white" size={18} />
        </div>

        <div className="bg-green-50 rounded-xl p-4 max-w-2xl">

          <p className="font-semibold mb-1">
            FinOps Copilot
          </p>

          <p>
            Three EC2 instances were launched in us-east-1,
            increasing compute costs by approximately 38%.
            Rightsizing these instances could save nearly
            $180/month.
          </p>

        </div>

      </div>

      {/* Input */}

      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Ask anything about cloud costs..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-xl flex items-center justify-center transition">

          <Send />

        </button>

      </div>

    </div>
  );
}

export default AIChat;