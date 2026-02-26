import { BookOpen, Heart, Sparkles, Wallet } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "Academic Discipline",
    items: [
      "Minimum 6–8 hours of focused study daily.",
      "Weekly progress reviews.",
      "Participation in structured academic discussions.",
      "Active engagement in scholarship preparation activities.",
    ],
  },
  {
    icon: Heart,
    title: "Behavior & Conduct",
    items: [
      "Respectful behavior toward all residents.",
      "No loud noise after 10 PM.",
      "No alcohol, smoking, or illegal substances.",
      "No unauthorized guests.",
    ],
  },
  {
    icon: Sparkles,
    title: "Cleanliness & Shared Responsibility",
    items: [
      "Maintain personal and shared spaces.",
      "Participate in common household responsibilities.",
      "Maintain hygiene and order.",
    ],
  },
  {
    icon: Wallet,
    title: "Financial Responsibility",
    items: [
      "Each resident is responsible for their own expenses.",
      "₹20,000 minimum monthly family-backed financial support is mandatory.",
    ],
  },
];

const RulesSection = () => {
  return (
    <section id="rules" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-body block mb-3">規則 · Rules</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Residency Code of Conduct
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-[var(--shadow-soft)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center">
                  <section.icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
