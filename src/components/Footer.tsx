import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
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
              className="h-8 w-auto object-contain dark:brightness-100 brightness-0"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming collaboration with cutting-edge interactive display solutions for modern workspaces.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/sonichiveinteractive/", label: "Instagram" },
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61581750567015", label: "Facebook" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/sonichive-interactive/", label: "LinkedIn" },
                { Icon: Youtube, href: "https://www.youtube.com/@Sonichive-interactive", label: "YouTube" },
              ].map(({ Icon, href, label }, i) => (
                <a 
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <a
                href="https://www.tiktok.com/@sonichiveinteractive?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.79a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="space-y-5">
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground font-mono font-bold">Products</h4>
            <ul className="space-y-3">
              {[
                { label: 'Smart Board 55"', href: "/products/smart-board-55" },
                { label: 'Smart Board 65"', href: "/products/smart-board-65" },
                { label: 'Smart Board 75"', href: "/products/smart-board-75" },
                { label: 'Smart Board 86"', href: "/products/smart-board-86" },
                { label: 'Smart Board 98"', href: "/products/smart-board-98" },
                { label: "Accessories", href: "/products?category=accessory" },
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
                { label: "News & Blog", href: "/blog" },
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
                  Dubai Mall Metro Station Exit 2,<br />Ground Floor, Al Wasl Building - 2<br />Sheikh Zayed Rd, Dubai
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+971525162572" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    +971 52 516 2572
                  </a>
                  <a href="tel:+971585550099" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    +971 58 555 0099
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@sonichiveinteractive.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@sonichiveinteractive.com
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
