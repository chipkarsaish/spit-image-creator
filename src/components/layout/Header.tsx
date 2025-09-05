import { Shield } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-gradient-cyber border-b border-primary/20 p-4 z-20">
      <div className="flex items-center justify-between h-full">
        {/* Logo and Branding */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Shield className="h-8 w-8 text-primary animate-pulse-glow" />
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary tracking-wider">
              OBSIDIAN WATCH
            </h1>
            <p className="text-xs text-muted-foreground font-mono">
              Real-time Fraud Detection Platform
            </p>
          </div>
        </div>

        {/* System Status */}
        <div className="flex items-center gap-6 p-4 bg-gradient-card border border-primary/20 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-muted-foreground">SYSTEM ACTIVE</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs text-primary font-mono">ONLINE</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">THREAT LEVEL:</span>
              <span className="text-warning font-mono">MEDIUM</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">UPTIME:</span>
              <span className="text-primary font-mono">99.9%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">STATUS:</span>
              <span className="text-success font-mono">MONITORING</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};