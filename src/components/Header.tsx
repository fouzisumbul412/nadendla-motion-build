import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Quality & Safety", href: "/quality-safety" },
  { name: "Gallery", href: "/gallery" },
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-primary shadow-elevated py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
              <img src={logo} alt="Nadendla Constructions" className="h-12 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  onClick={scrollToTop}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 relative group ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-primary-foreground hover:text-accent"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 bg-accent transform transition-transform duration-300 origin-left ${
                      isActive(link.href)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-primary-foreground">
              <Phone className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">+91 98765 43210</span>
            </a>

            <Link to="/contact" onClick={scrollToTop}>
              <Button variant="accent" size="sm">Get a Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-primary border-t border-primary-foreground/10"
          >
            <nav className="container-custom mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => {
                    scrollToTop();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-2 text-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-primary-foreground hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => {
                  scrollToTop();
                  setIsMobileMenuOpen(false);
                }}
              >
                <Button variant="accent" className="mt-4 w-full">
                  Get a Quote
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
