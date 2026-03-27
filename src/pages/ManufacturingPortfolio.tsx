import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  Factory, 
  Globe2, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight,
  Database,
  Cloud,
  Lock,
  MessageSquare,
  Globe,
  PieChart,
  Zap,
  Star,
  Rocket,
  Shield,
  HeartHandshake,
  Workflow,
  Truck,
  Leaf
} from "lucide-react";

const ManufacturingPortfolio = () => {
  const capabilities = [
    {
      icon: <Workflow className="w-8 h-8 text-indigo-500" />,
      title: "Smart Manufacturing",
      desc: "Industry 4.0 integrated production lines with real-time IoT monitoring and predictive maintenance.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-500" />,
      title: "R&D & Innovation",
      desc: "Dedicated advanced material labs and prototyping centers driving the next generation of industrial products.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Truck className="w-8 h-8 text-indigo-500" />,
      title: "Global Supply Chain",
      desc: "Robust logistics infrastructure with 50+ localized warehouses and international distribution networks.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Leaf className="w-8 h-8 text-indigo-500" />,
      title: "ESG & Sustainability",
      desc: "Commitment to zero-carbon manufacturing and sustainable resource management across all facilities.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const stats = [
    { label: "Production Assets", value: "₹37,500+ Cr" },
    { label: "Global Warehouses", value: "50+" },
    { label: "Skilled Workforce", value: "25k+" },
    { label: "Fortune 500 Clients", value: "120+" }
  ];

  const partners = [
    "Global India Corporation",
    "Refranox Private Limited",
    "Azure Industrial",
    "Titan Heavy Labs",
    "Apex Manufacturing"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Manufacturing & Industrial Portfolio - Zech Soft | Global Engineering</title>
        <meta name="description" content="Explore Zech Soft's advanced industrial portfolio. Engineering the future with Smart Manufacturing, Industry 4.0, and sustainable global supply chain solutions." />
        <link rel="canonical" href="https://zechsoft.tech/manufacturing-portfolio" />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-40 lg:pb-24 overflow-hidden bg-[#0a0f1d] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1d] via-[#0a0f1d]/80 to-transparent lg:to-indigo-900/10" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 min-h-[70vh]">
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 shadow-sm border border-indigo-500/30 bg-indigo-500/10"
            >
              <Factory className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">
                Industrial Excellence. Global Reach.
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-6xl lg:text-8xl font-black mb-6 lg:mb-8 leading-[1] tracking-tight text-white"
            >
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-slate-400">
                Future of Industry.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-slate-300 leading-relaxed font-light mb-12 max-w-2xl"
            >
              Leading the global manufacturing landscape through high-end corporate integration, cinematic scale, and sustainable industrial innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a href="#projects" className="px-10 py-5 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-500 shadow-xl shadow-indigo-600/20 transition-all text-center flex items-center justify-center gap-3 group">
                View Portfolio
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all text-center">
                Contact Global Trade
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:w-1/2 relative mt-16 lg:mt-0"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl bg-slate-900 group">
                <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" 
                    alt="Industrial High-End Facility"
                    className="w-full h-[350px] sm:h-[500px] lg:h-[600px] object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent " />
            </div>
            
            {/* High-End Floating Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 -left-6 lg:-left-12 bg-white/5 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                  <Globe2 className="w-7 h-7 text-indigo-400" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-white tracking-tight">Global Reach</p>
                  <p className="text-sm text-slate-400 font-medium tracking-wide">Serving 5 Continents</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Brand Banner */}
        <div className="container mx-auto px-4 lg:px-8 py-16 mt-16 border-t border-indigo-500/10">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 lg:gap-12 opacity-40 hover:opacity-100 transition-opacity">
                {partners.map((partner, i) => (
                    <span key={i} className="text-lg sm:text-xl lg:text-3xl font-heading font-black tracking-tighter text-indigo-200 uppercase">
                        {partner}
                    </span>
                ))}
            </div>
        </div>
      </section>

    

      {/* Capabilities Section */}
      <section id="capabilities" className="py-16 lg:py-32 bg-background relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
            <div className="lg:w-1/2">
                <span className="text-indigo-600 font-black text-sm uppercase tracking-widest mb-4 block">Our Portfolio</span>
                <h2 className="font-heading text-5xl lg:text-7xl font-bold leading-tight">Advanced Industrial Capabilities.</h2>
            </div>
            <p className="lg:w-1/3 text-muted-foreground text-lg leading-relaxed">
                Leveraging high-tech automation and cinematic scale to deliver excellence for Global India Corporation and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {capabilities.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col bg-secondary/10 rounded-[2.5rem] border border-border/50 overflow-hidden hover:bg-secondary/30 transition-all hover:shadow-2xl hover:shadow-indigo-500/5"
              >
                <div className="h-72 overflow-hidden relative">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-8 left-8">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                            <div className="text-white">
                                {item.icon}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-10 flex-1">
                    <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{item.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {item.desc}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-16 lg:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-24">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-border shadow-3xl bg-background group">
                        <img 
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop" 
                            alt="Global Corporate Logistics" 
                            className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply" />
                    </div>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 shadow-sm border border-indigo-500/30 bg-indigo-500/10"
                    >
                        <Globe className="w-4 h-4 text-indigo-500" />
                        <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest">
                            Unmatched Scale
                        </span>
                    </motion.div>
                    <h2 className="font-heading text-5xl lg:text-7xl font-bold mb-8 leading-tight">Global Footprint. <br />Local Responsibility.</h2>
                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light">
                        With 50+ facilities worldwide, we maintain a robust Supply Chain that powers industry giants like **Global India Corporation**. Our commitment to **Sustainability** and **Industry 4.0** ensures we are engineered for the future.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl border border-border bg-background shadow-sm hover:shadow-xl transition-shadow">
                            <h4 className="font-black text-indigo-600 text-3xl mb-2">ISO 9001</h4>
                            <p className="text-sm text-muted-foreground font-bold uppercase tracking-tighter">Quality Standards</p>
                        </div>
                        <div className="p-8 rounded-3xl border border-border bg-background shadow-sm hover:shadow-xl transition-shadow">
                            <h4 className="font-black text-emerald-600 text-3xl mb-2">GOLD</h4>
                            <p className="text-sm text-muted-foreground font-bold uppercase tracking-tighter">ESG Rating 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ManufacturingPortfolio;
