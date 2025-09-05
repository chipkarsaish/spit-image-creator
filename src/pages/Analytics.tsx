import { BarChart3, TrendingUp, AlertTriangle, Shield } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";

export const Analytics = () => {
  const metrics = [
    {
      title: "Detection Accuracy",
      value: "98.7%",
      change: "+0.3% this month",
      changeType: "increase" as const,
      icon: <Shield className="w-6 h-6 text-success" />,
      description: "+0.3% this month"
    },
    {
      title: "False Positives",
      value: "1.2%",
      change: "-0.5% reduction",
      changeType: "increase" as const,
      icon: <AlertTriangle className="w-6 h-6 text-warning" />,
      description: "-0.5% reduction"
    },
    {
      title: "Response Time",
      value: "0.3s",
      change: "Average detection time", 
      changeType: "increase" as const,
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      description: "Average detection time"
    },
    {
      title: "Threats Prevented",
      value: "1,247",
      change: "This month",
      changeType: "increase" as const,
      icon: <BarChart3 className="w-6 h-6 text-destructive" />,
      description: "This month"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-primary font-mono uppercase tracking-wide">
          Analytics Dashboard
        </h1>
        <p className="text-muted-foreground text-sm mt-2 font-mono">
          Advanced fraud detection analytics and performance metrics
        </p>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            changeType={metric.changeType}
            icon={metric.icon}
            description={metric.description}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Threat Patterns */}
        <div className="bg-gradient-card border border-primary/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-6 font-mono uppercase tracking-wide">
            Threat Patterns by Time
          </h3>
          <div className="h-64 flex items-end justify-between gap-1">
            {Array.from({ length: 24 }, (_, i) => {
              const height = Math.random() * 200 + 50;
              const isHighRisk = height > 150;
              return (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div 
                    className={`w-full rounded-t-sm ${
                      isHighRisk ? 'bg-destructive' : 'bg-primary'
                    } animate-pulse-glow`}
                    style={{ height: `${(height / 250) * 100}%` }}
                  />
                  <span className="text-xs text-muted-foreground mt-1 font-mono">
                    {i.toString().padStart(2, '0')}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Risk Distribution Pie Chart */}
        <div className="bg-gradient-card border border-primary/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-6 font-mono uppercase tracking-wide">
            Risk Distribution
          </h3>
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 mb-6">
              {/* Pie Chart */}
              <div className="w-full h-full rounded-full border-8 border-transparent"
                style={{
                  background: `conic-gradient(
                    hsl(var(--destructive)) 0deg 43.2deg,
                    hsl(var(--warning)) 43.2deg 108deg,
                    hsl(var(--success)) 108deg 180deg,
                    hsl(var(--primary)) 180deg 360deg
                  )`
                }}>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-background rounded-full border-2 border-primary/30 flex items-center justify-center">
                  <span className="text-xs font-mono text-primary font-bold">RISK</span>
                </div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="grid grid-cols-2 gap-3 w-full text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <span className="font-mono text-muted-foreground">Critical (12%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-warning"></div>
                <span className="font-mono text-muted-foreground">High (18%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <span className="font-mono text-muted-foreground">Low (20%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="font-mono text-muted-foreground">Safe (50%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Geographic Distribution */}
        <div className="bg-gradient-card border border-primary/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-6 font-mono uppercase tracking-wide">
            Geographic Risk Distribution
          </h3>
          <div className="space-y-4">
            {[
              { country: "United States", risk: 15, threats: 342 },
              { country: "Romania", risk: 85, threats: 128 },
              { country: "China", risk: 72, threats: 89 },
              { country: "Nigeria", risk: 68, threats: 67 },
              { country: "Russia", risk: 91, threats: 45 }
            ].map((location, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-sm text-foreground">{location.country}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {location.threats} threats
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        location.risk > 70 ? 'bg-destructive' : 
                        location.risk > 40 ? 'bg-warning' : 'bg-success'
                      }`}
                      style={{ width: `${location.risk}%` }}
                    />
                  </div>
                </div>
                <span className={`ml-4 font-mono text-sm ${
                  location.risk > 70 ? 'text-destructive' : 
                  location.risk > 40 ? 'text-warning' : 'text-success'
                }`}>
                  {location.risk}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="bg-gradient-card border border-primary/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-primary mb-6 font-mono uppercase tracking-wide">
          AI Model Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">99.2%</div>
            <div className="text-sm text-muted-foreground font-mono">PRECISION</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">97.8%</div>
            <div className="text-sm text-muted-foreground font-mono">RECALL</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning mb-2">98.5%</div>
            <div className="text-sm text-muted-foreground font-mono">F1-SCORE</div>
          </div>
        </div>
      </div>
    </div>
  );
};