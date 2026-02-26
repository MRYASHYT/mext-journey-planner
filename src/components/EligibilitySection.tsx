import { CheckCircle, AlertTriangle } from "lucide-react";

const criteria = [
  "Your college or coaching must be located in Delhi.",
  "You must be actively preparing for an international scholarship.",
  "You must demonstrate academic seriousness and discipline.",
  "You must be comfortable living in a shared academic-focused environment.",
  "You must comply with all residency rules.",
];

const EligibilitySection = () => {
  return (
    <section id="eligibility" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-body block mb-3">資格 · Eligibility</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Eligibility Criteria
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Criteria */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Requirements</h3>
            <ul className="space-y-4">
              {criteria.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Financial */}
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-accent" />
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Financial Responsibility
              </h3>
            </div>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                Students must have family financial support of at least <strong className="text-foreground">₹20,000 per month</strong> to cover groceries, utilities, and personal living expenses.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                This residency does not provide financial sponsorship.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                Residents must be financially capable of sustaining their stay during the preparation period.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
