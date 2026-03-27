import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, ArrowRight, ArrowLeft, Rocket, Briefcase, DollarSign, MessageSquare } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  {
    title: "How can we help?",
    subtitle: "Select the primary service you're interested in.",
    currentStep: 1,
  },
  {
    title: "Project Scope",
    subtitle: "Tell us about the size and timeline of your project.",
    currentStep: 2,
  },
  {
    title: "Contact Details",
    subtitle: "How should we reach out to you?",
    currentStep: 3,
  }
];

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const services = [
    { id: "web", icon: <Rocket />, label: "Web Development" },
    { id: "erp", icon: <Briefcase />, label: "ERP Solutions" },
    { id: "ai", icon: <Rocket />, label: "AI & Automation" },
    { id: "consulting", icon: <MessageSquare />, label: "Digital Strategy" },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-card rounded-[2.5rem] border border-border shadow-2xl overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-secondary transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div className="flex flex-col h-full">
              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-secondary">
                <motion.div
                  initial={{ width: "33%" }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  className="h-full bg-primary"
                />
              </div>

              <div className="p-8 lg:p-12">
                <header className="mb-10">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Step {step} of 3</p>
                  <h2 className="font-heading text-3xl font-bold mb-2">{steps[step - 1].title}</h2>
                  <p className="text-muted-foreground">{steps[step - 1].subtitle}</p>
                </header>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Service Selection */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      {services.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, service: s.label });
                            nextStep();
                          }}
                          className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${formData.service === s.label ? "bg-primary/5 border-primary" : "bg-secondary/30 border-border/50 hover:border-primary/50"}`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${formData.service === s.label ? "bg-primary text-white" : "bg-card text-primary"}`}>
                            {s.icon}
                          </div>
                          <span className="font-bold">{s.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {/* Step 2: Details */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="space-y-3">
                        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Approximate Budget</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {["<₹1 Lakh", "₹1L - ₹5 Lakhs", "₹5L - ₹15 Lakhs", "₹15 Lakhs+", "Undecided"].map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: b })}
                              className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${formData.budget === b ? "bg-primary text-white border-primary" : "bg-secondary/30 border-border/50 hover:border-primary/50"}`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Estimated Timeline</label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-6 py-4 bg-secondary/30 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                        >
                          <option value="">Select Timeline</option>
                          <option value="ASAP">ASAP</option>
                          <option value="1 month">Within 1 month</option>
                          <option value="2-3 months">2-3 months</option>
                          <option value="6+ months">6+ months</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Contact */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-6 py-4 bg-secondary/30 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-6 py-4 bg-secondary/30 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      <input
                        type="text"
                        placeholder="Company Name (Optional)"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-6 py-4 bg-secondary/30 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      <textarea
                        placeholder="Anything else you'd like to share?"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-6 py-4 bg-secondary/30 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                      />
                    </motion.div>
                  )}

                  <div className="flex items-center justify-between mt-12">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" /> Go Back
                      </button>
                    ) : <div />}

                    <button
                      type={step === 3 ? "submit" : "button"}
                      onClick={step === 3 ? undefined : nextStep}
                      disabled={step === 1 && !formData.service}
                      className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
                    >
                      {step === 3 ? "Send Request" : "Next Step"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 lg:p-20 text-center"
            >
              <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-emerald-500 mx-auto mb-8 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-heading text-4xl font-bold mb-4">Request Received!</h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-sm mx-auto">
                Our team will review your project requirements and get back to you within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:bg-primary/90 transition-all"
              >
                Close Window
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default QuoteModal;
