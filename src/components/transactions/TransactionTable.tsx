import { CheckCircle, AlertTriangle, XCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  timestamp: string;
  amount: string;
  sender: string;
  receiver: string;
  type: string;
  riskScore: number;
  status: "safe" | "suspicious" | "blocked";
  location: string;
}

const mockTransactions: Transaction[] = [
  {
    id: "TXN-001",
    timestamp: "2025-01-08 14:32:15",
    amount: "$250.00",
    sender: "john.doe@email.com",
    receiver: "merchant-abc.com",
    type: "Payment",
    riskScore: 15,
    status: "safe",
    location: "New York"
  },
  {
    id: "TXN-002", 
    timestamp: "2025-01-08 14:31:42",
    amount: "$5000.00",
    sender: "unknown-user@temp.email",
    receiver: "crypto-exchange.com",
    type: "Transfer",
    riskScore: 85,
    status: "blocked",
    location: "Unknown"
  },
  {
    id: "TXN-003",
    timestamp: "2025-01-08 14:30:18", 
    amount: "$75.50",
    sender: "sarah.wilson@company.com",
    receiver: "online-store.com",
    type: "Purchase",
    riskScore: 25,
    status: "safe",
    location: "California"
  },
  {
    id: "TXN-004",
    timestamp: "2025-01-08 14:29:55",
    amount: "$1200.00",
    sender: "suspicious@example.com",
    receiver: "gambling-site.com", 
    type: "Deposit",
    riskScore: 70,
    status: "suspicious",
    location: "Romania"
  },
  {
    id: "TXN-005",
    timestamp: "2025-01-08 14:28:39",
    amount: "$35.99",
    sender: "alex.smith@university.edu",
    receiver: "subscription-service.com",
    type: "Subscription",
    riskScore: 10,
    status: "safe",
    location: "Texas, US"
  }
];

const statusIcons = {
  safe: <CheckCircle className="w-4 h-4 text-success" />,
  suspicious: <AlertTriangle className="w-4 h-4 text-warning" />,
  blocked: <XCircle className="w-4 h-4 text-destructive" />
};

const statusColors = {
  safe: "bg-success/10 text-success border-success/30",
  suspicious: "bg-warning/10 text-warning border-warning/30", 
  blocked: "bg-destructive/10 text-destructive border-destructive/30"
};

const getRiskColor = (score: number) => {
  if (score <= 30) return "text-success";
  if (score <= 70) return "text-warning";
  return "text-destructive";
};

export const TransactionTable = () => {
  return (
    <div className="bg-gradient-card border border-primary/20 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-primary/20 bg-primary/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
            <h3 className="font-mono text-sm text-primary uppercase tracking-wide">
              REAL-TIME MONITORING ACTIVE
            </h3>
          </div>
          <Badge variant="outline" className="bg-success/10 text-success border-success/30 font-mono">
            MONITORING
          </Badge>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/30">
              <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Timestamp
              </th>
              <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Sender
              </th>
              <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Receiver
              </th>
              <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Type
              </th>
              <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Risk Score
              </th>
              <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="text-left p-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {mockTransactions.map((transaction, index) => (
              <tr 
                key={transaction.id}
                className={cn(
                  "border-b border-primary/10 hover:bg-primary/5 transition-colors group",
                  index % 2 === 0 && "bg-muted/10"
                )}
              >
                <td className="p-4">
                  <span className="font-mono text-sm text-primary">{transaction.id}</span>
                </td>
                <td className="p-4">
                  <span className="font-mono text-sm text-foreground">{transaction.timestamp}</span>
                </td>
                <td className="p-4">
                  <span className="font-mono text-sm font-semibold text-foreground">
                    {transaction.amount}
                  </span>
                </td>
                <td className="p-4">
                  <span className="font-mono text-sm text-muted-foreground">
                    {transaction.sender}
                  </span>
                </td>
                <td className="p-4">
                  <span className="font-mono text-sm text-muted-foreground">
                    {transaction.receiver}
                  </span>
                </td>
                <td className="p-4">
                  <span className="font-mono text-sm text-foreground">{transaction.type}</span>
                </td>
                <td className="p-4">
                  <span className={cn("font-mono text-sm font-semibold", getRiskColor(transaction.riskScore))}>
                    {transaction.riskScore}%
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {statusIcons[transaction.status]}
                    <Badge variant="outline" className={cn("text-xs font-mono uppercase", statusColors[transaction.status])}>
                      {transaction.status}
                    </Badge>
                  </div>
                </td>
                <td className="p-4">
                  <span className="font-mono text-sm text-muted-foreground">
                    {transaction.location}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};