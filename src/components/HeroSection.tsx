import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (theme === "system") {
      const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(isSystemDark);
    } else {
      setIsDarkMode(theme === "dark");
    }
  }, [theme]);

  // Use a stark black overlay for dark mode (non-reddish), and espresso for light mode
  const overlayClass = isDarkMode ? "bg-[#050505]/95" : "bg-[#2A1B14]/90";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dynamic Theme Overlay */}
      <div className={`absolute inset-0 transition-colors duration-500 ${overlayClass}`} />

      {/* Japanese-inspired decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent/60" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        {/* Badge */}
        <div className="mb-6 flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-5 py-2 text-white font-medium text-sm font-body shadow-lg">
            🇯🇵 Your Gateway to Japan
          </span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance animate-fade-up drop-shadow-md" style={{ animationDelay: '0.4s' }}>
          MEXT Scholarship Preparation Residency
        </h1>

        <p className="font-heading text-lg sm:text-xl text-white/90 mb-4 italic animate-fade-up drop-shadow-sm" style={{ animationDelay: '0.6s' }}>
          "Your complete roadmap to a fully funded education in Japan 🇯🇵"
        </p>

        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-body leading-relaxed animate-fade-up" style={{ animationDelay: '0.8s' }}>
          A high-discipline scholarship preparation residency in Delhi for Bachelor's & Master's students
          aiming for the MEXT Scholarship to Japan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '1s' }}>
          <Button variant="hero" size="lg" className="text-base px-8" asChild>
            <a href="#apply">Apply for Residency</a>
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8" asChild>
            <a href="#about">Learn More</a>
          </Button>
        </div>

        {/* Trust indicator */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <p className="text-white/50 text-xs font-body uppercase tracking-widest mb-3">Limited Intake</p>
          <p className="text-white/80 text-sm font-heading">Only 5 Spots Available</p>
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
