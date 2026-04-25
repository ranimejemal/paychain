import { Zap, Coins, Globe, Eye, Wallet, Activity, ShieldAlert, Route } from "lucide-react";

const features = [
  { icon: Zap, title: "Instant P2P Payments", desc: "Send and receive funds in under 3 seconds, peer-to-peer, with no middlemen." },
  { icon: Coins, title: "Low Transaction Fees", desc: "Save up to 90% compared to banks and traditional remittance services." },
  { icon: Globe, title: "Cross-Border Transfers", desc: "Reach 180+ countries with one wallet — no IBAN, no SWIFT, no waiting." },
  { icon: Eye, title: "On-Chain Transparency", desc: "Every transaction is verifiable on a public, tamper-proof ledger." },
  { icon: Wallet, title: "Secure Wallet Auth", desc: "Self-custodial keys, biometric unlock, and hardware-wallet support." },
  { icon: Activity, title: "Real-Time Tracking", desc: "Watch transactions confirm live with millisecond status updates." },
  { icon: ShieldAlert, title: "AI Fraud Detection", desc: "Real-time risk scoring on every transaction — block fraud before it happens." },
  { icon: Route, title: "Smart Payment Routing", desc: "An AI engine picks the fastest, cheapest, safest path for every payment." },
];

export const Features = () => (
  <section id="features" className="py-28 relative">
    <div className="container mx-auto px-4">
      <SectionHeader
        eyebrow="Features"
        title={<>Everything you need to <span className="text-gradient">move money</span></>}
        sub="A complete payments stack built for the on-chain era."
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group glass rounded-2xl p-7 hover:-translate-y-1 transition-all duration-500 hover:shadow-neon relative overflow-hidden"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 border border-border flex items-center justify-center mb-5 group-hover:bg-gradient-primary group-hover:border-transparent transition-all">
                <f.icon className="w-5 h-5 text-accent group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SectionHeader = ({
  eyebrow,
  title,
  sub,
}: { eyebrow: string; title: React.ReactNode; sub: string }) => (
  <div className="max-w-2xl mx-auto text-center">
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
      {eyebrow}
    </span>
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
    <p className="mt-4 text-muted-foreground">{sub}</p>
  </div>
);