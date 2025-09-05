import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: React.ReactNode;
  description?: string;
}

export const MetricCard = ({
  title,
  value,
  change,
  changeType,
  icon,
  description
}: MetricCardProps) => {
  return (
    <div className="bg-gradient-card border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <div>
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
              {title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl font-bold text-foreground">{value}</span>
              <div className={cn(
                "flex items-center gap-1 text-xs font-mono px-2 py-1 rounded",
                changeType === "increase" 
                  ? "text-success bg-success/10" 
                  : "text-destructive bg-destructive/10"
              )}>
                {changeType === "increase" ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {change}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {description && (
        <p className="text-xs text-muted-foreground font-mono">
          {description}
        </p>
      )}
      
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-0 group-hover:opacity-20 transition-opacity rounded-lg" />
    </div>
  );
};