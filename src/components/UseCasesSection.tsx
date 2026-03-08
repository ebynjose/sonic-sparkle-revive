import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Engage students with interactive lessons, real-time collaboration, and immersive visual content.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Briefcase,
    title: "Business",
    description: "Elevate presentations, brainstorms, and team meetings with seamless hybrid collaboration tools.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Palette,
    title: "Design & Creativity",
    description: "Sketch, edit, and ideate like never before with multi-touch precision and 4K clarity.",
    color: "from-primary/20 to-accent/5",
  },
];

const UseCasesSection = () => {
  return (
    <section id="usecases" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Use Cases</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Built for <span className="gradient-text">Every Industry</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden glass border-glow hover:bg-secondary/30 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${uc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-8">
                <uc.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold font-display mb-3">{uc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{uc.description}</p>
                <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-primary">
                  See Pricing
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
