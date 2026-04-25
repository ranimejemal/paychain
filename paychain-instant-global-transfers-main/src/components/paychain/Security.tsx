import { SectionHeader } from "./Features";
import { ShieldCheck, Lock, Eye, Timer } from "lucide-react";

const trust = [
  { icon: ShieldCheck, title: "Blockchain-secured", desc: "Every transaction is cryptographically signed and immutable." },
  { icon: Eye, title: "Transparent ledger", desc: "Verifiable in real time on a public, auditable chain." },
  { icon: Lock, title: "No intermediaries", desc: "Your keys, your funds. Truly self-custodial by design." },
  { icon: Timer, title: "Fast settlement", desc: "Sub-3-second finality across supported networks." },
];

export const Security = () => (
  <section id="security" className="py-28 relative">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            Security
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Built on trust. <span className="text-gradient">Verified by math.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            PayChain combines end-to-end encryption with on-chain settlement. Every transfer is
            tamper-proof, traceable, and free of intermediaries — secured by the same cryptography
            that protects billions in digital assets globally.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {trust.map((t) => (
              <div key={t.title} className="glass rounded-2xl p-5">
                <t.icon className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-semibold">{t.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
          <div className="relative glass rounded-3xl p-8 shadow-neon">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold">Transaction Receipt</div>
                  <div className="text-xs text-muted-foreground">Block #18,432,901</div>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-success/15 text-success">Verified</span>
            </div>
            <div className="space-y-3 text-sm font-mono">
              <Row k="Hash" v="0x4f8a…b912" />
              <Row k="From" v="0x7f3a…9b4e" />
              <Row k="To" v="0xa1c2…d8e7" />
              <Row k="Amount" v="1,250.00 USDC" />
              <Row k="Fee" v="0.0021 ETH" />
              <Row k="Confirmations" v="128" />
            </div>
            <div className="mt-6 h-2 rounded-full bg-secondary overflow-hidden">
              <div className="h-full w-full bg-gradient-primary animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
            </div>
            <div className="mt-3 text-xs text-muted-foreground text-center">Settled in 2.4 seconds · 0.012% fee</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Row = ({ k, v }: { k: string; v: string }) => (
  <div className="flex items-center justify-between border-b border-border/50 pb-2 last:border-0">
    <span className="text-muted-foreground text-xs uppercase tracking-wider">{k}</span>
    <span className="text-foreground">{v}</span>
  </div>
);