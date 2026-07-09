import {
  Bell,
  Cloud,
  CircleUserRound,
  Sun,
  Moon,
} from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const today = new Date().toLocaleDateString();

  return (
    <header
      className={`
        h-20
        border-b
        flex
        items-center
        justify-between
        px-8
        shadow-sm
        transition-all
        duration-300
        ${
          darkMode
            ? "bg-gray-900 border-gray-700"
            : "bg-white border-gray-200"
        }
      `}
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        <div className="bg-blue-600 p-3 rounded-xl text-white">
          <Cloud size={26} />
        </div>

        <div>

          <h1
            className={`text-3xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Cloud FinOps Copilot
          </h1>

          <p
            className={`${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            AI Cost Intelligence Dashboard
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-8">

        <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-medium">
          ● Backend Connected
        </div>

        <span
          className={`font-semibold ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {today}
        </span>

        {/* Theme Toggle */}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
            w-11
            h-11
            rounded-full
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:scale-110
            bg-gray-100
            hover:bg-blue-100
          "
        >
          {darkMode ? (
            <Sun className="text-yellow-500" size={22} />
          ) : (
            <Moon className="text-gray-700" size={22} />
          )}
        </button>

        <Bell
          className={`cursor-pointer ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
          size={24}
        />

        <CircleUserRound
          className={`cursor-pointer ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
          size={38}
        />

      </div>

    </header>
  );
}

export default Navbar;