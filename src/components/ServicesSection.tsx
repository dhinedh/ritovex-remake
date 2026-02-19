import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import serviceImage from "@/assets/service-web-design.jpg";

const services = [
  {
    num: "01",
    title: "Web Design",
    desc: "Focuses on the aesthetic and user experience of a website, creating visually appealing and intuitive layouts. It involves aspects like graphic design, typography, and color schemes to enhance user engagement.",
  },
  {
    num: "02",
    title: "Web Development",
    desc: "Involves the coding and programming that makes a website functional and interactive, including front-end development and back-end development with server, database, and application logic.",
  },
  {
    num: "03",
    title: "Branding",
    desc: "Creating a unique identity for a company or product, encompassing its name, logo, messaging, and overall market perception to establish recognition and emotional connection.",
  },
  {
    num: "04",
    title: "Product Design",
    desc: "The entire process of creating a new product, from conceptualization and research to prototyping and final execution, focusing on solving user problems and enhancing user experience.",
  },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block border border-primary-foreground/20 rounded-full px-4 py-1.5 text-xs font-medium text-primary-foreground/60 mb-4">
            Services
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold italic">
            Your Needs, Our Expertise
          </h2>
          <p className="text-primary-foreground/60 mt-4 max-w-lg mx-auto text-sm">
            Your Vision, Our Expertise — Together, we bring ideas to life with tailored solutions that deliver real results. Let's build something amazing.
          </p>
        </div>

        {/* Service rows */}
        <div className="relative">
          {services.map((service, i) => (
            <div
              key={i}
              className="border-b border-primary-foreground/10 relative"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="flex items-center justify-between py-8 lg:py-10 cursor-pointer group"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-baseline gap-4 lg:gap-6">
                  <span
                    className={`text-sm font-heading font-medium transition-colors duration-300 ${
                      hoveredIndex === i ? "text-accent" : "text-primary-foreground/40"
                    }`}
                  >
                    {service.num}
                  </span>
                  <h3
                    className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors duration-300 ${
                      hoveredIndex === i ? "text-accent" : "text-primary-foreground"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                <div
                  className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    hoveredIndex === i
                      ? "border-accent bg-accent text-primary"
                      : "border-primary-foreground/20 text-primary-foreground/60"
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>
              </motion.div>

              {/* Hover reveal: description + image */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col lg:flex-row gap-6 pb-8">
                      <p className="text-sm text-primary-foreground/50 max-w-xl leading-relaxed">
                        {service.desc}
                      </p>
                      <div className="lg:absolute lg:right-20 lg:top-4 w-48 h-48 lg:w-64 lg:h-56 rounded-xl overflow-hidden shadow-2xl flex-shrink-0">
                        <img
                          src={serviceImage}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
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
