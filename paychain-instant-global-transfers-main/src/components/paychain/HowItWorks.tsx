import { SectionHeader } from "./Features";
import { WalletCards, Send, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: WalletCards, title: "Connect your wallet", desc: "Sign in with any Web3 wallet or create a smart wallet in seconds — no bank account required." },
  { icon: Send, title: "Send to anyone, anywhere", desc: "Enter a wallet address, ENS, or username. Choose your asset, confirm, and you’re done." },
  { icon: CheckCircle2, title: "Settle on-chain in seconds", desc: "Funds arrive instantly, with full transparency and a verifiable receipt on-chain." },
];

export const HowItWorks = () => (
  <section id="how" className="py-28 relative">
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="container mx-auto px-4 relative">
      <SectionHeader
        eyebrow="How it works"
        title={<>From wallet to wallet in <span className="text-gradient">three steps</span></>}
        sub="No banks. No delays. No surprises."
      />

      <div className="mt-16 grid md:grid-cols-3 gap-6 relative">
        {steps.map((s, i) => (
          <div key={s.title} className="glass rounded-2xl p-7 relative group">
            <div className="absolute top-6 right-6 text-6xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors">
              0{i + 1}
            </div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow mb-5">
              <s.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);