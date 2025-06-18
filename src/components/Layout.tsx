import { Link, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "home", isRoute: false, path: "/" },
    { name: "About", href: "about", isRoute: false, path: "/" },
    { name: "Projects", href: "projects", isRoute: true, path: "/projects" },
    { name: "Blog", href: "blog", isRoute: true, path: "/blog" },
    { name: "Contact", href: "contact", isRoute: false, path: "/" },
  ];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Smooth scroll to hash on initial load or location change
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const section = document.getElementById(hash.replace("#", ""));
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-200"
              >
                SD
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.isRoute ? item.path : `${item.path}#${item.href}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 ${
                      location.pathname === "/"
                        ? currentSection === item.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground"
                        : location.pathname === item.path
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDark(!isDark)}
                className="hover:scale-110 transition-transform duration-200"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 animate-bounce-in" />
                ) : (
                  <Moon className="h-5 w-5 animate-bounce-in" />
                )}
              </Button>

              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="hover:scale-110 transition-transform duration-200"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6 animate-bounce-in" />
                  ) : (
                    <Menu className="h-6 w-6 animate-bounce-in" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden animate-fade-in-up">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border border-border rounded-lg mt-2 mb-4">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.isRoute ? item.path : `${item.path}#${item.href}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200 hover:text-primary hover:bg-primary/10 ${
                      location.pathname === "/" && currentSection === item.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-muted-foreground">
              © 2025 Satish Dabhi | Built with React,
              TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
