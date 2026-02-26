import { BookOpen, FileText, Users, Target, Home, ClipboardCheck } from "lucide-react";

const features = [
  { icon: Target, label: "Structured scholarship planning" },
  { icon: FileText, label: "Research proposal development guidance" },
  { icon: BookOpen, label: "SOP review and refinement" },
  { icon: Users, label: "Mock interview practice" },
  { icon: ClipboardCheck, label: "Academic accountability structure" },
  { icon: Home, label: "Focused shared living environment" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section header with Japanese divider */}
        <div className="text-center mb-16">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-body block mb-3">概要 · About</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            About the Residency
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <p className="text-muted-foreground text-lg leading-relaxed text-center mb-12 max-w-3xl mx-auto">
          Delhi Global Scholarship Residency is an independent academic preparation initiative created
          to support serious students preparing for competitive international scholarships.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-[var(--shadow-card)] transition-shadow duration-300"
            >
              <feature.icon className="w-5 h-5 text-accent mb-3" />
              <p className="text-foreground text-sm font-medium">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* Clarification box */}
        <div className="mt-12 border-l-2 border-accent bg-secondary/50 rounded-r-lg p-6">
          <p className="text-sm text-foreground font-medium mb-1">Important Clarification</p>
          <p className="text-sm text-muted-foreground">
            This is <strong>NOT</strong> a hostel or PG accommodation. This is a disciplined preparation
            environment for serious scholarship aspirants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
