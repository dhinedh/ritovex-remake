import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Zech Soft developed a complete autonomous supply chain system for our food production units. Their AI-driven inventory management has reduced our waste by 25%.",
    name: "Director",
    role: "Mansara Foods Pvt Ltd",
    rating: 5,
  },
  {
    text: "The custom manufacturing ERP and global portfolio they built for Refranox have been instrumental in our international expansion. A truly innovative digital partner.",
    name: "Managing Director",
    role: "Refranox Insulation Private Limited",
    rating: 5,
  },
  {
    text: "Our logistics efficiency skyrocketed after Zech Soft automated our tracking and cargo management systems. Their complete digital solution is second to none.",
    name: "Operations Head",
    role: "a3 Express Cargo",
    rating: 5,
  },
  {
    text: "Zech Soft provided us with high-end corporate solutions that perfectly represent our global presence. Their attention to detail and AI integration is impressive.",
    name: "CEO",
    role: "Global India Corporation",
    rating: 5,
  },
  {
    text: "From automated billing to customer management, Zech Soft simplified our catering operations across multiple locations. Fast, reliable, and professional.",
    name: "Founder",
    role: "Vignesh Catering Services",
    rating: 5,
  },
  {
    text: "The design precision and development quality delivered for Ezil designs exceeded our expectations. They are our go-to partner for all things digital.",
    name: "Creative Director",
    role: "Ezil Designs",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-16 lg:mb-20">
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-border/60 rounded-full px-4 py-1.5 bg-secondary/50 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-foreground" />
            <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wide">
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            What Our Clients Are Saying
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Hear directly from our clients about their experiences and the results we've delivered.
          </motion.p>
        </div>
      </div>

      {/* Rotating Marquee with Edge Fades */}
      <div className="relative w-full">
        {/* Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
        
        <div className="flex animate-marquee-slow whitespace-normal hover:[animation-play-state:paused] w-max py-8">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[85vw] md:w-[450px] lg:w-[500px] flex-shrink-0 mx-4 md:mx-6 bg-secondary/30 dark:bg-secondary/10 rounded-[2.5rem] p-10 lg:p-12 flex flex-col border border-border/30 hover:shadow-xl hover:border-border/60 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1.5 mb-8">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-6 h-6 ${j < t.rating ? "fill-foreground text-foreground" : "text-border"}`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 text-lg lg:text-xl leading-relaxed mb-10 flex-grow font-medium">
                "{t.text}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-border/50 mb-8" />

              {/* Profile */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0">
                  <span className="font-heading font-bold text-xl text-foreground">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg">
                    {t.name}
                  </h4>
                  <p className="text-sm text-muted-foreground font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
