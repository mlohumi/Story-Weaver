import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-serif text-2xl mb-6 tracking-widest">THE HIMALAYAN PLATEAU</h3>
          <p className="text-muted/60 max-w-md font-light leading-relaxed">
            Ancient wisdom refined for modern wellness. Crafted in the foothills, delivered to your door.
          </p>
        </div>
        
        <div>
          <h4 className="font-sans text-sm font-bold uppercase tracking-widest mb-6 text-accent">Explore</h4>
          <ul className="space-y-4">
            <li><Link href="/products" className="hover:text-accent transition-colors">Rituals</Link></li>
            <li><Link href="/method" className="hover:text-accent transition-colors">Our Method</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">Founder's Note</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-sm font-bold uppercase tracking-widest mb-6 text-accent">Connect</h4>
          <ul className="space-y-4 text-muted/60">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Email Us</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-xs text-muted/40 uppercase tracking-widest">
        © 2026 The Himalayan Plateau Inc. All rights reserved.
      </div>
    </footer>
  );
}
