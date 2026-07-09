import { TriangleAlert, TrendingUp, DollarSign } from "lucide-react";

function AnomalyList() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mt-8 border border-gray-200">

      <div className="flex items-center gap-3 mb-6">

        <div className="bg-red-100 p-3 rounded-xl">
          <TriangleAlert className="text-red-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            AI Cost Insights
          </h2>

          <p className="text-gray-500">
            AI detected unusual cloud spending patterns.
          </p>
        </div>

      </div>

      <div className="space-y-5">

        <div className="border rounded-xl p-4 hover:bg-gray-50 transition">

          <div className="flex justify-between">

            <div>

              <h3 className="font-semibold text-lg">
                EC2 Spend Spike
              </h3>

              <p className="text-gray-500 mt-2">
                Spend increased by 18% in us-east-1 because
                four new EC2 instances were launched.
              </p>

            </div>

            <TrendingUp className="text-red-500" />

          </div>

          <div className="mt-4 flex items-center gap-3">

            <DollarSign className="text-green-600" />

            <span className="font-medium">
              Potential Savings: $420/month
            </span>

          </div>

        </div>

        <div className="border rounded-xl p-4 hover:bg-gray-50 transition">

          <div className="flex justify-between">

            <div>

              <h3 className="font-semibold text-lg">
                S3 Storage Growth
              </h3>

              <p className="text-gray-500 mt-2">
                Storage increased by 12%.
                Old backup files can be archived.
              </p>

            </div>

            <TrendingUp className="text-orange-500" />

          </div>

          <div className="mt-4 flex items-center gap-3">

            <DollarSign className="text-green-600" />

            <span className="font-medium">
              Potential Savings: $190/month
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AnomalyList;