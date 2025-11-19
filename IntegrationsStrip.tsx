import { SiReact, SiGithub, SiDocker, SiVercel, SiFigma, SiStripe } from "react-icons/si";

const integrations = [
  { name: "React", icon: SiReact },
  { name: "GitHub", icon: SiGithub },
  { name: "Docker", icon: SiDocker },
  { name: "Vercel", icon: SiVercel },
  { name: "Figma", icon: SiFigma },
  { name: "Stripe", icon: SiStripe },
];

export default function IntegrationsStrip() {
  return (
    <section className="py-16 border-y bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          INTEGRATES WITH YOUR FAVORITE TOOLS
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 items-center justify-items-center">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col items-center gap-3 hover-elevate active-elevate-2 p-4 rounded-md transition-all cursor-pointer"
              data-testid={`integration-${integration.name.toLowerCase()}`}
            >
              <integration.icon className="w-10 h-10 text-muted-foreground hover:text-primary transition-colors" />
              <span className="text-xs font-medium text-muted-foreground">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
