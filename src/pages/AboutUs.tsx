import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, Target, Award, Users, Rocket, Sparkles, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import aboutImage from "@/assets/about-realistic.png";
import dhineshPhoto from "@/assets/team/dhinesh.jpg";
import himeshPhoto from "@/assets/team/himesh.jpg";
import dhanushBPhoto from "@/assets/team/dhanush_b.jpg";
import jabaspinPhoto from "@/assets/team/jabaspin.jpg";
import bhupathiPhoto from "@/assets/team/bhupathi.jpg";
import dhanushPhoto from "@/assets/team/dhanush.jpg";
import jaganathanPhoto from "@/assets/team/jaganathan.jpg";
import prathishPhoto from "@/assets/team/prathish.jpg";
import perarasuPhoto from "@/assets/team/WhatsApp Image 2026-04-01 at 9.10.50 AM.jpeg";

const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)", scale: 0.98 },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, transition: { duration: 0.8 } }
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

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>About Us - Zech Soft | Our Mission & Team</title>
                <meta name="description" content="Learn more about Zech Soft, our mission to empower businesses with innovative technology, and the expert team behind our digital solutions." />
                <link rel="canonical" href="https://zechsoft.tech/about-us" />
            </Helmet>
            <Navbar />

            {/* Page Hero */}
            <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 overflow-hidden bg-secondary/20 text-foreground">
                <div className="absolute inset-0">
                    {/* Vibrant Startup Mesh */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.12),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)] dark:opacity-40" />

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                        style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '50px 50px' }}
                    />

                    {/* Launchpad Velocity */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Fluid Innovation Blobs (Organic Morphing) */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [0, 100, 0],
                                y: [0, -50, 0],
                                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 40% 60%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                            }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-400/20 blur-[100px]"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                x: [0, -120, 0],
                                y: [0, 80, 0],
                                borderRadius: ["30% 70% 70% 30% / 50% 40% 60% 50%", "70% 30% 30% 70% / 60% 70% 40% 30%", "30% 70% 70% 30% / 50% 40% 60% 50%"]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/15 blur-[120px]"
                        />

                        {/* Velocity Trails */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={`trail-${i}`}
                                initial={{ x: "-10%", y: Math.random() * 100 + "%", opacity: 0 }}
                                animate={{
                                    x: "110%",
                                    opacity: [0, 0.5, 0]
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 3,
                                    repeat: Infinity,
                                    delay: Math.random() * 5,
                                    ease: "linear"
                                }}
                                className="absolute h-[2px] w-32 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                            />
                        ))}

                        {/* Floating Growth Icons */}
                        {[
                            { icon: <Rocket className="w-6 h-6" />, color: "text-violet-500" },
                            { icon: <Sparkles className="w-5 h-5" />, color: "text-accent" },
                            { icon: <TrendingUp className="w-6 h-6" />, color: "text-cyan-500" }
                        ].map((item, i) => (
                            <motion.div
                                key={`icon-${i}`}
                                initial={{
                                    x: (20 + i * 30) + "%",
                                    y: "110%",
                                    opacity: 0
                                }}
                                animate={{
                                    y: "-10%",
                                    opacity: [0, 0.08, 0],
                                    rotate: [0, 45, -45, 0]
                                }}
                                transition={{
                                    duration: 15 + Math.random() * 10,
                                    repeat: Infinity,
                                    delay: i * 3,
                                    ease: "linear"
                                }}
                                className={`absolute ${item.color}`}
                            >
                                {item.icon}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-3xl"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
                            }}
                            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 shadow-sm"
                        >
                            <motion.span
                                animate={{
                                    opacity: [0.6, 1, 0.6],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-2 h-2 rounded-full bg-accent"
                            />
                            <span className="text-xs font-bold text-foreground/80 dark:text-foreground/90 uppercase tracking-widest">
                                Our Story
                            </span>
                        </motion.div>
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                            }}
                            className="font-heading text-5xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-foreground"
                        >
                            Thinking Ahead <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary dark:from-white dark:via-accent dark:to-white">Innovating Now</span>
                        </motion.h1>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
                            }}
                            className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium"
                        >
                            Zech Soft is a dynamic technology partner dedicated to helping businesses navigate the digital landscape with custom solutions that drive growth and efficiency.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 lg:py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src={aboutImage}
                                    alt="Zech Soft Team"
                                    className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="space-y-12"
                        >
                            <motion.div variants={fadeInUp}>
                                <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Who We Are</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Founded with a vision to simplify technology for businesses of all sizes, Zech Soft has grown into a full-service technology consulting and development firm. We believe that great technology should be accessible, scalable, and results-oriented.
                                </p>
                            </motion.div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <motion.div
                                    variants={fadeInUp}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className="p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-colors"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold mb-3">Our Mission</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        To empower businesses with smart, scalable, and innovative technology solutions that drive measurable growth.
                                    </p>
                                </motion.div>
                                <motion.div
                                    variants={fadeInUp}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className="p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-colors"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold mb-3">Our Vision</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        To become a trusted global technology partner known for delivering high-quality digital solutions.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-secondary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 shadow-sm border border-primary/20 bg-primary/5"
                        >
                            <Users className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">
                                The Zech Force
                            </span>
                        </motion.div>
                        <h2 className="font-heading text-5xl lg:text-7xl font-bold mb-6">Our Visionaries & Experts.</h2>
                        <p className="text-xl text-muted-foreground font-light leading-relaxed">
                            Meet the diverse team of engineers, designers, and strategists behind Zech Soft's most innovative solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                        {[
                            { name: "Dhinesh", role: "CEO & Founder", image: dhineshPhoto },
                            { name: "Dhanush", role: "Service Manager", image: dhanushPhoto },
                            { name: "Jaganathan", role: "Marketing Manager", image: jaganathanPhoto },
                            { name: "Bhupathi", role: "Product Manager", image: bhupathiPhoto },
                            { name: "Himesh Priyan", role: "Associate Manager", image: himeshPhoto },
                            { name: "Jabaspin", role: "Full stack Developer", image: jabaspinPhoto },
                            { name: "Dhanush B", role: "Front End Developer", image: dhanushBPhoto },
                            { name: "Perarasu A", role: "Software Developer", image: perarasuPhoto },
                            { name: "Mohan", role: "Back End Developer", id: "NS3_cp6vSpI" },
                            { name: "Dhilip Kumar", role: "Cyber Security", id: "k3pW97tvVPs" },
                            { name: "Prathish", role: "Software Tester", image: prathishPhoto }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative"
                            >
                                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-border/50 bg-secondary/20 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500">
                                    <img
                                        src={member.image || `https://images.unsplash.com/photo-${member.id.includes('-') ? member.id : (member.id === '4kYVU0I989E' ? '1560250097-0b93528c311a' : (member.id === 'ezIcdj3ZnKg' ? '1573496359142-b8d87734a5a2' : (member.id === 'x45xE1P6Fe4' ? '1519085360753-af0119f7cbe7' : (member.id === 'wyIs3Qd0r6o' ? '1472099645785-5658abf4ff4e' : (member.id === 'jBTMrR6Q334' ? '1580489944761-15a19d654956' : (member.id === 'PT16O8xAvDU' ? '1507003211169-0a1dd7228f2d' : (member.id === '1l6UeCc9P9o' ? '1500648767791-00dcc994a43e' : (member.id === 'NS3_cp6vSpI' ? '1542909168-82c3e7fdca5c' : (member.id === 'k3pW97tvVPs' ? '1506794778202-cad84cf45f1d' : '1539571696357-5a69c17a67c6')))))))))}?q=80&w=400&auto=format&fit=crop`}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                    
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h4 className="text-white text-xl font-bold mb-1 tracking-tight">{member.name}</h4>
                                        <p className="text-white/70 text-xs font-bold uppercase tracking-widest">{member.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            <CTASection />
            <Footer />
        </div>
    );
};

export default AboutUs;
