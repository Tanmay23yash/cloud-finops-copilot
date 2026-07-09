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

function SpendTrendChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-8">

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Monthly Cloud Spend Trend
      </h2>

      <p className="text-gray-500 mb-6">
        Cloud spending over the past seven months.
      </p>

      <ResponsiveContainer width="100%" height={350}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="spend"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default SpendTrendChart;