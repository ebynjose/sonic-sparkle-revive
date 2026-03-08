import { motion } from "framer-motion";
import { MonitorSmartphone, Pen, Pointer, FlipHorizontal, Mouse, ScanLine, Camera, Cpu } from "lucide-react";
import { useRef } from "react";

const items = [
  { icon: MonitorSmartphone, name: "Projector", desc: "One-click wireless casting" },
  { icon: Pen, name: "Touch Pen", desc: "Dual-tip magnetic stylus" },
  { icon: Pointer, name: "Pointer", desc: "7-section telescopic steel" },
  { icon: FlipHorizontal, name: "Page Turner", desc: "PPT remote with laser" },
  { icon: Mouse, name: "Smart Pen", desc: "Air mouse gesture control" },
  { icon: ScanLine, name: "Scanner", desc: "10MP document projection" },
  { icon: Camera, name: "Camera", desc: "13MP/48MP with 8-mic array" },
  { icon: Cpu, name: "OPS Box", desc: "Intel Core computing module" },
];

const AccessoriesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="accessories" className="py-32 relative z-0">
      <div className="container mx-auto mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4"
        >
          Accessories
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display font-bold tracking-tight"
        >
          Complete your
          <br />
          <span className="text-muted-foreground">ecosystem.</span>
        </motion.h2>
      </div>

      {/* Horizontal scroll - contained properly */}
      <div className="overflow-x-clip">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-6 lg:px-[calc((100vw-1200px)/2+1.5rem)] pb-4"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex-shrink-0 w-52 group"
            >
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-500 h-full">
                <item.icon
                  size={24}
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-6"
                />
                <h4 className="font-display font-semibold text-sm mb-1">{item.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
