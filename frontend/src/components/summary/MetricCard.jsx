function MetricCard({
  title,
  value,
  subtitle,
  icon,
  color,
}) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-sm
      border
      border-gray-200
      p-6
      hover:shadow-lg
      hover:-translate-y-1
      transition-all
      duration-300
      "
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2 text-gray-800">
            {value}
          </h2>

          <p className="text-sm text-gray-400 mt-2">
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