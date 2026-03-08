import { motion } from "framer-motion";

const brands = [
  "Microsoft", "Google", "Samsung", "Huawei", "Cisco",
  "Dell", "HP", "Lenovo", "LG", "Panasonic",
];

const TrustedBrandsSection = () => {
  return (
    <section className="py-20 border-y border-border overflow-hidden">
      <div className="container mx-auto mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono text-center"
        >
          Trusted by industry leaders
        </motion.p>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center justify-center"
            >
              <span className="text-lg sm:text-xl font-display font-bold text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-500 whitespace-nowrap tracking-tight">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;
