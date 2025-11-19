import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Brain, 
  Award, 
  Globe, 
  Mail, 
  Crown, 
  Users, 
  Clock, 
  Sparkles,
  Check,
  Flame
} from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Lifetime 50% off the Pro Plan",
    description: "Never pay full price"
  },
  {
    icon: Brain,
    title: "Early access to LumixCore",
    description: "Be the first to experience our AI technology"
  },
  {
    icon: Award,
    title: "Exclusive Founding Member Discord role & badge",
    description: "Stand out in the community"
  },
  {
    icon: Globe,
    title: "Influence product features",
    description: "You decide what we build first"
  },
  {
    icon: Mail,
    title: "VIP email updates",
    description: "Early news, tips, and tutorials"
  }
];

const pricingTiers = [
  {
    name: "Founding Member",
    icon: Crown,
    price: "$25",
    period: "one-time",
    description: "For visionaries who want to shape the future",
    features: [
      "Lifetime 50% off Pro",
      "Founding Badge",
      "Early Access",
      "VIP Discord",
      "Product Roadmap Input",
      "Exclusive Updates"
    ],
    highlighted: true,
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    name: "Supporter",
    icon: Users,
    price: "$9",
    period: "/mo",
    description: "Join the community and get updates",
    features: [
      "Private Discord",
      "Regular Updates",
      "Name on Supporters Wall",
      "Community Access"
    ],
    highlighted: false,
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    name: "Waitlist Only",
    icon: Mail,
    price: "Free",
    period: "",
    description: "Stay in the loop",
    features: [
      "Updates",
      "Newsletter",
      "Launch Notification"
    ],
    highlighted: false,
    gradient: "from-gray-500/20 to-slate-500/20"
  }
];

const faqs = [
  {
    question: "I haven't seen LumixCode yet — is it live?",
    answer: "No, we're building the MVP, but by joining now, you'll get early access and perks before anyone else."
  },
  {
    question: "Can I get a refund?",
    answer: "Yes! 100% refund anytime before product launch."
  },
  {
    question: "What exactly is included?",
    answer: "Lifetime 50% off Pro plan, early beta access, exclusive community, Founding Badge, plus input on product roadmap."
  }
];

export default function FoundersForge() {
  const [spotsTaken, setSpotsTaken] = useState(72);
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const spotsInterval = setInterval(() => {
      setSpotsTaken(prev => {
        if (prev < 100) {
          return prev + (Math.random() > 0.7 ? 1 : 0);
        }
        return prev;
      });
    }, 30000);

    return () => clearInterval(spotsInterval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClaimSpot = (tier: string = "founding") => {
    const stripeUrls = {
      founding: import.meta.env.VITE_STRIPE_FOUNDING_MEMBER_URL || "https://buy.stripe.com/test_3cI00kaczcTag4y6FJ8Ra01",
      supporter: import.meta.env.VITE_STRIPE_SUPPORTER_URL || "https://buy.stripe.com/test_00w4gA2K7g5mdWq4xB8Ra02",
      waitlist: "/waitlist"
    };
    
    const url = stripeUrls[tier as keyof typeof stripeUrls] || stripeUrls.founding;
    window.location.href = url;
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 mb-8 animate-float">
            <Flame className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">LIMITED TO FIRST 100 MEMBERS</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Become a Founding Member — <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Secure Lifetime Perks Today
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Join the first 100 visionaries who'll shape the AI-powered coding platform of the future.
            <br />
            <span className="font-semibold text-foreground">Lifetime 50% off Pro plan, private community, early access to LumixCore, and exclusive badges.</span>
          </p>

          <Button 
            size="lg" 
            className="text-lg px-8 py-6 animate-glow"
            onClick={() => handleClaimSpot("founding")}
          >
            <Crown className="w-5 h-5 mr-2" />
            Claim Your Founding Spot
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why Become a Founding Member?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-elevate transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-muted-foreground">
              Select the tier that fits your commitment to LumixCode
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className={`h-full relative overflow-hidden ${tier.highlighted ? 'border-primary shadow-lg' : ''}`}>
                  {tier.highlighted && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-bl-lg">
                      BEST VALUE
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-50`} />
                  
                  <CardHeader className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg ${tier.highlighted ? 'bg-primary/20' : 'bg-muted'} flex items-center justify-center`}>
                        <tier.icon className={`w-6 h-6 ${tier.highlighted ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground ml-1">{tier.period}</span>
                    </div>
                    
                    <CardDescription className="text-base">{tier.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative">
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full"
                      variant={tier.highlighted ? "default" : "outline"}
                      onClick={() => handleClaimSpot(tier.name === "Founding Member" ? "founding" : tier.name === "Supporter" ? "supporter" : "waitlist")}
                    >
                      {tier.price === "Free" ? "Join Waitlist" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOMO Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-12"
          >
            <div className="mb-8">
              <motion.div
                key={spotsTaken}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-6xl sm:text-7xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  {spotsTaken}/100
                </span>
              </motion.div>
              <p className="text-2xl font-semibold mb-2">Founding Spots Taken</p>
              <p className="text-muted-foreground">
                1,435 early backers are already waiting
              </p>
            </div>

            <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${spotsTaken}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="text-center pb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 mx-auto">
                <Clock className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">LIMITED TIME OFFER</span>
              </div>
              
              <CardTitle className="text-4xl mb-4">Offer Ends In</CardTitle>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="text-center">
                  <div className="bg-card border border-border rounded-lg p-4 min-w-[100px]">
                    <div className="text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-sm text-muted-foreground mt-1">Hours</div>
                  </div>
                </div>
                <div className="text-3xl font-bold">:</div>
                <div className="text-center">
                  <div className="bg-card border border-border rounded-lg p-4 min-w-[100px]">
                    <div className="text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-sm text-muted-foreground mt-1">Minutes</div>
                  </div>
                </div>
                <div className="text-3xl font-bold">:</div>
                <div className="text-center">
                  <div className="bg-card border border-border rounded-lg p-4 min-w-[100px]">
                    <div className="text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-sm text-muted-foreground mt-1">Seconds</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-2xl font-bold">Only 100 Founding Spots Available</p>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're building LumixCode for people who code. Once spots are gone, they're gone.
                </p>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-primary-foreground"
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Join the Revolution?
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Spots are filling fast — don't miss your chance to join LumixCode as a founding visionary.
            </p>
            
            <Button
              size="lg" 
              variant="secondary"
              className="text-lg px-12 py-6 hover-elevate"
              onClick={() => handleClaimSpot("founding")}
            >
              <Crown className="w-5 h-5 mr-2" />
              <a
                href="#founders-pricing"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('founders-pricing');
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-block w-full h-full"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Claim Your Founding Spot Now
              </a>
            </Button>
            
            <p className="text-sm mt-6 opacity-75">
              100% refund available anytime before product launch
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
