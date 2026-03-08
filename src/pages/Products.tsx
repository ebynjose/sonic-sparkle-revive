import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, type ProductCategory } from "@/data/products";

const filters: { label: string; value: "all" | ProductCategory }[] = [
  { label: "All Products", value: "all" },
  { label: "Smart Boards", value: "smart-board" },
  { label: "Accessories", value: "accessory" },
];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | ProductCategory>("all");

  const filtered = activeFilter === "all" ? products : products.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4"
          >
            Products
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-bold tracking-tight mb-6"
          >
            Our product
            <br />
            <span className="text-muted-foreground">lineup.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-md text-base"
          >
            From interactive smart boards to precision accessories — everything you need for a connected workspace.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-border">
        <div className="container mx-auto py-4 flex gap-6 overflow-x-auto no-scrollbar">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`text-xs tracking-[0.2em] uppercase font-mono whitespace-nowrap transition-colors duration-300 pb-1 ${
                activeFilter === f.value
                  ? "text-primary border-b border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground font-mono self-center">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                layout
              >
                <Link
                  to={`/products/${product.id}`}
                  className="group block rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-square bg-secondary/30 flex items-center justify-center p-8 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
                      {product.category === "smart-board" ? "Smart Board" : "Accessory"}
                    </span>
                    <h3 className="text-lg font-display font-bold mt-1 mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-primary font-mono tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
