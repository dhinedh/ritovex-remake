import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  Zap, 
  Users, 
  Globe, 
  ShieldCheck, 
  BarChart3, 
  ArrowRight,
  ChevronRight,
  Star,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

// Asset imports (assuming they were copied to src/assets)
import heroImg from "@/assets/shopeasy-hero-realistic.png";
import performanceImg from "@/assets/shopeasy-performance-realistic.png";
import dashboardImg from "@/assets/shopeasy-dashboard-realistic.png";
import techImg from "@/assets/shopeasy-tech-realistic.png";
import mobileImg from "@/assets/shopeasy-mobile-realistic.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const ShopEasy = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 lg:pt-48 lg:pb-24 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-emerald-500/10 via-blue-500/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 glass border-white/10 rounded-full px-4 py-1.5 mb-6 shadow-2xl"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  Marketplace Excellence
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black mb-6 lg:mb-8 leading-[1.1] tracking-tighter"
              >
                ShopEasy: The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Next Gen</span> E-Commerce.
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-zinc-400 leading-relaxed max-w-xl mb-10"
              >
                A massive multi-vendor marketplace scaling with over 10,000 daily active users. Engineered for speed, designed for elegance, and optimized for conversions.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4"
              >
                <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-full transition-all group flex items-center gap-2">
                  Launch Your Store
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all flex items-center gap-2 backdrop-blur-md">
                  View Demo
                </button>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="mt-12 flex items-center gap-8 border-t border-white/5 pt-12"
              >
                <div>
                  <div className="text-3xl font-black text-white">10k+</div>
                  <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Daily Active Users</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <div className="text-3xl font-black text-white">0.1s</div>
                  <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Checkout Speed</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <div className="text-3xl font-black text-white">99.9%</div>
                  <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Server Uptime</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass-card">
                <img src={heroImg} alt="ShopEasy Marketplace" className="w-full h-auto" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/30 blur-[60px] rounded-full -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 blur-[60px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { icon: <Globe className="w-6 h-6" />, label: "Global Reach", val: "50+ Countries" },
                    { icon: <ShieldCheck className="w-6 h-6" />, label: "Secure Payments", val: "PCI Level 1" },
                    { icon: <Zap className="w-6 h-6" />, label: "Fast Loading", val: "< 1s Load Time" },
                    { icon: <Users className="w-6 h-6" />, label: "Happy Vendors", val: "2.5k+ Stores" }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center"
                    >
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-400">
                            {stat.icon}
                        </div>
                        <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">{stat.label}</div>
                        <div className="text-2xl font-black text-white">{stat.val}</div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Feature High-performance */}
      <section className="py-12 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <img src={performanceImg} alt="Performance Chart" className="rounded-3xl border border-white/10 shadow-2xl relative z-10" />
                    <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] -z-10" />
                </motion.div>

                <div className="space-y-8">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                        Lightning Fast
                    </div>
                    <h2 className="font-heading text-4xl lg:text-6xl font-black tracking-tight leading-tight">
                        Speed that drives <br />
                        <span className="text-emerald-400">Conversion.</span>
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                        Every millisecond matters in e-commerce. ShopEasy is built on a proprietary cache-optimized architecture that ensures your products load instantly, even on weak connections.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "0.1s Transaction Processing",
                            "Edge-Network Content Delivery",
                            "Optimized for Mobile Shopping",
                            "Instant Search & Real-time Inventory"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 lg:py-24 relative bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="order-2 lg:order-1 space-y-8">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                        Powerful Architecture
                    </div>
                    <h2 className="font-heading text-4xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                        Built on a <br />
                        <span className="text-blue-500">Global Engine.</span>
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                        Our technology stack is designed to handle millions of requests without breaking a sweat. From containerized microservices to real-time AI analytics, we give you the foundation for massive scale.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        {[
                            { title: "Scalable Core", desc: "Auto-scaling nodes" },
                            { title: "AI Analytics", desc: "Real-time user insights" },
                            { title: "Omnichannel", desc: "Sync across all devices" },
                            { title: "Secure Vault", desc: "Bank-grade protection" }
                        ].map((item, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-white font-bold">{item.title}</div>
                                <div className="text-sm text-zinc-500">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 lg:order-2 relative"
                >
                    <img src={techImg} alt="Tech Architecture" className="rounded-3xl border border-white/10 shadow-2xl relative z-10 w-full" />
                    <div className="absolute inset-0 bg-blue-500/10 blur-[100px] -z-10" />
                </motion.div>
            </div>
        </div>
      </section>

      {/* Mobile-First Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center lg:justify-start"
                >
                    <img src={mobileImg} alt="Mobile App View" className="h-[400px] sm:h-[500px] lg:h-[600px] rounded-[2.5rem] lg:rounded-[3rem] border-8 border-zinc-900 shadow-2xl relative z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/20 blur-[120px] -z-10" />
                </motion.div>

                <div className="space-y-8">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                        Mobile Optimization
                    </div>
                    <h2 className="font-heading text-4xl lg:text-6xl font-black tracking-tight leading-tight">
                        E-Commerce in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Your Pocket.</span>
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                        75% of e-commerce happens on mobile. ShopEasy provides a fluid, app-like experience in the browser, ensuring your customers can shop seamlessly from anywhere, at any time.
                    </p>
                    <div className="flex flex-col gap-6">
                        {[
                            { icon: <Zap className="w-5 h-5" />, title: "Instant Interaction", desc: "No lag between taps and product loads." },
                            { icon: <ShoppingBag className="w-5 h-5" />, title: "One-Tap Checkout", desc: "Apple Pay, Google Pay, and UPI integrated natively." }
                        ].map((feature, i) => (
                            <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-white font-bold">{feature.title}</h3>
                                    <p className="text-sm text-zinc-500 italic">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-heading text-4xl lg:text-5xl font-black mb-6 tracking-tight">
                    Beyond Simple <span className="text-emerald-400">Shopping.</span>
                </h2>
                <p className="text-zinc-400 text-lg">
                    Advanced tools designed to empower your business growth and automate the complexity of modern e-commerce.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Dynamic Pricing", desc: "Automated price adjustments based on demand and competitor data." },
                    { title: "Smart Logistics", desc: "Real-time tracking and automated carrier selection for lower costs." },
                    { title: "AI Search", desc: "Intent-based search that understands what your customers really want." },
                    { title: "Global Taxing", desc: "Localized tax calculation for over 150 regions automatically." },
                    { title: "Fraud Guard", desc: "Advanced ML-powered protection against fraudulent transactions." },
                    { title: "Omnichannel Sync", desc: "Manage Shopify, Amazon, and Website inventory from one place." }
                ].map((feature, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.3)" }}
                        className="p-10 rounded-3xl bg-white/5 border border-white/10 transition-all group"
                    >
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                        <p className="text-zinc-500 leading-relaxed italic">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-[#080808]">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-heading text-4xl lg:text-5xl font-black mb-6 tracking-tight">
                    Elegantly Simple <span className="text-blue-500">Pricing.</span>
                </h2>
                <p className="text-zinc-400 text-lg italic">
                    Transparent plans built to scale with your business stage.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                    { 
                        name: "Founder", 
                        price: "199", 
                        features: ["Up to 100 Products", "Standard Analytics", "Community Support", "Basic SEO Tools"] 
                    },
                    { 
                        name: "Scale", 
                        price: "499", 
                        featured: true,
                        features: ["Unlimited Products", "Advanced AI Insights", "Priority 24/7 Support", "Multi-vendor Dashboard", "API Access"] 
                    },
                    { 
                        name: "Enterprise", 
                        price: "Custom", 
                        features: ["Dedicated Infrastructure", "White-label Solution", "Custom BI Reports", "Dedicated Account Manager"] 
                    }
                ].map((plan, i) => (
                    <div 
                        key={i} 
                        className={`p-6 sm:p-10 rounded-[2.5rem] lg:rounded-[3rem] border transition-all ${plan.featured ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.15)] ring-2 ring-emerald-500/20' : 'bg-white/5 border-white/10'}`}
                    >
                        <div className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">{plan.name}</div>
                        <ul className="space-y-4 mb-10">
                            {plan.features.map((feat, j) => (
                                <li key={j} className="flex items-center gap-3 text-sm text-zinc-400">
                                    <CheckCircle2 className={`w-4 h-4 ${plan.featured ? 'text-emerald-400' : 'text-zinc-700'}`} />
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <button className={`w-full py-4 rounded-full font-bold transition-all ${plan.featured ? 'bg-emerald-500 text-black hover:bg-emerald-600' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Vendor Dashboard Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-heading text-4xl lg:text-5xl font-black mb-6 tracking-tight">
                    Powerful Tools for <span className="text-blue-500">Every Vendor.</span>
                </h2>
                <p className="text-zinc-400 text-lg italic">
                    Manage thousands of products, track global sales, and handle customer support from a single, intuitive interface designed for scale.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative"
            >
                <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.15)]">
                    <img src={dashboardImg} alt="Vendor Dashboard" className="w-full h-auto" />
                </div>
                
                {/* Floating UI Elements (mockups) */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-10 -right-10 bg-[#121212] border border-white/10 p-6 rounded-3xl shadow-2xl hidden lg:block"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                            <BarChart3 className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Daily Growth</div>
                            <div className="text-xl font-black text-white">+24.8%</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Testimonial / Success Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-white/10 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center">
                <div className="absolute top-10 left-10 text-6xl text-white/5 font-serif italic">"</div>
                <div className="flex justify-center gap-1 mb-8 text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                </div>
                <p className="text-2xl lg:text-3xl font-medium text-white italic leading-relaxed mb-10">
                    "ShopEasy transformed our local business into a global marketplace within months. The performance is unmatched, and our vendors love the simplicity of the management tools."
                </p>
                <div>
                    <div className="font-bold text-xl text-white">Sarah Jenkins</div>
                    <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest italic">Platform Operations Director</div>
                </div>
            </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ShopEasy;
