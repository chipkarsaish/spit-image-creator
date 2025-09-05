import { useState } from "react";
import { SettingsSection, SettingItem } from "@/components/settings/SettingsSection";
import { Button } from "@/components/ui/button";

export const Settings = () => {
  const [realtimeMonitoring, setRealtimeMonitoring] = useState(true);
  const [autoBlock, setAutoBlock] = useState(false);
  const [riskThreshold, setRiskThreshold] = useState(70);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [companyName, setCompanyName] = useState("Acme Corp");
  const [apiKey, setApiKey] = useState("obs_sk_live_••••••••••••••••••••••••••");
  const [emailAddress, setEmailAddress] = useState("admin@acme.com");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-primary font-mono uppercase tracking-wide">
          Settings
        </h1>
        <p className="text-muted-foreground text-sm mt-2 font-mono">
          Manage your account and fraud detection preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Account Information */}
        <SettingsSection 
          title="Account Information"
          description="Update your company details and contact information"
        >
          <div className="space-y-4">
            <SettingItem
              label="Company Name"
              type="input"
              value={companyName}
              onChange={setCompanyName}
            />
            <SettingItem
              label="API Key"
              type="input"
              value={apiKey}
              onChange={setApiKey}
              inputType="password"
            />
            <div className="flex justify-end pt-4">
              <Button variant="outline" className="font-mono text-primary border-primary">
                Regenerate
              </Button>
            </div>
          </div>
        </SettingsSection>

        {/* Contact Information */}
        <SettingsSection title="Contact Information">
          <div className="space-y-4">
            <SettingItem
              label="Email Address"
              type="input"
              value={emailAddress}
              onChange={setEmailAddress}
              inputType="email"
            />
          </div>
        </SettingsSection>
      </div>

      {/* Fraud Detection Settings */}
      <SettingsSection
        title="Fraud Detection Settings"
        description="Configure how the system monitors and responds to suspicious activity"
      >
        <div className="space-y-6">
          <SettingItem
            label="Real-time Monitoring"
            description="Enable continuous transaction monitoring"
            type="switch"
            value={realtimeMonitoring}
            onChange={setRealtimeMonitoring}
          />
          
          <SettingItem
            label="Auto-block Suspicious Transactions"
            description="Automatically block transactions with risk score above threshold"
            type="switch"
            value={autoBlock}
            onChange={setAutoBlock}
          />
          
          <SettingItem
            label="Risk Threshold"
            description="Set the risk score threshold for flagging transactions"
            type="threshold"
            value={riskThreshold}
            onChange={setRiskThreshold}
          />
        </div>
      </SettingsSection>

      {/* Notification Preferences */}
      <SettingsSection
        title="Notification Preferences"
        description="Choose how you want to be notified about security events"
      >
        <div className="space-y-4">
          <SettingItem
            label="Email Notifications"
            description="Receive fraud alerts via email"
            type="switch"
            value={emailNotifications}
            onChange={setEmailNotifications}
          />
        </div>
      </SettingsSection>
    </div>
  );
};