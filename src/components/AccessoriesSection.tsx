import { motion } from "framer-motion";
import { MonitorSmartphone, Pen, Pointer, FlipHorizontal, Mouse, ScanLine, Camera, Cpu } from "lucide-react";

const accessories = [
  { icon: MonitorSmartphone, name: "Projector", desc: "Wireless screen projector — one-click cast from any device." },
  { icon: Pen, name: "Touch Pen", desc: "Smooth dual-tip stylus with magnetic adsorption for the board." },
  { icon: Pointer, name: "Telescopic Pointer", desc: "7-section adjustable stainless steel pointer, light and strong." },
  { icon: FlipHorizontal, name: "Page Turning Pen", desc: "PPT remote with red laser, volume control, and navigation." },
  { icon: Mouse, name: "Smart Pen", desc: "Air mouse with PPT control — move the cursor with your wrist." },
  { icon: ScanLine, name: "Scanner", desc: "10MP physical projection scanner — ultra-clear color reproduction." },
  { icon: Camera, name: "Camera", desc: "Built-in 13MP/48MP camera with 8-array microphone support." },
  { icon: Cpu, name: "OPS Box", desc: "Intel Core computing module — powerful 64-bit performance." },
];

const AccessoriesSection = () => {
  return (
    <section id="accessories" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Accessories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Complete Your <span className="gradient-text">Setup</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every accessory is precision-engineered to enhance your interactive experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {accessories.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-5 rounded-xl glass hover:border-glow transition-all duration-500 cursor-pointer"
            >
              <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-sm font-display mb-1">{item.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
