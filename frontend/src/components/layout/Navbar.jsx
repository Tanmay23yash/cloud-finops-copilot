import { Bell, Cloud, CircleUserRound } from "lucide-react";

function Navbar() {
  const today = new Date().toLocaleDateString();

  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">

      <div className="flex items-center gap-4">

        <div className="bg-blue-600 p-3 rounded-xl text-white">
          <Cloud size={26} />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Cloud FinOps Copilot
          </h1>

          <p className="text-gray-500">
            AI Cost Intelligence Dashboard
          </p>
        </div>

      </div>

      <div className="flex items-center gap-8">

        <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-medium">
          ● Backend Connected
        </div>

        <span className="font-semibold text-gray-700">
          {today}
        </span>

        <Bell
          className="text-gray-600 cursor-pointer"
          size={24}
        />

        <CircleUserRound
          className="text-gray-600 cursor-pointer"
          size={38}
        />

      </div>

    </header>
  );
}

export default Navbar;