import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => (
  <section className="py-28">
    <div className="container mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl glass p-12 md:p-20 text-center shadow-neon">
        <div className="absolute inset-0 bg-gradient-primary opacity-20" />
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
            The future of payments is <span className="text-gradient">already here.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Join thousands of freelancers, businesses, and remote workers moving money the smart way.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button variant="hero" size="xl">Create your wallet <ArrowRight className="ml-1" /></Button>
            <Button variant="glass" size="xl">Talk to sales</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);