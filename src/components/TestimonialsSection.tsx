import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Zech Soft transformed our manual patient records into a lightning-fast HIMS. We've seen a 30% increase in daily patient turnover and zero billing errors since implementation.",
    name: "Dr. Rajesh Kumar",
    role: "Director at City Care Hospitals",
    rating: 5,
  },
  {
    text: "The School ERP solution provided by Zech Soft is a game-changer. Attendance tracking and fee management that used to take days now happen in seconds. Highly recommended!",
    name: "Sarah Williams",
    role: "Principal, Oakridge International",
    rating: 5,
  },
  {
    text: "We needed a robust manufacturing portfolio to reach global clients. Zech Soft delivered a site that looks premium and functions perfectly. Our international inquiries have doubled.",
    name: "Arjun Mehta",
    role: "CEO at Global India Corp",
    rating: 5,
  },
  {
    text: "The AI-driven predictive analytics they integrated into our payroll system saved us over $12,000 in the first quarter alone by identifying staffing inefficiencies we hadn't noticed.",
    name: "Michael Chen",
    role: "Ops Manager at TechFlow Systems",
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
