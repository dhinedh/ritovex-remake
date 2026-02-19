import { motion } from "framer-motion";

const projects = [
  {
    title: "SmartCity Traffic Solution",
    desc: "AI-powered sensors reduced downtown traffic congestion by 35% weekly.",
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
    title: "MedTrack Healthcare App",
    desc: "Doctor-patient communication with secure messaging and appointment tracking.",
    category: "Web Development",
    color: "bg-secondary",
  },
  {
    title: "EduPlay Learning Portal",
    desc: "Interactive STEM games increased student engagement by 4X in classrooms.",
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
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${project.color} rounded-2xl p-8 lg:p-10 group cursor-pointer hover:shadow-lg transition-shadow`}
            >
              <span className="text-xs font-medium text-muted-foreground bg-background/80 rounded-full px-3 py-1">
                {project.category}
              </span>
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-foreground mt-4 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">
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
