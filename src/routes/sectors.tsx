import { createFileRoute } from "@tanstack/react-router";
import { Building2, SunMedium, Landmark, Briefcase, HardHat } from "lucide-react";
import { PageHeader } from "./services";
import { SplitCTA } from "../components/SplitCTA";

export const Route = createFileRoute("/sectors")({
  head: () => ({
    meta: [
      { title: "Sectors we serve | AeroInspect" },
      { name: "description", content: "Trusted by electrical utilities, solar operators, investment funds, government agencies and EPC firms." },
      { property: "og:title", content: "AeroInspect — Who we work with" },
      { property: "og:description", content: "Drone inspections for utilities, solar operators, EPCs and government agencies." },
    ],
  }),
  component: SectorsPage,
});

const SECTORS = [
  { icon: Building2, t: "Electrical utilities", d: "Distribution and transmission operators reducing outage rates and maintenance costs." },
  { icon: SunMedium, t: "Solar operators", d: "PV plant owners protecting yield and accelerating O&M decisions." },
  { icon: Briefcase, t: "Investment funds", d: "Independent technical due-diligence for asset acquisitions and audits." },
  { icon: Landmark, t: "Government agencies", d: "Public infrastructure assessments and regulatory compliance reporting." },
  { icon: HardHat, t: "EPC firms", d: "Pre-commissioning and post-construction quality assurance for new projects." },
];

const CASES = [
  { kpi: "240 km", t: "Transmission corridor audit", d: "Hotspot and vegetation survey for a regional utility — 4 days vs. 6 weeks manual." },
  { kpi: "85 MW", t: "Solar farm thermography", d: "Identified 412 underperforming modules, recovering 1.2% of annual yield." },
  { kpi: "1,800 poles", t: "Distribution network inventory", d: "Full asset condition report for an EPC handover." },
];

function SectorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sectors"
        title="Who we work with"
        description="Engineering teams across the energy value chain trust AeroInspect with their critical infrastructure."
      />
      <section className="py-16 md:py-20">
        <div className="container-narrow grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s) => (
            <div key={s.t} className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition-all">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Selected case studies</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {CASES.map((c) => (
              <div key={c.t} className="rounded-2xl bg-card border border-border p-7 shadow-card">
                <div className="text-3xl font-bold text-primary">{c.kpi}</div>
                <div className="mt-3 font-semibold">{c.t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SplitCTA />
    </>
  );
}
