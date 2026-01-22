import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { methodSteps } from "@/lib/data";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Method() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">The 5-Step Mountain Method</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Purity is not an accident. It is a rigorous process of selection, cleansing, and verification.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto relative mb-32">
           <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -z-10" />
           
           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
             {methodSteps.map((step, index) => (
               <motion.div
                 key={step.step}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1 }}
                 viewport={{ once: true }}
                 className="bg-card p-6 border border-border rounded-lg md:border-none md:bg-transparent text-center group"
               >
                 <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center font-serif text-2xl font-bold mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                   {step.step}
                 </div>
                 <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                 <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                 <span className="text-xs font-bold text-accent uppercase tracking-widest">{step.note}</span>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Trust & Transparency */}
        <div className="max-w-3xl mx-auto py-16 border-t border-border">
          <h2 className="text-3xl font-serif mb-8 text-center">Trust & Transparency</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-serif text-lg">Where do you source your ingredients?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We work directly with farming cooperatives in the high-altitude regions of the Himalayas, specifically in Himachal Pradesh and Uttarakhand. This ensures we get the most potent plants that have struggled against the elements to produce rich phytochemical profiles.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-serif text-lg">How do you ensure safety?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Every batch undergoes triple-layer testing. First at the source, second upon arrival at our facility, and third by an independent third-party lab. We test for heavy metals, microbial contaminants, and pesticide residues.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-serif text-lg">Is your packaging sustainable?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes. We use amber glass bottles to protect the product and the planet. Our outer packaging is made from recycled paper and printed with soy-based inks. We are strictly plastic-neutral.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Footer />
    </div>
  );
}
