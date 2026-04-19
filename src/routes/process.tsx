import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./services";
import { SplitCTA } from "../components/SplitCTA";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — From scoping to report | AeroInspect" },
      { name: "description", content: "Our 5-step inspection workflow: scoping, planning, flight, processing, and report delivery in 48–72h." },
      { property: "og:title", content: "AeroInspect Process" },
      { property: "og:description", content: "How we deliver actionable inspection reports in 48–72h." },
    ],
  }),
  component: ProcessPage,
});

const STEPS = [
  { n: "01", t: "Contact & information gathering", d: "Discovery call to understand assets, locations, regulatory environment and goals. We send a scoped proposal within 24h." },
  { n: "02", t: "Mission planning", d: "Flight paths, altitudes, sensor configurations and safety protocols designed by our operations team. Permits and NOTAMs filed." },
  { n: "03", t: "Flight execution", d: "Certified pilots and visual observers deploy on-site. Thermal and RGB capture executed under controlled flight parameters." },
  { n: "04", t: "Data processing", d: "Imagery aligned, orthomosaics generated, AI-assisted defect detection. Every finding geolocated and severity-ranked." },
  { n: "05", t: "Report delivery", d: "Engineering-grade report with executive summary, defect catalog, GIS files and recommendations — within 48–72 hours." },
];

function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="A clear, repeatable workflow"
        description="From first call to final report, every step is documented and predictable."
      />
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <ol className="relative border-l-2 border-primary/20 ml-3 space-y-10">
            {STEPS.map((s) => (
              <li key={s.n} className="pl-8 relative">
                <span className="absolute -left-[19px] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow">
                  {s.n}
                </span>
                <h3 className="text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground max-w-2xl">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <SplitCTA />
    </>
  );
}
