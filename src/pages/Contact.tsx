import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const branches = [
  { name: "UAE", city: "Dubai", role: "Head Office", x: 553, y: 215, isHQ: true },
  { name: "Qatar", city: "Doha", x: 545, y: 222, isHQ: false },
  { name: "Saudi Arabia", city: "Riyadh", x: 520, y: 218, isHQ: false },
  { name: "Bahrain", city: "Manama", x: 540, y: 210, isHQ: false },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });
      if (error) throw error;
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Global Presence Section */}
      <section className="pb-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-5">
            {/* HQ card — large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:row-span-2 relative rounded-2xl border border-primary/20 bg-card overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
              <div className="relative p-7 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono font-bold">Head Office</span>
                </div>
                <h3 className="text-3xl font-display font-bold mb-1">Dubai</h3>
                <p className="text-sm text-muted-foreground mb-6">United Arab Emirates</p>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-primary flex-shrink-0" />
                    <p className="text-xs text-muted-foreground">Dubai Mall Metro Station Exit 2, Ground Floor, Al Wasl Building - 2, Sheikh Zayed Rd, Dubai</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-primary flex-shrink-0" />
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>+971 52 516 2572</p>
                      <p>+971 58 555 0099</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={14} className="text-primary flex-shrink-0" />
                    <p className="text-xs text-muted-foreground">info@sonichiveinteractive.com</p>
                  </div>
                </div>

                {/* Decorative large number */}
                <span className="absolute bottom-4 right-6 text-[7rem] font-display font-extrabold text-foreground/[0.03] leading-none select-none">
                  HQ
                </span>
              </div>
            </motion.div>

            {/* Branch cards */}
            {branches.filter(b => !b.isHQ).map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * (i + 1) }}
                onMouseEnter={() => setHoveredBranch(b.name)}
                onMouseLeave={() => setHoveredBranch(null)}
                className="relative rounded-2xl border border-border bg-card hover:border-primary/20 transition-all duration-500 overflow-hidden group cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 flex items-center gap-5">
                  {/* Numeric badge */}
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                    <span className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-base mb-0.5">{b.city}</h4>
                    <p className="text-xs text-muted-foreground">{b.name}</p>
                  </div>
                  {/* Dot indicator */}
                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${hoveredBranch === b.name ? "bg-primary" : "bg-muted-foreground/30"}`} />
                </div>
              </motion.div>
            ))}

            {/* Summary card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="rounded-2xl border border-border bg-gradient-to-br from-muted/50 to-card p-6 flex items-center justify-between"
            >
              <div>
               <p className="text-3xl font-display font-bold">4</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono mt-1">Global Offices</p>
              </div>
              <div className="flex -space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full border-2 border-card ${i === 0 ? "bg-primary" : "bg-muted-foreground/30"}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
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
                  lines: ["Dubai Mall Metro Station Exit 2,", "Ground Floor, Al Wasl Building - 2", "Sheikh Zayed Rd, Dubai"],
                },
                {
                  icon: Phone,
                  label: "Phone",
                  lines: ["+971 52 516 2572", "+971 58 555 0099"],
                },
                {
                  icon: Mail,
                  label: "Email",
                  lines: ["info@sonichiveinteractive.com"],
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
              <Button type="submit" size="lg" className="w-full gap-2 mt-2" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <ArrowRight size={16} />}
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="w-full gap-2 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366] hover:border-[#25D366]/50"
                asChild
              >
                <a href="https://wa.me/971525162572" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
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
