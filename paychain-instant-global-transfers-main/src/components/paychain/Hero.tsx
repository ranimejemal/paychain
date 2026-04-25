import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ShieldCheck, Zap, Globe2 } from "lucide-react";
import heroImg from "@/assets/hero-blockchain.jpg";

export const Hero = () => (
  <section className="relative pt-36 pb-24 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />

    <div className="container mx-auto px-4 relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-accent animate-ping-slow" />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-accent" />
            </span>
            <span className="text-muted-foreground">Live on Mainnet · v2.4 released</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Send Money <span className="text-gradient">Instantly.</span>
            <br />
            Anywhere. <span className="text-gradient">Without Borders.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            PayChain is a decentralized payment platform powered by blockchain technology — enabling
            fast, secure, and low-cost global transactions in seconds, not days.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="xl">
              Get Started <ArrowRight className="ml-1" />
            </Button>
            <Button variant="glass" size="xl">
              <Play className="mr-1" /> View Demo
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-accent" /> &lt; 3s settlement</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" /> Audited contracts</div>
            <div className="flex items-center gap-2"><Globe2 className="w-4 h-4 text-accent" /> 180+ countries</div>
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute -inset-4 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
          <div className="relative glass rounded-3xl p-2 shadow-neon">
            <img
              src={heroImg}
              alt="Blockchain network of glowing nodes representing PayChain transactions"
              width={1536}
              height={1024}
              className="rounded-2xl w-full h-auto"
            />
          </div>
          <FloatingCard className="absolute -left-4 top-10 animate-float" delay="0s" />
          <FloatingCard className="absolute -right-2 bottom-8 animate-float" delay="-3s" variant="receive" />
        </div>
      </div>
    </div>
  </section>
);

const FloatingCard = ({
  className = "",
  delay = "0s",
  variant = "send",
}: { className?: string; delay?: string; variant?: "send" | "receive" }) => (
  <div className={`glass rounded-2xl p-4 w-56 shadow-elegant hidden md:block ${className}`} style={{ animationDelay: delay }}>
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs text-muted-foreground">{variant === "send" ? "Sent" : "Received"}</span>
      <span className="text-[10px] px-2 py-0.5 rounded-full bg-success/15 text-success">Confirmed</span>
    </div>
    <div className="text-2xl font-semibold tracking-tight">
      {variant === "send" ? "−$1,250.00" : "+$3,420.50"}
    </div>
    <div className="text-xs text-muted-foreground mt-1 truncate">
      0x7f3a…9b4e
    </div>
  </div>
);