import { BookOpen, FileText, Users, Target, Home, ClipboardCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Target, label: "Structured MEXT scholarship planning" },
  { icon: FileText, label: "Research proposal development guidance" },
  { icon: BookOpen, label: "SOP review and refinement" },
  { icon: Users, label: "Mock interview practice" },
  { icon: ClipboardCheck, label: "Academic accountability structure" },
  { icon: Home, label: "Focused shared living environment" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4 max-w-4xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-body block mb-3">概要 · About</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            About MEXT Journey Planner
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <p className={`text-muted-foreground text-lg leading-relaxed text-center mb-12 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          MEXT Journey Planner is a high-discipline residency and mentorship program in Delhi for serious students
          preparing for the MEXT Scholarship (Japan) — for both Bachelor's and Master's level.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.label}
              className={`group bg-card border border-border rounded-lg p-6 hover:shadow-[var(--shadow-card)] hover:border-accent/30 transition-all duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <feature.icon className="w-5 h-5 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-foreground text-sm font-medium">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* Clarification box */}
        <div className={`mt-12 border-l-2 border-accent bg-secondary/50 rounded-r-lg p-6 transition-all duration-700 delay-500 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
          <p className="text-sm text-foreground font-medium mb-1">⚠️ Important Clarification</p>
          <p className="text-sm text-muted-foreground">
            This is <strong>NOT</strong> a hostel or PG accommodation. This is a High-Discipline Zone —
            a structured "Manager / Employee Dynamic" residency for serious MEXT scholarship aspirants only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
