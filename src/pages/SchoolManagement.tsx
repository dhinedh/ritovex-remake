import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  GraduationCap, 
  Users, 
  CalendarCheck, 
  BookOpen, 
  ClipboardList, 
  TrendingUp, 
  ShieldCheck, 
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Database,
  Cloud,
  BrainCircuit,
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

const SchoolManagement = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: "Student Enrollment",
      desc: "Streamline the admission process with online forms, document management, and automated fee collection.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-cyan-500" />,
      title: "Attendance Tracking",
      desc: "Real-time attendance logging for students and staff with automated SMS/Email alerts for parents.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-cyan-500" />,
      title: "Academic Grading",
      desc: "Comprehensive grading system supporting multiple formats, automated report card generation, and analytics.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-cyan-500" />,
      title: "Administrative Tasks",
      desc: "Manage payroll, inventory, library systems, and transport from a single, unified dashboard.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const benefits = [
    { icon: <Database className="w-6 h-6" />, title: "Centralized Data", desc: "Access all student and staff records from a single, secure cloud dashboard" },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Bank-Grade Security", desc: "Role-based access control and high-level encryption for sensitive data" },
    { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Ready", desc: "Dedicated native apps and portals for parents, teachers, and administrators" },
    { icon: <Zap className="w-6 h-6" />, title: "Automation", desc: "Automate fee reminders, attendance alerts, and report card generation" }
  ];

  const advancedFeatures = [
    { icon: <BrainCircuit className="w-6 h-6" />, title: "AI Analytics", desc: "Predict student performance trends and identify areas needing attention automatically." },
    { icon: <Cloud className="w-6 h-6" />, title: "Cloud Infrastructure", desc: "99.9% uptime guaranteed with automatic backups and seamless scalability." },
    { icon: <Lock className="w-6 h-6" />, title: "Secure Payments", desc: "Integrated payment gateways for hassle-free fee collection and reconciliation." },
    { icon: <Globe className="w-6 h-6" />, title: "Multi-Campus Management", desc: "Manage multiple branches or institutions from a centralized global dashboard." },
    { icon: <MessageSquare className="w-6 h-6" />, title: "Integrated Communication", desc: "In-built messaging, SMS, and email broadcasting for instant parent-teacher connect." },
    { icon: <PieChart className="w-6 h-6" />, title: "Custom Reporting", desc: "Generate compliance reports, financial summaries, and academic insights in one click." }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      desc: "Perfect for small to medium-sized schools looking to digitize their operations.",
      price: "$299",
      period: "/month",
      features: ["Up to 500 Students", "Basic Attendance & Grading", "Parent Portal Access", "Email Support", "Standard Reporting"],
      recommended: false
    },
    {
      name: "Professional",
      desc: "Advanced features for growing institutions requiring comprehensive management.",
      price: "$599",
      period: "/month",
      features: ["Up to 2000 Students", "Advanced Analytics & AI", "Custom App Branding", "Payment Gateway Integration", "24/7 Priority Support"],
      recommended: true
    },
    {
      name: "Enterprise",
      desc: "Custom solutions for large school districts or multi-campus universities.",
      price: "Custom",
      period: "",
      features: ["Unlimited Students", "Multi-Campus Management", "Dedicated Account Manager", "Custom API Integrations", "On-Premise Deployment Option"],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>School Management ERP - Zech Soft | Future of Education</title>
        <meta name="description" content="A next-generation School ERP solution. Streamline admissions, attendance, grading, and administration with our cloud-native educational platform." />
        <link rel="canonical" href="https://zechsoft.tech/school-erp" />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-10 lg:pt-40 lg:pb-20 overflow-hidden bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 shadow-sm border border-cyan-500/30 bg-cyan-500/10"
            >
              <GraduationCap className="w-4 h-4 text-cyan-500" />
              <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest">
                Educational ERP Solution
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-foreground"
            >
              Redefining <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">
                School Management
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed font-medium mb-10 max-w-2xl"
            >
              As an agile startup, we've built a next-generation ERP that discards legacy complexity. We empower educators with cutting-edge tools designed for the modern learning era.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#demo" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-center flex items-center justify-center gap-2 group">
                Request Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#features" className="px-8 py-4 bg-background border-2 border-border text-foreground rounded-full font-bold text-lg hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all text-center">
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
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border flex items-center justify-center border-border/50 bg-background lg:rotate-y-[-5deg] lg:rotate-x-[5deg] transform-gpu hover:rotate-0 transition-transform duration-700">
                <img 
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop" 
                    alt="Modern School Administration Office"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
            </div>
            {/* Floating Stats - Fixed Position to avoid overlap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-4 lg:-left-12 glass rounded-2xl p-4 lg:p-6 border border-border/50 shadow-xl flex items-center gap-3 lg:gap-4 z-20 max-w-[160px] lg:max-w-none"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <Rocket className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-xl lg:text-3xl font-bold">10x</p>
                <p className="text-xs lg:text-sm text-muted-foreground font-medium whitespace-nowrap text-wrap">Faster Implementation</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="absolute -top-6 -right-4 lg:-right-12 glass rounded-2xl p-4 lg:p-6 border border-border/50 shadow-xl flex items-center gap-4 z-20"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-500" />
              </div>
              <div>
                <p className="text-xl lg:text-3xl font-bold">100%</p>
                <p className="text-xs lg:text-sm text-muted-foreground font-medium">Cloud Native</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section id="features" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">Comprehensive Modules</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to successfully manage your school, students, parents, and staff in one unified platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-secondary/20 rounded-[2rem] border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/5 transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                    <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                    <div className="w-16 h-16 rounded-2xl bg-background border border-border/50 flex items-center justify-center mb-6 shadow-sm -mt-16 z-10 relative">
                        {feature.icon}
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-cyan-500 transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                        {feature.desc}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technology Grid */}
      <section className="py-16 lg:py-24 bg-background relative border-t border-border/50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">Powered by Modern Technology</h2>
            <p className="text-muted-foreground text-lg">
              We leverage the latest in cloud computing, security, and artificial intelligence to deliver a seamless, robust experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-border/50 bg-secondary/10 hover:bg-secondary/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-background border border-border/50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <div className="text-cyan-600 dark:text-cyan-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Advantage Section */}
      <section className="py-24 bg-background relative overflow-hidden">
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
                            The Startup Advantage
                        </span>
                    </motion.div>
                    <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">Why Choose an Innovative Partner?</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Legacy ERPs are built on decade-old code. We've started from scratch to build a solution that is as agile as your institution needs it to be.
                    </p>
                    <div className="grid gap-6">
                        <div className="flex gap-4 p-6 rounded-2xl border border-border/50 bg-secondary/10">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                                <HeartHandshake className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Dedicated Support</h4>
                                <p className="text-sm text-muted-foreground">You're not just a number. Get direct access to our founding engineers for setup and support.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 rounded-2xl border border-border/50 bg-secondary/10">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Rapid Feature Deployment</h4>
                                <p className="text-sm text-muted-foreground">We ship updates weekly. Request a feature, and see it live in days, not months.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 rounded-2xl border border-border/50 bg-secondary/10">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Modern Security First</h4>
                                <p className="text-sm text-muted-foreground">Built with 2024 security standards. No legacy vulnerabilities common in older platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] rounded-full" />
                    <img 
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" 
                        alt="Collaborative Startup Team" 
                        className="relative rounded-[2rem] shadow-2xl border border-border/50"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-secondary/20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg">
              Choose the plan that best fits your institution's size and requirements. No hidden fees or surprise charges.
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
                    ? "border-cyan-500 bg-background shadow-2xl shadow-cyan-500/10 scale-105 z-10" 
                    : "border-border/50 bg-background/50 hover:bg-background transition-colors"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-white" /> Most Popular
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
                      ? "bg-gradient-to-r from-cyan-600 to-emerald-600 text-white hover:opacity-90 shadow-md"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
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

export default SchoolManagement;
