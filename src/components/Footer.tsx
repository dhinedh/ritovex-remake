import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 font-heading text-xl font-bold mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary text-sm font-bold">R</span>
              </div>
              Ritovex
            </a>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Crafting legendary brands through bold ideas and strategic genius.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {["Home", "About Us", "Services", "Projects", "Blog"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-primary-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {["Web Design", "Web Development", "Branding", "Product Design"].map((s) => (
                <li key={s}><span>{s}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> 22 (00) 356 7890
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> hello@ritovex.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> New York, USA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © 2025 Ritovex. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
