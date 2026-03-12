import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceMarquee from "@/components/ServiceMarquee";
import { motion } from "framer-motion";
import servicesHeroBg from "@/assets/services-hero-bg.png";
import {
    Code2,
    Globe,
    Smartphone,
    BarChart3,
    ShieldCheck,
    Layers,
    ArrowRight
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

const services = [
    {
        icon: <Globe className="w-8 h-8 text-primary" />,
        title: "Website Development",
        desc: "We build responsive, fast, and SEO-friendly websites tailored to your brand. From simple landing pages to complex corporate portals.",
        features: ["Responsive Design", "SEO Optimization", "Performance Focus", "Modern Frameworks"]
    },
    {
        icon: <Smartphone className="w-8 h-8 text-primary" />,
        title: "Mobile App Development",
        desc: "Native and cross-platform mobile applications that provide seamless user experiences on both iOS and Android platforms.",
        features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"]
    },
    {
        icon: <Code2 className="w-8 h-8 text-primary" />,
        title: "Custom Software Solutions",
        desc: "Tailor-made software to solve your specific business challenges and automate workflow for better efficiency.",
        features: ["CRM Systems", "ERP Solutions", "Automation Tools", "API Integrations"]
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-primary" />,
        title: "Digital Marketing",
        desc: "Strategic marketing campaigns to increase your online visibility, drive traffic, and boost conversions.",
        features: ["Social Media Marketing", "PPC Campaigns", "Content Strategy", "Email Marketing"]
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "IT Support & Maintenance",
        desc: "Reliable support and proactive maintenance to ensure your digital assets are always running smoothly and securely.",
        features: ["24/7 Monitoring", "Security Audits", "Regular Updates", "Cloud Migration"]
    },
    {
        icon: <Layers className="w-8 h-8 text-primary" />,
        title: "UI/UX Design",
        desc: "User-centric design solutions that combine aesthetics with functionality to create engaging digital products.",
        features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    }
];

const Services = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Page Hero */}
            <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-white">
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
                            className="inline-flex items-center gap-2 border border-black/5 rounded-full px-4 py-1.5 bg-white/50 backdrop-blur-sm mb-6 shadow-sm"
                        >
                            <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-2 h-2 rounded-full bg-accent"
                            />
                            <span className="text-xs font-bold text-foreground/80 uppercase tracking-widest">
                                Solutions for Success
                            </span>
                        </motion.div>
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="font-heading text-6xl lg:text-9xl font-black mb-8 italic tracking-tighter"
                        >
                            Next-Gen <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">Services</span>
                        </motion.h1>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 1, delay: 0.3 } }
                            }}
                            className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium"
                        >
                            We offer a wide range of technology services designed to help you scale, innovate, and outperform the competition.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 lg:py-32 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="group p-8 lg:p-10 rounded-[2.5rem] bg-secondary/20 hover:bg-secondary/40 border border-border/50 hover:border-primary/30 transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                                    <div className="group-hover:text-white transition-colors">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    {service.desc}
                                </p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                            <ArrowRight className="w-3 h-3 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <ServiceMarquee />

            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-8">Ready to transform your business?</h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-primary/20"
                    >
                        Book a Free Consultation
                    </motion.button>
                </div>
            </section>

            <CTASection />
            <Footer />
        </div>
    );
};

export default Services;
