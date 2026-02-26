import { Mail, Instagram, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contacts = [
    { icon: Mail, label: "Email", value: "info@mastenhq.page", link: "mailto:info@mastenhq.page" },
    { icon: Instagram, label: "Instagram", value: "@mastenhq", link: "https://instagram.com/mastenhq" },
    { icon: MapPin, label: "Location", value: "Delhi, India" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4 max-w-4xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-body block mb-3">連絡 · Contact</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {contacts.map((item, i) => (
            item.link ? (
              <a
                key={item.label}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex flex-col items-center text-center bg-card border border-border rounded-lg p-6 hover:border-accent/30 hover:shadow-[var(--shadow-soft)] transition-all duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'} cursor-pointer group hover:-translate-y-1`}
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <item.icon className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">{item.label}</p>
                <p className="text-sm md:text-base text-foreground font-medium">{item.value}</p>
              </a>
            ) : (
              <div
                key={item.label}
                className={`flex flex-col items-center text-center bg-card border border-border rounded-lg p-6 transition-all duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <item.icon className="w-6 h-6 text-accent mb-4" />
                <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">{item.label}</p>
                <p className="text-sm md:text-base text-foreground font-medium">{item.value}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
