import { motion } from "framer-motion";
import { Fingerprint, Wifi, BrainCircuit, ArrowRight } from "lucide-react";
import lifestyleBoardroom from "@/assets/lifestyle-boardroom.jpg";
import detailTouch from "@/assets/detail-touch.jpg";
import lifestyleOffice from "@/assets/lifestyle-office.jpg";
import lifestyleMeeting from "@/assets/lifestyle-meeting.jpg";
import lifestyleCreative from "@/assets/lifestyle-creative.jpg";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm uppercase tracking-widest mb-3 font-medium">
              Capabilities
            </p>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-none">
              Engineered for
              <br />
              <span className="text-primary">Results.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xs"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              Next-generation interactive displays built to eliminate barriers between your ideas and your team.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-fr">
          {/* Primary: 4K Ultra HD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative md:col-span-8 md:row-span-2 overflow-hidden rounded-3xl bg-zinc-900 flex flex-col justify-end p-8 md:p-10 min-h-[400px] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="absolute inset-0 opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700">
              <img
                src={lifestyleBoardroom}
                alt="4K Ultra HD smart board in boardroom"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            <div className="relative">
              <div className="inline-flex items-center mb-4">
                <span className="text-xs border border-primary/50 px-3 py-1 rounded-full text-primary bg-primary/10 backdrop-blur-md font-medium tracking-wider">
                  01 — PRIMARY
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
                4K Ultra HD
              </h3>
              <p className="text-zinc-200 max-w-md text-sm md:text-base leading-relaxed">
                See the Difference in Every Pixel. Crystal-clear resolution for immersive presentations.
              </p>
            </div>
          </motion.div>

          {/* Multi-Touch */}
          <FeatureCard
            number="02"
            title="Multi-Touch"
            description="Touch, Write & Control."
            icon={<Fingerprint className="w-5 h-5" />}
            image={detailTouch}
            className="md:col-span-4"
          />

          {/* Wireless — primary filled */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative md:col-span-4 overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 flex flex-col"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
              <img src={lifestyleOffice} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex justify-between items-start mb-12">
              <span className="text-primary-foreground/70 text-xs font-medium">03</span>
              <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center">
                <Wifi className="w-5 h-5" />
              </div>
            </div>
            <div className="relative mt-auto">
              <h4 className="text-2xl font-display font-bold mb-2">Wireless</h4>
              <p className="text-primary-foreground/80 text-sm">No Cables. No Limits.</p>
            </div>
          </motion.div>

          {/* Audio & Webcam */}
          <FeatureCard
            number="04"
            title="Audio & Webcam"
            description="Hybrid Meetings, Perfected."
            icon={<ArrowRight className="w-5 h-5" />}
            image={lifestyleMeeting}
            className="md:col-span-4"
            variant="soft"
          />

          {/* AI-Powered — wide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative md:col-span-8 overflow-hidden rounded-3xl border-2 border-dashed border-border p-8 flex flex-col md:flex-row items-center gap-6 hover:border-primary/50 transition-all"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500">
              <img src={lifestyleCreative} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-16 h-16 shrink-0 rounded-2xl bg-foreground flex items-center justify-center text-background rotate-3 group-hover:rotate-0 transition-transform">
              <BrainCircuit className="w-8 h-8" />
            </div>
            <div className="relative flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <span className="text-muted-foreground text-xs font-medium">05</span>
                <h4 className="text-xl font-display font-bold">AI-Powered</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Smart, Fast & Intuitive features that adapt to your work style automatically.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  className?: string;
  variant?: "default" | "soft";
}

const FeatureCard = ({ number, title, description, icon, image, className = "", variant = "default" }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.05 }}
    className={`group relative overflow-hidden rounded-3xl border border-border p-8 transition-all duration-300 hover:border-primary/40 flex flex-col ${
      variant === "soft" ? "bg-secondary/50" : "bg-card/60"
    } backdrop-blur-xl ${className}`}
  >
    {/* Hover background image */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
    </div>

    <div className="relative flex justify-between items-start mb-12">
      <span className="text-muted-foreground text-xs font-medium">{number}</span>
      <div className="w-10 h-10 rounded-xl bg-secondary/60 backdrop-blur-md border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
        {icon}
      </div>
    </div>
    <div className="relative mt-auto">
      <h4 className="text-2xl font-display font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </motion.div>
);

export default FeaturesSection;
