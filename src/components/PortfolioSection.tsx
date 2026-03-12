import { motion } from "framer-motion";

const projects = [
  {
    title: "School Management System",
    desc: "Streamlining school administration with automated student tracking and fee management.",
    category: "Web Development",
    color: "bg-accent/10",
  },
  {
    title: "ShopEasy E-Commerce Platform",
    desc: "Boosted online sales 200% with lightning-fast, mobile-friendly checkout flows.",
    category: "Web Development",
    color: "bg-primary/5",
  },
  {
    title: "Hospital Management System",
    desc: "End-to-end hospital automation including OPD, IPD, billing, and pharmacy management.",
    category: "Web Development",
    color: "bg-secondary",
  },
  {
    title: "Manufacturing Corporate Portfolios",
    desc: "Premium corporate web solutions for global manufacturing firms, enhancing digital presence and lead generation.",
    category: "Web Development",
    color: "bg-accent/10",
  },
];

const PortfolioSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
            Explore Our Real Works
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${project.color} rounded-3xl p-8 lg:p-10 group cursor-pointer hover:shadow-xl hover:shadow-primary/5 transition-all border border-transparent hover:border-primary/10`}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-background/80 backdrop-blur-md rounded-full px-3 py-1 mb-6 inline-block">
                {project.category}
              </span>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
