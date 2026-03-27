import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  BarChart3, 
  Users, 
  Settings, 
  ShieldCheck, 
  ChevronRight, 
  Clock, 
  Database, 
  Factory, 
  Layers, 
  CircleDollarSign,
  Briefcase,
  Zap,
  Activity,
  Smartphone,
  CheckCircle2,
  HardHat,
  Boxes,
  ClipboardCheck,
  LineChart,
  Shield
} from "lucide-react";

const PayrollManufacturingERP = () => {
  const erpModules = [
    {
      icon: <CircleDollarSign className="w-8 h-8 text-amber-500" />,
      title: "Automated Payroll",
      desc: "Simplify worker compensation with automated tax calculations, overtime tracking, and seamless bank integrations.",
      image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Activity className="w-8 h-8 text-amber-500" />,
      title: "Production Tracking",
      desc: "Real-time visibility into your shop floor operations. Monitor output, downtime, and resource allocation instantly.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Boxes className="w-8 h-8 text-amber-500" />,
      title: "Raw Material Mgmt.",
      desc: "Optimize your inventory with intelligent material requirements planning (MRP) and batch-level tracking.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-amber-500" />,
      title: "Biometric Attendance",
      desc: "Eliminate manual entries with high-precision biometric integration and automated shift management.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const erpBenefits = [
    { icon: <Clock className="w-6 h-6" />, title: "30% Time Savings", desc: "Reduce administrative overhead through automated data synchronization" },
    { icon: <Shield className="w-6 h-6" />, title: "Error-Free Compliance", desc: "Automated tax filings and labor law adherence across regions" },
    { icon: <LineChart className="w-6 h-6" />, title: "Predictive Analytics", desc: "Identify production bottlenecks before they impact your delivery" },
    { icon: <HardHat className="w-6 h-6" />, title: "Safety First", desc: "Integrated safety audit modules and worker certification tracking" }
  ];

  const plans = [
    {
      name: "Smart Factory",
      desc: "For small manufacturing units seeking digital transformation.",
      price: "₹14,999",
      features: ["Up to 50 Workers", "Core Payroll Module", "Standard Production Tracking", "Email Support"],
      recommended: false
    },
    {
      name: "Industrial Core",
      desc: "Perfect for mid-sized factories with complex workflows.",
      price: "₹34,999",
      features: ["Unlimited Workers", "Advanced MRP System", "Biometric Integration", "Multi-Shift Management", "24/7 Priority Support"],
      recommended: true
    },
    {
      name: "Precision Enterprise",
      desc: "Custom solution for multi-location manufacturing giants.",
      price: "Custom",
      features: ["Multi-Plant Setup", "Supply Chain Planning", "Full API Access", "Dedicated On-Site Support", "Custom Dashboard Building"],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Payroll & Manufacturing ERP - Zech Soft | Industrial Efficiency</title>
        <meta name="description" content="Synchronized efficiency for Industry 4.0. Our specialized ERP integrates automated payroll with production tracking and raw material management for modern factories." />
        <link rel="canonical" href="https://zechsoft.tech/payroll-manufacturing-erp" />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-background" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 shadow-sm border border-amber-500/30 bg-amber-500/10"
              >
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Intelligence for Industry 4.0
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-heading text-4xl sm:text-6xl lg:text-8xl font-black mb-6 lg:mb-8 leading-[1.05] tracking-tight text-white"
              >
                Synchronized <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  Efficiency.
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-xl text-slate-300 leading-relaxed font-light mb-12 max-w-2xl"
              >
                Bridge the gap between human capital and industrial output. Our specialized ERP integrates automated payroll with production tracking to empower your shop floor.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
              >
                <button className="px-10 py-5 bg-amber-500 text-slate-950 rounded-xl font-bold text-lg hover:bg-amber-400 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-3 group">
                  Start Digital Audit
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                  Watch Demo
                </button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(245,158,11,0.15)] bg-slate-900 aspect-video group">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Modern HMI Interface"
                  className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                
                {/* Floating Metric Card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-3xl p-6 lg:p-8 border border-white/10 shadow-3xl text-center min-w-[220px] sm:min-w-[280px]">
                    <Activity className="w-12 h-12 text-amber-500 mx-auto mb-4 animate-pulse" />
                    <p className="text-4xl font-black text-white mb-2">99.8%</p>
                    <p className="text-sm font-bold text-amber-500 uppercase tracking-widest">Inventory Accuracy</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/20 rounded-full blur-[80px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-background py-12 lg:py-20 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {erpBenefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-500/5 flex items-center justify-center mb-6 border border-amber-500/10">
                    <div className="text-amber-500">{benefit.icon}</div>
                </div>
                <h4 className="font-heading font-bold text-xl mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 lg:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
            <div className="lg:w-2/3">
                <span className="text-amber-500 font-black text-sm uppercase tracking-widest mb-4 block">Engineered Modules</span>
                <h2 className="font-heading text-5xl lg:text-7xl font-bold leading-tight">Total Production Control.</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {erpModules.map((module, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-amber-500/5 transition-all"
              >
                <div className="h-56 overflow-hidden relative">
                    <img 
                        src={module.image} 
                        alt={module.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/20" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-background border border-border/50 flex items-center justify-center mb-6 shadow-sm -mt-14 z-10 relative">
                        {module.icon}
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-amber-600 transition-colors uppercase tracking-tight">{module.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                        {module.desc}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Startup Edge - Visual Section */}
      <section className="py-16 lg:py-24 bg-slate-950 text-white relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
                <span className="text-amber-500 font-black text-sm uppercase tracking-widest mb-6 block">Legacy Decoupling</span>
                <h2 className="font-heading text-5xl lg:text-7xl font-bold mb-8 leading-tight">The Startup Advantage.</h2>
                <div className="space-y-8">
                    <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 border border-amber-500/20">
                            <Zap className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-2">90-Day Deployment</h4>
                            <p className="text-slate-400 leading-relaxed font-light">While legacy ERPs take years, we go live in months. Agile implementation for fast-moving manufacturing units.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 border border-amber-500/20">
                            <Database className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-2">Founding-Engineer Support</h4>
                            <p className="text-slate-400 leading-relaxed font-light">Get dedicated architecture support from our core engineering team. Specialized logic for your specific production quirks.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-amber-500/10 blur-[120px] rounded-full" />
                <img 
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop" 
                    alt="Precision Engineering" 
                    className="relative rounded-[3rem] border border-white/10 shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-32 bg-background relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl lg:text-6xl font-black mb-6">Scale with Precision</h2>
            <p className="text-muted-foreground text-lg font-light">Transparent, manufacturing-first pricing for units of all sizes.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`p-10 rounded-[2.5rem] border ${plan.recommended ? 'border-amber-500 bg-amber-500/5 shadow-2xl relative' : 'border-border bg-slate-50 dark:bg-slate-900/50'}`}
              >
                {plan.recommended && (
                    <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 bg-amber-500 text-slate-950 text-xs font-black rounded-full uppercase tracking-widest shadow-lg">
                        Bestseller
                    </div>
                )}
                <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-8 min-h-[40px] font-medium">{plan.desc}</p>
                
              

                <ul className="space-y-5 mb-12">
                    {plan.features.map((feat, f_i) => (
                        <li key={f_i} className="flex gap-4 text-sm font-medium">
                            <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                            {feat}
                        </li>
                    ))}
                </ul>

                <button className={`w-full py-5 rounded-2xl font-black transition-all ${plan.recommended ? 'bg-amber-500 text-slate-950 hover:bg-amber-400' : 'bg-background hover:bg-slate-100 border border-border'}`}>
                    {plan.price === 'Custom' ? 'Enterprise Consultation' : 'Start My Digital Transformation'}
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

export default PayrollManufacturingERP;
