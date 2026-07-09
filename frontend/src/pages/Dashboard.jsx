import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

import MetricCard from "../components/summary/MetricCard";
import AnomalyList from "../components/ai/AnomalyList";
import RecommendationCard from "../components/recommendations/RecommendationCard";
import SpendTrendChart from "../components/charts/SpendTrendChart";
import RegionChart from "../components/charts/RegionChart";
import CostTable from "../components/table/CostTable";
import SavingsSimulation from "../components/recommendations/SavingsSimulation";
import ReportCard from "../components/recommendations/ReportCard";
import SettingsCard from "../components/settings/SettingsCard";
import FloatingChat from "../components/ai/FloatingChat";

import {
  DollarSign,
  PiggyBank,
  TriangleAlert,
  Cloud,
} from "lucide-react";

function Dashboard({ darkMode, setDarkMode }) {
  return (
    <div
      className={`h-screen flex flex-col transition-all duration-300 ${
        darkMode ? "bg-gray-950" : "bg-gray-100"
      }`}
    >
      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <Sidebar darkMode={darkMode} />

        {/* Right Content */}
        <main className="flex-1 overflow-y-auto p-8">

          {/* Dashboard */}
          <div id="dashboard">

            <h1
              className={`text-4xl font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Dashboard
            </h1>

            <p
              className={`mt-2 mb-8 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Welcome to Cloud FinOps Copilot!
            </p>

            <div className="grid grid-cols-4 gap-6">

              <MetricCard
                title="Total Spend"
                value="$18,540"
                subtitle="Current Month"
                icon={<DollarSign size={28} />}
                color="bg-blue-600"
                darkMode={darkMode}
              />

              <MetricCard
                title="Potential Savings"
                value="$4,250"
                subtitle="Estimated Monthly"
                icon={<PiggyBank size={28} />}
                color="bg-green-600"
                darkMode={darkMode}
              />

              <MetricCard
                title="Active Alerts"
                value="5"
                subtitle="Needs Attention"
                icon={<TriangleAlert size={28} />}
                color="bg-red-500"
                darkMode={darkMode}
              />

              <MetricCard
                title="Cloud Resources"
                value="128"
                subtitle="Running"
                icon={<Cloud size={28} />}
                color="bg-purple-600"
                darkMode={darkMode}
              />

            </div>

          </div>

          {/* AI Intelligence */}

          <div className="mt-10 mb-5">

            <h2
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              🧠 AI Intelligence
            </h2>

            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              AI-generated insights and optimization recommendations.
            </p>

          </div>

          <div id="insights">
            <AnomalyList darkMode={darkMode} />
          </div>

          <div id="recommendations">
            <RecommendationCard darkMode={darkMode} />
          </div>

          {/* Cost Analytics */}

          <div className="mt-12 mb-5">

            <h2
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              📊 Cost Analytics
            </h2>

            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Visualize spending trends across services and regions.
            </p>

          </div>

          <div id="analytics" className="grid grid-cols-2 gap-6 mt-8">

            <SpendTrendChart darkMode={darkMode} />

            <RegionChart darkMode={darkMode} />

            {/* Full Width Cost Table */}

            <div id="cost-analysis" className="col-span-2">

              <div className="mb-4">

                <h2
                  className={`text-xl font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  📋 Recent Cloud Costs
                </h2>

                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Detailed view of recent cloud spending.
                </p>

              </div>

              <CostTable darkMode={darkMode} />

            </div>

          </div>

          {/* Savings */}

          <div id="savings" className="mt-8">

            <div className="mb-4">

              <h2
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                💰 Savings Simulation
              </h2>

              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Estimated savings based on AI recommendations.
              </p>

            </div>

            <SavingsSimulation darkMode={darkMode} />

          </div>

          {/* Reports */}

          {/* Reports */}

<div id="reports" className="mt-12">

  <h2
    className={`text-2xl font-bold mb-2 ${
      darkMode ? "text-white" : "text-gray-800"
    }`}
  >
    📄 Executive Reports
  </h2>

  <p
    className={`mb-6 ${
      darkMode ? "text-gray-400" : "text-gray-500"
    }`}
  >
    Download an executive PDF summarizing cloud spending,
    anomalies, AI insights, recommendations and projected savings.
  </p>
  

  

  <ReportCard darkMode={darkMode} />

</div>

          {/* Settings */}

          <div id="settings" className="mt-12 mb-10">

            <h2
              className={`text-2xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              ⚙️ Settings
            </h2>

            <p
              className={`mb-6 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Configure dashboard preferences.
            </p>

            <SettingsCard darkMode={darkMode} />

          </div>

          {/* Floating AI Assistant */}

          <FloatingChat darkMode={darkMode} />

        </main>

      </div>

    </div>
  );
}

export default Dashboard;