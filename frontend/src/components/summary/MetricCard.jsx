function MetricCard({
  title,
  value,
  subtitle,
  icon,
  color,
  darkMode,
}) {

  return (
    <div
      className={`
        rounded-2xl
        border
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        ${
          darkMode
            ? "bg-gray-900 border-gray-700"
            : "bg-white border-gray-200"
        }
      `}
    >

      <div className="flex justify-between items-center">

        <div>

          <p
            className={`text-sm ${
              darkMode
                ? "text-gray-400"
                : "text-gray-500"
            }`}
          >
            {title}
          </p>

          <h2
            className={`text-3xl font-bold mt-2 ${
              darkMode
                ? "text-white"
                : "text-gray-800"
            }`}
          >
            {value}
          </h2>

          <p
            className={`text-sm mt-2 ${
              darkMode
                ? "text-gray-500"
                : "text-gray-400"
            }`}
          >
            {subtitle}
          </p>

        </div>

        <div
          className={`${color} text-white p-4 rounded-xl`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

export default MetricCard;