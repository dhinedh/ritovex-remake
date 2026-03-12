import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

const AboutSection = () => {
  return (
    <section id="about-us" className="pt-10 lg:pt-14 pb-20 lg:pb-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 border border-border/60 rounded-full px-4 py-1.5 bg-secondary/50 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-foreground" />
            <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wide">
              About Us
            </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Zech Soft
          </motion.h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Image with custom shape */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="overflow-hidden rounded-tl-[3rem] rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-[10rem] shadow-2xl transition-transform hover:scale-[1.02] duration-500"
            >
              <img
                src={aboutImage}
                alt="Team member"
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-square"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content & CTA */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="group">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with smart, scalable, and innovative technology solutions that drive measurable growth and long-term success.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a trusted global technology partner known for delivering high-quality digital solutions that transform businesses.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  What Makes Us Different
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground font-medium">
                  {[
                    "Client-focused approach",
                    "Customized solutions",
                    "Affordable & scalable",
                    "Professional support",
                    "Real business results",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/about-us"
                  className="w-full inline-flex items-center justify-center bg-foreground text-background px-8 py-4 rounded-lg text-sm font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Learn More
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center border border-border/50">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">Get free Quote</p>
                  <p className="text-lg font-bold text-foreground">+91 93424 00879</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
