import { AlertTriangle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ThreatAlertProps {
  title: string;
  description: string;
  severity: "low" | "medium" | "high" | "critical";
  timestamp: string;
  location?: string;
}

const severityColors = {
  low: "bg-success/10 text-success border-success/30",
  medium: "bg-warning/10 text-warning border-warning/30",
  high: "bg-destructive/10 text-destructive border-destructive/30",
  critical: "bg-red-500/10 text-red-400 border-red-400/30"
};

export const ThreatAlert = ({
  title,
  description,
  severity,
  timestamp,
  location
}: ThreatAlertProps) => {
  return (
    <div className="bg-gradient-card border border-primary/20 rounded-lg p-4 hover:border-primary/40 transition-all duration-300 group">
      <div className="flex items-start gap-3">
        <div className={cn(
          "p-2 rounded-lg flex-shrink-0",
          severity === "critical" && "bg-red-500/10 animate-pulse-glow"
        )}>
          <AlertTriangle className={cn(
            "w-5 h-5",
            severity === "low" && "text-success",
            severity === "medium" && "text-warning", 
            severity === "high" && "text-destructive",
            severity === "critical" && "text-red-400"
          )} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-sm font-semibold text-foreground truncate">{title}</h4>
            <Badge variant="outline" className={cn("text-xs font-mono uppercase", severityColors[severity])}>
              {severity}
            </Badge>
          </div>
          
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span className="font-mono">{timestamp}</span>
            </div>
            {location && (
              <span className="font-mono">{location}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};