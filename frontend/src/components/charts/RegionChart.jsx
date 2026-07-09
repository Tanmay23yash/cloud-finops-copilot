import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "us-east-1", value: 7200 },
  { name: "eu-west-1", value: 4200 },
  { name: "ap-south-1", value: 3800 },
  { name: "us-west-2", value: 3540 },
];

const COLORS = [
  "#2563EB",
  "#10B981",
  "#F59E0B",
  "#EF4444",
];

function RegionChart({ darkMode }) {
  return (
    <div
      className={`rounded-2xl shadow-sm border p-6 h-[450px] transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <h2
        className={`text-2xl font-bold ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Region Cost Distribution
      </h2>

      <p
        className={`mb-6 ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Cloud spend across active regions.
      </p>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#111827" : "#ffffff",
              border: "1px solid #4B5563",
              borderRadius: "12px",
              color: darkMode ? "#ffffff" : "#111827",
            }}
          />

          <Legend
            wrapperStyle={{
              color: darkMode ? "#E5E7EB" : "#374151",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RegionChart;