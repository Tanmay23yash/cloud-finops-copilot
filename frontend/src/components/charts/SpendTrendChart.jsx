import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", spend: 9500 },
  { month: "Feb", spend: 11200 },
  { month: "Mar", spend: 10500 },
  { month: "Apr", spend: 12400 },
  { month: "May", spend: 13600 },
  { month: "Jun", spend: 15400 },
  { month: "Jul", spend: 18540 },
];

function SpendTrendChart({ darkMode }) {
  return (
    <div
      className={`rounded-2xl shadow-sm border p-6 mt-8 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-2 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Monthly Cloud Spend Trend
      </h2>

      <p
        className={`mb-6 ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Cloud spending over the past seven months.
      </p>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={darkMode ? "#374151" : "#E5E7EB"}
          />

          <XAxis
            dataKey="month"
            stroke={darkMode ? "#D1D5DB" : "#6B7280"}
          />

          <YAxis
            stroke={darkMode ? "#D1D5DB" : "#6B7280"}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#111827" : "#ffffff",
              border: "1px solid #4B5563",
              borderRadius: "12px",
              color: darkMode ? "#ffffff" : "#111827",
            }}
          />

          <Line
            type="monotone"
            dataKey="spend"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendTrendChart;