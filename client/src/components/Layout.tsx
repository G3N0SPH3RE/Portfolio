import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { name: "OVERVIEW", path: "/#overview" },
    { name: "PHILOSOPHY", path: "/#philosophy" },
    { name: "CASE STUDIES", path: "/#case-studies" },
    { name: "MEDIA", path: "/engineering" },
    { name: "CONTACT", path: "/#contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans overflow-x-hidden">
      {/* Scanline effect */}
      <div className="scanline" />

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <span className="text-xl font-display font-bold tracking-tight hover:text-primary transition-colors cursor-pointer">
              JJC<span className="text-primary">.</span>SYS
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={cn(
                  "text-xs font-mono tracking-widest hover:text-primary transition-colors",
                  location === item.path ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-16">
        {children}
      </main>

      <footer className="border-t border-border mt-20 py-10 bg-secondary/20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-mono">
          <div>
            <p>&copy; 2026 JOHN JOSEPH CLINE</p>
            <p className="text-xs mt-1">SYSTEMS ONLINE // READY</p>
          </div>
          <div className="flex gap-6">
            <a href="mailto:john.jj.cline@gmail.com" className="hover:text-primary transition-colors">EMAIL</a>
            <a href="https://linkedin.com/in/genosphere" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LINKEDIN</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
