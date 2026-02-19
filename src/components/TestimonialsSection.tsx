import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Was initially hesitant about the project, but the team quickly put my mind at ease. Their expertise and creative solutions were impressive. The final product exceeded my expectations.",
    name: "Jakob Alison",
    role: "Project Manager at Triko",
    rating: 4,
  },
  {
    text: "I came to them with a vague idea, and they helped me refine it into a concrete plan. Throughout the process, they kept me informed and involved, ensuring I was happy with the direction.",
    name: "Alisa Olivia",
    role: "CTO at Ritovex",
    rating: 5,
  },
  {
    text: "Working with them was a true pleasure. They were responsive, communicative, and always willing to go the extra mile. I especially appreciated their attention to detail.",
    name: "Jordan Walk",
    role: "Software Engineer at Briks",
    rating: 5,
  },
  {
    text: "Throughout the process, they kept me informed and involved. I came to them with a vague idea, and they helped me refine it into a concrete plan that delivered real results.",
    name: "Ema Watson",
    role: "Founder at Ritof",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            Testimonial
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
            What Our Clients Are Saying
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Hear directly from our clients about their experiences and the results we've delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary rounded-2xl p-6 lg:p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < t.rating ? "fill-accent text-accent" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-sm text-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
