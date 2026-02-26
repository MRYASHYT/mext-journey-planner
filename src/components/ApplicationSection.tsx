import { Button } from "@/components/ui/button";

const steps = [
  { num: "01", title: "Submit Online Application", desc: "Complete the application form with your academic details and scholarship goals." },
  { num: "02", title: "Academic Profile Review", desc: "Our team evaluates your profile, research interests, and scholarship readiness." },
  { num: "03", title: "Personal Interview", desc: "A brief interview to assess commitment, discipline, and academic seriousness." },
  { num: "04", title: "Final Selection", desc: "Selected candidates are notified and onboarded into the residency program." },
];

const ApplicationSection = () => {
  return (
    <section id="apply" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-body block mb-3">応募 · Apply</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Application Process
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-6 items-start group">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center text-xs font-bold text-accent font-body">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-16 bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10">
                <h3 className="font-heading text-base font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-6">
            Seats are limited and selection is based on seriousness and academic commitment.
          </p>
          <Button variant="hero" size="lg" className="px-10">
            Apply for Residency
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
