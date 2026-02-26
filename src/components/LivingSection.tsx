import { Users, BookOpen, Volume2, Home, Utensils, Lock } from "lucide-react";

const features = [
  { icon: Lock, label: "Limited seats" },
  { icon: Users, label: "Shared accommodation" },
  { icon: Volume2, label: "Quiet academic environment" },
  { icon: BookOpen, label: "Common study area" },
  { icon: Utensils, label: "Shared groceries and utilities" },
  { icon: Home, label: "Designed for focused scholarship preparation" },
];

const LivingSection = () => {
  return (
    <section id="living" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-body block mb-3">生活 · Living</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Living Environment
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-4 bg-card border border-border rounded-lg p-5"
            >
              <f.icon className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm text-foreground">{f.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-muted-foreground italic">
            This is not a luxury accommodation. It is a disciplined academic preparation space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LivingSection;
