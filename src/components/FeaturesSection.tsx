import { motion } from "framer-motion";
import { Monitor, Fingerprint, Wifi, Mic, BrainCircuit, ArrowRight } from "lucide-react";
import lifestyleBoardroom from "@/assets/lifestyle-boardroom.jpg";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono italic text-primary text-sm uppercase tracking-widest mb-3">
              Capabilities
            </p>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-none">
              Engineered for
              <br />
              <span className="text-primary">Results.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xs"
          >
            <p className="text-muted-foreground font-mono italic text-sm leading-relaxed">
              Next-generation interactive displays built to eliminate barriers between your ideas and your team.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-fr">
          {/* Primary: 4K Ultra HD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative md:col-span-8 md:row-span-2 overflow-hidden rounded-3xl bg-zinc-900 flex flex-col justify-end p-8 md:p-10 min-h-[400px] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="absolute inset-0 opacity-60 group-hover:scale-105 transition-transform duration-700">
              <img
                src={lifestyleBoardroom}
                alt="4K Ultra HD smart board in boardroom"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            <div className="relative">
              <div className="inline-flex items-center mb-4">
                <span className="font-mono text-xs border border-primary/50 px-3 py-1 rounded-full text-primary bg-primary/10 backdrop-blur-md">
                  01 — PRIMARY
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
                4K Ultra HD
              </h3>
              <p className="text-zinc-200 font-mono max-w-md text-sm md:text-base">
                See the Difference in Every Pixel. Crystal-clear resolution for immersive presentations.
              </p>
            </div>
          </motion.div>

          {/* Multi-Touch — frosted glass */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="group relative md:col-span-4 overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl p-8 transition-all duration-300 hover:border-primary/40 flex flex-col"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono text-muted-foreground text-xs">02</span>
              <div className="w-10 h-10 rounded-xl bg-secondary/60 backdrop-blur-md border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Fingerprint className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-auto">
              <h4 className="text-2xl font-display font-bold mb-2">Multi-Touch</h4>
              <p className="text-muted-foreground text-sm font-mono">Touch, Write & Control.</p>
            </div>
          </motion.div>

          {/* Wireless — primary filled */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative md:col-span-4 overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 flex flex-col"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono text-primary-foreground/70 text-xs">03</span>
              <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center">
                <Wifi className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-auto">
              <h4 className="text-2xl font-display font-bold mb-2">Wireless</h4>
              <p className="text-primary-foreground/80 text-sm font-mono">No Cables. No Limits.</p>
            </div>
          </motion.div>

          {/* Audio & Webcam — frosted glass */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-4 overflow-hidden rounded-3xl bg-secondary/50 backdrop-blur-xl border border-border p-8 flex flex-col justify-between group transition-all duration-300 hover:bg-card/80"
          >
            <div className="flex justify-between">
              <span className="font-mono text-muted-foreground text-xs">04</span>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-display font-bold mb-1">Audio & Webcam</h4>
              <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider leading-relaxed">
                Hybrid Meetings, Perfected.
              </p>
            </div>
          </motion.div>

          {/* AI-Powered — wide dashed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-8 overflow-hidden rounded-3xl border-2 border-dashed border-border p-8 flex flex-col md:flex-row items-center gap-6 group hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-foreground flex items-center justify-center text-background rotate-3 group-hover:rotate-0 transition-transform">
              <BrainCircuit className="w-8 h-8" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <span className="font-mono text-muted-foreground text-xs">05</span>
                <h4 className="text-xl font-display font-bold">AI-Powered</h4>
              </div>
              <p className="text-muted-foreground font-mono text-sm italic">
                Smart, Fast & Intuitive features that adapt to your work style automatically.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
