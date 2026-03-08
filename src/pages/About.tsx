import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every product is engineered for accuracy — from touch responsiveness to display clarity.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "We see a world where technology removes barriers to collaboration, not creates them.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuous R&D keeps us at the cutting edge of interactive display technology.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work closely with clients to deliver tailored solutions for every environment.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-bold tracking-tight mb-8 max-w-3xl"
          >
            Redefining how the
            <br />
            world <span className="gradient-text">collaborates.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl text-base leading-relaxed"
          >
            SonicHive is a global provider of interactive smart display technology. 
            For over a decade, we've been helping businesses, schools, and creative teams 
            transform their spaces with intelligent, intuitive hardware.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 border-y border-border">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-6">Our Story</h2>
              <p className="text-secondary-foreground leading-relaxed mb-4">
                Founded with a simple belief: technology should bring people together, not isolate them. 
                What started as a small team building interactive displays has grown into a global operation 
                serving 500+ clients across 30+ countries.
              </p>
              <p className="text-secondary-foreground leading-relaxed">
                Our Smart Board lineup represents years of R&D — combining 4K displays, AI-powered software, 
                and multi-touch precision into devices that feel natural from the first interaction. 
                We don't just sell hardware — we deliver solutions that measurably improve how teams work, 
                teach, and create.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-6">Our Mission</h2>
              <p className="text-2xl sm:text-3xl font-display font-bold leading-snug">
                To make every room smarter, every meeting more productive, and every lesson more engaging —
                <span className="text-muted-foreground"> through technology that simply works.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-12"
          >
            Our Values
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 group"
              >
                <v.icon
                  size={24}
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-6"
                />
                <h3 className="font-display font-bold text-base mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
