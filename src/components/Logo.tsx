import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  showText?: boolean;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark" | "default";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
  showTagline = false,
  size = "md",
  variant = "default",
}) => {
  const sizes = {
    sm: { icon: 24, text: "text-lg", tagline: "text-[8px]" },
    md: { icon: 32, text: "text-xl", tagline: "text-[10px]" },
    lg: { icon: 48, text: "text-3xl", tagline: "text-[12px]" },
    xl: { icon: 120, text: "text-5xl", tagline: "text-[14px]" },
  };

  const currentSize = sizes[size];

  // Colors based on variant and theme
  const getIconColor = () => {
    if (variant === "light") return "#000000";
    if (variant === "dark") return "#FFFFFF";
    return "currentColor"; // Inherit from parent (usually primary or foreground)
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        className="relative"
        style={{ width: currentSize.icon, height: currentSize.icon }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img 
          src="/logo.png" 
          alt="Zechsoft Logo" 
          className="w-full h-full object-contain"
        />
        
        {/* Glow effect in background (optional, subtle) */}
        <div className="absolute inset-0 bg-primary/20 blur-xl -z-10 rounded-full opacity-50 transition-opacity group-hover:opacity-100" />
      </motion.div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-heading font-black tracking-widest uppercase ${currentSize.text} ${
            variant === "light" ? "text-primary" : 
            variant === "dark" ? "text-white" : 
            "text-foreground"
          }`}>
            ZECH<span className="ml-2 font-light">SOFT</span>
          </span>
          {showTagline && (
            <span className={`font-medium tracking-[0.3em] uppercase opacity-60 mt-1 ${currentSize.tagline} ${
              variant === "light" ? "text-primary" : 
              variant === "dark" ? "text-white" : 
              "text-foreground"
            }`}>
              Innovate • Build • Elevate
            </span>
          )}
        </div>
      )}
    </div>
  );
};
