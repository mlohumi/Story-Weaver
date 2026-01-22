import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface StorySectionProps {
  title: string;
  subtitle: string;
  content: string;
  image?: string;
  align?: "left" | "right" | "center";
  index: number;
}

export default function StorySection({ title, subtitle, content, image, align = "center", index }: StorySectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const isAlternating = index % 2 === 1;

  return (
    <section ref={ref} className="min-h-[80vh] flex items-center justify-center py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isAlternating ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Content Side */}
          <motion.div 
            style={{ y, opacity }}
            className="flex-1 text-center md:text-left relative"
          >
             {/* Decorative Background Number */}
            <div className={`absolute top-1/2 left-1/2 md:left-0 md:top-0 -translate-x-1/2 -translate-y-1/2 md:translate-x-[-20%] md:translate-y-[-40%] text-[12rem] md:text-[18rem] font-serif text-foreground/5 font-bold z-0 pointer-events-none select-none leading-none`}>
              0{index + 1}
            </div>

            <div className="relative z-10">
              <span className="block text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4">
                {subtitle}
              </span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-foreground">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                {content}
              </p>
            </div>
          </motion.div>

          {/* Image Side */}
          {image && (
            <motion.div 
              className="flex-1 w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-lg shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.img 
                src={image} 
                alt={title}
                style={{ scale: imageScale }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg" />
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
