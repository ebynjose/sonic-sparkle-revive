import { motion, useScroll, useTransform } from "framer-motion";
import { Pen, Pointer, FlipHorizontal, Mouse } from "lucide-react";
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
    <section id="accessories" className="py-16 md:py-20 relative z-0" ref={sectionRef}>
      {/* Full-width image banner */}
      <div className="container mx-auto mb-20">
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9]">
          <motion.img
            src={lifestyleOffice}
            alt="Smart office setup"
            className="w-full h-full object-cover"
            style={{ y: imgY, scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-background/40" />
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

      {/* Responsive grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group"
            >
              <div className="p-8 sm:p-10 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 h-full">
                <item.icon
                  size={32}
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-8"
                />
                <h4 className="font-display font-semibold text-lg mb-2">{item.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
