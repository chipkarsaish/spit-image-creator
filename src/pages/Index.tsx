import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { MatrixBackground } from "@/components/background/MatrixBackground";
import { Dashboard } from "./Dashboard";
import { Transactions } from "./Transactions";
import { Analytics } from "./Analytics";
import { Settings } from "./Settings";
import { Subscription } from "./Subscription";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "transactions":
        return <Transactions />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      case "subscription":
        return <Subscription />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <MatrixBackground />
      <Header />
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="ml-80 mt-16 p-8 relative z-10">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
