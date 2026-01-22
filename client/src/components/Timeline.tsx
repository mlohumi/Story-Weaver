import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <div className="relative py-20 px-6">
      {/* Vertical Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

      <div className="space-y-24">
        {timeline.map((item, index) => (
          <motion.div 
            key={item.year}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content */}
            <div className="flex-1 md:text-right pl-12 md:pl-0 md:pr-12 w-full">
              {index % 2 === 0 ? (
                 <div className="text-left md:text-left">
                   <span className="text-6xl font-serif text-accent/20 font-bold absolute -top-10 -left-4 md:left-auto md:right-auto z-0">
                     {item.year}
                   </span>
                   <div className="relative z-10">
                     <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                     <p className="text-muted-foreground">{item.description}</p>
                   </div>
                 </div>
              ) : (
                <div className="text-left md:text-right relative">
                   <span className="text-6xl font-serif text-accent/20 font-bold absolute -top-10 -left-4 md:left-auto md:-right-4 z-0">
                     {item.year}
                   </span>
                   <div className="relative z-10">
                     <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                     <p className="text-muted-foreground">{item.description}</p>
                   </div>
                 </div>
              )}
            </div>

            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-20" />

            {/* Empty space for balance on desktop */}
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
