import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


const services = [
  {
    num: "01",
    title: "Website Development",
    desc: "Crafting digital experiences with precision. We build high-performance, responsive websites that turn visitors into customers through modern architecture and stunning UI.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "E-commerce Development",
    desc: "Scale your sales with robust online storefronts. From Shopify and WooCommerce to custom marketplaces, we build conversion-optimized e-commerce platforms.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Mobile App Development",
    desc: "Seamless user experiences on the go. We develop high-quality native and cross-platform (Flutter/iOS/Android) mobile apps tailored to your business needs.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Business Automation",
    desc: "Work smarter, not harder. Our automation solutions streamline your workflows, from CRM integrations to WhatsApp/Email automation, saving you time and money.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "05",
    title: "AI Solutions",
    desc: "Future-proof your business with Intelligence. We implement cutting-edge AI chatbots, customer support systems, and predictive analytics to give you a competitive edge.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "06",
    title: "Digital Marketing",
    desc: "Grow your online presence and reach your target audience. Our data-driven strategies focus on SEO, lead generation, and social media growth for maximum ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "07",
    title: "Cyber Security",
    desc: "Your data's safety is our priority. We provide professional security audits, vulnerability testing, and ongoing protection to keep your digital assets secure.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "08",
    title: "IT Consulting",
    desc: "Strategic technology planning for long-term success. We guide your digital transformation journey with expert advice on technology stacks and process optimization.",
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
