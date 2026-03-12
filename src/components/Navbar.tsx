import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
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
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            <div className="flex items-center justify-between py-4 px-4 border-b border-border/50">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">Z</span>
                </div>
                Zech Soft
              </Link>
              <button
                className="p-2 text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
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
