import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";

const blogs = [
    {
        title: "Simple Tips for Better Website Design",
        desc: "In today's digital age, your website is often the first point of contact for potential customers. Learn how to make it count with these simple yet effective design tips that enhance user experience and drive conversions.",
        date: "July 31, 2025",
        author: "Zech Soft Team",
        category: "Design",
        readTime: "5 min read"
    },
    {
        title: "How to Speed Up Your Website Loading",
        desc: "Speed is a critical factor for both user experience and SEO. Discover the technical optimizations and best practices to ensure your website loads in the blink of an eye across all devices.",
        date: "August 05, 2025",
        author: "Zech Soft Team",
        category: "Development",
        readTime: "8 min read"
    },
    {
        title: "Best Tools for App Development Today",
        desc: "The landscape of mobile app development is constantly evolving. We review the top frameworks and tools that are helping modern teams build high-quality applications faster and more efficiently.",
        date: "August 12, 2025",
        author: "Zech Soft Team",
        category: "Tech",
        readTime: "6 min read"
    },
    {
        title: "The Future of AI in Modern Business",
        desc: "Artificial Intelligence is no longer just a buzzword. Explore how businesses are leveraging AI to automate processes, gain data-driven insights, and create personalized customer experiences.",
        date: "August 18, 2025",
        author: "Zech Soft Team",
        category: "AI",
        readTime: "10 min read"
    },
    {
        title: "Why Cyber Security Matters for Small Businesses",
        desc: "Think your business is too small to be a target? Think again. We discuss the essential security measures every small business should take to protect their data and customer trust.",
        date: "August 24, 2025",
        author: "Zech Soft Team",
        category: "Security",
        readTime: "7 min read"
    }
];

const Blog = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Blog Hero */}
            <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 border-b border-border overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 opacity-[0.15]" style={{ color: 'var(--primary)' }}>
                        <svg width="100%" height="100%">
                            <pattern id="grid-refined" width="50" height="50" patternUnits="userSpaceOnUse">
                                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid-refined)" />
                        </svg>
                    </div>

                    <motion.div
                        animate={{
                            y: [0, -150, 0],
                            opacity: [0.25, 0.55, 0.25],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-b from-primary/20 via-accent/10 to-transparent"
                    />

                    <motion.div
                        animate={{
                            x: [-100, 100, -100],
                            opacity: [0.12, 0.28, 0.12]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-1/2 left-0 w-full h-full bg-accent/20 blur-[120px] rounded-full"
                    />

                    {/* Immersive Mist Effect */}
                    <motion.div
                        animate={{
                            opacity: [0.4, 0.7, 0.4],
                            x: [-20, 20, -20],
                            y: [-20, 20, -20]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.05),transparent_70%)]"
                    />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-heading text-5xl lg:text-7xl font-bold mb-8"
                        >
                            Insights, Guides & <br />
                            <motion.span
                                initial={{ clipPath: "inset(0 100% 0 0)" }}
                                animate={{ clipPath: "inset(0 0% 0 0)" }}
                                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                                className="text-primary italic inline-block"
                            >
                                Innovation.
                            </motion.span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
                        >
                            Stay updated with the latest trends in technology, design, and business strategy from our team of experts.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Blog Index Content */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16">

                        {/* Left: Blog Feed */}
                        <div className="lg:col-span-8 space-y-16">
                            {blogs.map((blog, i) => (
                                <motion.article
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group cursor-pointer border-b border-border pb-16 last:border-0"
                                >
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="w-full md:w-1/3 aspect-[4/3] bg-secondary rounded-2xl overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute top-4 left-4 z-10 bg-background px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                                {blog.category}
                                            </div>
                                        </div>

                                        <div className="w-full md:w-2/3">
                                            <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                                                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
                                                <span className="w-1 h-1 rounded-full bg-border" />
                                                <span>{blog.readTime}</span>
                                            </div>

                                            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                                                {blog.title}
                                            </h2>
                                            <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                                                {blog.desc}
                                            </p>

                                            <div className="flex items-center gap-3 font-bold group-hover:gap-5 transition-all">
                                                Read Full Article <ArrowRight className="w-5 h-5 text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        {/* Right: Sidebar */}
                        <aside className="lg:col-span-4 space-y-12">
                            <div className="p-8 rounded-[2rem] bg-secondary/30 border border-border/50">
                                <h4 className="font-heading text-xl font-bold mb-6">Search Articles</h4>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Keywords..."
                                        className="w-full bg-background border border-border rounded-xl py-3 px-12 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    />
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                </div>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10">
                                <h4 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                                    <Tag className="w-5 h-5" /> Categories
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Technology", "Design", "Development", "Business", "AI", "Mobile", "Security"].map((cat) => (
                                        <button key={cat} className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all">
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-foreground text-background">
                                <h4 className="font-heading text-2xl font-bold mb-4 italic">Subscribe to Our Newsletter</h4>
                                <p className="text-sm text-background/60 mb-6 leading-relaxed">
                                    Get the latest tech news and insights delivered straight to your inbox every week.
                                </p>
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-background/10 border border-background/20 rounded-xl py-3 px-4 text-background placeholder:text-background/40 outline-none focus:border-primary"
                                    />
                                    <button className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:scale-[1.02] transition-transform">
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </div>
    );
};

export default Blog;
