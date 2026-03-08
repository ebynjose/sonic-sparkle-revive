import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-smartboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-30 mask-fade-b" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
      </div>

      <div className="container mx-auto relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-8"
          >
            Interactive Smart Board
          </motion.p>

          {/* Main headline */}
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

          {/* Subtitle */}
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

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-12 mt-16"
          >
            {[
              { val: "4K", sub: "Ultra HD" },
              { val: "20pt", sub: "Touch Points" },
              { val: "<5ms", sub: "Response" },
            ].map((s) => (
              <div key={s.sub} className="border-l border-border pl-4">
                <div className="text-2xl font-display font-bold text-foreground">{s.val}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1 font-mono">
                  {s.sub}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
