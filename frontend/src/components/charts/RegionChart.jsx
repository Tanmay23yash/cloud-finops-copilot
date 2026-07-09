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

function RegionChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 h-[450px]">

      <h2 className="text-2xl font-bold text-gray-800">
        Region Cost Distribution
      </h2>

      <p className="text-gray-500 mb-6">
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

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default RegionChart;