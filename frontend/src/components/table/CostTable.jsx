const costs = [
  {
    date: "01 Jul",
    service: "EC2",
    region: "us-east-1",
    cost: "$240",
    status: "Normal",
  },
  {
    date: "02 Jul",
    service: "S3",
    region: "ap-south-1",
    cost: "$60",
    status: "Warning",
  },
  {
    date: "03 Jul",
    service: "Lambda",
    region: "eu-west-1",
    cost: "$25",
    status: "Normal",
  },
  {
    date: "04 Jul",
    service: "RDS",
    region: "us-east-1",
    cost: "$410",
    status: "High",
  },
  {
    date: "05 Jul",
    service: "ECS",
    region: "us-west-2",
    cost: "$180",
    status: "Normal",
  },
];

function getStatusColor(status) {
  switch (status) {
    case "Normal":
      return "bg-green-100 text-green-700";

    case "Warning":
      return "bg-yellow-100 text-yellow-700";

    case "High":
      return "bg-red-100 text-red-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
}

function CostTable({ darkMode }) {
  return (
    <div
      className={`rounded-2xl shadow-sm border p-6 mt-8 transition-all duration-300 ${
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
        Recent Cloud Costs
      </h2>

      <p
        className={`mb-6 ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Latest cloud resource spending.
      </p>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr
              className={`border-b ${
                darkMode
                  ? "border-gray-700"
                  : "border-gray-200"
              }`}
            >

              <th
                className={`text-left py-3 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Date
              </th>

              <th
                className={`text-left py-3 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Service
              </th>

              <th
                className={`text-left py-3 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Region
              </th>

              <th
                className={`text-left py-3 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Cost
              </th>

              <th
                className={`text-left py-3 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {costs.map((item, index) => (

              <tr
                key={index}
                className={`border-b transition ${
                  darkMode
                    ? "border-gray-700 hover:bg-gray-800"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >

                <td
                  className={`py-4 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.date}
                </td>

                <td
                  className={`${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.service}
                </td>

                <td
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {item.region}
                </td>

                <td
                  className={`font-semibold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.cost}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default CostTable;