import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { 
  PlusSquare, 
  Stethoscope, 
  Microscope, 
  Pill, 
  Activity, 
  Clipboard, 
  ShieldCheck, 
  Smartphone,
  CheckCircle2,
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
  HeartHandshake
} from "lucide-react";

const HospitalManagement = () => {
  const modules = [
    {
      icon: <Stethoscope className="w-8 h-8 text-rose-500" />,
      title: "Automated OPD/IPD",
      desc: "Comprehensive outpatient and inpatient management with automated bed allocation and patient queuing.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Pill className="w-8 h-8 text-rose-500" />,
      title: "Pharmacy Integration",
      desc: "Real-time inventory tracking, automated prescription syncing, and batch-wise expiry management.",
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Microscope className="w-8 h-8 text-rose-500" />,
      title: "Laboratory Management",
      desc: "Advanced LIMS with machine interfacing, barcode tracking, and automated report generation.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Clipboard className="w-8 h-8 text-rose-500" />,
      title: "Radiology (PACS)",
      desc: "Full DICOM support and PACS integration for viewing and storing X-rays, CT scans, and MRIs.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const benefits = [
    { icon: <ShieldCheck className="w-6 h-6" />, title: "HIPAA Compliant", desc: "Highest standard of data privacy and patient record encryption" },
    { icon: <Database className="w-6 h-6" />, title: "HL7 Standards", desc: "Seamless interoperability with other healthcare systems and devices" },
    { icon: <Activity className="w-6 h-6" />, title: "Real-time Vitals", desc: "Integration with bedside monitors for instant vitals charting" },
    { icon: <Lock className="w-6 h-6" />, title: "Paperless Billing", desc: "Fully automated TPA and insurance claim management systems" }
  ];

  const pricingPlans = [
    {
      name: "Clinic Pro",
      desc: "Ideal for small to medium clinics and outpatient centers.",
      price: "$199",
      period: "/month",
      features: ["Up to 5 Doctors", "OPD & Prescription", "Pharmacy Management", "Email Support", "Basic Reporting"],
      recommended: false
    },
    {
      name: "Multispecialty",
      desc: "Complete solution for mid-sized hospitals and nursing homes.",
      price: "$499",
      period: "/month",
      features: ["Unlimited Staff", "IPD & Operation Theater", "LIS & RIS Integration", "Insurance Module", "24/7 Priority Support"],
      recommended: true
    },
    {
      name: "Enterprise Center",
      desc: "Tailored for large hospital districts and medical colleges.",
      price: "Custom",
      period: "",
      features: ["Multi-Hospital Setup", "Medical College Module", "Radiology (PACS)", "Custom API & HL7", "Dedicated Engineer Support"],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-10 lg:pt-40 lg:pb-20 overflow-hidden bg-rose-500/5">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 shadow-sm border border-rose-500/30 bg-rose-500/10"
            >
              <PlusSquare className="w-4 h-4 text-rose-500" />
              <span className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-widest">
                Intelligent HIMS Solution
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-foreground"
            >
              Precision in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
                Healthcare
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed font-medium mb-10 max-w-2xl"
            >
              Streamline your hospital's operations with our agile, cloud-native HIMS. Designed to enhance patient care and eliminate administrative bottlenecks through next-gen automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#demo" className="px-8 py-4 bg-gradient-to-r from-rose-600 to-orange-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-rose-500/25 transition-all text-center flex items-center justify-center gap-2 group">
                Schedule Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#modules" className="px-8 py-4 bg-background border-2 border-border text-foreground rounded-full font-bold text-lg hover:border-rose-500/50 hover:bg-rose-500/5 transition-all text-center">
                Explore Modules
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:w-1/2 relative perspective-1000 mt-6 lg:mt-0 h-[400px] lg:h-[500px]"
          >
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(225,_29,_72,_0.3)] border flex items-center justify-center border-border/50 bg-background lg:rotate-y-[-5deg] lg:rotate-x-[5deg] transform-gpu hover:rotate-0 transition-transform duration-700">
                <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" 
                    alt="Modern Healthcare Facility"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-4 lg:-left-12 glass rounded-2xl p-4 lg:p-6 border border-border/50 shadow-xl flex items-center gap-3 lg:gap-4 z-20 max-w-[160px] lg:max-w-none"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 text-rose-500" />
              </div>
              <div>
                <p className="text-xl lg:text-3xl font-bold">HIPAA</p>
                <p className="text-xs lg:text-sm text-muted-foreground font-medium">Ready Protocol</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="absolute -top-6 -right-4 lg:-right-12 glass rounded-2xl p-4 lg:p-6 border border-border/50 shadow-xl flex items-center gap-4 z-20"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5 lg:w-6 lg:h-6 text-orange-500" />
              </div>
              <div>
                <p className="text-xl lg:text-3xl font-bold">100ms</p>
                <p className="text-xs lg:text-sm text-muted-foreground font-medium">Data Sync</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">Comprehensive Healthcare Modules</h2>
            <p className="text-muted-foreground text-lg">
              Manage every aspect of your hospital from a single, unified interface designed for clinical excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {modules.map((module, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-secondary/20 rounded-[2rem] border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-rose-500/5 transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                    <img 
                        src={module.image} 
                        alt={module.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                    <div className="w-16 h-16 rounded-2xl bg-background border border-border/50 flex items-center justify-center mb-6 shadow-sm -mt-16 z-10 relative">
                        {module.icon}
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-rose-500 transition-colors">{module.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                        {module.desc}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Startup Advantage Section */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 shadow-sm border border-emerald-500/30 bg-emerald-500/10"
                    >
                        <Rocket className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">
                            Built for the Future
                        </span>
                    </motion.div>
                    <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">Why Modernize Your Hospital?</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Traditional HIMS solutions were built for data entry, not patient care. We've built an ecosystem that empowers clinicians and saves lives.
                    </p>
                    <div className="grid gap-6">
                        <div className="flex gap-4 p-6 rounded-2xl border border-border/50 bg-secondary/10">
                            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
                                <HeartHandshake className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Direct Clinical Support</h4>
                                <p className="text-sm text-muted-foreground">Expert clinical engineers available for 24/7 onsite and remote support.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 rounded-2xl border border-border/50 bg-secondary/10">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Agile Updates</h4>
                                <p className="text-sm text-muted-foreground">New compliance and clinical modules deployed instantly via cloud.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 rounded-2xl border border-border/50 bg-secondary/10">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Unmatched Data Security</h4>
                                <p className="text-sm text-muted-foreground">Blockchain-secured patient records ensuring zero tampering and full audit trails.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-rose-500/5 blur-[100px] rounded-full" />
                    <img 
                        src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop" 
                        alt="High Tech Hospital Interior" 
                        className="relative rounded-[2rem] shadow-2xl border border-border/50"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-secondary/20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg">
              Healthcare-focused plans that scale with your facility's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col p-8 rounded-[2rem] border ${
                  plan.recommended 
                    ? "border-rose-500 bg-background shadow-2xl shadow-rose-500/10 scale-105 z-10" 
                    : "border-border/50 bg-background/50 hover:bg-background transition-colors"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-white" /> Most Recommended
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground min-h-[40px]">{plan.desc}</p>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-4 rounded-xl font-bold transition-all ${
                    plan.recommended
                      ? "bg-gradient-to-r from-rose-600 to-orange-600 text-white hover:opacity-90 shadow-md"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Clinical Sales" : "Get Started Now"}
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

export default HospitalManagement;
