import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 10, suffix: "+", label: "Years Experience" },
  { target: 500, suffix: "+", label: "Global Clients" },
  { target: 30, suffix: "+", label: "Countries" },
  { target: 50, suffix: "+", label: "Patents" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-display font-bold text-foreground">
      {count}
      <span className="text-primary">{suffix}</span>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 border-y border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <Counter target={s.target} suffix={s.suffix} />
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-2 font-mono">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
