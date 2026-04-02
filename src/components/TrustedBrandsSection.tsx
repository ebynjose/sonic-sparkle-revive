import { motion } from "framer-motion";

const brands = [
  { name: "ISAS Beauty Academy", logo: "/logos/isas.png" },
  { name: "EFCO Design and Build", logo: "/logos/efco.png" },
  { name: "Cloudlink Solutions", logo: "/logos/cloudlink.png" },
  { name: "Maple Arcadia Properties", logo: "/logos/maple-arcadia.png" },
  { name: "Gulf United", logo: "/logos/gulf-united.svg" },
  { name: "Gulf Bulls", logo: "/logos/gulf-bulls.avif" },
];

const TrustedBrandsSection = () => {
  return (
    <section className="py-24 border-y border-border overflow-hidden">
      <div className="container mx-auto mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-mono text-center"
        >
          Trusted by industry leaders
        </motion.p>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 mx-12 sm:mx-16 flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 sm:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain max-w-[160px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;
