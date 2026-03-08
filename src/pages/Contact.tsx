import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const branches = [
  { name: "UAE", city: "Dubai", role: "Head Office", x: 57.5, y: 42, isHQ: true },
  { name: "Qatar", city: "Doha", x: 56, y: 43.5, isHQ: false },
  { name: "Saudi Arabia", city: "Riyadh", x: 53, y: 43, isHQ: false },
  { name: "Bahrain", city: "Manama", x: 55.5, y: 41.5, isHQ: false },
  { name: "China", city: "Shenzhen", x: 76, y: 39, isHQ: false },
  { name: "India", city: "Mumbai", x: 67, y: 46, isHQ: false },
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

      {/* Map Section */}
      <section className="pb-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-border bg-card overflow-hidden p-6 sm:p-10"
          >
            {/* Stylized SVG Map */}
            <svg
              viewBox="0 0 100 70"
              className="w-full h-auto"
              style={{ minHeight: 300 }}
            >
              {/* Grid lines */}
              {Array.from({ length: 11 }).map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0" y1={i * 7} x2="100" y2={i * 7}
                  stroke="hsl(var(--border))" strokeWidth="0.1" opacity="0.5"
                />
              ))}
              {Array.from({ length: 11 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={i * 10} y1="0" x2={i * 10} y2="70"
                  stroke="hsl(var(--border))" strokeWidth="0.1" opacity="0.5"
                />
              ))}

              {/* Simplified continent outlines — Middle East & Asia region */}
              {/* Arabian Peninsula */}
              <path
                d="M48,36 L50,34 L54,33 L58,34 L60,36 L59,40 L58,44 L56,47 L54,48 L52,47 L50,46 L48,44 L47,40 Z"
                fill="hsl(var(--muted))"
                opacity="0.3"
                stroke="hsl(var(--border))"
                strokeWidth="0.15"
              />
              {/* India subcontinent */}
              <path
                d="M63,32 L68,30 L72,32 L72,38 L70,44 L68,50 L66,52 L64,48 L63,42 L62,36 Z"
                fill="hsl(var(--muted))"
                opacity="0.3"
                stroke="hsl(var(--border))"
                strokeWidth="0.15"
              />
              {/* China / East Asia */}
              <path
                d="M70,22 L78,20 L84,22 L86,28 L84,34 L80,38 L76,40 L72,38 L70,32 Z"
                fill="hsl(var(--muted))"
                opacity="0.3"
                stroke="hsl(var(--border))"
                strokeWidth="0.15"
              />
              {/* Africa east coast hint */}
              <path
                d="M44,38 L48,36 L47,40 L48,44 L46,50 L44,54 L42,50 L42,44 Z"
                fill="hsl(var(--muted))"
                opacity="0.2"
                stroke="hsl(var(--border))"
                strokeWidth="0.15"
              />

              {/* Connection lines between branches */}
              {branches.filter(b => !b.isHQ).map((b) => (
                <line
                  key={`line-${b.name}`}
                  x1={branches[0].x} y1={branches[0].y}
                  x2={b.x} y2={b.y}
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.12"
                  opacity="0.3"
                  strokeDasharray="0.5 0.5"
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
                  {/* Pulse ring for HQ */}
                  {b.isHQ && (
                    <>
                      <circle cx={b.x} cy={b.y} r="2.5" fill="hsl(var(--primary))" opacity="0.08">
                        <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx={b.x} cy={b.y} r="1.8" fill="hsl(var(--primary))" opacity="0.12">
                        <animate attributeName="r" values="1.8;3;1.8" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
                      </circle>
                    </>
                  )}

                  {/* Dot */}
                  <circle
                    cx={b.x} cy={b.y}
                    r={b.isHQ ? 1.2 : 0.7}
                    fill={b.isHQ ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
                    opacity={hoveredBranch === b.name || b.isHQ ? 1 : 0.6}
                  />

                  {/* Label */}
                  <text
                    x={b.x}
                    y={b.y - (b.isHQ ? 2.8 : 1.8)}
                    textAnchor="middle"
                    fill={b.isHQ ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
                    fontSize={b.isHQ ? "1.6" : "1.2"}
                    fontFamily="Space Mono, monospace"
                    opacity={hoveredBranch === b.name || b.isHQ ? 1 : 0.5}
                    fontWeight={b.isHQ ? "bold" : "normal"}
                  >
                    {b.isHQ ? "⬤ " : ""}{b.city}
                  </text>
                  {b.isHQ && (
                    <text
                      x={b.x}
                      y={b.y + 3}
                      textAnchor="middle"
                      fill="hsl(var(--primary))"
                      fontSize="1"
                      fontFamily="Space Mono, monospace"
                      letterSpacing="0.15"
                    >
                      HEAD OFFICE
                    </text>
                  )}
                  {hoveredBranch === b.name && !b.isHQ && (
                    <text
                      x={b.x}
                      y={b.y + 2.2}
                      textAnchor="middle"
                      fill="hsl(var(--muted-foreground))"
                      fontSize="0.9"
                      fontFamily="Space Mono, monospace"
                    >
                      {b.name}
                    </text>
                  )}
                </g>
              ))}
            </svg>

            {/* Legend */}
            <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Head Office</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-foreground opacity-60" />
                <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Branch Office</span>
              </div>
              <span className="text-xs font-mono text-muted-foreground/50 ml-auto">
                6 locations worldwide
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="pb-32">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* HQ Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4">Head Office</p>
                <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-2">
                  Dubai, UAE
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our global headquarters — the hub for innovation, strategy, and partnerships.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-0.5">Address</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Office 1205, Al Shafar Tower 1,<br />
                      Barsha Heights (TECOM),<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-0.5">Phone</p>
                    <p className="text-xs text-muted-foreground">+971 4 551 4700</p>
                    <p className="text-xs text-muted-foreground">+971 50 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-0.5">Email</p>
                    <p className="text-xs text-muted-foreground">info@sonichive.com</p>
                    <p className="text-xs text-muted-foreground">sales@sonichive.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-0.5">Working Hours</p>
                    <p className="text-xs text-muted-foreground">Sun – Thu: 9:00 AM – 6:00 PM</p>
                    <p className="text-xs text-muted-foreground">Fri – Sat: Closed</p>
                  </div>
                </div>
              </div>

              {/* Branch list */}
              <div className="pt-6 border-t border-border">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-mono mb-4">Other Branches</p>
                <div className="grid grid-cols-2 gap-3">
                  {branches.filter(b => !b.isHQ).map((b) => (
                    <div key={b.name} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                      <span>{b.city}, {b.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
