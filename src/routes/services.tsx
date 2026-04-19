import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, SunMedium, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { SplitCTA } from "../components/SplitCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Drone inspections for power lines & solar | AeroInspect" },
      { name: "description", content: "Specialized aerial inspections for electrical distribution lines and photovoltaic solar farms." },
      { property: "og:title", content: "AeroInspect Services" },
      { property: "og:description", content: "Power line and solar farm drone inspections with thermal & RGB sensors." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Zap,
    title: "Electrical distribution line inspection",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=70",
    text: "Comprehensive RGB + thermal surveys of distribution and transmission networks. We deliver geolocated defect lists prioritized by criticality so your maintenance teams know exactly where to act.",
    detects: [
      "Hotspots in clamps & connectors",
      "Damaged or contaminated insulators",
      "Corrosion on conductors and hardware",
      "Vegetation encroachment risks",
      "Pole tilt and structural anomalies",
      "Bird nests and foreign objects",
    ],
  },
  {
    icon: SunMedium,
    title: "Solar farm inspection",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=70",
    text: "Aerial thermography across multi-MW arrays in a single mission. Identify failing modules, string-level issues and tracker misalignment before they hurt production.",
    detects: [
      "Cell-level hotspots and PID",
      "Bypass diode failures",
      "Disconnected strings",
      "Soiling and shading patterns",
      "Tracker misalignment",
      "Junction box anomalies",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Specialized aerial inspections for energy infrastructure"
        description="Two core services. One mission: give engineering teams the data they need to act fast."
      />

      <section className="py-16 md:py-24">
        <div className="container-narrow space-y-16">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.text}</p>
                <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-foreground">Key detection capabilities</h3>
                <ul className="mt-3 grid sm:grid-cols-2 gap-y-2 gap-x-4">
                  {s.detects.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
                >
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SplitCTA />
    </>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="bg-secondary text-secondary-foreground py-20 md:py-24 border-b border-white/5">
      <div className="container-narrow">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  );
}
