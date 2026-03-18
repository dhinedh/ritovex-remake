import { motion } from "framer-motion";
import { Search, PenTool, Rocket } from "lucide-react";
import processImage from "@/assets/working-process.png";

const steps = [
  { icon: Search, num: "01", title: "Discovery & Strategy", desc: "We start by understanding your vision, goals, and audience to craft a tailored plan." },
  { icon: PenTool, num: "02", title: "Design & Development", desc: "Our team creates stunning designs and builds robust solutions with modern tech." },
  { icon: Rocket, num: "03", title: "Launch & Optimize", desc: "We launch your project and continuously optimize for peak performance." },
];

const ProcessSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left Column: Title, Action, and Image */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28 self-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 border border-border/40 rounded-full px-4 py-2 bg-background/40 backdrop-blur-md mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold text-foreground/70 uppercase tracking-widest">
                Our Workflow
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.1] mb-8"
            >
              Explore Our <br />
              <span className="text-accent underline decoration-accent/20 decoration-4 underline-offset-8 italic font-heading">3 Step</span> <br />
              Working Process
            </motion.h2>

            <div className="flex flex-col gap-12 w-full">
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                href="#contact"
                className="inline-flex items-center justify-center bg-foreground text-background px-10 py-4 rounded-full text-base font-bold hover:shadow-xl hover:shadow-black/10 transition-all w-fit"
              >
                Start Your Project
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-background group"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Our professional working process"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-background/80 backdrop-blur-md border border-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Ritovex Studio</p>
                  <p className="text-sm font-medium text-foreground/60">Delivering excellence since 2024</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Steps List with Vertical Connector */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Connecting Line */}
            <div className="absolute left-10 lg:left-14 top-10 bottom-10 w-0.5 bg-gradient-to-b from-border/20 via-border/60 to-border/20 hidden md:block" />

            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  className="relative group md:pl-28 lg:pl-32"
                >
                  {/* Step Item Marker */}
                  <div className="absolute left-10 lg:left-14 top-10 w-3 h-3 -ml-[5px] rounded-full bg-accent border-[3px] border-background shadow-[0_0_15px_rgba(var(--accent),0.5)] z-20 hidden md:block transition-transform duration-500 group-hover:scale-150" />

                  <div className="backdrop-blur-xl bg-background/40 hover:bg-background/60 rounded-[2rem] p-8 lg:p-10 transition-all duration-500 border border-white/20 hover:border-accent/30 shadow-sm hover:shadow-2xl hover:shadow-accent/5 group/card overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

                    <div className="flex justify-between items-start mb-8 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover/card:bg-accent group-hover/card:text-white transition-all duration-500 shadow-inner">
                        <step.icon className="w-8 h-8 text-accent group-hover/card:text-white transition-colors duration-500" />
                      </div>
                      <span className="text-6xl lg:text-7xl font-heading font-black text-foreground/5 pointer-events-none group-hover/card:text-accent/5 transition-colors duration-500">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover/card:text-accent transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                      {step.desc}
                    </p>

                    {/* Interactive underline decor */}
                    <div className="mt-8 h-px w-0 group-hover/card:w-full bg-gradient-to-r from-accent to-transparent transition-all duration-1000" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
