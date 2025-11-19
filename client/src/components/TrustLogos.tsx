import { SiAdobe, SiSalesforce, SiSpotify, SiNetflix, SiAirbnb, SiSlack } from "react-icons/si";

const companies = [
  { name: "Adobe", icon: SiAdobe },
  { name: "Slack", icon: SiSlack },
  { name: "Salesforce", icon: SiSalesforce },
  { name: "Spotify", icon: SiSpotify },
  { name: "Netflix", icon: SiNetflix },
  { name: "Airbnb", icon: SiAirbnb },
];

export default function TrustLogos() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-12">
          TRUSTED BY TEAMS AT
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center opacity-60">
          {companies.map((company) => (
            <div
              key={company.name}
              className="hover:opacity-100 transition-opacity"
              data-testid={`company-${company.name.toLowerCase()}`}
            >
              <company.icon className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
