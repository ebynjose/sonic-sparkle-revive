import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Al-Mansoori",
    role: "CTO, EduTech Solutions",
    location: "Dubai, UAE",
    text: "SonicHive's smart boards completely transformed our training rooms. The 4K display and touch responsiveness are unmatched — our teams are more engaged than ever.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Director of Operations",
    location: "Shenzhen, China",
    text: "We deployed 40 units across our offices. The AI integration and wireless casting saved us hours of setup time every week. Exceptional build quality.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Principal, International Academy",
    location: "Mumbai, India",
    text: "Students love the interactive lessons. The multi-touch capability lets groups collaborate simultaneously. It's been a game-changer for our STEM programs.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    role: "CEO, Gulf Consulting Group",
    location: "Doha, Qatar",
    text: "From boardroom presentations to hybrid meetings, SonicHive delivers. The OPS computing module means zero external hardware clutter. Clean, powerful, reliable.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Head of Design",
    location: "Riyadh, Saudi Arabia",
    text: "The color accuracy on the 4K display is stunning. Our creative team uses it daily for design reviews, and the touch pen precision is on par with professional tablets.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4"
        >
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-16"
        >
          What our clients
          <br />
          <span className="text-muted-foreground">are saying.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Featured testimonial */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 sm:p-10 relative"
          >
            <Quote size={40} className="text-primary/10 absolute top-8 right-8" />
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                <Star key={i} size={14} className="fill-primary text-primary" />
              ))}
              {Array.from({ length: 5 - testimonials[active].rating }).map((_, i) => (
                <Star key={`e-${i}`} size={14} className="text-muted-foreground/30" />
              ))}
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90 mb-8 max-w-xl">
              "{testimonials[active].text}"
            </p>
            <div>
              <p className="font-display font-semibold text-sm">{testimonials[active].name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{testimonials[active].role}</p>
              <p className="text-[10px] font-mono text-primary/70 tracking-wider uppercase mt-1">
                {testimonials[active].location}
              </p>
            </div>
          </motion.div>

          {/* Selector list */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                  i === active
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-card hover:border-border hover:bg-muted/30"
                }`}
              >
                <p className={`text-sm font-medium ${i === active ? "text-foreground" : "text-muted-foreground"}`}>
                  {t.name}
                </p>
                <p className="text-[10px] text-muted-foreground/70 mt-0.5">{t.role}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
