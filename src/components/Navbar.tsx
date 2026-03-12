import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled state for blur/border
      setScrolled(currentScrollY > 20);

      // Hide/Show logic
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setVisible(false); // Scrolling down
        } else {
          setVisible(true); // Scrolling up
        }
      } else {
        setVisible(true); // Top of page
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Framer Motion Path Variants for Hamburger
  const pathVariants = {
    top: {
      closed: { d: "M 4 6 L 20 6" },
      open: { d: "M 5 5 L 19 19" },
    },
    middle: {
      closed: { opacity: 1, x: 0 },
      open: { opacity: 0, x: 10 },
    },
    bottom: {
      closed: { d: "M 4 18 L 20 18" },
      open: { d: "M 5 19 L 19 5" },
    },
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-2" : "bg-transparent border-transparent py-4"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-bold">Z</span>
          </div>
          Zech Soft
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
          <div className="flex items-center gap-2 text-sm">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider leading-none mb-1">Call Any Time</p>
              <p className="font-bold text-foreground">+91 93424 00879</p>
            </div>
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center relative z-[60] text-foreground focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <motion.path
              variants={pathVariants.top}
              animate={mobileOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              variants={pathVariants.middle}
              animate={mobileOpen ? "open" : "closed"}
              transition={{ duration: 0.2 }}
            />
            <motion.path
              variants={pathVariants.bottom}
              animate={mobileOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 lg:hidden flex flex-col bg-background/95 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between py-5 px-6 border-b border-border/10">
              <div className="flex items-center gap-4">
                <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
                  <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
                    <span className="text-primary-foreground text-base font-black">Z</span>
                  </div>
                  <span className="tracking-tight">Zech Soft</span>
                </Link>
                <ThemeToggle />
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col bg-gradient-to-b from-transparent to-accent/5">
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`group flex items-center justify-between py-4 text-2xl font-bold transition-all ${location.pathname === link.path ? "text-primary" : "text-foreground"
                        }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${location.pathname === link.path ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:translate-x-0"}`} />
                    </Link>
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
                    <a href="mailto:info@zechsoft.com" className="flex items-center gap-3 text-foreground font-medium">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      info@zechsoft.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {[Instagram, Twitter, Facebook].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
