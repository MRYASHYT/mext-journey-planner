import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/85" />

      {/* Japanese-inspired decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent/60" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        {/* Small decorative kanji-inspired element */}
        <div className="mb-6 flex justify-center">
          <span className="text-accent/80 text-sm tracking-[0.5em] uppercase font-body">
            学 · Scholarship · 奨学金
          </span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
          Prepare for Global Scholarships in a Focused Academic Environment
        </h1>

        <p className="font-heading text-lg sm:text-xl text-primary-foreground/80 mb-4 italic">
          Live. Study. Compete. Succeed.
        </p>

        <p className="text-primary-foreground/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-body leading-relaxed">
          A structured scholarship preparation residency in Delhi designed for disciplined students
          aiming for fully funded international opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-base px-8" asChild>
            <a href="#apply">Apply for Residency</a>
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8" asChild>
            <a href="#about">Learn More</a>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-primary-foreground/50 text-xs font-body uppercase tracking-widest">
          <span>MEXT</span>
          <span className="text-accent">·</span>
          <span>Erasmus Mundus</span>
          <span className="text-accent">·</span>
          <span>CSC China</span>
          <span className="text-accent">·</span>
          <span>SINGA</span>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
