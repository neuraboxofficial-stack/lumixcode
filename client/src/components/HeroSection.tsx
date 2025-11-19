import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Mic, Upload, Lock, Send, Sparkles } from "lucide-react";
import { SiReact, SiVuedotjs, SiAngular, SiSvelte, SiNextdotjs, SiNuxtdotjs, SiRemix, SiAstro, SiFigma, SiNotion, SiLinear, SiSlack } from "react-icons/si";

const frameworks = [
  { name: "React", icon: SiReact },
  { name: "Vue", icon: SiVuedotjs },
  { name: "Angular", icon: SiAngular },
  { name: "Svelte", icon: SiSvelte },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Nuxt", icon: SiNuxtdotjs },
];

const integrations = [
  { name: "Remix", icon: SiRemix },
  { name: "Astro", icon: SiAstro },
  { name: "Figma", icon: SiFigma },
  { name: "Notion", icon: SiNotion },
  { name: "Linear", icon: SiLinear },
  { name: "Slack", icon: SiSlack },
];

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const [projectInput, setProjectInput] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Dream It. Launch It. Monetize It.";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const handleStartProject = () => {
    setLocation("/sign-up");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">LUMIXCODE RAISING SEED FUNDING</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight min-h-[1.2em]">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Build production-ready <span className="underline underline-offset-4">web app.</span>
        </p>

        <div className="max-w-3xl mx-auto mb-6">
          <div className="bg-white dark:bg-card rounded-2xl shadow-2xl p-6 border border-border">
            <div className="flex items-start gap-3">
              <button className="mt-1 p-2 hover-elevate active-elevate-2 rounded-md" data-testid="button-mic">
                <Mic className="w-5 h-5 text-muted-foreground" />
              </button>
              
              <div className="flex-1">
                <textarea
                  value={projectInput}
                  onChange={(e) => setProjectInput(e.target.value)}
                  placeholder="What can I build for you today?"
                  className="w-full bg-transparent border-none outline-none resize-none text-base placeholder:text-muted-foreground min-h-[60px] py-2"
                  rows={3}
                  data-testid="input-project-idea"
                />
              </div>

              <button 
                className="mt-1 p-2.5 bg-primary text-primary-foreground rounded-full hover-elevate active-elevate-2 transition-all animate-glow"
                onClick={handleStartProject}
                data-testid="button-submit"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 text-sm hover-elevate active-elevate-2 rounded-md" data-testid="button-import">
                  <Upload className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground font-medium">Import</span>
                </button>
              </div>

              <button
                onClick={() => setIsPublic(!isPublic)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm hover-elevate active-elevate-2 rounded-md"
                data-testid="button-public-toggle"
              >
                <Lock className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground font-medium">{isPublic ? "Public" : "Private"}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card/50 dark:bg-card/30 backdrop-blur-sm rounded-xl p-4 border border-border/50">
            <div className="flex items-center gap-8 justify-center flex-wrap">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-muted-foreground uppercase">Frameworks</span>
                <div className="flex items-center gap-2">
                  {frameworks.map((framework) => (
                    <button
                      key={framework.name}
                      className="p-2 rounded-md hover-elevate active-elevate-2 transition-all group"
                      data-testid={`framework-${framework.name.toLowerCase()}`}
                    >
                      <framework.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-muted-foreground uppercase">Integrations</span>
                <div className="flex items-center gap-2">
                  {integrations.map((integration) => (
                    <button
                      key={integration.name}
                      className="p-2 rounded-md hover-elevate active-elevate-2 transition-all group"
                      data-testid={`integration-${integration.name.toLowerCase()}`}
                    >
                      <integration.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
