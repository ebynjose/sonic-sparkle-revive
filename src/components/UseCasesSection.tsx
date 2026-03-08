import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, Palette } from "lucide-react";
import { useRef } from "react";
import lifestyleClassroom from "@/assets/lifestyle-classroom.jpg";
import lifestyleBoardroom from "@/assets/lifestyle-boardroom.jpg";
import lifestyleCreative from "@/assets/lifestyle-creative.jpg";

const cases = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Interactive lessons. Real-time collaboration. Students engaged like never before.",
    image: lifestyleClassroom,
    num: "01",
  },
  {
    icon: Briefcase,
    title: "Business",
    description: "Elevate presentations, brainstorms, and hybrid meetings with seamless tools.",
    image: lifestyleBoardroom,
    num: "02",
  },
  {
    icon: Palette,
    title: "Creative",
    description: "Sketch, annotate, and ideate with multi-touch precision and 4K clarity.",
    image: lifestyleCreative,
    num: "03",
  },
];

const UseCasesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const parallax1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="industries" className="py-32" ref={ref}>
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

        <div className="space-y-24">
          {cases.map((c, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${isEven ? "" : "lg:direction-rtl"}`}
              >
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${isEven ? "" : "lg:order-2"}`}>
                  <motion.img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover"
                    style={{ y: i === 0 ? parallax1 : parallax2 }}
                    initial={{ scale: 1.15 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-mono text-primary/80 bg-background/40 backdrop-blur-sm px-3 py-1 rounded-full">
                      {c.num}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className={`${isEven ? "" : "lg:order-1"}`}>
                  <c.icon size={32} className="text-primary mb-6" />
                  <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base mb-6 max-w-md">
                    {c.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex text-xs tracking-[0.15em] uppercase text-primary font-mono hover:underline underline-offset-4"
                  >
                    See Pricing →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
