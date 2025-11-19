import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
          Ready to build the <span className="gradient-text">future?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join thousands of developers who are shipping faster with LumixCore technology. Start your free trial today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/sign-up">
            <Button size="lg" className="h-14 px-10 text-base animate-glow" data-testid="button-cta-start">
              Start for free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="outline" size="lg" className="h-14 px-10 text-base" data-testid="button-cta-demo">
              Watch Demo
            </Button>
          </Link>
        </div>
        
        <p className="text-sm text-muted-foreground mt-6">
          14-day free trial • No credit card required
        </p>
      </div>
    </section>
  );
}
