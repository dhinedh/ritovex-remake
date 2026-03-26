import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles, ArrowRight } from "lucide-react";

const INITIAL_MESSAGE = {
  id: 1,
  type: "bot",
  text: "Hi! I'm ZechAI. How can I help you transform your business today?",
  suggestions: ["School ERP", "Hospital HIMS", "AI Solutions", "Request a Quote"]
};

const ZechBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const newUserMsg = { id: Date.now(), type: "user", text, suggestions: [] };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let responseText = "That's a great question! Our team of experts specializes in that area. Would you like to see our portfolio or talk to a human consultant?";
      let suggestions: string[] = ["See Projects", "Contact Us"];

      const lowerText = text.toLowerCase();
      if (lowerText.includes("school") || lowerText.includes("erp")) {
        responseText = "Our School Management System is a best-in-class ERP that handles everything from attendance to grading. It's used by 50+ institutions.";
        suggestions = ["School ERP Features", "Pricing Inquiry"];
      } else if (lowerText.includes("hospital") || lowerText.includes("hims")) {
        responseText = "Zech HIMS is a comprehensive hospital solution covering OPD, IPD, Pharmacy, and Lab management with integrated billing.";
        suggestions = ["HIMS Demo", "Case Studies"];
      } else if (lowerText.includes("ai") || lowerText.includes("automation")) {
        responseText = "We implement cutting-edge AI for process automation, predictive analytics, and intelligent chatbots like me!";
        suggestions = ["AI Services", "Consultation"];
      }

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: "bot",
        text: responseText,
        suggestions
      }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[550px] bg-card border border-border shadow-2xl rounded-[2rem] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-primary text-primary-foreground flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">ZechAI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Online Now</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] flex flex-col ${msg.type === "user" ? "items-end" : "items-start"}`}>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.type === "user" 
                        ? "bg-primary text-primary-foreground rounded-tr-none" 
                        : "bg-secondary/50 text-foreground rounded-tl-none border border-border/50"
                    }`}>
                      {msg.text}
                    </div>
                    {msg.suggestions && msg.suggestions.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {msg.suggestions.map((s, i) => (
                          <button
                            key={i}
                            onClick={() => handleSend(s)}
                            className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all uppercase tracking-wider"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-secondary/50 p-4 rounded-2xl rounded-tl-none border border-border/50 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce delay-75" />
                    <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce delay-150" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-background border-t border-border">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask ZechAI..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend(inputValue)}
                  className="w-full bg-secondary/30 border border-border/50 rounded-xl py-3 pl-4 pr-12 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                />
                <button
                  onClick={() => handleSend(inputValue)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 relative group overflow-hidden"
      >
        <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
           className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
        />
        {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
        {!isOpen && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-background"
          >
            1
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};

export default ZechBot;
