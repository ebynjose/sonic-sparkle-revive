import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const branches = [
  { name: "UAE", city: "Dubai", role: "Head Office", x: 553, y: 215, isHQ: true },
  { name: "Qatar", city: "Doha", x: 545, y: 222, isHQ: false },
  { name: "Saudi Arabia", city: "Riyadh", x: 520, y: 218, isHQ: false },
  { name: "Bahrain", city: "Manama", x: 540, y: 210, isHQ: false },
  { name: "China", city: "Shenzhen", x: 735, y: 195, isHQ: false },
  { name: "India", city: "Mumbai", x: 640, y: 230, isHQ: false },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-bold tracking-tight mb-4"
          >
            Contact <span className="text-muted-foreground">us.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-lg"
          >
            Reach out from anywhere — we're present across the Middle East, Asia, and beyond.
          </motion.p>
        </div>
      </section>

      {/* Compact Map Section */}
      <section className="pb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-border bg-card overflow-hidden p-4 sm:p-6"
          >
            <svg viewBox="0 0 900 400" className="w-full h-auto" style={{ maxHeight: 320 }}>
              {/* World map simplified paths */}
              <g fill="hsl(var(--muted))" opacity="0.25" stroke="hsl(var(--border))" strokeWidth="0.5">
                {/* North America */}
                <path d="M60,80 L120,55 L180,50 L220,60 L240,80 L230,120 L220,150 L200,170 L170,180 L150,175 L130,160 L100,170 L80,160 L60,130 L50,100 Z" />
                {/* Central America */}
                <path d="M150,175 L170,180 L175,200 L165,215 L155,210 L150,195 Z" />
                {/* South America */}
                <path d="M165,215 L200,210 L230,230 L240,270 L235,310 L220,350 L200,370 L180,360 L170,320 L160,280 L155,240 Z" />
                {/* Europe */}
                <path d="M380,55 L420,50 L460,55 L480,70 L490,90 L480,110 L460,120 L440,115 L420,105 L400,100 L385,90 L375,75 Z" />
                {/* Africa */}
                <path d="M400,150 L440,140 L480,150 L510,180 L520,220 L515,270 L500,310 L480,340 L450,350 L420,330 L400,290 L390,240 L385,190 Z" />
                {/* Middle East */}
                <path d="M480,120 L520,110 L560,120 L570,150 L565,180 L550,200 L530,210 L510,200 L490,180 L480,150 Z" />
                {/* India */}
                <path d="M600,140 L640,130 L670,150 L670,190 L660,230 L640,260 L620,250 L610,220 L600,180 Z" />
                {/* Russia/Central Asia */}
                <path d="M460,55 L520,40 L600,30 L680,35 L740,45 L780,55 L760,80 L720,90 L670,85 L620,80 L570,75 L520,70 L490,65 Z" />
                {/* China/East Asia */}
                <path d="M680,80 L740,75 L780,90 L790,120 L780,160 L760,180 L730,190 L700,185 L680,165 L670,130 L670,100 Z" />
                {/* Southeast Asia */}
                <path d="M700,190 L730,195 L750,210 L740,240 L720,250 L700,240 L690,220 Z" />
                {/* Australia */}
                <path d="M730,300 L780,285 L830,290 L850,310 L840,340 L810,355 L770,350 L740,335 L730,315 Z" />
                {/* Greenland */}
                <path d="M260,20 L300,15 L330,25 L325,50 L300,55 L275,45 Z" />
                {/* UK/Ireland */}
                <path d="M370,60 L385,55 L390,70 L380,80 L370,75 Z" />
                {/* Japan */}
                <path d="M790,110 L800,100 L810,110 L805,130 L795,135 Z" />
              </g>

              {/* Connection lines from HQ to branches */}
              {branches.filter(b => !b.isHQ).map((b) => (
                <line
                  key={`line-${b.name}`}
                  x1={branches[0].x} y1={branches[0].y}
                  x2={b.x} y2={b.y}
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.6"
                  opacity="0.25"
                  strokeDasharray="4 3"
                />
              ))}

              {/* Branch markers */}
              {branches.map((b) => (
                <g
                  key={b.name}
                  onMouseEnter={() => setHoveredBranch(b.name)}
                  onMouseLeave={() => setHoveredBranch(null)}
                  className="cursor-pointer"
                >
                  {b.isHQ && (
                    <>
                      <circle cx={b.x} cy={b.y} r="12" fill="hsl(var(--primary))" opacity="0.06">
                        <animate attributeName="r" values="12;20;12" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.1;0;0.1" dur="3s" repeatCount="indefinite" />
                      </circle>
                    </>
                  )}
                  <circle
                    cx={b.x} cy={b.y}
                    r={b.isHQ ? 5 : 3.5}
                    fill={b.isHQ ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
                    opacity={hoveredBranch === b.name || b.isHQ ? 1 : 0.5}
                  />
                  <text
                    x={b.x}
                    y={b.y - (b.isHQ ? 12 : 8)}
                    textAnchor="middle"
                    fill={b.isHQ ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
                    fontSize={b.isHQ ? "10" : "8"}
                    fontFamily="Space Mono, monospace"
                    opacity={hoveredBranch === b.name || b.isHQ ? 1 : 0.4}
                    fontWeight={b.isHQ ? "bold" : "normal"}
                  >
                    {b.city}
                  </text>
                  {b.isHQ && (
                    <text
                      x={b.x} y={b.y + 15}
                      textAnchor="middle"
                      fill="hsl(var(--primary))"
                      fontSize="6"
                      fontFamily="Space Mono, monospace"
                      letterSpacing="2"
                    >
                      HQ
                    </text>
                  )}
                </g>
              ))}
            </svg>

            {/* Inline legend */}
            <div className="flex flex-wrap items-center gap-5 mt-2 pt-3 border-t border-border">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase">Head Office</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-foreground opacity-50" />
                <span className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase">Branch</span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground/40 ml-auto">6 locations</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HQ Details — full width row */}
      <section className="pb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4">Head Office</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-8">
              Dubai, <span className="text-muted-foreground">UAE</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  lines: ["Office 1205, Al Shafar Tower 1", "Barsha Heights (TECOM)", "Dubai, UAE"],
                },
                {
                  icon: Phone,
                  label: "Phone",
                  lines: ["+971 4 551 4700", "+971 50 123 4567"],
                },
                {
                  icon: Mail,
                  label: "Email",
                  lines: ["info@sonichive.com", "sales@sonichive.com"],
                },
                {
                  icon: Clock,
                  label: "Working Hours",
                  lines: ["Mon – Sat: 9:30 AM – 7:00 PM", "Sunday: Closed"],
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle gradient accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-primary font-mono mb-3">{item.label}</p>
                    <div className="space-y-1.5">
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Branch list inline */}
            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-6">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-mono">Other Branches:</p>
              {branches.filter(b => !b.isHQ).map((b) => (
                <div key={b.name} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                  <span>{b.city}, {b.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Form — full width below */}
      <section className="pb-32">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-8 sm:p-10"
          >
            <h3 className="text-xl font-display font-bold mb-1">Send us a message</h3>
            <p className="text-xs text-muted-foreground mb-8">
              Fill out the form below and our team will respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary rounded-lg h-12 text-sm placeholder:text-muted-foreground/60"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary rounded-lg h-12 text-sm placeholder:text-muted-foreground/60"
                />
              </div>
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-background border-border focus:border-primary rounded-lg h-12 text-sm placeholder:text-muted-foreground/60"
              />
              <textarea
                placeholder="Your message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="w-full rounded-lg border border-border bg-background px-3 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 resize-none"
              />
              <Button type="submit" size="lg" className="w-full gap-2 mt-2">
                Send Message <ArrowRight size={16} />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
