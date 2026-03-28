import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import heroImg from "@/assets/hero-smartboard.jpg";
import detailTouch from "@/assets/detail-touch.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[110vh] flex flex-col justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

      <motion.div className="container mx-auto relative z-10 pt-32 pb-20" style={{ y: textY, opacity }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-8"
        >
          Interactive Smart Board
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-7xl lg:text-[6rem] font-display font-800 leading-[0.95] tracking-tight max-w-4xl"
        >
          The future of
          <br />
          <span className="gradient-text">collaboration</span>
          <br />
          is here.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed font-light"
        >
          4K display. AI-powered. Multi-touch precision.
          <br />
          One device to transform every room.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-12 mt-16"
        >
          {[
            { val: "4K", sub: "Ultra HD" },
            { val: "40pt", sub: "Infra Touch" },
            { val: "<5ms", sub: "Response" },
          ].map((s) => (
            <div key={s.sub} className="border-l border-border pl-4">
              <div className="text-2xl font-display font-bold text-foreground">{s.val}</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1 font-mono">{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll down floating image preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-0 right-0 w-1/3 hidden lg:block"
      >
        <img
          src={detailTouch}
          alt="Touch interaction"
          className="w-full rounded-tl-3xl opacity-60 mask-fade-b"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={14} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
