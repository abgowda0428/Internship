import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Services", page: "services" },
    { label: "Wellness", page: "wellness" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavigate("home")}
            className="group relative z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-[#00ff88] rounded-full group-hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition-shadow duration-300"></div>
              <span className="text-2xl font-space font-bold tracking-tight text-white">
                HEALSPHERE
              </span>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.page}
                onClick={() => handleNavigate(link.page)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <span
                  className={`text-sm font-space font-medium tracking-[0.15em] transition-colors duration-300 ${
                    currentPage === link.page
                      ? "text-[#00ff88]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
                {currentPage === link.page && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00ff88] shadow-[0_0_10px_rgba(0,255,136,0.5)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => handleNavigate("contact")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden lg:flex items-center gap-2 px-8 py-3.5 bg-[#00ff88] text-black font-semibold text-sm tracking-wider hover:bg-white transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">GET STARTED</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white relative z-10"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 bg-black z-0 pt-24"
          >
            <div className="container mx-auto px-6 h-full flex flex-col justify-center">
              <div className="space-y-8">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.page}
                    onClick={() => handleNavigate(link.page)}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="block w-full text-left"
                  >
                    <span
                      className={`text-4xl font-space font-medium tracking-tight ${
                        currentPage === link.page
                          ? "text-[#00ff88]"
                          : "text-white/60 hover:text-white"
                      } transition-colors duration-300`}
                    >
                      {link.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-16"
              >
                <button
                  onClick={() => handleNavigate("contact")}
                  className="w-full px-8 py-4 bg-[#00ff88] text-black font-medium text-sm tracking-wider"
                >
                  GET STARTED →
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}