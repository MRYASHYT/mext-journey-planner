const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-sm font-semibold mb-2">MASTEN<span className="text-accent">HQ</span></p>
        <p className="text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} MASTENHQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
