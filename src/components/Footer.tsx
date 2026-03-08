const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm font-bold tracking-tight">
          <span className="gradient-text">S</span>ONICHIVE
        </span>
        <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-mono">
          © {new Date().getFullYear()} SonicHive. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors font-mono">
            Privacy
          </a>
          <a href="#" className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors font-mono">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
