import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-background text-primary-foreground dark:text-foreground pt-16 pb-8 border-t border-border/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start mb-6">
              <Logo size="lg" variant="dark" />
            </Link>
            <p className="text-sm text-primary-foreground/70 dark:text-muted-foreground leading-relaxed mb-8 max-w-xs mx-auto md:mx-0">
              Your trusted partner for high-quality digital solutions that transform businesses and drive growth.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 dark:border-border flex items-center justify-center hover:bg-white dark:hover:bg-primary hover:text-primary dark:hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60 dark:text-muted-foreground">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="hover:text-primary-foreground dark:hover:text-foreground transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60 dark:text-muted-foreground">
              {["Website Development", "Custom Software Solutions", "Digital Marketing", "IT Support"].map((s) => (
                <li key={s}><span>{s}</span></li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60 dark:text-muted-foreground">
              <li>
                <Link to="/shopeasy" className="hover:text-primary-foreground dark:hover:text-foreground transition-colors">
                  ShopEasy
                </Link>
              </li>
              <li>
                <Link to="/billing-software" className="hover:text-primary-foreground dark:hover:text-foreground transition-colors">
                  All-in-One Billing Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70 dark:text-muted-foreground">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                +91 93424 00879
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                info@zechsoft.tech
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                Chennai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 dark:border-border/50 pt-6 text-center text-xs text-primary-foreground/40 dark:text-muted-foreground/40">
          © 2025 Zech Soft. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
