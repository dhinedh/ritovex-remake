import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { 
  Receipt, 
  Package, 
  Store, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  Cloud, 
  WifiOff, 
  Smartphone, 
  Layers, 
  History, 
  BadgeIndianRupee, 
  CreditCard, 
  Users, 
  CheckCircle,
  TrendingUp,
  Search,
  Zap,
  LayoutDashboard
} from "lucide-react";

const BillingSoftware = () => {
  const modules = [
    {
      icon: <Receipt className="w-8 h-8 text-emerald-500" />,
      title: "GST/VAT Invoicing",
      desc: "Generate professional, compliant invoices in seconds. Support for multiple tax slabs, discounts, and custom branding.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Package className="w-8 h-8 text-emerald-500" />,
      title: "Live Inventory Sync",
      desc: "Track stock levels across all your stores and warehouses in real-time. Automatic low-stock alerts and purchase orders.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Store className="w-8 h-8 text-emerald-500" />,
      title: "Omnichannel POS",
      desc: "A powerful point-of-sale system that works offline. Sync data automatically when internet is back.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-500" />,
      title: "Advanced Analytics",
      desc: "Deep insights into your sales patterns, profitable products, and customer behavior with beautiful visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const features = [
    { icon: <Cloud className="w-6 h-6" />, title: "Cloud Integration", desc: "Access your business data securely from anywhere in the world." },
    { icon: <WifiOff className="w-6 h-6" />, title: "Offline Mode", desc: "Never stop selling. Continue billing even without an internet connection." },
    { icon: <Smartphone className="w-6 h-6" />, title: "Mobile App", desc: "Manage sales and view reports on-the-go with our native mobile apps." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Bank-Grade Security", desc: "Your financial data is protected with 256-bit AES encryption." }
  ];

  const pricing = [
    {
      name: "Standard",
      price: "$19",
      desc: "Essential features for small retailers and boutiques.",
      features: ["Single Store", "Unlimited Invoices", "Basic Inventory", "Email Support"],
      isPopular: false
    },
    {
      name: "Professional",
      price: "$49",
      desc: "Complete toolkit for growing mid-sized businesses.",
      features: ["Up to 5 Stores", "Multi-User Access", "Advanced Inventory", "GST/VAT Filing Support", "Priority Support"],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "A bespoke solution for high-volume distributors and chains.",
      features: ["Unlimited Stores", "Dedicated Relationship Mgr", "API Integration", "Custom Modules", "Training & Setup"],
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-48 lg:pb-40 bg-slate-50 dark:bg-slate-950">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-3/5 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest mb-8 shadow-sm"
              >
                <Zap className="w-4 h-4" />
                Next-Gen Financial Infrastructure
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-heading text-4xl sm:text-6xl lg:text-8xl font-black mb-6 lg:mb-8 leading-[0.95] tracking-tight"
              >
                Transactional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500">
                  Excellence.
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-xl text-muted-foreground leading-relaxed font-light mb-12 max-w-2xl"
              >
                The ultimate all-in-one billing, inventory, and analytics platform. Engineered for startups and scaling enterprises who demand precision and speed.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <button className="px-10 py-5 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-500 shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-3 group">
                  Get Started Free
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white dark:bg-slate-900 border border-border rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
                  Schedule Demo
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:w-2/5 relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl bg-white dark:bg-slate-900 p-2">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                  alt="Billing Analytics Dashboard"
                  className="w-full rounded-[2.5rem] shadow-inner"
                />
                
                {/* Floating UI Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -left-6 lg:-left-10 glass p-4 lg:p-6 rounded-3xl border border-white/20 shadow-2xl z-20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center">
                        <BadgeIndianRupee className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase opacity-70">Paid Today</p>
                        <p className="text-2xl font-black">₹48,250</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -right-6 lg:-right-10 bg-indigo-600 p-4 lg:p-6 rounded-3xl border border-white/10 shadow-2xl z-20"
                >
                   <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 " />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase opacity-70">Conversion</p>
                        <p className="text-2xl font-black">+24.5%</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Icons Strip */}
      <section className="py-12 lg:py-20 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                {features.map((feature, i) => (
                    <div key={i} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/5 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors border border-emerald-500/10">
                            <div className="text-emerald-500">{feature.icon}</div>
                        </div>
                        <h4 className="font-heading font-bold text-xl mb-3">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-16 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
            <div className="lg:w-2/3">
              <span className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-4 block">Engineered for Accuracy</span>
              <h2 className="font-heading text-5xl lg:text-7xl font-bold leading-[1.05]">Modular. Scalable. Beautifully Integrated.</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {modules.map((module, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col lg:flex-row bg-slate-50 dark:bg-slate-900/40 rounded-[3rem] border border-border/40 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/5 transition-all"
              >
                <div className="lg:w-1/2 h-72 lg:h-auto overflow-hidden relative">
                    <img 
                        src={module.image} 
                        alt={module.title} 
                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-emerald-500/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center mb-8 shadow-sm border border-border/50">
                        {module.icon}
                    </div>
                    <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">{module.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {module.desc}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Intelligence Visual */}
      <section className="py-16 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
               <span className="text-emerald-400 font-black text-sm uppercase tracking-widest mb-6 block">Intelligence at Source</span>
               <h2 className="font-heading text-5xl lg:text-7xl font-bold mb-10 leading-tight">Decisions Grounded in Live Data.</h2>
               <p className="text-xl text-slate-300 mb-12 font-light leading-relaxed">
                  ZechBill is not just a billing tool; it's your business central nervous system. Every transaction feeds into your live analytics dashboard, giving you the clarity to act fast and grow faster.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                     <p className="text-4xl font-black mb-2">₹10B+</p>
                     <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Transactions Processed</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                     <p className="text-4xl font-black mb-2">5,000+</p>
                     <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Active Enterprises</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                    alt="Corporate Analytics"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/60 to-transparent" />
               </div>
               
               {/* Decorative Gradient Blob */}
               <div className="absolute -z-10 -bottom-20 -right-20 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-24 max-w-3xl mx-auto">
             <h2 className="font-heading text-5xl lg:text-7xl font-bold mb-8 italic">Predictable Pricing.</h2>
             <p className="text-xl text-muted-foreground font-light leading-relaxed">No hidden fees. No transaction-based commissions. Just pure software excellence at a flat rate.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-12 rounded-[3rem] border transition-all ${plan.isPopular ? 'border-emerald-500 bg-emerald-500/5 relative shadow-2xl scale-105 z-10' : 'border-border bg-slate-50 dark:bg-slate-900/30'}`}
              >
                {plan.isPopular && (
                    <div className="absolute top-0 right-12 -translate-y-1/2 bg-emerald-600 text-white text-xs font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-xl">
                        Mainstay Choice
                    </div>
                )}
                <h3 className="text-3xl font-black mb-2 tracking-tighter uppercase">{plan.name}</h3>
                <p className="text-muted-foreground text-sm font-medium mb-10 min-h-[48px]">{plan.desc}</p>
                
              

                <ul className="space-y-6 mb-12">
                  {plan.features.map((feat, f_idx) => (
                    <li key={f_idx} className="flex items-center gap-4 text-sm font-bold">
                       <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                       {feat}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 rounded-[2rem] font-black text-lg transition-all ${plan.isPopular ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-xl shadow-emerald-500/20' : 'bg-background border border-border hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                   {plan.price === 'Custom' ? 'Contact Sales' : 'Start 14-Day Trial'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default BillingSoftware;
