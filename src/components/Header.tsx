import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import logoTransparent from "@/assets/logo-transparent.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "О нас", href: "/about" },
    { name: "Услуги", href: "/services" },
    { name: "Контакты", href: "/contacts" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" aria-label="Chaplygina & Chaplygin Corporate Consulting">
            <img
              src={logoTransparent}
              alt="Chaplygina & Chaplygin"
              className="h-12 sm:h-14 w-auto object-contain"
              width={1024}
              height={1024}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors elegant-underline",
                  location.pathname === item.href
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Открыть меню</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-base font-medium transition-colors",
                    location.pathname === item.href
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
