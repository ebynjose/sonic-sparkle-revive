import { motion, useScroll, useTransform } from "framer-motion";
import { Monitor, Fingerprint, Wifi, Mic, BrainCircuit } from "lucide-react";
import { useState, useRef } from "react";
import detailTouch from "@/assets/detail-touch.jpg";
import lifestyleBoardroom from "@/assets/lifestyle-boardroom.jpg";
import lifestyleOffice from "@/assets/lifestyle-office.jpg";
import lifestyleCreative from "@/assets/lifestyle-creative.jpg";
import lifestyleMeeting from "@/assets/lifestyle-meeting.jpg";

const features = [
  {
    icon: Monitor,
    title: "4K Ultra HD",
    subtitle: "See the Difference in Every Pixel",
    description: "Crystal-clear 4K resolution delivers stunning visuals that make every presentation immersive and lifelike.",
    image: lifestyleBoardroom,
  },
  {
    icon: Fingerprint,
    title: "Multi-Touch",
    subtitle: "Touch, Write & Control — All at Once",
    description: "40-point infrared touch lets 5–6 users write, draw, and interact simultaneously. Zero lag. Infinite possibilities.",
    image: detailTouch,
  },
  {
    icon: Wifi,
    title: "Wireless",
    subtitle: "No Cables. No Limits.",
    description: "Connect any device via Wi-Fi, Bluetooth, or screen mirroring. Instant collaboration, zero clutter.",
    image: lifestyleOffice,
  },
  {
    icon: Mic,
    title: "Audio & Webcam",
    subtitle: "Hybrid Meetings, Perfected",
    description: "Built-in speakers and HD webcam turn remote calls into face-to-face experiences.",
    image: lifestyleMeeting,
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered",
    subtitle: "Smart, Fast & Intuitive",
    description: "AI gesture control, real-time annotations, and one-touch app access. Intelligence built in.",
    image: lifestyleCreative,
  },
];

const FeaturesSection = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgParallax = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="features" className="py-32" ref={sectionRef}>
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

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
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
                  className={`transition-colors duration-300 flex-shrink-0 ${
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

          {/* Right: active feature detail with image */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 relative z-0"
          >
            {/* Feature image */}
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[16/10]">
              <motion.img
                src={features[active].image}
                alt={features[active].title}
                className="w-full h-full object-cover"
                style={{ y: imgParallax }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary font-mono">
                  {String(active + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Feature text */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-3">
                {features[active].subtitle}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {features[active].description}
              </p>
              <div className="mt-6 pt-4 border-t border-border">
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
