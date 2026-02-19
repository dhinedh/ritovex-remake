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
    <section id="blog" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
            <span className="inline-block border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
              Our Blogs
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              Read Our Recent Articles
            </h2>
          </div>
          <a
            href="#blog"
            className="mt-4 lg:mt-0 inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity w-fit"
          >
            Browse All Articles
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-secondary rounded-2xl h-48 mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/10 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium text-accent">{blog.category}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {blog.date}
                </span>
              </div>
              <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                {blog.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{blog.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
