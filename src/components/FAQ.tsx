import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Do inspections require shutting down the line or plant?",
    a: "No. Our drone-based inspections are non-intrusive and performed with assets fully energized, eliminating costly downtime.",
  },
  {
    q: "Who handles flight permits and authorizations?",
    a: "We do. Our operations team manages all aviation authority paperwork, NOTAMs, and landowner coordination end-to-end.",
  },
  {
    q: "Can you operate in remote or hard-to-access areas?",
    a: "Yes. Our fixed-wing fleet covers long transmission corridors and our multirotor drones handle confined or rugged terrain.",
  },
  {
    q: "What about adverse weather conditions?",
    a: "We monitor conditions continuously and operate within strict wind, visibility, and precipitation thresholds. Missions are rescheduled when needed at no extra cost.",
  },
  {
    q: "What's your daily inspection capacity?",
    a: "Up to 60 km of distribution lines or 50 MW of solar capacity per day, per crew, depending on resolution and sensor configuration.",
  },
  {
    q: "Are reports approved by regulators?",
    a: "Our deliverables follow IEC, IEEE, and local utility standards, and have been accepted by regulators across multiple jurisdictions.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl mt-12 divide-y divide-border rounded-xl border border-border bg-card shadow-card">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-accent/50 transition-colors"
            >
              <span className="font-semibold text-foreground">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 text-primary shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 -mt-1 text-muted-foreground">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
