import { Shield, BarChart3, CreditCard, AlertTriangle, Settings, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigation = [
  { name: "DASHBOARD", id: "dashboard", icon: BarChart3 },
  { name: "TRANSACTIONS", id: "transactions", icon: CreditCard },
  { name: "FRAUD ALERTS", id: "alerts", icon: AlertTriangle },
  { name: "ANALYTICS", id: "analytics", icon: Eye },
  { name: "SUBSCRIPTION", id: "subscription", icon: Shield },
  { name: "SETTINGS", id: "settings", icon: Settings },
];

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  return (
    <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-80 bg-gradient-cyber border-r border-primary/20 p-6">
      {/* Navigation */}
      <nav className="space-y-2 mb-12">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full justify-start gap-3 h-12 px-4 font-mono text-sm tracking-wide transition-all duration-300",
                isActive
                  ? "bg-primary/10 text-primary border border-primary/30 shadow-glow"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5 hover:border-primary/20 border border-transparent"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive && "animate-pulse-glow")} />
              {item.name}
              {isActive && (
                <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse" />
              )}
            </Button>
          );
        })}
      </nav>

      {/* System Status */}
      <div className="p-4 bg-gradient-card border border-primary/20 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-muted-foreground">SYSTEM ACTIVE</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs text-primary font-mono">ONLINE</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">THREAT LEVEL:</span>
            <span className="text-warning font-mono">MEDIUM</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">UPTIME:</span>
            <span className="text-primary font-mono">99.9%</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">STATUS:</span>
            <span className="text-success font-mono">MONITORING</span>
          </div>
        </div>
      </div>
    </div>
  );
};