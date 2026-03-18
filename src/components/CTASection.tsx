import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-primary dark:bg-secondary/20 text-primary-foreground dark:text-foreground">
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 lg:p-14 rounded-[3rem] shadow-2xl"
        >
          <p className="text-xs lg:text-sm text-primary-foreground/70 mb-6 font-bold uppercase tracking-[0.2em]">
            Have a project in mind? Just let us know!
          </p>
          <h2 className="font-heading text-4xl lg:text-7xl font-bold mb-10 leading-tight">
            Let's Start <span className="italic text-accent">Talking</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full text-base font-bold hover:bg-white hover:text-primary transition-all transform hover:scale-105 active:scale-95 shadow-xl"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
