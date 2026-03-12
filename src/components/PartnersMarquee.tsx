import { motion } from "framer-motion";

const partners = [
  "MASCO", "MOODY'S", "abbvie", "align",
  "BUNGE", "DISCOVER", "ESSEX", "HOLOGIC"
];

const PartnersMarquee = () => {
  return (
    <section className="pt-16 pb-8 border-y border-border/40 bg-background/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 border border-border/60 rounded-full px-5 py-2 bg-secondary/30 backdrop-blur-sm">
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
              Trusted Partners Worldwide for Success
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Gradient Masks for Fade Effect */}
        <div className="absolute top-0 left-0 w-20 lg:w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 lg:w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...partners, ...partners, ...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="mx-8 lg:mx-14 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <span className="text-2xl lg:text-3xl font-heading font-black tracking-tight text-foreground">
                {name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PartnersMarquee;
