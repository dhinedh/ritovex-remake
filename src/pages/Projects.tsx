import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const projects = [
    {
        title: "Autonomous School Ecosystem",
        desc: "Analyzed administrative friction in 50+ schools. Deployed an AI-driven ERP that automated fee tracking and grading, reclaiming 35% of staff bandwidth for student growth.",
        category: "EdTech Automation",
        tags: ["AI ERP", "Automation", "PostgreSQL", "Socket.io"],
        results: "35% Increase in Admin Speed",
        color: "bg-blue-500/10 border-blue-500/20",
        textColor: "text-blue-500",
        path: "/school-erp"
    },
    {
        title: "ShopEasy AI E-Commerce",
        desc: "Diagnosed high cart abandonment and slow inventory cycles. Integrated real-time predictive analytics to automate stock management and personalized customer journeys.",
        category: "E-Commerce Growth",
        tags: ["Predictive AI", "Next.js", "PostgreSQL", "Stripe"],
        results: "400% Organic Traffic Surge",
        color: "bg-orange-500/10 border-orange-500/20",
        textColor: "text-orange-500",
        path: "/shopeasy"
    },
    {
        title: "Intelligent HIMS Healthcare",
        desc: "Identified critical scheduling conflicts in patient care. Deployed a complete digital solution that uses AI algorithms to reduce wait times and ensure zero billing errors.",
        category: "Healthcare Solutions",
        tags: ["AI Scheduling", "Firebase", "WebRTC"],
        results: "42% Reduction in Wait Times",
        color: "bg-emerald-500/10 border-emerald-500/20",
        textColor: "text-emerald-500",
        path: "/hospital-hims"
    },
    {
        title: "Manufacturing AI Portfolios",
        desc: "Solved the 'Invisible Giant' problem for industrial leaders. Built premium digital presences that use automated lead capture to double international inquiries.",
        category: "Corporate Visibility",
        tags: ["Automation", "Framer Motion", "SEO Strategy"],
        results: "2x Lead Capture Rate",
        color: "bg-purple-500/10 border-purple-500/20",
        textColor: "text-purple-500",
        path: "/manufacturing"
    },
    {
        title: "Heavy-Industry Payroll ERP",
        desc: "Analyzed ghost-work and overhead leakages in manufacturing units. Integrated biometric AI and production tracking to secure the bottom line.",
        category: "Industrial Efficiency",
        tags: ["Biometric AI", "MySQL", "Chart.js"],
        results: "20% Reduction in Overheads",
        color: "bg-cyan-500/10 border-cyan-500/20",
        textColor: "text-cyan-500",
        path: "/payroll-erp"
    },
    {
        title: "Global Retail Billing SaaS",
        desc: "Solved GST compliance and inventory syncing problems for 500+ businesses. A complete digital ecosystem that automates retail complexity.",
        category: "Retail Automation",
        tags: ["SaaS", "Automation", "MongoDB"],
        results: "99.9% System Uptime",
        color: "bg-lime-500/10 border-lime-500/20",
        textColor: "text-lime-500",
        path: "/billing-software"
    }
];

const Projects = () => {
    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Our Projects - Zech Soft | Case Studies & Portfolio</title>
                <meta name="description" content="Discover our recent work: School and Hospital Management Systems, E-commerce platforms, and custom ERP solutions. See how we deliver digital excellence." />
                <link rel="canonical" href="https://zechsoft.tech/projects" />
            </Helmet>
            <Navbar />

            {/* Page Hero */}
            <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background text-foreground">
                {/* Background Shapes */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <motion.div
                        animate={{
                            rotate: [0, 90, 0],
                            x: [0, 120, 0],
                            y: [0, 70, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-20 -left-20 w-80 h-80 border-[3px] border-primary/10 bg-primary/5 rounded-[5rem]"
                    />
                    <motion.div
                        animate={{
                            rotate: [0, -90, 0],
                            x: [0, -100, 0],
                            y: [0, -60, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 -right-20 w-96 h-96 border-[3px] border-accent/20 bg-accent/5 rounded-full blur-[2px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/4"
                    />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.9, y: 10 },
                                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 bg-secondary/80 backdrop-blur-sm mb-6 shadow-sm"
                        >
                            <motion.span
                                animate={{
                                    rotateY: [0, 360],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="w-2.5 h-2.5 rounded-full bg-primary"
                            />
                            <span className="text-xs font-bold text-foreground uppercase tracking-wide">
                                Our Work
                            </span>
                        </motion.div>
                        <motion.h1
                            className="font-heading text-5xl lg:text-8xl font-bold mb-8 leading-tight"
                        >
                            {["Crafting", "Digital", "Excellence"].map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 60, rotate: -5 }}
                                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                                    transition={{
                                        duration: 1.2,
                                        delay: i * 0.15,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="inline-block mr-4"
                                >
                                    {word}{" "}
                                </motion.span>
                            ))}
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                className="text-primary italic block lg:inline"
                            >
                                Case by Case.
                            </motion.span>
                        </motion.h1>
                    </motion.div>
                </div>
            </section>

            {/* Projects Filter/Grid */}
            <section className="py-20 lg:py-32 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`group relative overflow-hidden rounded-[3rem] border ${project.color} p-10 lg:p-14 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500`}
                            >
                                <div className="flex justify-between items-start mb-12">
                                    <div className="flex flex-col gap-2">
                                        <div className={`w-fit px-4 py-1.5 rounded-full bg-white/80 dark:bg-zinc-800/80 border border-white/20 font-bold text-[10px] uppercase tracking-wider ${project.textColor}`}>
                                            {project.category}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-primary">
                                            <Sparkles className="w-3.5 h-3.5" />
                                            <span className="text-xs font-black uppercase tracking-tighter">{project.results}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="w-12 h-12 rounded-full bg-background dark:bg-card flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-all">
                                            <ExternalLink className="w-5 h-5" />
                                        </button>
                                        <button className="w-12 h-12 rounded-full bg-background dark:bg-card flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-all">
                                            <Github className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <h3 className="font-heading text-3xl lg:text-4xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-10">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-secondary/50 dark:bg-secondary/20 px-4 py-1.5 rounded-lg text-xs font-bold text-foreground/70 border border-border/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link 
                                    to={project.path}
                                    className="inline-flex items-center gap-2 font-bold text-foreground group-hover:gap-4 transition-all cursor-pointer hover:text-primary"
                                >
                                    View Case Study <ArrowRight className="w-5 h-5 text-primary" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            <CTASection />
            <Footer />
        </div >
    );
};

export default Projects;
