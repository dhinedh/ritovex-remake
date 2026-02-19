import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award, Briefcase, Star, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 260, suffix: "+", label: "We deliver great work always" },
  { icon: Star, value: 18, suffix: "+", label: "Experience you can count on" },
  { icon: Award, value: 26, suffix: "+", label: "Award-Winning Work, Trusted Results" },
  { icon: Users, value: 5, suffix: "K+", label: "We have happy Clients worldwide" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = Math.max(1, Math.floor(target / 40));
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(current);
            }
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
      {count}{suffix}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about-us" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            About Us
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
            Who We Are. Learn About Us
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            We are a dynamic team of innovators, storytellers, and visionaries dedicated to transforming ideas into extraordinary experiences.
          </p>
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-secondary rounded-2xl p-6 lg:p-8 text-center group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-foreground/10">
                <stat.icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-2 group-hover:text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
