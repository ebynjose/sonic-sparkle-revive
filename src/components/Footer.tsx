import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <img 
              src="/logo-sonichive.png" 
              alt="SonicHive Interactive Logo" 
              className="h-24" 
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming collaboration with cutting-edge interactive display solutions for modern workspaces.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div className="space-y-5">
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground font-mono font-bold">Products</h4>
            <ul className="space-y-3">
              {[
                { label: "Interactive Displays", href: "/products" },
                { label: "Smartboards", href: "/products" },
                { label: "Video Conferencing", href: "/products" },
                { label: "Digital Signage", href: "/products" },
                { label: "Accessories", href: "/products" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-5">
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground font-mono font-bold">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/about" },
                { label: "Partners", href: "/about" },
                { label: "News & Blog", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-5">
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground font-mono font-bold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 Innovation Drive<br />Tech District, CA 94105
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@sonichive.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@sonichive.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} SonicHive. All rights reserved.
            </p>
            <div className="flex gap-8">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
