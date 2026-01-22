import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductRitualCard from "@/components/ProductRitualCard";
import { products } from "@/lib/data";
import { motion } from "framer-motion";

export default function Products() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Strength", "Balance", "Calm", "Glow"];

  const filteredProducts = filter === "All" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-12 px-6 container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Rituals</h1>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          Discover a daily practice rooted in the mountains. Choose the ritual that calls to you.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === cat 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-transparent text-muted-foreground border-border hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {filteredProducts.map((product) => (
            <ProductRitualCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
