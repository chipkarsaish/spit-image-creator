import { Shield } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-gradient-cyber border-b border-primary/20 px-6 py-4 z-20">
      <div className="flex items-center gap-3 h-full">
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
    </header>
  );
};