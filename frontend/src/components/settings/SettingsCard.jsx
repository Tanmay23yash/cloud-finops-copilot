import { Settings } from "lucide-react";

function SettingsCard({ darkMode }) {
  return (
    <div
      className={`rounded-2xl shadow-sm border p-6 hover:shadow-lg transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center gap-3 mb-6">

        <div
          className={`p-3 rounded-xl ${
            darkMode
              ? "bg-gray-700 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          <Settings size={24} />
        </div>

        <div>

          <h2
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Preferences
          </h2>

          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Personalize your Cloud FinOps experience.
          </p>

        </div>

      </div>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span
            className={`${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Cloud Provider
          </span>

          <span
            className={`font-semibold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            AWS
          </span>
        </div>

        <div className="flex justify-between">
          <span
            className={`${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Currency
          </span>

          <span
            className={`font-semibold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            USD
          </span>
        </div>

        <div className="flex justify-between">
          <span
            className={`${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Theme
          </span>

          <span
            className={`font-semibold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {darkMode ? "Dark" : "Light"}
          </span>
        </div>

        <div className="flex justify-between">
          <span
            className={`${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Region
          </span>

          <span
            className={`font-semibold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            us-east-1
          </span>
        </div>

      </div>

      <button
        className="
          mt-6
          bg-gray-800
          hover:bg-black
          dark:bg-blue-600
          dark:hover:bg-blue-700
          text-white
          px-5
          py-3
          rounded-xl
          transition-all
        "
      >
        Save Preferences
      </button>

    </div>
  );
}

export default SettingsCard;