import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/home-hero-realistic.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              Innovative Digital Solutions
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
              Automate Your <span className="text-primary italic">Business</span> With Zechsoft
            </h1>
            <p className="text-muted-foreground text-base lg:text-xl max-w-md mb-8 leading-relaxed">
              We build custom software, mobile apps, and AI solutions that streamline operations, boost productivity, and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <button className="inline-flex items-center justify-center gap-3 text-sm font-bold text-foreground hover:text-primary transition-colors py-4">
                <span className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Play className="w-4 h-4 fill-foreground group-hover:fill-primary" />
                </span>
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right image */}
          <div className="relative">
            {/* Animated Background Elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 dark:bg-accent/10 rounded-full blur-3xl -z-10"
            />
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, 50, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl -z-10"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -20, 0]
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative z-10"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 group">
                <img
                  src={heroImage}
                  alt="Zechsoft Innovation"
                  className="w-full h-[400px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-xl z-20 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/20">
                    <span className="font-bold text-lg">99%</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Client</p>
                    <p className="text-sm font-bold text-foreground">Satisfaction</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
