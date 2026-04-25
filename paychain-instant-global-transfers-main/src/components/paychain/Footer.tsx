import { Boxes, Github, Twitter, Linkedin } from "lucide-react";

const cols = [
  { title: "Product", links: ["Features", "Dashboard", "Pricing", "Changelog"] },
  { title: "Developers", links: ["Documentation", "API Reference", "SDKs", "Status"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "Compliance"] },
];

export const Footer = () => (
  <footer className="border-t border-border pt-16 pb-10">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-6 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Boxes className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">PayChain</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Decentralized payments for an open, borderless economy.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:shadow-glow transition-shadow">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-sm font-semibold mb-4">{c.title}</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} PayChain Labs. All rights reserved.</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          All systems operational
        </div>
      </div>
    </div>
  </footer>
);