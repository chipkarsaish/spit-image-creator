import { PricingCard } from "@/components/subscription/PricingCard";

export const Subscription = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 transactions/month",
        "Basic fraud detection",
        "Email alerts",
        "7-day data retention",
        "Standard support"
      ]
    },
    {
      name: "Professional", 
      price: "$99",
      description: "Best for growing companies",
      features: [
        "Up to 10,000 transactions/month",
        "Advanced AI fraud detection",
        "Real-time alerts (Email + SMS)",
        "30-day data retention",
        "Custom rules engine",
        "Priority support",
        "API access"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      description: "For large organizations",
      features: [
        "Unlimited transactions",
        "Enterprise-grade AI",
        "Multi-channel alerts",
        "1-year data retention",
        "Advanced analytics",
        "Custom integrations",
        "24/7 dedicated support",
        "White-label options"
      ],
      isEnterprise: true
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary font-mono uppercase tracking-wide mb-4">
          Choose Your Protection Plan
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Select the perfect plan to safeguard your business from fraud
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            isPopular={plan.isPopular}
            isEnterprise={plan.isEnterprise}
          />
        ))}
      </div>

      <div className="text-center bg-gradient-card border border-primary/20 rounded-lg p-8 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-primary mb-4 font-mono">
          Need a Custom Solution?
        </h3>
        <p className="text-muted-foreground mb-6">
          Contact our enterprise team for tailored fraud detection solutions
        </p>
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-mono uppercase tracking-wide hover:bg-primary/90 transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  );
};