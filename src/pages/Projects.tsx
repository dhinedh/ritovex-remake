import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

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
        title: "School Management System",
        desc: "A robust educational ERP that streamlines administrative tasks, student enrollment, attendance tracking, and grading systems for modern schools.",
        category: "EdTech",
        tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
        color: "bg-blue-500/10 border-blue-500/20",
        textColor: "text-blue-500"
    },
    {
        title: "ShopEasy E-Commerce",
        desc: "A massive multi-vendor marketplace with over 10k daily active users. Focused on lightning-fast performance and seamless checkout flows.",
        category: "E-Commerce",
        tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
        color: "bg-orange-500/10 border-orange-500/20",
        textColor: "text-orange-500"
    },
    {
        title: "Hospital Management System",
        desc: "A comprehensive HIMS solution for multi-specialty hospitals, featuring automated OPD/IPD workflows, pharmacy integration, and advanced laboratory management.",
        category: "Healthcare",
        tags: ["React Native", "Firebase", "WebRTC"],
        color: "bg-emerald-500/10 border-emerald-500/20",
        textColor: "text-emerald-500"
    },
    {
        title: "Manufacturing Corporate Portfolios",
        desc: "High-end corporate websites for leading manufacturing companies like Global India Corporation and Refranox Private Limited, showcasing industrial capabilities and global reach.",
        category: "Corporate",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
        color: "bg-purple-500/10 border-purple-500/20",
        textColor: "text-purple-500"
    },
    {
        title: "Payroll & Manufacturing ERP",
        desc: "A specialized ERP system for manufacturing units, integrating automated payroll, attendance, production tracking, and raw material management.",
        category: "ERP Solutions",
        tags: ["React", "Express", "MySQL", "Chart.js"],
        color: "bg-cyan-500/10 border-cyan-500/20",
        textColor: "text-cyan-500"
    },
    {
        title: "All-in-One Billing Software",
        desc: "A versatile billing and invoice management system designed for retail, wholesale, and service businesses. Features include GST compliance, inventory syncing, and automated reporting.",
        category: "SaaS",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        color: "bg-lime-500/10 border-lime-500/20",
        textColor: "text-lime-500"
    }
];

const Projects = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Page Hero */}
            <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-background text-foreground">
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
                                    <div className={`px-4 py-1.5 rounded-full bg-white/80 border border-white font-bold text-xs uppercase tracking-wider ${project.textColor}`}>
                                        {project.category}
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border hover:bg-primary hover:text-white transition-all">
                                            <ExternalLink className="w-5 h-5" />
                                        </button>
                                        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border hover:bg-primary hover:text-white transition-all">
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
                                        <span key={idx} className="bg-white/50 px-4 py-1.5 rounded-lg text-xs font-bold text-foreground/70 border border-white">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 font-bold text-foreground group-hover:gap-4 transition-all cursor-pointer">
                                    View Case Study <ArrowRight className="w-5 h-5 text-primary" />
                                </div>
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
