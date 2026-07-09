import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

import MetricCard from "../components/summary/MetricCard";
import AnomalyList from "../components/ai/AnomalyList";
import RecommendationCard from "../components/recommendations/RecommendationCard";
import SpendTrendChart from "../components/charts/SpendTrendChart";
import RegionChart from "../components/charts/RegionChart";


import {
  DollarSign,
  PiggyBank,
  TriangleAlert,
  Cloud,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">

      {/* Navbar */}
      <Navbar />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar - Fixed */}
        <Sidebar />

        {/* Right Content - Scrollable */}
        <main className="flex-1 overflow-y-auto p-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Welcome to Cloud FinOps Copilot!
          </p>

          <div className="grid grid-cols-4 gap-6">

            <MetricCard
              title="Total Spend"
              value="$18,540"
              subtitle="Current Month"
              icon={<DollarSign size={28} />}
              color="bg-blue-600"
            />

            <MetricCard
              title="Potential Savings"
              value="$4,250"
              subtitle="Estimated Monthly"
              icon={<PiggyBank size={28} />}
              color="bg-green-600"
            />

            <MetricCard
              title="Active Alerts"
              value="5"
              subtitle="Needs Attention"
              icon={<TriangleAlert size={28} />}
              color="bg-red-500"
            />

            <MetricCard
              title="Cloud Resources"
              value="128"
              subtitle="Running"
              icon={<Cloud size={28} />}
              color="bg-purple-600"
            />

          </div>

          <AnomalyList />

          <RecommendationCard />

          <div className="grid grid-cols-2 gap-6 mt-8">

    <SpendTrendChart />

    <RegionChart />

</div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;