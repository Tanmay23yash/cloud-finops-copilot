import { DollarSign, TrendingUp } from "lucide-react";

function SavingsSimulation() {
  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 mt-8 shadow-lg">

      <div className="flex items-center gap-3 mb-4">

        <DollarSign size={32} />

        <h2 className="text-2xl font-bold">
          Savings Simulation
        </h2>

      </div>

      <p className="opacity-90 mb-8">
        If you apply the current recommendations
      </p>

      <div className="grid grid-cols-3 gap-6">

        <div>

          <p className="text-sm opacity-80">
            Monthly Savings
          </p>

          <h1 className="text-4xl font-bold">
            $12,400
          </h1>

        </div>

        <div>

          <p className="text-sm opacity-80">
            Annual Savings
          </p>

          <h1 className="text-4xl font-bold">
            $148,800
          </h1>

        </div>

        <div>

          <p className="text-sm opacity-80">
            Recommendations
          </p>

          <h1 className="text-4xl font-bold">
            5
          </h1>

        </div>

      </div>

    </div>
  );
}

export default SavingsSimulation;