import { motion } from "framer-motion";
import iconTouch from "@/assets/icon-touch.png";
import icon4k from "@/assets/icon-4k.png";
import iconWireless from "@/assets/icon-wireless.png";
import iconAudio from "@/assets/icon-audio.png";
import iconAi from "@/assets/icon-ai.png";

const features = [
  {
    icon: iconTouch,
    title: "Touch, Write & Control",
    description: "Multi-touch technology lets multiple users write, draw, and interact simultaneously with zero lag.",
  },
  {
    icon: icon4k,
    title: "4K Ultra HD Display",
    description: "Stunning 4K UHD resolution delivers crisp, vivid visuals for every presentation and lesson.",
  },
  {
    icon: iconWireless,
    title: "Wireless Connectivity",
    description: "Connect via Wi-Fi, Bluetooth, or screen mirroring — no cables, instant collaboration.",
  },
  {
    icon: iconAudio,
    title: "Built-in Audio & Webcam",
    description: "Powerful speakers and integrated webcam for flawless hybrid meetings and remote collaboration.",
  },
  {
    icon: iconAi,
    title: "AI-Powered Intelligence",
    description: "Gesture control, real-time annotations, and one-touch access to apps — smart tech made simple.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Built for <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every feature is designed to deliver results — from crystal-clear visuals to seamless collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl glass border-glow hover:bg-secondary/50 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-display">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
