import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Rules", href: "#rules" },
  { label: "Living", href: "#living" },
  { label: "Apply", href: "https://forms.gle/PqMzbFCpnkUFLyXo8", external: true },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-card/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-heading text-lg font-bold tracking-tight transition-colors duration-300">
          <span className={scrolled ? 'text-foreground' : 'text-white'}>MASTEN</span>
          <span className="text-accent">HQ</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${scrolled ? 'text-muted-foreground' : 'text-white/80 hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setOpen(!open)}
            className={`p-2 ${scrolled ? 'text-foreground' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-accent py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
