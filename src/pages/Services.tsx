import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceMarquee from "@/components/ServiceMarquee";
import { motion } from "framer-motion";
import servicesHeroBg from "@/assets/services-hero-realistic.png";
import {
    Code2,
    Globe,
    Smartphone,
    BarChart3,
    ShieldCheck,
    ArrowRight,
    ShoppingCart,
    Cpu,
    Zap,
    Bot,
    Palette,
    Users,
    Rocket,
    Heart,
    Star,
    CheckCircle2
} from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const serviceCategories = [
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Website Development",
        color: "bg-blue-500",
        items: [
            "Business Website Development",
            "Corporate Website Development",
            "Portfolio Websites",
            "Landing Page Design",
            "Website Redesign",
            "Website Maintenance"
        ]
    },
    {
        icon: <ShoppingCart className="w-8 h-8" />,
        title: "E-commerce Development",
        color: "bg-orange-500",
        items: [
            "Custom E-commerce Websites",
            "Shopify / WooCommerce Stores",
            "Multi-vendor Marketplace",
            "Product Management Systems",
            "Payment Gateway Integration"
        ]
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Mobile App Development",
        color: "bg-purple-500",
        items: [
            "Android Apps",
            "iOS Apps",
            "Flutter Apps",
            "Business Apps",
            "E-commerce Apps"
        ]
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "Custom Software Development",
        color: "bg-cyan-500",
        items: [
            "ERP Systems",
            "Inventory Management Systems",
            "Billing Software",
            "Dashboard Systems"
        ]
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Business Automation",
        color: "bg-yellow-500",
        items: [
            "CRM Systems",
            "WhatsApp Automation",
            "Email Automation",
            "Sales Automation",
            "Workflow Automation"
        ]
    },
    {
        icon: <Bot className="w-8 h-8" />,
        title: "AI Solutions",
        color: "bg-indigo-500",
        items: [
            "AI Chatbots",
            "AI Customer Support",
            "AI Analytics Systems",
            "AI Content Automation"
        ]
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Digital Marketing",
        color: "bg-green-500",
        items: [
            "SEO",
            "Google Ads",
            "Social Media Marketing",
            "Lead Generation",
            "Content Marketing"
        ]
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Branding & Design",
        color: "bg-pink-500",
        items: [
            "Logo Design",
            "Brand Identity",
            "Brochure Design",
            "Social Media Designs"
        ]
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Cyber Security",
        color: "bg-red-500",
        items: [
            "Website Security",
            "Vulnerability Testing",
            "Security Audits",
            "Data Protection"
        ]
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "IT Consulting",
        color: "bg-teal-500",
        items: [
            "Digital Transformation",
            "Technology Planning",
            "Business Process Optimization"
        ]
    }
];

const specialServices = [
    {
        icon: <Rocket className="w-12 h-12 text-white" />,
        title: "Startup Launch Package",
        color: "from-blue-600 to-indigo-700",
        items: ["Logo", "Website", "Branding", "Marketing Setup"],
        description: "Everything you need to take your idea from concept to a professional market-ready brand."
    },
    {
        icon: <Heart className="w-12 h-12 text-white" />,
        title: "Women Entrepreneur Digital Support",
        color: "from-pink-500 to-rose-600",
        items: ["Online Store Setup", "Branding", "Marketing"],
        description: "Dedicated support and special packages to empower women-led businesses in the digital space."
    }
];

const Services = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Page Hero */}
            <section className="relative pt-36 pb-14 lg:pt-48 lg:pb-20 overflow-hidden bg-white">
                {/* Image Background Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={servicesHeroBg}
                        alt="Services Hero Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark/Gradient Overlay for Contrast */}
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.3),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.2),transparent_50%)]" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-center max-w-5xl mx-auto"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                            }}
                            className="inline-flex items-center gap-2 border border-white/20 rounded-full px-5 py-2 bg-white/10 backdrop-blur-md mb-8 shadow-xl"
                        >
                            <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-2.5 h-2.5 rounded-full bg-accent"
                            />
                            <span className="text-sm font-bold text-white uppercase tracking-[0.2em]">
                                Solutions for Success
                            </span>
                        </motion.div>
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="font-heading text-6xl lg:text-9xl font-black mb-8 italic tracking-tighter text-white"
                        >
                            Our <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">Expertise</span>
                        </motion.h1>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 1, delay: 0.3 } }
                            }}
                            className="text-xl lg:text-3xl text-white/80 leading-relaxed max-w-3xl mx-auto font-medium"
                        >
                            Comprehensive technology solutions tailored to drive your business forward in the digital age.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {serviceCategories.map((category, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="group p-6 lg:p-8 rounded-[2.5rem] bg-secondary/10 hover:bg-white dark:hover:bg-secondary/40 border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
                            >
                                {/* Background Glow */}
                                <div className={`absolute top-0 right-0 w-32 h-32 ${category.color} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-500`} />
                                
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-500 bg-background`}>
                                    <div className="group-hover:text-white text-primary transition-colors">
                                        {category.icon}
                                    </div>
                                </div>
                                <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight">
                                    {category.title}
                                </h3>
                                <ul className="space-y-4">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-base font-medium text-foreground/70 hover:text-foreground transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Special Service Section */}
            <section className="py-16 lg:py-24 bg-[#0F0F0F] text-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center mb-20 animate-fade-in">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <Star className="w-5 h-5 text-accent animate-pulse" />
                            <span className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Exclusive Offerings</span>
                        </div>
                        <h2 className="font-heading text-4xl lg:text-7xl font-bold mb-6 tracking-tight">
                            Special Service <span className="italic text-accent">Programs</span>
                        </h2>
                        <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto">
                            Targeted support packages designed for specific business needs and growth stages.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {specialServices.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className={`relative p-8 lg:p-10 rounded-[3.5rem] bg-gradient-to-br ${service.color} overflow-hidden shadow-2xl group border border-white/10`}
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rotate-45 translate-x-32 -translate-y-32 transition-transform duration-700 group-hover:translate-x-24 group-hover:-translate-y-24" />
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-10 p-4 bg-white/10 w-fit rounded-3xl backdrop-blur-sm border border-white/10">
                                        {service.icon}
                                    </div>
                                    <h3 className="font-heading text-3xl lg:text-5xl font-black mb-6 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-md">
                                        {service.description}
                                    </p>
                                    <div className="mt-auto grid grid-cols-2 gap-y-4">
                                        {service.items.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                                                <span className="font-bold text-white tracking-wide">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="mt-12 bg-white text-black py-4 px-10 rounded-full font-bold w-fit hover:bg-accent hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                                        Get Details
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ServiceMarquee />

            <section className="py-14 bg-secondary/10 relative">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="font-heading text-4xl font-bold mb-8 italic">Need a Custom Solution?</h2>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary text-primary-foreground px-12 py-5 rounded-full font-bold shadow-2xl shadow-primary/30 text-lg tracking-wide hover:bg-primary/90 transition-all"
                        >
                            Book a Free Consultation
                        </motion.button>
                        <p className="mt-6 text-muted-foreground font-medium">No obligation. Just professional advice for your digital journey.</p>
                    </motion.div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </div>
    );
};

export default Services;

