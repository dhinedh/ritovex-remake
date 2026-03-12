import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import careersHeroBg from "@/assets/careers-hero-bg.png";
import { Briefcase, Users, Star, ArrowRight, Zap, Target, Heart } from "lucide-react";

const Careers = () => {
    const jobs = [
        {
            title: "Senior Full Stack Developer",
            type: "Full-Time",
            location: "Remote / Chennai",
            department: "Engineering"
        },
        {
            title: "UI/UX Designer",
            type: "Full-Time",
            location: "Remote",
            department: "Design"
        },
        {
            title: "Project Manager",
            type: "Contract",
            location: "Chennai",
            department: "Operations"
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Page Hero */}
            <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-[#fafafc]">
                {/* Image Background Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={careersHeroBg}
                        alt="Careers Hero Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark/Gradient Overlay for Contrast */}
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.3),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.2),transparent_50%)]" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                        }}
                    >
                        <div className="inline-flex items-center gap-2 border border-black/5 rounded-full px-4 py-1.5 bg-white/50 backdrop-blur-md mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                            <span className="text-xs font-bold text-foreground/80 uppercase tracking-widest">
                                Work With Us
                            </span>
                        </div>
                        <h1 className="font-heading text-5xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                            Build Your Future <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-primary">With Zech Soft</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed font-medium mx-auto max-w-2xl">
                            We're looking for passionate individuals who want to make a real impact in the technology world. Join our distributed team and grow with us.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-20 lg:py-32 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="font-heading text-4xl font-bold mb-6">Why Join Zech Soft?</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We foster an environment of innovation, continuous learning, and mutual respect. We believe in work-life balance and empowering our team members.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Modern Tech Stack",
                                desc: "Work with the latest technologies and tools to solve interesting challenges."
                            },
                            {
                                icon: <Target className="w-8 h-8" />,
                                title: "Growth Opportunities",
                                desc: "We invest in your professional development with training and mentors."
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: "Culture of Care",
                                desc: "A supportive environment where your input is valued and respected."
                            }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-10 rounded-3xl bg-secondary/20 hover:bg-secondary/40 transition-all border border-border/50 group"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-heading text-2xl font-bold mb-4">{benefit.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-20 lg:py-32 bg-[#fafafc]">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                            <h2 className="font-heading text-4xl font-bold">Open Positions</h2>
                            <div className="flex gap-4">
                                <span className="px-4 py-2 bg-white border border-border rounded-full text-sm font-medium">All Jobs</span>
                                <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">Remote Only</span>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {jobs.map((job, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="p-8 rounded-[2rem] bg-white border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
                                >
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-primary/10 text-primary rounded-md">{job.department}</span>
                                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-secondary text-muted-foreground rounded-md">{job.type}</span>
                                        </div>
                                        <h3 className="font-heading text-2xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                                        <p className="text-muted-foreground text-sm font-medium mt-1">{job.location}</p>
                                    </div>
                                    <button className="flex items-center gap-2 font-bold text-primary group/btn">
                                        <span>Apply Now</span>
                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16 p-10 rounded-3xl bg-primary text-primary-foreground text-center">
                            <h3 className="font-heading text-2xl font-bold mb-4">Don't see a fit?</h3>
                            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                                If you're talented and passionate but don't see a perfect role, send us your resume and we'll keep you in mind for future openings.
                            </p>
                            <button className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-opacity-90 transition-all">
                                Send Your CV
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </div>
    );
};

export default Careers;
