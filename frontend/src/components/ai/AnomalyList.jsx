import { TriangleAlert, TrendingUp, DollarSign } from "lucide-react";

function AnomalyList({ darkMode }) {
  return (
    <div
      className={`rounded-2xl shadow-sm p-6 mt-8 border transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-red-100 p-3 rounded-xl">
          <TriangleAlert className="text-red-600" />
        </div>

        <div>
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            AI Cost Insights
          </h2>

          <p
            className={`${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            AI detected unusual cloud spending patterns.
          </p>
        </div>
      </div>

      <div className="space-y-5">

        {/* Insight 1 */}

        <div
          className={`border rounded-xl p-4 transition-all ${
            darkMode
              ? "border-gray-700 bg-gray-800 hover:bg-gray-700"
              : "border-gray-200 bg-white hover:bg-gray-50"
          }`}
        >
          <div className="flex justify-between">
            <div>

              <h3
                className={`font-semibold text-lg ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                EC2 Spend Spike
              </h3>

              <p
                className={`mt-2 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Spend increased by 18% in us-east-1 because
                four new EC2 instances were launched.
              </p>

            </div>

            <TrendingUp className="text-red-500" />
          </div>

          <div className="mt-4 flex items-center gap-3">

            <DollarSign className="text-green-500" />

            <span
              className={`font-medium ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Potential Savings: $420/month
            </span>

          </div>
        </div>

        {/* Insight 2 */}

        <div
          className={`border rounded-xl p-4 transition-all ${
            darkMode
              ? "border-gray-700 bg-gray-800 hover:bg-gray-700"
              : "border-gray-200 bg-white hover:bg-gray-50"
          }`}
        >
          <div className="flex justify-between">

            <div>

              <h3
                className={`font-semibold text-lg ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                S3 Storage Growth
              </h3>

              <p
                className={`mt-2 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Storage increased by 12%.
                Old backup files can be archived.
              </p>

            </div>

            <TrendingUp className="text-orange-500" />

          </div>

          <div className="mt-4 flex items-center gap-3">

            <DollarSign className="text-green-500" />

            <span
              className={`font-medium ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Potential Savings: $190/month
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}

export default AnomalyList;