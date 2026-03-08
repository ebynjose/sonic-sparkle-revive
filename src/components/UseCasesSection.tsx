import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Palette } from "lucide-react";

const cases = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Interactive lessons. Real-time collaboration. Students engaged like never before.",
    num: "01",
  },
  {
    icon: Briefcase,
    title: "Business",
    description: "Elevate presentations, brainstorms, and hybrid meetings with seamless tools.",
    num: "02",
  },
  {
    icon: Palette,
    title: "Creative",
    description: "Sketch, annotate, and ideate with multi-touch precision and 4K clarity.",
    num: "03",
  },
];

const UseCasesSection = () => {
  return (
    <section id="industries" className="py-32">
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4"
        >
          Industries
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-20"
        >
          Built for every
          <br />
          <span className="text-muted-foreground">environment.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card p-8 sm:p-10 group hover:bg-secondary/50 transition-all duration-500"
            >
              <span className="text-xs font-mono text-muted-foreground">{c.num}</span>
              <c.icon
                size={28}
                className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mt-6 mb-6"
              />
              <h3 className="text-xl font-display font-bold mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
              <a
                href="#contact"
                className="inline-block mt-6 text-xs tracking-[0.15em] uppercase text-primary font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
