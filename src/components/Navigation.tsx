import React from "react";
import { PremiumButton } from "@/components/ui/premium-button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/** Truthful section navigation — every target is a real section id on the page. */
const NAV_LINKS = [
  { label: "Technology", href: "#pipeline" },
  { label: "Evolution", href: "#evolution" },
  { label: "Governance", href: "#governance" },
];

const Navigation = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 glass-morphism">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#category" aria-label="OmnisX.ai — back to top of page">
            <img
              src="/omnisx-logo.png"
              alt="OmnisX.ai Logo"
              className="h-9 md:h-10 lg:h-11 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <PremiumButton
              key={link.href}
              asChild
              variant="ghost"
              className="text-muted-foreground"
            >
              <a href={link.href}>{link.label}</a>
            </PremiumButton>
          ))}
          <div className="w-px h-6 bg-border mx-2" />
          <PremiumButton asChild variant="primary" size="default">
            <a href="#access">Request Access</a>
          </PremiumButton>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <PremiumButton
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </PremiumButton>
          </SheetTrigger>
          <SheetContent side="right" className="w-[78vw] max-w-xs glass-morphism">
            <SheetTitle className="font-orbitron text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </SheetTitle>
            <nav className="mt-8 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  {link.label}
                </a>
              ))}
              <PremiumButton
                asChild
                variant="primary"
                size="lg"
                className="mt-5 w-full"
              >
                <a href="#access" onClick={() => setOpen(false)}>
                  Request Access
                </a>
              </PremiumButton>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
