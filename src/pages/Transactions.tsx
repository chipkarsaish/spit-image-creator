import { TransactionTable } from "@/components/transactions/TransactionTable";

export const Transactions = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary font-mono uppercase tracking-wide">
            Transaction Monitor
          </h1>
          <p className="text-muted-foreground text-sm mt-2 font-mono">
            Real-time monitoring of all financial transactions
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
          <span className="text-sm text-success font-mono">REAL-TIME MONITORING ACTIVE</span>
        </div>
      </div>
      
      <TransactionTable />
    </div>
  );
};