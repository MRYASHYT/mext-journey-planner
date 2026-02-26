import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-accent text-xs tracking-[0.4em] uppercase font-body block mb-3">連絡 · Contact</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="flex flex-col items-center text-center bg-card border border-border rounded-lg p-6">
            <Mail className="w-5 h-5 text-accent mb-3" />
            <p className="text-xs text-muted-foreground mb-1">Email</p>
            <p className="text-sm text-foreground font-medium">info@dgsr.in</p>
          </div>
          <div className="flex flex-col items-center text-center bg-card border border-border rounded-lg p-6">
            <Phone className="w-5 h-5 text-accent mb-3" />
            <p className="text-xs text-muted-foreground mb-1">Phone</p>
            <p className="text-sm text-foreground font-medium">+91 98XX XXX XXX</p>
          </div>
          <div className="flex flex-col items-center text-center bg-card border border-border rounded-lg p-6">
            <MapPin className="w-5 h-5 text-accent mb-3" />
            <p className="text-xs text-muted-foreground mb-1">Location</p>
            <p className="text-sm text-foreground font-medium">Delhi, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
