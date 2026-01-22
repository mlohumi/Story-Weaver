import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StorySection from "@/components/StorySection";
import Timeline from "@/components/Timeline";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowDown } from "lucide-react";

export default function Home() {
  const { scrollY } = useScroll();
  const [, setLocation] = useLocation();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <img 
            src="/images/hero-himalayas.png" 
            alt="Himalayas" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <span className="block text-white/80 font-bold tracking-[0.4em] uppercase mb-6 text-sm">
            Est. 1999 • The Himalayan Plateau
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight drop-shadow-lg">
            25 Years of <br/>Wellness Craft
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            From foothill botanicals to daily ritual. Discover the ancient wisdom of the mountains, refined for modern life.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={() => setLocation("/products")}
              className="bg-white text-foreground hover:bg-white/90 font-serif px-8 py-6 text-lg rounded-none"
            >
              Explore Rituals
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setLocation("/method")}
              className="border-white text-white hover:bg-white/10 font-serif px-8 py-6 text-lg rounded-none"
            >
              Our Method
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ArrowDown />
        </motion.div>
      </div>

      {/* STORY SECTIONS */}
      <div className="relative z-10 bg-background">
        <div className="container mx-auto px-6">
          <StorySection 
            index={0}
            title="The Foothills"
            subtitle="Sourcing & Purity"
            content="Our journey begins at 12,000 feet. Here, the air is thin, the soil is untouched, and the botanicals grow with a resilience found nowhere else on earth."
            align="left"
          />
          
          <StorySection 
            index={1}
            title="The Ancient Method"
            subtitle="Wisdom of Ages"
            content="We don't invent; we preserve. Following the lineage of Ayurvedic and Siddha traditions, we prepare our formulations exactly as the texts prescribe."
            align="right"
          />

          <StorySection 
            index={2}
            title="25-Year Refinement"
            subtitle="Consistency & Learning"
            content="Tradition does not mean stagnation. For a quarter of a century, we have refined our processes, ensuring that every capsule delivers a consistent, potent experience."
            align="center"
          />
        </div>

        {/* TIMELINE */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Our Journey</h2>
            <p className="text-muted-foreground">A quarter-century of dedication.</p>
          </div>
          <div className="container mx-auto max-w-4xl">
            <Timeline />
          </div>
        </section>

        {/* QUALITY PROMISE */}
        <section className="py-32 container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Quality Promise</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We verify every batch for purity, potency, and safety. No shortcuts, no fillers. Just the honest power of the mountains.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setLocation("/method")}
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 rounded-none"
            >
              See How We Verify
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
