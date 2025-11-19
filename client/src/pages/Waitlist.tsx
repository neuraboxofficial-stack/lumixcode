import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, CheckCircle } from "lucide-react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Waitlist signup:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="max-w-md w-full">
          <Card className="border-2">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                {submitted ? (
                  <CheckCircle className="w-8 h-8 text-primary" />
                ) : (
                  <Mail className="w-8 h-8 text-primary" />
                )}
              </div>
              
              <CardTitle className="text-3xl mb-2">
                {submitted ? "You're on the list!" : "Join the Waitlist"}
              </CardTitle>
              
              <CardDescription className="text-base">
                {submitted
                  ? "We'll keep you updated on LumixCode's launch and send you exclusive early access information."
                  : "Be the first to know when LumixCode launches. Get updates, early access, and exclusive content."}
              </CardDescription>
            </CardHeader>
            
            {!submitted && (
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Join Waitlist
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            )}
            
            {submitted && (
              <CardContent className="text-center">
                <Button asChild variant="outline" size="lg">
                  <a href="/">Back to Home</a>
                </Button>
              </CardContent>
            )}
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
