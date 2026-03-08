import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { toast } from "sonner";
import lifestyleMeeting from "@/assets/lifestyle-meeting.jpg";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "" });
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch shortly.");
    setForm({ name: "", email: "", phone: "", location: "" });
  };

  return (
    <section id="contact" className="py-32" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/5] hidden lg:block"
          >
            <motion.img
              src={lifestyleMeeting}
              alt="Team collaboration"
              className="w-full h-full object-cover"
              style={{ y: imgY, scale: 1.1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs font-mono text-primary tracking-[0.2em] uppercase mb-2">Trusted by</p>
              <p className="text-2xl font-display font-bold">500+ teams worldwide</p>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4">Get Started</p>
            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-4">Let's talk.</h2>
            <p className="text-muted-foreground text-sm mb-10">
              Ready to transform your workspace? Reach out and we'll tailor a solution.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary rounded-lg h-12 text-sm placeholder:text-muted-foreground/60"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary rounded-lg h-12 text-sm placeholder:text-muted-foreground/60"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-card border-border focus:border-primary rounded-lg h-12 text-sm placeholder:text-muted-foreground/60"
                />
                <Input
                  placeholder="Location"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="bg-card border-border focus:border-primary rounded-lg h-12 text-sm placeholder:text-muted-foreground/60"
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2 mt-2">
                Submit Enquiry <ArrowRight size={16} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
