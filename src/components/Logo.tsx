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
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Main Diamond Shape with 3D Beveling Effect */}
          {/* Top Left Facet */}
          <path
            d="M50 5L15 40L40 50L50 15V5Z"
            fill="url(#logo-grad-1)"
          />
          {/* Top Right Facet */}
          <path
             d="M50 5L85 40L60 50L50 15V5Z"
             fill="url(#logo-grad-2)"
          />
          {/* Bottom Right Facet */}
          <path
            d="M50 95L85 60L60 50L50 85V95Z"
            fill="url(#logo-grad-3)"
          />
          {/* Bottom Left Facet */}
          <path
            d="M50 95L15 60L40 50L50 85V95Z"
            fill="url(#logo-grad-4)"
          />

          {/* Inner "Infinite" connection quads */}
          <path d="M15 40L25 50L40 50L15 40Z" fill="rgba(0,0,0,0.1)" />
          <path d="M85 40L75 50L60 50L85 40Z" fill="rgba(0,0,0,0.1)" />
          
          {/* Gradients to simulate the metallic beveled look */}
          <defs>
            <linearGradient id="logo-grad-1" x1="25" y1="10" x2="45" y2="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E2E8F0" />
              <stop offset="1" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="logo-grad-2" x1="75" y1="10" x2="55" y2="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#CBD5E1" />
              <stop offset="1" stopColor="#64748B" />
            </linearGradient>
            <linearGradient id="logo-grad-3" x1="75" y1="90" x2="55" y2="55" gradientUnits="userSpaceOnUse">
              <stop stopColor="#94A3B8" />
              <stop offset="1" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="logo-grad-4" x1="25" y1="90" x2="45" y2="55" gradientUnits="userSpaceOnUse">
              <stop stopColor="#64748B" />
              <stop offset="1" stopColor="#334155" />
            </linearGradient>
          </defs>
          
          {/* Fallback solid color overlay for better contrast on different backgrounds */}
          {/* This part makes it work like a single solid shape if needed, 
              but we want the 3D effect from the gradients above */}
        </svg>
        
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
