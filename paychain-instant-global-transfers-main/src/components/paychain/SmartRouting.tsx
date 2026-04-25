import { Brain, Route, ShieldAlert, Zap, Gauge, Network, CheckCircle2, AlertTriangle } from "lucide-react";
import { SectionHeader } from "@/components/paychain/Features";

const routes = [
  { name: "Hedera", speed: "1.2s", fee: "$0.0001", risk: "Low", best: true },
  { name: "Polygon", speed: "2.4s", fee: "$0.002", risk: "Low", best: false },
  { name: "Ethereum L1", speed: "12s", fee: "$1.84", risk: "Low", best: false },
  { name: "SWIFT (legacy)", speed: "2-3 days", fee: "$28.00", risk: "Med", best: false },
];

const pillars = [
  { icon: Gauge, title: "Fastest", desc: "Latency-aware path selection across rails." },
  { icon: Zap, title: "Cheapest", desc: "Live fee oracle picks the lowest-cost network." },
  { icon: ShieldAlert, title: "Safest", desc: "AI risk score blocks suspicious flows in <40ms." },
];

export const SmartRouting = () => (
  <section id="ai-shield" className="py-28 relative">
    <div className="absolute inset-0 bg-gradient-radial opacity-60 pointer-events-none" />
    <div className="container mx-auto px-4 relative">
      <SectionHeader
        eyebrow="AI Fraud Shield + Smart Routing"
        title={<>The <span className="text-gradient">GPS for money</span>.</>}
        sub="PayChain dynamically selects the fastest, cheapest, and safest path for every transaction — while AI prevents fraud in real time."
      />

      <div className="mt-16 grid lg:grid-cols-5 gap-6">
        {/* Routing engine card */}
        <div className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="flex items-center gap-3 mb-6 relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <Route className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-accent font-semibold">Smart Routing Engine</p>
              <h3 className="text-xl font-bold">Live path comparison · $500 → 🇰🇪</h3>
            </div>
          </div>

          <div className="space-y-2 relative">
            {routes.map((r) => (
              <div
                key={r.name}
                className={`flex items-center justify-between rounded-xl px-4 py-3 border transition-all ${
                  r.best
                    ? "border-primary/60 bg-primary/10 shadow-glow"
                    : "border-border bg-secondary/40"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Network className={`w-4 h-4 shrink-0 ${r.best ? "text-primary-glow" : "text-muted-foreground"}`} />
                  <span className="font-medium truncate">{r.name}</span>
                  {r.best && (
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                      <CheckCircle2 className="w-3 h-3" /> Selected
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 md:gap-8 text-sm tabular-nums">
                  <span className="text-muted-foreground hidden sm:inline">{r.speed}</span>
                  <span className={r.best ? "text-primary-glow font-semibold" : "text-foreground"}>{r.fee}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-success/15 text-success border border-success/30">
                    {r.risk}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
            <span>Decision in <span className="text-foreground font-semibold">38ms</span></span>
            <span>Saved <span className="text-success font-semibold">$27.99</span> vs SWIFT</span>
          </div>
        </div>

        {/* Fraud Shield card */}
        <div className="lg:col-span-2 glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="flex items-center gap-3 mb-6 relative">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
              <Brain className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-accent font-semibold">AI Fraud Shield</p>
              <h3 className="text-xl font-bold">Real-time risk scoring</h3>
            </div>
          </div>

          <div className="relative space-y-4">
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm text-muted-foreground">Risk score</span>
                <span className="text-3xl font-bold text-success tabular-nums">12<span className="text-base text-muted-foreground">/100</span></span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full w-[12%] bg-gradient-to-r from-success to-primary rounded-full" />
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" /> Wallet history verified
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" /> Geo + device match
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <AlertTriangle className="w-4 h-4 text-warning shrink-0" /> 1 anomaly auto-mitigated
              </div>
            </div>

            <div className="rounded-lg border border-success/30 bg-success/10 px-3 py-2 text-xs text-success font-medium">
              ✓ Transaction approved · model v4.2
            </div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {pillars.map((p) => (
          <div key={p.title} className="glass rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary/15 border border-border flex items-center justify-center shrink-0">
              <p.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">{p.title}</h4>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
