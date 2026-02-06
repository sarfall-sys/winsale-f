import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";
import { useTheme } from "./context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="min-h-screen bg-background dark:bg-background transition-colors duration-300">
        <header className="sticky top-0 z-50 bg-background dark:bg-background border-b border-neutral/20 dark:border-neutral/30 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <NavBar />
              </div>

              <div className="flex items-center gap-4">
                {/* Optional: Add other header items here */}

                <button
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                  className="relative p-2.5 rounded-lg bg-primary dark:bg-secondary border border-neutral/30 dark:border-neutral/50 hover:border-primary/50 dark:hover:border-secondary/50 hover:shadow-md transition-all duration-200 active:scale-95"
                >
                  <div className="relative">
                    {theme === "dark" ? (
                      <FaSun
                        size={18}
                        className="text-primary dark:text-yellow-300 transition-transform duration-300 hover:rotate-12"
                      />
                    ) : (
                      <FaMoon
                        size={18}
                        className="text-text-primary transition-transform duration-300 hover:-rotate-12"
                      />
                    )}
                  </div>

                  {/* Tooltip */}
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background dark:bg-background px-3 py-1.5 rounded-md text-sm text-text-primary dark:text-text-primary border border-neutral/30 dark:border-neutral/50 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-background dark:bg-background rounded-lg">
              <AppRoutes />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
