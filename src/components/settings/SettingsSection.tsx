import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SettingsSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const SettingsSection = ({ title, description, children }: SettingsSectionProps) => {
  return (
    <div className="bg-gradient-card border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
};

interface SettingItemProps {
  label: string;
  description?: string;
  type: "switch" | "input" | "threshold";
  value?: string | boolean | number;
  onChange?: (value: any) => void;
  inputType?: string;
}

export const SettingItem = ({ 
  label, 
  description, 
  type, 
  value, 
  onChange,
  inputType = "text" 
}: SettingItemProps) => {
  if (type === "switch") {
    return (
      <div className="flex items-center justify-between py-3">
        <div className="flex-1">
          <Label className="text-sm font-medium text-foreground">{label}</Label>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <Switch 
          checked={value as boolean}
          onCheckedChange={onChange}
          className="data-[state=checked]:bg-primary"
        />
      </div>
    );
  }

  if (type === "input") {
    return (
      <div className="py-3">
        <Label className="text-sm font-medium text-foreground mb-2 block">{label}</Label>
        {description && (
          <p className="text-xs text-muted-foreground mb-3">{description}</p>
        )}
        <Input
          type={inputType}
          value={value as string}
          onChange={(e) => onChange?.(e.target.value)}
          className="bg-background/50 border-primary/20 focus:border-primary"
        />
      </div>
    );
  }

  if (type === "threshold") {
    const numValue = typeof value === 'number' ? value : 50;
    return (
      <div className="py-3">
        <Label className="text-sm font-medium text-foreground mb-2 block">{label}</Label>
        {description && (
          <p className="text-xs text-muted-foreground mb-3">{description}</p>
        )}
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <input
              type="range"
              min="0"
              max="100"
              value={numValue}
              onChange={(e) => onChange?.(Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider-thumb:bg-primary"
            />
          </div>
          <div className="min-w-0 flex-shrink-0">
            <span className="text-sm font-mono text-primary">{numValue}%</span>
            <span className="text-xs text-muted-foreground ml-1">
              {numValue <= 30 ? "(Balanced)" : numValue <= 70 ? "(Strict)" : "(Maximum)"}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};