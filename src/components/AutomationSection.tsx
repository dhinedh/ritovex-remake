import React from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AutomationSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch bg-[#1A1A1A] rounded-[2.5rem] overflow-hidden shadow-2xl">
          {/* Left Content */}
          <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center text-white relative overflow-hidden">
            {/* Background Decorative Elements - Matching Reference Image */}
            {/* Top Right Amber Blob */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#4A3728] rounded-full blur-[80px] opacity-60" />
            
            {/* Bottom Left Large Dark Blob */}
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-black/40 rounded-full blur-[40px]" />
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h2 className="font-heading text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Let's Automate <br />
                <span className="text-white/60">Your Success</span>
              </h2>
              <p className="text-white/70 text-lg mb-10 max-w-md">
                Ready to eliminate manual tasks and accelerate your business? 
                Fill out the form below to get started with a customized setup.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Fast Setup</h4>
                    <p className="text-white/50 text-sm">Up and running in days</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Dedicated Support</h4>
                    <p className="text-white/50 text-sm">Direct access to our engineering team</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Form Card */}
          <div className="flex-1 p-4 lg:p-12 bg-[#1A1A1A] lg:bg-transparent">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl h-full"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="h-12 border-gray-100 bg-gray-50/50 focus:bg-white transition-colors rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com" 
                    className="h-12 border-gray-100 bg-gray-50/50 focus:bg-white transition-colors rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements" className="text-sm font-semibold text-gray-700">Project Requirements</Label>
                  <Textarea 
                    id="requirements" 
                    placeholder="What workflows do you want to automate?" 
                    className="min-h-[120px] border-gray-100 bg-gray-50/50 focus:bg-white transition-colors rounded-xl resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-sm font-semibold text-gray-700">Budget</Label>
                  <Select>
                    <SelectTrigger id="budget" className="h-12 border-gray-100 bg-gray-50/50 focus:bg-white transition-colors rounded-xl">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-1000">Less than $1,000</SelectItem>
                      <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10000-plus">$10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full h-14 bg-[#1A1A1A] hover:bg-black text-white rounded-xl text-lg font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Request Consultation
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
