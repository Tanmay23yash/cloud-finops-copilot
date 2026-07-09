import { Download, FileText } from "lucide-react";
import { generateExecutiveReport } from "../../services/generateReport";

function ReportCard({ darkMode }) {
  return (
    <div
      className={`rounded-2xl shadow-sm border p-6 hover:shadow-lg transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">

        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
          <FileText size={24} />
        </div>

        <div>
          <h2
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Weekly FinOps Report
          </h2>

          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Download AI-generated cloud cost reports.
          </p>
        </div>

      </div>

      <button
        onClick={generateExecutiveReport}
        className="
          flex items-center gap-2
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-5
          py-3
          rounded-xl
          transition-all
        "
      >
        <Download size={18} />
        Download Report
      </button>

    </div>
  );
}

export default ReportCard;