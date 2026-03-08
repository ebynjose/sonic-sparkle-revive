import { motion } from "framer-motion";

const brands = [
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Samsung", logo: "/logos/samsung.svg" },
  { name: "Huawei", logo: "/logos/huawei.svg" },
  { name: "Cisco", logo: "/logos/cisco.svg" },
  { name: "Dell", logo: "/logos/dell.svg" },
  { name: "HP", logo: "/logos/hp.svg" },
  { name: "Lenovo", logo: "/logos/lenovo.svg" },
  { name: "LG", logo: "/logos/lg.svg" },
  { name: "Panasonic", logo: "/logos/panasonic.svg" },
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
                className="h-10 sm:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;
