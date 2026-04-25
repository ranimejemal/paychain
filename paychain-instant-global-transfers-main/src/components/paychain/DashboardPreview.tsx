import { SectionHeader } from "./Features";
import { ArrowDownLeft, ArrowUpRight, Copy, Eye, Plus, QrCode, Send, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const txs = [
  { type: "in", who: "Alex Chen", note: "Invoice #2041", amount: "+1,250.00", coin: "USDC", time: "2 min ago", status: "Confirmed" },
  { type: "out", who: "0x9b4e…f12a", note: "Rent payment", amount: "−820.00", coin: "USDC", time: "1 hr ago", status: "Confirmed" },
  { type: "in", who: "Sofia Rivera", note: "Freelance work", amount: "+3,420.50", coin: "USDT", time: "3 hr ago", status: "Confirmed" },
  { type: "out", who: "Mira Patel", note: "Split dinner", amount: "−42.10", coin: "USDC", time: "Yesterday", status: "Pending" },
];

export const DashboardPreview = () => (
  <section id="dashboard" className="py-28 relative">
    <div className="container mx-auto px-4">
      <SectionHeader
        eyebrow="Dashboard"
        title={<>Your money, <span className="text-gradient">beautifully on-chain</span></>}
        sub="A clean interface that turns blockchain complexity into a delightful payments experience."
      />

      <div className="mt-16 relative">
        <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-full pointer-events-none" />
        <div className="relative glass rounded-3xl p-4 md:p-6 shadow-neon">
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Balance Card */}
            <div className="lg:col-span-2 rounded-2xl p-6 bg-gradient-primary text-primary-foreground relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-10" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium opacity-80">
                    <Wallet className="w-4 h-4" /> Total Balance
                  </div>
                  <button className="text-xs flex items-center gap-1 opacity-80 hover:opacity-100">
                    <Eye className="w-3.5 h-3.5" /> Hide
                  </button>
                </div>
                <div className="mt-3 text-5xl font-bold tracking-tight tabular-nums">$24,318.42</div>
                <div className="mt-1 text-sm opacity-80">≈ 8.243 ETH · +2.4% today</div>

                <div className="mt-6 flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-background/15 backdrop-blur text-xs font-mono flex items-center gap-2">
                    0x7f3a…9b4e <Copy className="w-3 h-3" />
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-background/15 backdrop-blur text-xs flex items-center gap-1">
                    <QrCode className="w-3 h-3" /> QR
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Button variant="glass" size="sm"><Send className="mr-1 w-4 h-4" /> Send</Button>
                  <Button variant="glass" size="sm"><ArrowDownLeft className="mr-1 w-4 h-4" /> Receive</Button>
                  <Button variant="glass" size="sm"><Plus className="mr-1 w-4 h-4" /> Add funds</Button>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <StatCard label="Sent this month" value="$8,420" delta="+12%" />
              <StatCard label="Received this month" value="$11,930" delta="+24%" positive />
            </div>
          </div>

          {/* Transactions */}
          <div className="mt-4 rounded-2xl border border-border bg-card/40 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Recent transactions</h3>
              <a href="#" className="text-xs text-accent hover:underline">View all</a>
            </div>
            <ul className="divide-y divide-border">
              {txs.map((t, i) => (
                <li key={i} className="py-3 flex items-center gap-4">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center ${t.type === "in" ? "bg-success/15 text-success" : "bg-accent/15 text-accent"}`}>
                    {t.type === "in" ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{t.who}</div>
                    <div className="text-xs text-muted-foreground truncate">{t.note} · {t.time}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold tabular-nums">{t.amount} <span className="text-muted-foreground font-normal text-xs">{t.coin}</span></div>
                    <div className={`text-[10px] inline-flex items-center gap-1 mt-0.5 ${t.status === "Confirmed" ? "text-success" : "text-warning"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${t.status === "Confirmed" ? "bg-success" : "bg-warning animate-pulse"}`} />
                      {t.status}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StatCard = ({ label, value, delta, positive }: { label: string; value: string; delta: string; positive?: boolean }) => (
  <div className="rounded-2xl border border-border bg-card/40 p-5">
    <div className="text-xs text-muted-foreground">{label}</div>
    <div className="mt-2 text-2xl font-semibold tabular-nums">{value}</div>
    <div className={`mt-1 text-xs ${positive ? "text-success" : "text-muted-foreground"}`}>{delta} vs last month</div>
  </div>
);