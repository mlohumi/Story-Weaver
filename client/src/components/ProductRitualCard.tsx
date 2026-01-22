import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductProps {
  product: {
    id: string;
    name: string;
    ritualLine: string;
    category: string;
    description: string;
    storySnippet: string;
    benefits: string[];
    suggestedUse: string;
    image: string;
  }
}

export default function ProductRitualCard({ product }: ProductProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      layout
      className={`group relative overflow-hidden rounded-lg bg-white border border-border shadow-sm transition-all duration-500 hover:shadow-xl ${isOpen ? 'col-span-1 md:col-span-2 row-span-2' : ''}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Image Section */}
        <div className="relative h-64 md:h-full overflow-hidden bg-muted">
          <motion.img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 2 // Random delay to offset animations
            }}
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
          <div className="absolute top-4 left-4">
             <span className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-full">
               {product.category}
             </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col justify-between h-full bg-card">
          <div>
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2">
              {product.ritualLine}
            </span>
            <h3 className="font-serif text-3xl text-foreground mb-4">{product.name}</h3>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              {product.description}
            </p>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 overflow-hidden"
                >
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-serif italic text-lg text-primary mb-2">The Story</h4>
                    <p className="text-sm text-muted-foreground italic">"{product.storySnippet}"</p>
                  </div>
                  
                  <div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-2">Benefits</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                      {product.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-2">Daily Ritual</h4>
                    <p className="text-sm text-muted-foreground">{product.suggestedUse}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
            >
              {isOpen ? (
                <>Read Less <Minus className="w-4 h-4" /></>
              ) : (
                <>Discover Ritual <Plus className="w-4 h-4" /></>
              )}
            </button>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif px-6">
              Shop Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
