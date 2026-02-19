import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Web Design",
    desc: "Focuses on the aesthetic and user experience of a website, creating visually appealing and intuitive layouts with graphic design, typography, and color schemes.",
  },
  {
    num: "02",
    title: "Web Development",
    desc: "Involves the coding and programming that makes a website functional and interactive, including front-end and back-end development.",
  },
  {
    num: "03",
    title: "Branding",
    desc: "Creating a unique identity for a company or product, encompassing its name, logo, messaging, and overall market perception.",
  },
  {
    num: "04",
    title: "Product Design",
    desc: "The entire process of creating a new product, from conceptualization and research to prototyping and final execution.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            Services
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
            Your Needs, Our Expertise
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Together, we bring ideas to life with tailored solutions that deliver real results. Let's build something amazing.
          </p>
        </div>

        {/* Service cards */}
        <div className="space-y-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="service-card group bg-background rounded-2xl p-6 lg:p-8 cursor-pointer border border-border"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                <span className="service-number text-sm font-bold text-muted-foreground font-heading">
                  {service.num}
                </span>
                <h3 className="service-title font-heading text-xl lg:text-2xl font-bold text-foreground flex-1">
                  {service.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors hidden lg:block" />
              </div>
              <p className="service-desc text-sm text-muted-foreground mt-3 lg:ml-16 max-w-xl">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
