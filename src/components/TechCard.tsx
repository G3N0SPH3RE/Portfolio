import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface TechCardProps {
  title: string;
  subtitle?: string;
  role?: string;
  duration?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  isExpandable?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
}

export default function TechCard({ 
  title, 
  subtitle, 
  role, 
  duration, 
  children, 
  className,
  delay = 0,
  isExpandable = false,
  expanded = false,
  onToggle
}: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onClick={isExpandable ? onToggle : undefined}
      className={cn(
        "tech-border bg-card p-6 md:p-8 relative group transition-all duration-300",
        isExpandable && "cursor-pointer hover:bg-card/90",
        expanded && "ring-1 ring-primary/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]",
        className
      )}
      style={{
        "--primary-rgb": "145, 120, 80" // Approximation of the green for the glow
      } as any}
    >
      {/* Glow effect on hover/expand */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
        expanded && "opacity-100"
      )}>
        <div className="absolute inset-0 bg-primary/5 blur-xl" />
      </div>

      <div className={cn(
        "absolute top-4 right-4 text-primary/20 transition-all duration-300",
        "group-hover:text-primary/100 group-hover:scale-110",
        expanded && "text-primary/100 rotate-45"
      )}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
          <path d="M17 7L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
        </svg>
      </div>

      <div className="space-y-4 relative z-10">
        <div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{title}</h3>
          {subtitle && <p className="text-primary font-mono text-sm tracking-wide opacity-80">{subtitle}</p>}
        </div>

        {(role || duration) && (
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-muted-foreground border-b border-border/50 pb-4">
            {role && <span>ROLE: {role.toUpperCase()}</span>}
            {duration && <span>DUR: {duration.toUpperCase()}</span>}
          </div>
        )}

        <div className="text-muted-foreground leading-relaxed text-sm md:text-base">
          {isExpandable ? (
            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {children}
                </motion.div>
              ) : (
                <div className="line-clamp-2">
                  {children}
                </div>
              )}
            </AnimatePresence>
          ) : (
            children
          )}
        </div>
        
        {isExpandable && !expanded && (
          <div className="text-[10px] font-mono text-primary/50 group-hover:text-primary transition-colors">
            // CLICK TO EXPAND LOG
          </div>
        )}
      </div>
    </motion.div>
  );
}
