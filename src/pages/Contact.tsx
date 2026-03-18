import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import contactHeroBg from "@/assets/contact-hero-bg.png";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Contact = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Page Hero */}
            <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fafafc]">
                {/* Image Background Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2400&auto=format&fit=crop"
                        alt="Contact Hero Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark/Gradient Overlay for Contrast */}
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.3),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.2),transparent_50%)]" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                        }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 border border-black/5 rounded-full px-4 py-1.5 bg-white/50 backdrop-blur-md mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-bold text-foreground/80 uppercase tracking-widest">
                                Contact Us
                            </span>
                        </div>
                        <h1 className="font-heading text-5xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                            Let's Build Something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Amazing Together</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                            Have a question or a project in mind? Reach out to us and let's start a conversation about your digital future.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 lg:py-32 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Contact Info */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, x: -30 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                            }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                                    Our team is here to help you navigate your technology journey. Whether you're looking for support, partnership, or just want to say hi, we're all ears.
                                </p>

                                <div className="grid gap-8">
                                    {[
                                        {
                                            icon: <Mail className="w-6 h-6" />,
                                            title: "Email Us",
                                            info: "info@zechsoft.tech",
                                            desc: "We usually respond within 24 hours."
                                        },
                                        {
                                            icon: <Phone className="w-6 h-6" />,
                                            title: "Call Us",
                                            info: "+91 93424 00879",
                                            desc: "Mon - Fri, 9am - 6pm IST"
                                        },
                                        {
                                            icon: <MapPin className="w-6 h-6" />,
                                            title: "Visit Us",
                                            info: "Chennai, India",
                                            desc: "Serving clients globally."
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 items-start">
                                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-heading font-bold text-lg mb-1">{item.title}</h4>
                                                <p className="text-primary font-semibold mb-1">{item.info}</p>
                                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-secondary/30 border border-border/50">
                                <div className="flex items-center gap-4 mb-4">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <h4 className="font-bold">Support Hours</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Our technical support team is available 24/7 for urgent issues. General inquiries are handled during business hours.
                                </p>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, x: 30 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                            }}
                            className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-border/50"
                        >
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">First Name</label>
                                        <input type="text" placeholder="John" className="w-full px-6 py-4 bg-secondary/50 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Last Name</label>
                                        <input type="text" placeholder="Doe" className="w-full px-6 py-4 bg-secondary/50 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-secondary/50 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                                    <select className="w-full px-6 py-4 bg-secondary/50 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer">
                                        <option>General Inquiry</option>
                                        <option>Project Proposal</option>
                                        <option>Support Request</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                                    <textarea placeholder="Tell us about your project..." rows={5} className="w-full px-6 py-4 bg-secondary/50 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
                                </div>
                                <button className="w-full py-5 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all group">
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </div>
    );
};

export default Contact;
