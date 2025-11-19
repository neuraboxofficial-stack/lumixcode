import FeatureCard from "../FeatureCard";
import { Code } from "lucide-react";

export default function FeatureCardExample() {
  return (
    <div className="p-8">
      <FeatureCard
        icon={Code}
        title="Write"
        description="AI-powered code generation that understands your intent and writes production-ready code in seconds."
      />
    </div>
  );
}
