import { Scale, ShieldAlert, Lock, Wallet, UserX, AlertOctagon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const sections = [
  {
    icon: Scale,
    title: "A. Legal Status & Jurisdiction",
    items: [
      "License to Occupy: This is a temporary 'Guest License' only, NOT a tenancy or lease.",
      "Anti-Ragging Policy: Zero Tolerance. Bullying or harassment = Immediate Expulsion + Police Report.",
      "Disputes are subject to Manager's city courts ONLY.",
    ],
  },
  {
    icon: Lock,
    title: "B. Movement & Permission Protocol",
    items: [
      "Formal permission (Email/Message) required for leaving premises.",
      "No friends, partners, or relatives allowed inside.",
      "Manager can inspect bags/rooms to enforce 'No Contraband' rules.",
    ],
  },
  {
    icon: Wallet,
    title: "C. Financials, Absence & Damages",
    items: [
      "Shared Electricity, Water, and Internet bills.",
      "Key-Holder Rule: You pay full share even if absent.",
      "Property damage must be paid within 24 hours.",
      "Common Pot grocery contribution is non-refundable.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "D. Liability & Theft Waiver",
    items: [
      "Resident is solely responsible for personal belongings.",
      "Manager is NOT liable for theft, robbery, or lost items.",
      "Manager is NOT liable for academic failure, sickness, or injury.",
    ],
  },
  {
    icon: UserX,
    title: "E. Termination & Dissolution",
    items: [
      "Manager can expel Resident immediately for misconduct, non-payment, or leaving without permission.",
      "Manager may dissolve the program with 30 Days Notice. No compensation for closure.",
    ],
  },
  {
    icon: AlertOctagon,
    title: "F. Academic Discipline",
    items: [
      "Minimum 6–8 hours of focused MEXT preparation daily.",
      "Weekly Progress Report (WPR) due every Sunday at 8:00 PM.",
      "Active engagement in scholarship preparation activities.",
      "Missed duty = ₹100 fine to Common Pot.",
    ],
  },
];

const RulesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="rules" className="py-20 md:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4 max-w-5xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-body block mb-3">規則 · Rules</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Residency Code of Conduct
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className={`bg-card border border-border rounded-lg p-8 hover:shadow-[var(--shadow-soft)] hover:border-accent/30 transition-all duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center">
                  <section.icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground">{section.title}</h3>
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
