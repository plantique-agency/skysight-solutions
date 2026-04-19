import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Plane } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/technology", label: "Technology" },
  { to: "/process", label: "Process" },
  { to: "/sectors", label: "Sectors" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-narrow flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group" aria-label="AeroInspect home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm group-hover:bg-primary-hover transition-colors">
            <Plane className="h-5 w-5 -rotate-45" />
          </span>
          <span className="font-bold text-lg tracking-tight">
            Aero<span className="text-primary">Inspect</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md data-[status=active]:text-primary data-[status=active]:bg-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary-hover transition-colors"
          >
            Request Inspection
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-accent"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-narrow flex flex-col py-3" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-medium text-foreground hover:bg-accent rounded-md data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Request Inspection
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
