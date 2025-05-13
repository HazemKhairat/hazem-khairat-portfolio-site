
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold">
              Hazem<span className="text-primary">.dev</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-foreground hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center">
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden ml-4 flex items-center justify-center p-2 rounded-md text-foreground"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-background border-b`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#home"
            className="block px-3 py-2 rounded-md text-foreground hover:bg-primary/10 hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-foreground hover:bg-primary/10 hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 rounded-md text-foreground hover:bg-primary/10 hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block px-3 py-2 rounded-md text-foreground hover:bg-primary/10 hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="block px-3 py-2 rounded-md text-foreground hover:bg-primary/10 hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-foreground hover:bg-primary/10 hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
