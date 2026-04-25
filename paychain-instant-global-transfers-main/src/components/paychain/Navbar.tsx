import { Button } from "@/components/ui/button";
import { Boxes } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Security", href: "#security" },
];

export const Navbar = () => (
  <header className="fixed top-0 inset-x-0 z-50">
    <div className="container mx-auto mt-4 px-4">
      <nav className="glass rounded-2xl flex items-center justify-between px-5 py-3 shadow-elegant">
        <a href="#" className="flex items-center gap-2 group">
  <div className="relative">
    <div className="absolute inset-0 " />

 <div className="relative flex items-center">
  <img
    src="/Design sans titre (2).png"
    alt="PayChain Logo"
    className="h-12 w-auto object-contain"
  />
</div>

  </div>

  
</a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Sign in</Button>
          <Button variant="hero" size="sm">Get Started</Button>
        </div>
      </nav>
    </div>
  </header>
);