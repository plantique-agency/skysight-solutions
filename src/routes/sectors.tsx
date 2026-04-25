import { createFileRoute } from "@tanstack/react-router";
import { Building2, SunMedium, Landmark, Briefcase, HardHat } from "lucide-react";
import { PageHeader } from "./services";
import { SplitCTA } from "../components/SplitCTA";

export const Route = createFileRoute("/sectors")({
  head: () => ({
    meta: [
      { title: "Sectors we serve | Utilisight" },
      { name: "description", content: "Trusted by electrical utilities, solar operators, insurance companies, government agencies and EPC firms." },
      { property: "og:title", content: "Utilisight — Who we work with" },
      { property: "og:description", content: "Drone inspections for utilities, solar operators, EPCs and government agencies." },
    ],
  }),
  component: SectorsPage,
});

const SECTORS = [
  { icon: Building2, t: "Electrical utilities", d: "Distribution and transmission operators reducing outage rates and maintenance costs." },
  { icon: SunMedium, t: "Solar operators", d: "PV plant owners protecting yield and accelerating O&M decisions." },
  { icon: Briefcase, t: "Insurance Companies", d: "Providing high-resolution aerial evidence and condition reports to support damage assessment, risk mitigation, and claims verification for large-scale infrastructure." },
  { icon: Landmark, t: "Government agencies", d: "Public infrastructure assessments and regulatory compliance reporting." },
  { icon: HardHat, t: "EPC firms", d: "Pre-commissioning and post-construction quality assurance for new projects." },
];

function SectorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sectors"
        title="Who We Work With"
        description="Engineering teams across the energy value chain trust Utilisight with their critical infrastructure."
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

      <SplitCTA />
    </>
  );
}
