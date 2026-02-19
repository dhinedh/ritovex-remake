import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award, Briefcase, Star, Users, Phone } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const stats = [
  { icon: Briefcase, value: 200, suffix: "+", label: "We deliver great work always" },
  { icon: Award, value: 10, suffix: "+", label: "Experience you can count on" },
  { icon: Star, value: 20, suffix: "+", label: "Award-Winning Work, Trusted Results" },
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

        {/* Content: Image left, Stats right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 items-end"
        >
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <img
                src={aboutImage}
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative blob behind top-right */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary rounded-full -z-10" />
          </div>

          {/* Stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-secondary rounded-2xl p-6 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl border border-border bg-background flex items-center justify-center">
                      <stat.icon className="w-4 h-4 text-foreground" />
                    </div>
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex items-center gap-6">
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                More About Us
              </a>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <Phone className="w-4 h-4 text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground leading-none">Get free Quote</p>
                  <p className="font-semibold text-foreground">22 (00) 356 7890</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
