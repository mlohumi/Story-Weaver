import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function About() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    form.reset();
  }

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
               <div className="flex items-center gap-6 mb-6">
                 <div className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-muted-foreground uppercase text-center p-2">
                   CEO Photo Placeholder
                 </div>
                 <div>
                   <h3 className="font-serif text-xl">Rohit Agrawal</h3>
                   <p className="text-sm text-muted-foreground uppercase tracking-widest">Founder & CEO</p>
                 </div>
               </div>
               <div className="space-y-4 text-sm">
                 <div className="flex items-center gap-3">
                   <Mail className="w-4 h-4 text-primary" />
                   <span>rohit@himalayanplateau.inc</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <Phone className="w-4 h-4 text-primary" />
                   <span>+91 98765 43210</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <MapPin className="w-4 h-4 text-primary" />
                   <span>Almora, Uttarakhand, India</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 md:p-12 rounded-lg shadow-sm border border-border">
            <h2 className="text-3xl font-serif mb-6">Start Your Journey</h2>
            <p className="text-muted-foreground mb-8">
              Have questions about our rituals or sourcing? We'd love to hear from you.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us how we can help..." {...field} className="bg-background min-h-[120px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-serif text-lg py-6">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
