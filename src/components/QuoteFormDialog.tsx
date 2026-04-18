import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface QuoteFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteFormDialog = ({ open, onOpenChange }: QuoteFormDialogProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });
      if (error) throw error;
      if (typeof (window as any).gtag_report_conversion === "function") {
        (window as any).gtag_report_conversion();
      }
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
      onOpenChange(false);
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-[95vw] max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-7 sm:p-9 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-display font-bold mb-1">Get a Quote</h3>
            <p className="text-xs text-muted-foreground mb-7">
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
                rows={4}
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
      )}
    </AnimatePresence>
  );
};

export default QuoteFormDialog;
