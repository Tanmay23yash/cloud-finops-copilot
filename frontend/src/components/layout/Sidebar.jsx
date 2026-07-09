import {
  LayoutDashboard,
  DollarSign,
  TriangleAlert,
  Sparkles,
  Bot,
  FileText,
  Settings
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    target: "dashboard"
  },
  {
    title: "Cost Analysis",
    icon: <DollarSign size={20} />,
    target: "cost-analysis"
  },
  {
    title: "Anomalies",
    icon: <TriangleAlert size={20} />,
    target: "insights"
  },
  {
    title: "Recommendations",
    icon: <Sparkles size={20} />,
    target: "recommendations"
  },
  {
    title: "AI Copilot",
    icon: <Bot size={20} />,
    target: "dashboard"
  },
  {
    title: "Reports",
    icon: <FileText size={20} />,
    target: "reports"
  },
  {
    title: "Settings",
    icon: <Settings size={20} />,
    target: "settings"
  }
];

function Sidebar({ darkMode }) {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <aside
      className={`w-64 min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 border-r border-gray-700"
          : "bg-[#111827]"
      }`}
    >

      <div className="text-center py-8">

        <h2 className="text-2xl font-bold text-white">
          Cloud FinOps
        </h2>

        <p className="text-gray-400 mt-2">
          AI Cost Intelligence
        </p>

      </div>

      <nav>

        {menuItems.map((item) => (

          <div
            key={item.title}
            onClick={() => scrollToSection(item.target)}
            className="
              flex
              items-center
              gap-4
              px-8
              py-4
              text-gray-300
              hover:bg-blue-600
              hover:text-white
              cursor-pointer
              transition-all
              duration-300
            "
          >

            {item.icon}

            <span>{item.title}</span>

          </div>

        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;