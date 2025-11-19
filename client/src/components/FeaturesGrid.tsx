import { Lightbulb, Code, TestTube, Rocket, DollarSign } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Lightbulb,
    title: "Plan",
    description: "Transform ideas into actionable roadmaps with AI-powered project planning and architecture design.",
  },
  {
    icon: Code,
    title: "Write",
    description: "Generate production-ready code instantly with intelligent suggestions and best practices built-in.",
  },
  {
    icon: TestTube,
    title: "Test",
    description: "Automated testing suite that catches bugs before they reach production with intelligent test generation.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "One-click deployment to global infrastructure with automatic scaling and zero-downtime updates.",
  },
  {
    icon: DollarSign,
    title: "Earn",
    description: "Monetize your applications instantly with built-in payment processing and subscription management.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Everything you need to <span className="gradient-text">ship faster</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From idea to deployment in minutes, not months. LumixCore technology handles the heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "backwards" }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
