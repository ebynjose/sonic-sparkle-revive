import { motion } from "framer-motion";
import { Fingerprint, Wifi, BrainCircuit, Mic, Monitor } from "lucide-react";
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
              Hover any card to explore the detail. Next-generation interactive displays built to eliminate barriers between your ideas and your team.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid with 3D flip cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-fr [perspective:1500px]">
          {/* Primary: 4K Ultra HD */}
          <FlipCard
            className="md:col-span-8 md:row-span-2 min-h-[460px]"
            front={
              <div className="relative w-full h-full overflow-hidden rounded-3xl bg-zinc-900 flex flex-col justify-end p-8 md:p-10">
                <div className="absolute inset-0 opacity-60">
                  <img src={lifestyleBoardroom} alt="4K Ultra HD smart board in boardroom" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="relative">
                  <span className="text-xs border border-primary/50 px-3 py-1 rounded-full text-primary bg-primary/10 backdrop-blur-md font-medium tracking-wider">
                    01 — PRIMARY
                  </span>
                  <h3 className="mt-4 text-4xl md:text-5xl font-display font-bold text-white mb-3">
                    4K Ultra HD
                  </h3>
                  <p className="text-zinc-200 max-w-md text-sm md:text-base leading-relaxed">
                    See the Difference in Every Pixel. Crystal-clear resolution for immersive presentations.
                  </p>
                </div>
              </div>
            }
            back={
              <div className="w-full h-full rounded-3xl bg-zinc-950 text-white p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <Monitor className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Pixel-perfect clarity</h3>
                  <p className="text-zinc-300 leading-relaxed max-w-lg">
                    3840×2160 native resolution with anti-glare nano-etched glass. Render fine typography, CAD drawings, and 4K video without artifacts — even from the front row.
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-3 text-sm">
                  <Stat label="Resolution" value="3840 × 2160" />
                  <Stat label="Brightness" value="450 cd/m²" />
                  <Stat label="Contrast" value="5000 : 1" />
                  <Stat label="Color Gamut" value="72% NTSC" />
                </ul>
              </div>
            }
          />

          {/* Multi-Touch */}
          <FlipCard
            className="md:col-span-4 min-h-[230px]"
            front={
              <CardFront number="02" title="Multi-Touch" description="Touch, Write & Control." icon={<Fingerprint className="w-5 h-5" />} />
            }
            back={
              <CardBack
                icon={<Fingerprint className="w-8 h-8" />}
                title="40-point touch"
                body="Up to 40 simultaneous touch points with <1ms latency. Write with finger or stylus, palm rejection on by default."
                bullets={["Zero-lag inking", "Palm rejection", "Stylus + finger"]}
              />
            }
          />

          {/* Wireless */}
          <FlipCard
            className="md:col-span-4 min-h-[230px]"
            front={
              <div className="relative w-full h-full overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground flex flex-col">
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
              </div>
            }
            back={
              <div className="w-full h-full rounded-3xl bg-primary text-primary-foreground p-6 flex flex-col justify-between overflow-hidden">
                <div>
                  <Wifi className="w-7 h-7 mb-3" />
                  <h4 className="text-xl font-display font-bold mb-1.5">Cast from anywhere</h4>
                  <p className="text-primary-foreground/85 text-xs leading-relaxed">
                    Mirror iOS, Android, Windows & macOS instantly over Wi-Fi 6. Up to 4 screens side-by-side, no dongles required.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  {["AirPlay", "Miracast", "Chromecast", "BYOD"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-md">{t}</span>
                  ))}
                </div>
              </div>
            }
          />

          {/* Audio & Webcam */}
          <FlipCard
            className="md:col-span-4 min-h-[230px]"
            front={
              <CardFront number="04" title="Audio & Webcam" description="Hybrid Meetings, Perfected." icon={<Mic className="w-5 h-5" />} variant="soft" />
            }
            back={
              <CardBack
                icon={<Mic className="w-8 h-8" />}
                title="Studio-grade A/V"
                body="8-array beamforming mics with 8m pickup and a 4K AI webcam that auto-frames the speaker. Plug-and-play with Zoom, Teams & Meet."
                bullets={["8m mic pickup", "4K AI camera", "Echo cancel"]}
              />
            }
          />

          {/* AI-Powered */}
          <FlipCard
            className="md:col-span-8 min-h-[230px]"
            front={
              <div className="relative w-full h-full overflow-hidden rounded-3xl border-2 border-dashed border-border p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-16 h-16 shrink-0 rounded-2xl bg-foreground flex items-center justify-center text-background rotate-3">
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
              </div>
            }
            back={
              <div className="w-full h-full rounded-3xl bg-foreground text-background p-8 flex flex-col md:flex-row items-center gap-6">
                <BrainCircuit className="w-12 h-12 shrink-0 text-primary" />
                <div className="flex-1">
                  <h4 className="text-2xl font-display font-bold mb-2">AI that does the busywork</h4>
                  <p className="text-background/75 text-sm leading-relaxed mb-3">
                    Live transcription, instant meeting summaries, handwriting-to-text, and shape recognition — built in, no subscription.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {["Transcribe", "Summarize", "OCR", "Shape AI"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-background/10">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

/* ---------- helpers ---------- */

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

const FlipCard = ({ front, back, className = "" }: FlipCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`group relative [transform-style:preserve-3d] ${className}`}
  >
    <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0 [backface-visibility:hidden]">{front}</div>
      <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">{back}</div>
    </div>
  </motion.div>
);

const CardFront = ({
  number,
  title,
  description,
  icon,
  variant = "default",
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  variant?: "default" | "soft";
}) => (
  <div
    className={`w-full h-full overflow-hidden rounded-3xl border border-border p-8 flex flex-col backdrop-blur-xl ${
      variant === "soft" ? "bg-secondary/50" : "bg-card/60"
    }`}
  >
    <div className="flex justify-between items-start mb-12">
      <span className="text-muted-foreground text-xs font-medium">{number}</span>
      <div className="w-10 h-10 rounded-xl bg-secondary/60 backdrop-blur-md border border-border flex items-center justify-center text-primary">
        {icon}
      </div>
    </div>
    <div className="mt-auto">
      <h4 className="text-2xl font-display font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

const CardBack = ({
  icon,
  title,
  body,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  bullets: string[];
}) => (
  <div className="w-full h-full rounded-3xl bg-primary text-primary-foreground p-6 flex flex-col justify-between overflow-hidden">
    <div>
      <div className="mb-3">{icon}</div>
      <h4 className="text-xl font-display font-bold mb-1.5">{title}</h4>
      <p className="text-primary-foreground/85 text-xs leading-relaxed">{body}</p>
    </div>
    <ul className="flex flex-wrap gap-1.5 text-[10px] mt-3">
      {bullets.map((b) => (
        <li key={b} className="px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-md">
          {b}
        </li>
      ))}
    </ul>
  </div>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <li className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
    <div className="text-zinc-400 text-[10px] uppercase tracking-widest">{label}</div>
    <div className="text-white font-medium">{value}</div>
  </li>
);

export default FeaturesSection;
