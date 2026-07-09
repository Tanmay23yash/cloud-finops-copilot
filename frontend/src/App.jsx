import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

import Dashboard from "./pages/Dashboard";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

  }, []);

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

  }, [darkMode]);

  return (
    <BrowserRouter>

      <Dashboard
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

    </BrowserRouter>
  );
}

export default App;