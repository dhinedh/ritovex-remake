import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary-foreground/60 mb-4 font-medium">
            Have a project in mind? Just let us know!
          </p>
          <h2 className="font-heading text-4xl lg:text-6xl font-bold mb-8">
            Let's Start Talk
          </h2>
          <a
            href="#home"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Connect With Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
