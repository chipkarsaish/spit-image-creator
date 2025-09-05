import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isEnterprise?: boolean;
}

export const PricingCard = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  isEnterprise = false
}: PricingCardProps) => {
  return (
    <div className={cn(
      "relative bg-gradient-card border rounded-lg p-6 hover:scale-105 transition-all duration-300",
      isPopular 
        ? "border-primary shadow-glow" 
        : "border-primary/20 hover:border-primary/40"
    )}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground font-mono text-xs px-3 py-1 animate-pulse-glow">
            Most Popular
          </Badge>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold text-primary">{price}</span>
          <span className="text-muted-foreground font-mono">/month</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={cn(
          "w-full font-mono uppercase tracking-wide",
          isPopular 
            ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow" 
            : "bg-transparent border border-primary text-primary hover:bg-primary/10"
        )}
      >
        Get Started
      </Button>

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-0 hover:opacity-10 transition-opacity rounded-lg pointer-events-none" />
    </div>
  );
};