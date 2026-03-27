import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


const services = [
  {
    num: "01",
    title: "Intelligence-First Web Dev",
    desc: "We don't just build websites; we build conversion engines. By analyzing user behavior with AI, we create high-performance platforms that solve visibility problems and drive growth.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "AI-Driven E-commerce",
    desc: "Scale your revenue with automated storefronts. We integrate predictive inventory management and personalized AI recommendations to solve cart abandonment and boost LTV.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Autonomous Mobile Apps",
    desc: "Mobile solutions that think ahead. Our apps analyze usage patterns to automate user workflows, providing a complete digital experience that keeps your customers engaged.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Business Process Automation",
    desc: "Eliminate manual friction. We diagnose your operational leaks and deploy custom ERP/CRM automation that reclaims thousands of hours for your core business goals.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "05",
    title: "Strategic AI Implementation",
    desc: "The ultimate growth lever. From intelligent assist bots to predictive market analysis, we help you leverage AI to anticipate problems before they occur.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "06",
    title: "ROI-Focused Digital Solutions",
    desc: "Growth is the only metric that matters. Our data-driven digital strategies integrate SEO, lead gen, and automation into a complete, high-performance ecosystem.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "07",
    title: "Advanced Systems Audit",
    desc: "Protecting your growth. We perform deep security and efficiency audits to ensure your digital infrastructure is bulletproof and optimized for maximum uptime.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "08",
    title: "Digital Transformation Consulting",
    desc: "A clear roadmap to leadership. We analyze your entire business model to identify where AI and technology can disrupt your competition and accelerate your ROI.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
  },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-primary dark:bg-secondary/20 text-primary-foreground dark:text-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block border border-primary-foreground/20 dark:border-border rounded-full px-4 py-1.5 text-xs font-medium text-primary-foreground/60 dark:text-muted-foreground mb-4">
            Services
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold italic text-primary-foreground dark:text-foreground">
            Our Services
          </h2>
          <p className="text-primary-foreground/60 dark:text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            We provide customized solutions (not one-size-fits-all) focused on real business results.
          </p>
        </div>

        {/* Service rows */}
        <div className="relative">
          {services.map((service, i) => (
            <div
              key={i}
              className="border-b border-primary-foreground/10 dark:border-border relative group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="flex items-center justify-between py-8 lg:py-12 cursor-pointer relative z-10"
              >
                <div className="flex items-baseline gap-4 lg:gap-8">
                  <span
                    className={`text-sm font-heading font-medium transition-colors duration-300 ${hoveredIndex === i ? "text-accent" : "text-primary-foreground/40 dark:text-muted-foreground/60"
                      }`}
                  >
                    {service.num}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3
                      className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold transition-all duration-300 ${hoveredIndex === i ? "text-primary-foreground dark:text-foreground translate-x-2" : "text-primary-foreground/80 dark:text-foreground/70"
                        }`}
                    >
                      {service.title}
                    </h3>
                    <AnimatePresence>
                      {(hoveredIndex === i || window.innerWidth < 1024) && (
                        <motion.p
                          initial={window.innerWidth < 1024 ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-primary-foreground/50 dark:text-muted-foreground max-w-2xl mt-2 overflow-hidden"
                        >
                          {service.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: hoveredIndex === i ? 45 : 0 }}
                  className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${hoveredIndex === i
                    ? "border-accent bg-accent text-primary dark:text-white"
                    : "border-primary-foreground/20 dark:border-border text-primary-foreground/60 dark:text-foreground/40"
                    }`}
                >
                  <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </motion.div>
              </div>

              {/* Hover Floating Image - 45 Degree Entrance */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: 45, x: 20 }}
                    animate={{ opacity: 1, scale: 1, rotate: 12, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 45, x: 20 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute right-28 top-[40%] -translate-y-1/2 z-20 pointer-events-none hidden lg:block"
                  >
                    <div className="w-[300px] h-[200px] rounded-2xl overflow-hidden shadow-2xl border-4 border-background/10">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
