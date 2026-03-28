import { motion, useScroll, useTransform } from "framer-motion";
import { MonitorSmartphone, Pen, Pointer, FlipHorizontal, Mouse, ScanLine, Camera, Cpu } from "lucide-react";
import { useRef } from "react";
import lifestyleOffice from "@/assets/lifestyle-office.jpg";

const items = [
  { icon: Pen, name: "Touch Pen", desc: "Dual-tip magnetic stylus" },
  { icon: Pointer, name: "Pointer", desc: "7-section telescopic steel" },
  { icon: FlipHorizontal, name: "Page Turner", desc: "PPT remote with laser" },
  { icon: Mouse, name: "Smart Pen", desc: "Air mouse gesture control" },
];

const AccessoriesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="accessories" className="py-32 relative z-0" ref={sectionRef}>
      {/* Full-width image banner */}
      <div className="container mx-auto mb-20">
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9]">
          <motion.img
            src={lifestyleOffice}
            alt="Smart office setup"
            className="w-full h-full object-cover"
            style={{ y: imgY, scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 sm:p-12 max-w-lg">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-3">Accessories</p>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight">
              Complete your
              <br />
              <span className="text-muted-foreground">ecosystem.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Horizontal scroll cards */}
      <div className="overflow-x-clip">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-6 lg:px-[calc((100vw-1200px)/2+1.5rem)] pb-4"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="flex-shrink-0 w-56 group"
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
