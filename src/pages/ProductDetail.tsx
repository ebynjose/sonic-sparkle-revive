import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import QuoteFormDialog from "@/components/QuoteFormDialog";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [activeImg, setActiveImg] = useState(0);
  const [quoteOpen, setQuoteOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Product not found</h1>
          <Link to="/products" className="text-primary font-mono text-sm">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images.length > 0 ? product.images : [product.image];
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 sm:pt-28 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary font-mono transition-colors mb-6 sm:mb-10"
            >
              <ArrowLeft size={12} /> All Products
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-start">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full min-w-0"
            >
              {/* Main Image */}
              <div className="aspect-[4/3] sm:aspect-square rounded-xl sm:rounded-2xl bg-card border border-border flex items-center justify-center p-4 sm:p-8 mb-3 sm:mb-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImg}
                    src={images[activeImg]}
                    alt={`${product.name} view ${activeImg + 1}`}
                    className="max-w-full max-h-full object-contain"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`aspect-square rounded-lg border-2 overflow-hidden bg-card flex items-center justify-center p-1 transition-all duration-200 cursor-pointer ${
                        activeImg === i
                          ? "border-primary shadow-md"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${i + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full min-w-0"
            >
              <span className="text-[10px] tracking-[0.25em] uppercase text-primary font-mono">
                {product.category === "smart-board" ? "Smart Board" : "Accessory"}
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mt-2 mb-2 sm:mb-3">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground font-light mb-4 sm:mb-8">{product.tagline}</p>
              <p className="text-sm text-secondary-foreground leading-relaxed mb-6 sm:mb-10 break-words">
                {product.description}
              </p>

              {/* Specs */}
              <div className="mb-10">
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-mono mb-4">
                  Specifications
                </h3>
                <div className="space-y-0">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-start justify-between gap-4 py-3 border-b border-border"
                    >
                      <span className="text-sm text-muted-foreground shrink-0">{spec.label}</span>
                      <span className="text-sm font-medium text-right break-words min-w-0">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button size="lg" className="gap-2" onClick={() => setQuoteOpen(true)}>
                Get a Quote <ArrowRight size={16} />
              </Button>
              <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 border-t border-border">
          <div className="container mx-auto">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-mono mb-10">
              Related Products
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="group block rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-secondary/30 flex items-center justify-center p-6">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-2/3 h-2/3 object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display font-semibold text-sm">{p.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{p.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
