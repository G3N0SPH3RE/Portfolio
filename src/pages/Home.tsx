import Layout from "@/components/Layout";
import TechCard from "@/components/TechCard";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/dark_aerospace_engineering_technical_background.png";
import { ChevronDown, ArrowRight, Activity, Cpu, Shield, Layers, Image as ImageIcon } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Home() {
  const [expandedLog, setExpandedLog] = useState<string | null>(null);

  const toggleLog = (id: string) => {
    setExpandedLog(expandedLog === id ? null : id);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Technical Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
        </div>

        <div className="container relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              SYSTEMS ONLINE
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6 text-foreground">
              JOHN JOSEPH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
                CLINE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light mb-8 border-l-2 border-primary pl-6">
              Technical Program Manager | Project Engineer
              <span className="block text-sm font-mono mt-2 text-muted-foreground/60">
                AEROSPACE • ROBOTICS • ADVANCED MFG • DEFENSE
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#case-studies"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-colors"
              >
                VIEW MISSION LOGS <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <Link href="/engineering">
                <a className="inline-flex items-center justify-center px-8 py-3 border border-border bg-transparent text-foreground font-mono text-sm hover:bg-secondary/50 transition-colors">
                  ENGINEERING MEDIA <ImageIcon className="ml-2 w-4 h-4" />
                </a>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50 animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 relative">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">EXECUTIVE <span className="text-primary">OVERVIEW</span></h2>
              <div className="prose prose-invert prose-lg text-muted-foreground">
                <p>
                  Technical Program Manager and Project Engineer with over <strong className="text-foreground">10 years of experience</strong> in industrial, aerospace, and defense-adjacent environments.
                </p>
                <p className="mt-4 text-base">
                  I specialize in hardware-centric programs where technical ambiguity, schedule pressure, and regulatory constraints intersect. My value lies in translating engineering reality into executable program plans.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "Engineering Experience", value: "8+ YEARS", icon: Cpu },
                { label: "Program Leadership", value: "4+ YEARS", icon: Layers },
                { label: "Key Sectors", value: "AERO / DEFENSE", icon: Shield },
                { label: "Execution Style", value: "HIGH IMPACT", icon: Activity },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-border bg-secondary/10 hover:border-primary/50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="font-mono text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                  <span className="font-display font-bold text-xl">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-16 bg-secondary/10 border-y border-border">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-display font-bold mb-2">LEADERSHIP <span className="text-primary">PHILOSOPHY</span></h2>
            <p className="font-mono text-sm text-muted-foreground">CORE OPERATING PRINCIPLES</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "CREDIBILITY", desc: "Technical credibility enables better program decisions and faster trust building." },
              { title: "OWNERSHIP", desc: "Clear ownership and documentation reduce execution risk." },
              { title: "FORESIGHT", desc: "Early risk identification is more valuable than late heroics." },
              { title: "RELIABILITY", desc: "Strong programs balance speed with long-term reliability." },
              { title: "COMMUNICATION", desc: "Communication cadence matters as much as technical progress." }
            ].map((item, i) => (
              <TechCard key={i} title={item.title} delay={i * 0.1} className="min-h-[160px]">
                <p className="text-sm">{item.desc}</p>
              </TechCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4">MISSION <span className="text-primary">LOGS</span></h2>
              <p className="text-muted-foreground max-w-xl">
                Selected high-impact programs emphasizing execution in technically demanding environments. Click to expand for full technical breakdown.
              </p>
            </div>
            <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
          </div>

          <div className="space-y-6">
            {/* Case Study 1: Amazon */}
            <TechCard 
              title="ROBOTICS TEST & DEPLOYMENT" 
              subtitle="AMAZON ROBOTICS | MFG TEST SYSTEMS"
              role="MTAC Project Manager"
              duration="May 2024 – Oct 2024"
              isExpandable
              expanded={expandedLog === 'amazon'}
              onToggle={() => toggleLog('amazon')}
            >
              <div className="space-y-6 mt-4">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-mono text-primary text-xs tracking-widest mb-3 uppercase font-bold">Program Overview</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Amazon Robotics required accelerated development, validation, and deployment of manufacturing test systems supporting two high-priority robotics programs. These systems acted as production gates for hardware and software integration during manufacturing.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-primary text-xs tracking-widest mb-3 uppercase font-bold">Objectives</h4>
                    <ul className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Deliver production-ready test systems</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Validate hardware/software during MFG</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Support on-time deployment under aggressive schedules</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Ensure repeatable, reliable test coverage at scale</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-border/50">
                   <div>
                    <h4 className="font-mono text-primary text-xs tracking-widest mb-3 uppercase font-bold">My Role & Challenges</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Owned system test coordination and managed four test staff members. Challenges included running two programs concurrently and delivering systems that acted as hard manufacturing gates.
                    </p>
                    <h4 className="font-mono text-primary text-xs tracking-widest mb-3 uppercase font-bold">Approach</h4>
                    <p className="text-sm text-muted-foreground">
                      Defined test coverage requirements, prioritized critical-path functionality, and used daily execution tracking to reduce risk.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-primary text-xs tracking-widest mb-3 uppercase font-bold">Program Valuation</h4>
                    <div className="space-y-4">
                      <div className="bg-secondary/30 p-3 border border-border/50 rounded-sm">
                        <p className="text-[10px] font-mono text-muted-foreground uppercase">Program 1 (Conveyors/Vision)</p>
                        <p className="text-lg font-display font-bold text-primary">~$600,000</p>
                      </div>
                      <div className="bg-secondary/30 p-3 border border-border/50 rounded-sm">
                        <p className="text-[10px] font-mono text-muted-foreground uppercase">Program 2 (Vehicle/Vision)</p>
                        <p className="text-lg font-display font-bold text-primary">~$500,000</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border/50">
                  <h4 className="font-mono text-primary text-xs tracking-widest mb-3 uppercase font-bold text-center">Results & Impact</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="p-3">
                      <p className="text-2xl font-bold text-foreground">ON-TIME</p>
                      <p className="text-[10px] font-mono text-muted-foreground">MFG RAMP SUPPORT</p>
                    </div>
                    <div className="p-3">
                      <p className="text-2xl font-bold text-foreground">REDUCED</p>
                      <p className="text-[10px] font-mono text-muted-foreground">INTEGRATION RISK</p>
                    </div>
                    <div className="p-3">
                      <p className="text-2xl font-bold text-foreground">CONFIDENCE</p>
                      <p className="text-[10px] font-mono text-muted-foreground">MFG TEST EXECUTION</p>
                    </div>
                  </div>
                </div>
              </div>
            </TechCard>

            {/* Case Study 2: Formlogic */}
            <TechCard 
              title="AUTOMATION & MFG SCALE-UP" 
              subtitle="FORMLOGIC | CAPITAL-INTENSIVE EXPANSION"
              role="Technical Program Lead (On-Site)"
              duration="Aug 2021 – Oct 2022"
              isExpandable
              expanded={expandedLog === 'formlogic'}
              onToggle={() => toggleLog('formlogic')}
            >
              <div className="space-y-6 mt-4">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-mono text-primary text-xs tracking-widest mb-3 uppercase font-bold">Program Overview</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Formlogic executed a rapid scale-up of precision CNC manufacturing to meet increasing aerospace and defense customer demand. The program combined capital-intensive CNC expansion, robotic automation, and workforce growth while maintaining continuous production.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-primary text-xs tracking-widest mb-3 uppercase font-bold">Objectives</h4>
                    <ul className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Increase production capacity while maintaining quality</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Integrate robotics into active machining environments</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Maintain ITAR, AS9100, and ISO 9001 compliance</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Improve throughput and material flow stability</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-border/50">
                  <div className="md:col-span-2 space-y-4">
                    <h4 className="font-mono text-primary text-xs tracking-widest mb-1 uppercase font-bold">Responsibilities & Approach</h4>
                    <p className="text-sm text-muted-foreground">
                      Owned technical scope and execution sequencing. Partnered with CEO on trade-offs. Structured program into phased rollouts, applied Lean methods, and designed custom automation fixtures with PLC control.
                    </p>
                    <h4 className="font-mono text-primary text-xs tracking-widest mb-1 uppercase font-bold">Equipment Footprint</h4>
                    <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-muted-foreground">
                      <div className="border border-border/30 p-2">18x Doosan DVF 5000</div>
                      <div className="border border-border/30 p-2">8x Grob G350</div>
                      <div className="border border-border/30 p-2">2x DMG Mori DMX U</div>
                    </div>
                  </div>
                  <div className="bg-secondary/30 p-4 border border-border/50">
                    <h4 className="font-mono text-primary text-[10px] tracking-widest mb-4 uppercase font-bold text-center">Asset Valuation</h4>
                    <div className="space-y-3 font-mono">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground">CNC ASSETS</span>
                        <span className="text-foreground font-bold">$15M-20M</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground">ROBOTICS</span>
                        <span className="text-foreground font-bold">~$500K</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground">STAFFING</span>
                        <span className="text-foreground font-bold">17+ PERS</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <div className="inline-block px-6 py-3 border border-primary/30 bg-primary/5">
                    <span className="text-primary font-bold text-2xl font-display">+350%</span>
                    <span className="text-muted-foreground text-xs font-mono ml-4 uppercase tracking-tighter">CNC MILL PRODUCTION INCREASE</span>
                  </div>
                </div>
              </div>
            </TechCard>

            {/* Case Study 3: Field Environmental */}
            <TechCard 
              title="ENVIRONMENTAL INSTRUMENTATION" 
              subtitle="FIELD ENVIRONMENTAL | PRODUCT PROGRAMS"
              role="Department Lead and Engineer"
              duration="July 2019 – Aug 2021"
              isExpandable
              expanded={expandedLog === 'field'}
              onToggle={() => toggleLog('field')}
            >
              <div className="space-y-6 mt-4">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-mono text-primary text-xs tracking-widest mb-3 uppercase font-bold">Program Overview</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Field Environmental delivered custom environmental monitoring instrumentation for regulatory and field applications. Programs required close coordination between engineering, customers, and regulatory requirements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-primary text-xs tracking-widest mb-3 uppercase font-bold">Responsibilities</h4>
                    <ul className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Led engineering for custom hardware solutions</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Managed requirements and solution delivery</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Supported engineering across 12 branch offices</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Trained employees/customers on equipment theory</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-border/50">
                  <div>
                    <h4 className="font-mono text-primary text-xs tracking-widest mb-3 uppercase font-bold text-center">Impact</h4>
                    <ul className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Improved product reliability & reduced field failures</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Increased efficiency via standardized documentation</li>
                      <li className="flex items-start gap-2"><span className="text-primary mt-1">▪</span> Strengthened customer trust and repeat business</li>
                    </ul>
                  </div>
                  <div className="font-mono text-[10px] space-y-2">
                    <h4 className="text-primary uppercase font-bold text-center mb-2 tracking-widest">Typical Order Parameters</h4>
                    <div className="flex justify-between border-b border-border/30 pb-1">
                      <span>UNIT HARDWARE COST</span>
                      <span className="text-foreground">$250 - $6,000</span>
                    </div>
                    <div className="flex justify-between border-b border-border/30 pb-1">
                      <span>TYPICAL ORDER RANGE</span>
                      <span className="text-foreground">$500 - $10,000+</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-muted-foreground uppercase">Key Takeaway</span>
                      <span className="text-primary italic text-right px-2">"Expectation management is critical in customer-facing programs."</span>
                    </div>
                  </div>
                </div>
              </div>
            </TechCard>
          </div>
        </div>
      </section>

      {/* Engineering Portfolio CTA */}
      <section className="py-16 bg-secondary/20 border-y border-border">
        <div className="container px-6 mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6 italic tracking-tight">ENGINEERING <span className="text-primary">SPECIFICATIONS</span> & MEDIA</h2>
            <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
              Explore detailed engineering designs, technical drawings, and media showcasing my hardware development and systems integration work.
            </p>
            <Link href="/engineering">
              <a className="inline-flex items-center justify-center px-10 py-4 tech-border bg-card text-foreground font-mono font-bold hover:bg-secondary transition-all group">
                ENTER ENGINEERING ARCHIVE <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-primary text-primary-foreground">
        <div className="container px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">READY TO DEPLOY?</h2>
          <p className="text-lg md:text-xl font-mono mb-12 max-w-2xl mx-auto opacity-90">
            Available for technical program leadership roles in aerospace, defense, and advanced manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
                href="mailto:john.jj.cline@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-mono font-bold hover:bg-secondary transition-colors"
              >
                EMAIL DIRECTLY
              </a>
              <a 
                href="https://www.linkedin.com/in/genosphere/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-background text-background font-mono font-bold hover:bg-background hover:text-foreground transition-colors"
              >
                LINKEDIN PROFILE
              </a>
          </div>
          <div className="mt-8 font-mono text-sm opacity-70">
            john.jj.cline@gmail.com
          </div>
        </div>
      </section>
    </Layout>
  );
}
