import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5">
        <Link to="/" className="flex items-center">
          <img src="/logo-sonichive.png" alt="SonicHive Interactive Logo" className={`h-8 md:h-10 ${theme === "dark" ? "" : "brightness-0"}`} width="182" height="56" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <a
                key={l.href}
                href={l.href}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isActive(l.href) ? "text-foreground" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isActive(l.href) ? "text-foreground" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="/contact"
            className="text-xs tracking-[0.15em] uppercase text-primary border border-primary/30 rounded-full px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container mx-auto flex flex-col gap-6 py-8">
              {links.map((l) =>
                l.href.startsWith("/#") ? (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                )
              )}
              <button
                onClick={toggleTheme}
                className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.15em] uppercase text-primary"
              >
                Get a Quote →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
