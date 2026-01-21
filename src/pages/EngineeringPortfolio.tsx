import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, Box, Hammer, FileText, Camera } from "lucide-react";
import { Link } from "wouter";

export default function EngineeringPortfolio() {
  const assets = [
    { type: "DRAWING", title: "CNC Fixture Assembly", desc: "Technical CAD drawing for aerospace manufacturing fixture." },
    { type: "MODEL", title: "Robotic End Effector", desc: "3D model and integration specifications for custom automation." },
    { type: "MEDIA", title: "Automation Cell Demo", desc: "Video documentation of manufacturing scale-up operation." },
    { type: "SPEC", title: "Instrumentation Schematic", desc: "Electrical wiring and sensor integration diagram." },
  ];

  return (
    <Layout>
      <div className="container px-6 mx-auto py-12">
        <Link href="/">
          <a className="inline-flex items-center text-primary font-mono text-sm mb-12 hover:underline">
            <ArrowLeft className="mr-2 w-4 h-4" /> RETURN TO MISSION CONTROL
          </a>
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 italic">
            ENGINEERING <span className="text-primary">ARCHIVE</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl font-mono text-sm uppercase tracking-wider">
            SYSTEM SPECIFICATIONS // TECHNICAL MEDIA // CAD DESIGNS
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((asset, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="tech-border bg-card overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video bg-secondary/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-primary/20 text-primary text-[10px] font-mono border border-primary/30">
                  {asset.type}
                </div>
                {asset.type === "DRAWING" && <Hammer className="w-12 h-12 text-muted-foreground/20 group-hover:text-primary/40 transition-colors" />}
                {asset.type === "MODEL" && <Box className="w-12 h-12 text-muted-foreground/20 group-hover:text-primary/40 transition-colors" />}
                {asset.type === "SPEC" && <FileText className="w-12 h-12 text-muted-foreground/20 group-hover:text-primary/40 transition-colors" />}
                {asset.type === "MEDIA" && <Camera className="w-12 h-12 text-muted-foreground/20 group-hover:text-primary/40 transition-colors" />}
                
                {/* Visual placeholder for future content */}
                <div className="absolute inset-0 border-[20px] border-transparent group-hover:border-primary/5 transition-all duration-500" />
              </div>
              <div className="p-4 border-t border-border">
                <h3 className="font-display font-bold text-lg mb-1">{asset.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{asset.desc}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Placeholder for "Coming Soon" or empty state */}
          <div className="border border-dashed border-border/50 bg-secondary/5 flex flex-col items-center justify-center p-8 text-center h-[280px]">
            <p className="font-mono text-xs text-muted-foreground/50 italic mb-2">ADDITIONAL DATA PENDING</p>
            <span className="text-primary/20 font-bold text-4xl">...</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
