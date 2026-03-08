import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, Lightbulb, Users } from "lucide-react";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import lifestyleBoardroom from "@/assets/lifestyle-boardroom.jpg";
import lifestyleOffice from "@/assets/lifestyle-office.jpg";
import lifestyleCreative from "@/assets/lifestyle-creative.jpg";

const values = [
  { icon: Target, title: "Precision", description: "Every product is engineered for accuracy — from touch responsiveness to display clarity." },
  { icon: Eye, title: "Vision", description: "We see a world where technology removes barriers to collaboration, not creates them." },
  { icon: Lightbulb, title: "Innovation", description: "Continuous R&D keeps us at the cutting edge of interactive display technology." },
  { icon: Users, title: "Partnership", description: "We work closely with clients to deliver tailored solutions for every environment." },
];

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(heroScroll, [0, 1], [0, 120]);
  const heroTextY = useTransform(heroScroll, [0, 1], [0, -40]);

  const mosaicRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mosaicScroll } = useScroll({ target: mosaicRef, offset: ["start end", "end start"] });
  const img1Y = useTransform(mosaicScroll, [0, 1], [60, -60]);
  const img2Y = useTransform(mosaicScroll, [0, 1], [30, -30]);
  const img3Y = useTransform(mosaicScroll, [0, 1], [80, -40]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with parallax image */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <img src={lifestyleBoardroom} alt="" className="w-full h-full object-cover opacity-30" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

        <motion.div className="container mx-auto relative z-10 pb-20" style={{ y: heroTextY }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 max-w-4xl"
          >
            Redefining how the world{" "}
            <span className="gradient-text">collaborates.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-xl text-base leading-relaxed"
          >
            SonicHive is a global provider of interactive smart display technology. 
            For over a decade, we've been helping businesses, schools, and creative teams 
            transform their spaces with intelligent, intuitive hardware.
          </motion.p>
        </motion.div>
      </section>

      {/* Image mosaic + story */}
      <section ref={mosaicRef} className="py-32 border-t border-border">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
            {/* Mosaic */}
            <div className="grid grid-cols-2 gap-4 relative">
              <motion.div className="rounded-2xl overflow-hidden aspect-[3/4]" style={{ y: img1Y }}>
                <img src={lifestyleOffice} alt="Office" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div className="rounded-2xl overflow-hidden aspect-[3/4] mt-16" style={{ y: img2Y }}>
                <img src={lifestyleCreative} alt="Creative" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div className="rounded-2xl overflow-hidden aspect-[2/1] col-span-2 -mt-8" style={{ y: img3Y }}>
                <img src={lifestyleBoardroom} alt="Boardroom" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Story text */}
            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-6">Our Story</h2>
                <p className="text-secondary-foreground leading-relaxed mb-6">
                  Founded with a simple belief: technology should bring people together, not isolate them. 
                  What started as a small team building interactive displays has grown into a global operation 
                  serving 500+ clients across 30+ countries.
                </p>
                <p className="text-secondary-foreground leading-relaxed mb-10">
                  Our Smart Board lineup represents years of R&D — combining 4K displays, AI-powered software, 
                  and multi-touch precision into devices that feel natural from the first interaction.
                </p>

                <div className="border-t border-border pt-10">
                  <h2 className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-6">Our Mission</h2>
                  <p className="text-2xl sm:text-3xl font-display font-bold leading-snug">
                    To make every room smarter, every meeting more productive, and every lesson more engaging —
                    <span className="text-muted-foreground"> through technology that simply works.</span>
                  </p>
                </div>
              </motion.div>
            </div>
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
                initial={{ opacity: 0, y: 30 }}
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
