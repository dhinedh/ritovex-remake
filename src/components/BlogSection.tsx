import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const blogs = [
  {
    title: "Simple Tips for Better Website Design",
    desc: "Learn easy ways to improve your website's look and feel.",
    date: "July 31, 2025",
    category: "Design",
  },
  {
    title: "How to Speed Up Your Website Loading",
    desc: "Quick fixes to make your site load faster and boost user experience.",
    date: "July 31, 2025",
    category: "Design",
  },
  {
    title: "Best Tools for App Development Today",
    desc: "Best tools to build apps easily and quickly for modern teams.",
    date: "July 31, 2025",
    category: "Design",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 bg-secondary/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-medium text-muted-foreground">
                Our Blogs
              </span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
              Read Our Recent Article
            </h2>
          </div>
          <a
            href="#blog"
            className="mt-6 lg:mt-0 inline-flex items-center justify-center bg-foreground text-background px-8 py-4 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Browse All Article
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer bg-card rounded-3xl p-4 hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              <div className="bg-secondary rounded-2xl h-64 mb-6 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-xs font-bold text-foreground">{blog.category}</span>
                </div>
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/10 group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="px-2 pb-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-3 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-2">
                  {blog.desc}
                </p>

                <div className="mt-6 pt-6 border-t border-border flex items-center text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  Read More
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
