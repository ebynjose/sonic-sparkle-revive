import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const ProductsSection = () => {
  const displayProducts = products.filter(
    (p) => p.category === "smart-board" || p.category === "tabletop-display"
  );

  const badgeText = (category: string) => {
    if (category === "tabletop-display") return "Full HD Touch";
    return "4K Ultra HD";
  };

  return (
    <section id="products" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4"
            >
              Our Products
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-display font-bold tracking-tight"
            >
              Choose your
              <br />
              <span className="text-muted-foreground">smart board.</span>
            </motion.h2>
          </div>
          <Link
            to="/products"
            className="text-xs tracking-[0.15em] uppercase text-primary font-mono hover:underline underline-offset-4"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProducts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <Link
                to={`/products/${p.id}`}
                className="group block rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden h-full"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted/30 flex items-center justify-center p-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-mono mb-2">
                    {badgeText(p.category)}
                  </p>
                  <h3 className="font-display font-bold text-xl mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
                    {p.tagline}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-primary font-mono">
                    Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
