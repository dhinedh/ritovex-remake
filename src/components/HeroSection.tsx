import { motion } from "framer-motion";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              Creative Ideas That Inspire Growth
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              World's Best Creative Agency Team
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg max-w-md mb-8 leading-relaxed">
              Crafting legendary brands through bold ideas, strategic genius, and flawless execution that dominates the global stage.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started
              </a>
              <button className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                <span className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-foreground" />
                </span>
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Creative agency team member working"
                className="w-full h-[400px] lg:h-[520px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
