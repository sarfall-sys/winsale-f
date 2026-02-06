import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Products", path: "/products" },
    { name: "Sales", path: "/sales" },
    { name: "Insights", path: "/insights" },
  ];

  return (
    <nav className="bg-background dark:bg-background  transition-all duration-300">
      <div className="flex items-center justify-between gap-1">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/15 dark:group-hover:bg-primary/30 transition-colors duration-300">
              <span className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                W
              </span>
            </div>
          </div>
          <span className="text-2xl font-bold text-text-primary dark:text-text-primary tracking-tight">
            WinSale
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "text-secondary dark:text-primary"
                    : "text-text-secondary dark:text-text-primary hover:text-primary dark:hover:text-secondary"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-secondary dark:bg-primary rounded-full" />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg hover:bg-neutral/10 dark:hover:bg-neutral/20 transition-colors"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute top-0 left-0 w-6 h-0.5 bg-text-primary dark:bg-text-primary rounded-full transition-all duration-300 ${
                open ? "top-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute top-2 left-0 w-6 h-0.5 bg-text-primary dark:bg-text-primary rounded-full transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 w-6 h-0.5 bg-text-primary dark:bg-text-primary rounded-full transition-all duration-300 ${
                open ? "bottom-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-2 pb-1 space-y-1 border-t border-neutral/20 dark:border-neutral/30">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
              isActive
              ? "bg-accent/10 dark:bg-accent/20 text-primary dark:text-primary border-l-4 border-accent dark:border-primary"
              : "text-text-primary dark:text-text-primary hover:bg-neutral/10 dark:hover:bg-neutral/20 border-l-4 border-transparent hover:border-accent dark:hover:border-primary"
              }`}
              >
              {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
