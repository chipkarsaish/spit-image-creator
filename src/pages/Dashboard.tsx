import { BarChart3, Shield, AlertTriangle, DollarSign } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ThreatAlert } from "@/components/dashboard/ThreatAlert";

export const Dashboard = () => {
  const metrics = [
    {
      title: "Total Transactions",
      value: "2,847",
      change: "+12.5% from yesterday",
      changeType: "increase" as const,
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      description: "+12.5% from yesterday"
    },
    {
      title: "Threats Detected", 
      value: "28",
      change: "+2.1% from yesterday",
      changeType: "increase" as const,
      icon: <AlertTriangle className="w-6 h-6 text-destructive" />,
      description: "+2.1% from yesterday"
    },
    {
      title: "Secure Transactions",
      value: "2,701",
      change: "94.9% success rate",
      changeType: "increase" as const,
      icon: <Shield className="w-6 h-6 text-success" />,
      description: "94.9% success rate"
    },
    {
      title: "Funds Protected",
      value: "$2.4M",
      change: "Potential losses prevented",
      changeType: "increase" as const,
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      description: "Potential losses prevented"
    }
  ];

  const threatAlerts = [
    {
      title: "HIGH-RISK TRANSACTION DETECTED",
      description: "$5,000 transfer to unverified account - 2 min ago",
      severity: "critical" as const,
      timestamp: "2 min ago",
      location: "Romania"
    }
  ];
  
  return (
    <div className="space-y-8">
      {/* Metrics Grid */}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Threat Analysis Chart */}
        <div className="bg-gradient-card border border-primary/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-6 font-mono uppercase tracking-wide">
            Weekly Threat Analysis
          </h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {[240, 180, 320, 280, 350, 160, 120].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="bg-gradient-neon rounded-t-sm w-full animate-pulse-glow"
                  style={{ height: `${(height / 350) * 100}%` }}
                />
                <span className="text-xs text-muted-foreground mt-2 font-mono">
                  {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Distribution Chart */}
        <div className="bg-gradient-card border border-primary/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-6 font-mono uppercase tracking-wide">
            Risk Distribution
          </h3>
          <div className="flex items-center justify-center h-64">
            <div className="relative w-48 h-48">
              {/* Pie chart representation */}
              <div className="w-full h-full rounded-full" style={{
                background: `conic-gradient(
                  #00ff88 0deg 245deg,
                  #ffa500 245deg 290deg, 
                  #ff4444 290deg 360deg
                )`
              }}>
                <div className="absolute inset-4 bg-card rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">68%</div>
                    <div className="text-xs text-muted-foreground font-mono">LOW RISK</div>
                  </div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-success rounded"></div>
                  <span className="text-muted-foreground font-mono">Low Risk (0-30%): 68%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-warning rounded"></div>
                  <span className="text-muted-foreground font-mono">Medium Risk (31-70%): 25%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-destructive rounded"></div>
                  <span className="text-muted-foreground font-mono">High Risk (71-100%): 7%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Threat Alerts */}
      <div className="bg-gradient-card border border-primary/20 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
          <h3 className="text-lg font-semibold text-destructive font-mono uppercase tracking-wide">
            Active Threat Alerts
          </h3>
        </div>
        <div className="space-y-4">
          {threatAlerts.map((alert, index) => (
            <ThreatAlert
              key={index}
              title={alert.title}
              description={alert.description}
              severity={alert.severity}
              timestamp={alert.timestamp}
              location={alert.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};