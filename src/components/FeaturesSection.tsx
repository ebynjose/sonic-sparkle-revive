import { motion } from "framer-motion";
import { Monitor, Fingerprint, Wifi, Mic, BrainCircuit } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Fingerprint,
    title: "Multi-Touch",
    subtitle: "Touch, Write & Control — All at Once",
    description:
      "20-point touch lets multiple users write, draw, and interact simultaneously. Zero lag. Infinite possibilities.",
  },
  {
    icon: Monitor,
    title: "4K Ultra HD",
    subtitle: "See the Difference in Every Pixel",
    description:
      "Crystal-clear 4K resolution delivers stunning visuals that make every presentation immersive and lifelike.",
  },
  {
    icon: Wifi,
    title: "Wireless",
    subtitle: "No Cables. No Limits.",
    description:
      "Connect any device via Wi-Fi, Bluetooth, or screen mirroring. Instant collaboration, zero clutter.",
  },
  {
    icon: Mic,
    title: "Audio & Webcam",
    subtitle: "Hybrid Meetings, Perfected",
    description:
      "Built-in speakers and HD webcam turn remote calls into face-to-face experiences.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered",
    subtitle: "Smart, Fast & Intuitive",
    description:
      "AI gesture control, real-time annotations, and one-touch app access. Intelligence built in.",
  },
];

const FeaturesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="features" className="py-32">
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4"
        >
          Features
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-20"
        >
          Engineered for
          <br />
          <span className="text-muted-foreground">results.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left: feature list */}
          <div className="space-y-0">
            {features.map((f, i) => (
              <motion.button
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActive(i)}
                className={`w-full text-left py-5 border-b border-border transition-all duration-300 group flex items-center gap-4 ${
                  active === i ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <f.icon
                  size={20}
                  className={`transition-colors duration-300 ${
                    active === i ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <span className="text-lg font-display font-semibold">{f.title}</span>
                <span className="ml-auto text-xs font-mono text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Right: active feature detail */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:sticky lg:top-32"
          >
            <div className="p-8 sm:p-12 rounded-2xl bg-card border border-border glow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {(() => {
                  const Icon = features[active].icon;
                  return <Icon size={22} className="text-primary" />;
                })()}
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3">
                {features[active].subtitle}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {features[active].description}
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <a
                  href="#contact"
                  className="text-xs tracking-[0.2em] uppercase text-primary font-mono hover:underline underline-offset-4"
                >
                  Enquire Now →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
