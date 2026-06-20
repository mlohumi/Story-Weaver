import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

const CONTACT_EMAIL = "thehimalayanplateau@gmail.com";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-16 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Brand Story */}
          <div className="space-y-8">
            <span className="text-accent text-sm font-bold tracking-widest uppercase">Founder's Note</span>
            <h1 className="text-5xl font-serif leading-tight">Why We Exist</h1>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Twenty-five years ago, I stood on a ridge overlooking the Valley of Flowers in Uttarakhand. The silence was absolute. I realized then that wellness isn't just about what you take; it's about connecting with the rhythm of nature.
              </p>
              <p>
                The Himalayan Plateau Inc. was born from that silence. We don't chase trends. We don't look for quick fixes. We look to the mountains, which have stood for millennia, and we ask: "What endures?"
              </p>
              <p>
                Our mission is simple: to bring a piece of that eternal stillness and vitality into your daily life.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border border-border mt-12">
               <div className="flex items-center gap-6 mb-8">
                 <img src="/images/ceo-rohit.jpg" alt="Rohit Agrawal" className="w-24 h-24 rounded-full object-cover border-2 border-primary/20" />
                 <div>
                   <h3 className="font-serif text-2xl">Rohit Agrawal</h3>
                   <p className="text-sm text-muted-foreground uppercase tracking-widest">Co-founder and CEO</p>
                 </div>
               </div>

               <div className="space-y-4 text-sm mb-8 border-b border-border pb-8">
                 <div className="flex items-center gap-3">
                   <Mail className="w-4 h-4 text-primary" />
                   <span>{CONTACT_EMAIL}</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <MapPin className="w-4 h-4 text-primary" />
                   <span>Haldwani, Nainital, Uttarakhand, India</span>
                 </div>
               </div>

               <div className="space-y-6">
                 <span className="text-xs font-bold uppercase tracking-widest text-accent">Board of Directors</span>

                 <div className="flex items-center gap-4">
                   <img src="/images/bod-utsav.jpg" alt="Utsav Saini" className="w-16 h-16 rounded-full object-cover border border-border" />
                   <div>
                     <h4 className="font-serif text-lg">Utsav Saini</h4>
                     <p className="text-xs text-muted-foreground uppercase">Co-Founder and Director</p>
                   </div>
                 </div>

                 <div className="flex items-center gap-4">
                   <img src="/images/bod-lalit.jpg" alt="Dr. Lalit Upadhyay" className="w-16 h-16 rounded-full object-cover border border-border" />
                   <div>
                     <h4 className="font-serif text-lg">Dr. Lalit Upadhyay</h4>
                     <p className="text-xs text-muted-foreground uppercase">Co-Founder and Director</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-card p-8 md:p-12 rounded-lg shadow-sm border border-border md:sticky md:top-32">
            <h2 className="text-3xl font-serif mb-6">Start Your Journey</h2>
            <p className="text-muted-foreground mb-8">
              Have questions about our rituals or sourcing? We'd love to hear from you. Reach out anytime and a member of our team will get back to you.
            </p>

            <div className="flex items-center gap-4 p-5 rounded-lg bg-muted/30 border border-border mb-8">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-serif text-lg break-all hover:text-primary transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <Button
              asChild
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-serif text-lg py-6"
            >
              <a href={`mailto:${CONTACT_EMAIL}?subject=Inquiry%20from%20your%20website`}>
                Email Us
              </a>
            </Button>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
