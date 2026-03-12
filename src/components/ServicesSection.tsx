import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import webDesignImage from "@/assets/service-web-design.jpg";
import softwareSolutionsImage from "@/assets/service-software-solutions.png";
import digitalMarketingImage from "@/assets/service-digital-marketing.png";
import itSupportImage from "@/assets/service-it-support.png";

const services = [
  {
    num: "01",
    title: "Website Development",
    desc: "Focuses on the aesthetic and user experience of a website, creating visually appealing and intuitive layouts. It involves aspects like graphic design, typography, and color schemes to enhance user engagement.",
    image: webDesignImage,
  },
  {
    num: "02",
    title: "Custom Software Solutions",
    desc: "Involves the coding and programming that makes a website functional and interactive, including front-end development and back-end development with server, database, and application logic.",
    image: softwareSolutionsImage,
  },
  {
    num: "03",
    title: "Digital Marketing Services",
    desc: "Creating a unique identity for a company or product, encompassing its name, logo, messaging, and overall market perception to establish recognition and emotional connection.",
    image: digitalMarketingImage,
  },
  {
    num: "04",
    title: "IT Support & Maintenance",
    desc: "Ensuring your digital systems run smoothly with professional support and maintenance.",
    image: itSupportImage,
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
