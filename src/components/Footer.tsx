const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Delhi Global Scholarship Residency. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
