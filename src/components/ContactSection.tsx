import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch shortly.");
    setForm({ name: "", email: "", phone: "", location: "" });
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4">
            Get Started
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-4">
            Let's talk.
          </h2>
          <p className="text-muted-foreground text-sm">
            Ready to transform your workspace? Reach out and we'll tailor a solution.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
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
          <Button
            type="submit"
            size="lg"
            className="w-full gap-2 mt-2"
          >
            Submit Enquiry <ArrowRight size={16} />
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
