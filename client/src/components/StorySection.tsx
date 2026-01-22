import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface StorySectionProps {
  title: string;
  subtitle: string;
  content: string;
  image?: string; // Optional background image or side image
  align?: "left" | "right" | "center";
  index: number;
}

export default function StorySection({ title, subtitle, content, align = "center", index }: StorySectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
      {/* Decorative Background Number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif text-foreground/5 font-bold z-0 pointer-events-none select-none">
        0{index + 1}
      </div>

      <motion.div 
        style={{ y, opacity }}
        className={`relative z-10 max-w-4xl px-6 ${
          align === "left" ? "mr-auto ml-0 md:ml-24" : 
          align === "right" ? "ml-auto mr-0 md:mr-24" : 
          "mx-auto text-center"
        }`}
      >
        <span className="block text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4">
          {subtitle}
        </span>
        <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-foreground">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
          {content}
        </p>
      </motion.div>
    </section>
  );
}
