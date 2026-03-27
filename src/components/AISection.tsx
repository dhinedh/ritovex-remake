import { motion } from "framer-motion";
import { Sparkles, Brain, Zap, Shield, Cpu, BarChart } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Growth Diagnostic",
    desc: "We analyze your business data to identify inefficient workflows and untapped revenue opportunities with 95%+ accuracy."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Automated Ecosystems",
    desc: "Deploy intelligent agents that handle everything from inventory syncing to customer support, reducing OpEx by up to 40%."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Predictive Solving",
    desc: "Monitor your operations in real-time. Our AI detects and solves logistical problems before they impact your customers."
  }
];

const AISection = () => {
  return (
    <section className="py-24 lg:py-32 bg-zinc-950 text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-md mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                Future-Ready Technology
              </span>
            </div>
            
            <h2 className="font-heading text-4xl lg:text-6xl font-black mb-8 leading-[1.1]">
              Empowering Business with <br />
              <span className="text-primary italic">Intelligent Automation.</span>
            </h2>
            
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
              We don't just build software; we build intelligence. Our custom AI solutions integrate seamlessly into your existing workflows, reducing costs by up to 40% and accelerating growth.
            </p>

            <div className="grid gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl mb-2">{f.title}</h4>
                    <p className="text-white/50 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 group">
               <img 
                 src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2400&auto=format&fit=crop" 
                 alt="AI Visualization" 
                 className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               
               {/* Floating Stats */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-10 right-10 p-6 bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl text-white"
               >
                 <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold">Speed Factor</span>
                 </div>
                 <div className="text-3xl font-black">10.5x</div>
                 <p className="text-[10px] text-white/50 uppercase font-bold tracking-tighter\">Faster Processing</p>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 20, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-10 left-10 p-6 bg-primary rounded-3xl border border-primary/20 shadow-2xl text-white"
               >
                 <div className="flex items-center gap-3 mb-2">
                    <BarChart className="w-5 h-5" />
                    <span className="text-sm font-bold opacity-80">Efficiency Gain</span>
                 </div>
                 <div className="text-3xl font-black">+42%</div>
                 <p className="text-[10px] opacity-60 uppercase font-bold tracking-tighter">Average Per Client</p>
               </motion.div>
            </div>
            
            {/* Glow */}
            <div className="absolute -inset-4 bg-primary/20 blur-[60px] rounded-[4rem] -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
