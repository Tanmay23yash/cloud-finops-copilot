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
    icon: <LayoutDashboard size={20} />
  },
  {
    title: "Cost Analysis",
    icon: <DollarSign size={20} />
  },
  {
    title: "Anomalies",
    icon: <TriangleAlert size={20} />
  },
  {
    title: "Recommendations",
    icon: <Sparkles size={20} />
  },
  {
    title: "AI Copilot",
    icon: <Bot size={20} />
  },
  {
    title: "Reports",
    icon: <FileText size={20} />
  },
  {
    title: "Settings",
    icon: <Settings size={20} />
  }
];

function Sidebar() {
  return (
    <aside className="w-64 bg-[#111827] text-white min-h-screen">

      <div className="text-center py-8">

        <h2 className="text-2xl font-bold">
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
            className="flex items-center gap-4 px-8 py-4 hover:bg-blue-600 cursor-pointer transition-all duration-300"
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