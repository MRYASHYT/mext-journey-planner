import { AlertTriangle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DisclaimerSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-4 max-w-3xl">
        <div className={`bg-card border border-border rounded-lg p-8 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-5">
            <AlertTriangle className="w-5 h-5 text-accent" />
            <h2 className="font-heading text-xl font-bold text-foreground">Important Notice</h2>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              This program does not guarantee MEXT scholarship selection.
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              This is an independent academic initiative — NOT affiliated with any embassy, university, or government body.
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              Final scholarship decisions are made solely by the Japanese Ministry of Education (MEXT).
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              Manager is NOT liable for academic failure, sickness, injury, theft, or loss of belongings.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
