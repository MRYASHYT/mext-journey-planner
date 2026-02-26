import { AlertTriangle } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex items-center gap-3 mb-5">
            <AlertTriangle className="w-5 h-5 text-accent" />
            <h2 className="font-heading text-xl font-bold text-foreground">Important Notice</h2>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              This program does not guarantee scholarship selection.
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              This is an independent academic initiative.
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              It is not affiliated with any embassy, university, or government body.
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              Final scholarship decisions are made solely by official authorities.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
