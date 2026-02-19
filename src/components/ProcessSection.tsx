import { motion } from "framer-motion";
import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Discovery & Strategy", desc: "We start by understanding your vision, goals, and audience to craft a tailored plan." },
  { icon: PenTool, num: "02", title: "Design & Development", desc: "Our team creates stunning designs and builds robust solutions with modern tech." },
  { icon: Rocket, num: "03", title: "Launch & Optimize", desc: "We launch your project and continuously optimize for peak performance." },
];

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
            <span className="inline-block border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
              Working Process
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              Our 3 Step Working Process
            </h2>
          </div>
          <a
            href="#services"
            className="mt-4 lg:mt-0 inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity w-fit"
          >
            Start Projects
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <step.icon className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-xs font-bold text-accent font-heading">{step.num}</span>
              <h3 className="font-heading text-lg font-bold text-foreground mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="mt-16 overflow-hidden">
        <div className="flex animate-marquee-slow whitespace-nowrap">
          {["Web Design", "UI/UX Design", "Product Design", "Digital Marketing", "Web Design", "UI/UX Design", "Product Design", "Digital Marketing", "Web Design", "UI/UX Design", "Product Design", "Digital Marketing"].map((item, i) => (
            <span key={i} className="mx-6 text-3xl lg:text-5xl font-heading font-bold text-foreground/10 select-none flex items-center gap-6">
              {item}
              <span className="text-accent text-lg">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
