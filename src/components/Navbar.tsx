import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import QuoteModal from "./QuoteModal";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300">
      <div className={`w-full transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm" 
          : "bg-transparent border-b border-transparent py-5"
      }`}>
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo size="md" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${location.pathname === link.path
                ? "text-primary font-bold"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-6">
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center z-[60]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-foreground rounded-full mb-1.5 transition-colors"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="w-6 h-0.5 bg-foreground rounded-full mb-1.5 transition-colors"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-foreground rounded-full transition-colors"
          />
        </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 90% 5%)", opacity: 0 }}
            animate={{ clipPath: "circle(150% at 90% 5%)", opacity: 1 }}
            exit={{ clipPath: "circle(0% at 90% 5%)", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 lg:hidden flex flex-col bg-background/98 backdrop-blur-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between py-4 px-4 border-b border-border/10">
              <div className="flex items-center gap-4">
                <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                  <Logo size="md" />
                </Link>
                <div className="scale-90">
                  <ThemeToggle />
                </div>
              </div>
              
              {/* Mobile toggle (duplicated here to ensure visibility above menu background) */}
              <button
                className="relative w-10 h-10 flex flex-col items-center justify-center z-[60]"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-foreground rounded-full mb-1.5 transition-colors"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className="w-6 h-0.5 bg-foreground rounded-full mb-1.5 transition-colors"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-foreground rounded-full transition-colors"
                />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col bg-gradient-to-b from-transparent to-accent/5">
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: i * 0.08 + 0.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`group flex items-center justify-between py-5 text-3xl font-heading font-black transition-all ${location.pathname === link.path 
                        ? "text-primary italic" 
                        : "text-foreground/90 hover:text-primary hover:pl-2"
                        }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-6 h-6 transition-all duration-500 ${location.pathname === link.path ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 -translate-x-10 -rotate-45 group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-0"}`} />
                    </Link>
                    <div className="h-[1px] w-full bg-border/5" />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto pt-12 space-y-8"
              >
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Get in touch</p>
                  <div className="space-y-3">
                    <a href="tel:+919342400879" className="flex items-center gap-3 text-foreground font-medium">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      +91 93424 00879
                    </a>
                    <a href="mailto:info@zechsoft.tech" className="flex items-center gap-3 text-foreground/80 font-medium">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      info@zechsoft.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  {[Instagram, Twitter, Facebook].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-xl bg-foreground/5 border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </nav>
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
               <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
               <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </header>
  );
};

export default Navbar;
