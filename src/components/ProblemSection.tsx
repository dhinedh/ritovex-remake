import { motion } from "framer-motion";
import { Clock, AlertTriangle, TrendingDown } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
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

const problems = [
    {
        icon: <Clock className="w-6 h-6 text-red-500" />,
        title: "Time Wasted",
        desc: "Manual repetitive tasks eat up hours of your team's valuable time every week."
    },
    {
        icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
        title: "High Error Rates",
        desc: "Human intervention in standard processes often leads to costly mistakes and inconsistencies."
    },
    {
        icon: <TrendingDown className="w-6 h-6 text-red-500" />,
        title: "Lost Revenue",
        desc: "Inefficient workflows slow down operations and negatively impact your bottom line."
    }
];

const ProblemSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-[#FFF9F5] overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 border border-red-100 rounded-full px-4 py-1.5 bg-red-50 mb-8"
                    >
                        <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
                            The Problem
                        </span>
                    </motion.div>
                    
                    <motion.h2 
                        variants={fadeInUp}
                        className="font-heading text-4xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tighter text-zinc-900"
                    >
                        Manual processes <span className="text-red-500">waste time and money.</span>
                    </motion.h2>
                    
                    <motion.p 
                        variants={fadeInUp}
                        className="text-xl text-zinc-600 leading-relaxed font-medium"
                    >
                        Startups and growing businesses struggle to scale when their teams are bogged down by administrative overhead and disconnected tools.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {problems.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-zinc-100/50 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-500 group"
                        >
                            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h3 className="font-heading text-2xl font-bold mb-4 text-zinc-900">{item.title}</h3>
                            <p className="text-zinc-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSection;
