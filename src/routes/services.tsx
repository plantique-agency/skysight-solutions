import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Zap,
  SunMedium,
  Home,
  CheckCircle2,
  ArrowRight,
  Clock,
  DollarSign,
  ShieldAlert,
  FileX2,
} from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { SplitCTA } from "../components/SplitCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Drone inspections for power lines & solar | Utilisight" },
      { name: "description", content: "Specialized aerial inspections for electrical distribution lines and photovoltaic solar farms." },
      { property: "og:title", content: "Utilisight Services" },
      { property: "og:description", content: "Power line and solar farm drone inspections with thermal & RGB sensors." },
    ],
  }),
  component: ServicesPage,
});

const PROBLEMS = [
  { icon: Clock, title: "Time inefficiency", text: "Manual ground inspections take weeks for what drones complete in days." },
  { icon: DollarSign, title: "High operational costs", text: "Trucks, climbers and shutdowns inflate budgets without improving accuracy." },
  { icon: ShieldAlert, title: "Personnel safety risks", text: "Working at height and near energized assets exposes crews to serious hazards." },
  { icon: FileX2, title: "Incomplete data", text: "Visual-only inspections miss thermal anomalies and structural micro-defects." },
] as const;

const SERVICES = [
  {
    icon: Zap,
    title: "Condition-Based Distribution Asset Assessment",
    image: "/poles.jpg",
    text: "Comprehensive aerial thermography (radiometric data) and high-resolution RGB imagery of distribution infrastructure up to 44kV. We deliver geolocated defect reports, ranked by criticality, so your maintenance team knows exactly where to focus.",
    detects: [
      "Hotspots and thermal anomalies in connectors",
      "Degradation of dielectric components (insulators)",
      "Structural health and pole verticality anomalies",
      "Vegetation encroachment risk identification",
    ],
  },
  {
    icon: SunMedium,
    title: "Asset Integrity Management: Solar PV (Multi-MW Arrays)",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=70",
    text: "Engineering-grade aerial thermography performed in strict compliance with the IEC 62446-3 standard. Rapidly identify cell-level hotspots, complete string failures, or tracking system inefficiencies that impact Yield and OPEX. From 1 MW community solar to utility-scale arrays — single mission, complete coverage.",
    detects: [
      "Cell-level hotspots",
      "Complete string failures",
      "Tracking system inefficiencies",
    ],
  },
  {
    icon: Home,
    title: "Solar Array Inspection / Roofing Asset Inspection",
    image: "/techo.webp",
    text: "A damaged roof puts everything above and below it at risk — solar panels, electrical penetrations, and the home or facility underneath. We inspect residential and commercial rooftops with high-resolution RGB and thermal imaging, giving owners and operators a clear picture of what needs attention.",
    detects: [
      "Membrane tears and punctures",
      "Thermal anomalies around solar mounting points",
      "Standing water and drainage issues",
      "Storm, hail and impact damage",
      "Compromised weatherproofing at cable entries",
      "Panel-level heat signatures on rooftop solar",
      "Documentation for insurance and maintenance",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Specialized Aerial Inspections for Energy Infrastructure"
        description="Three specialized services. One mission: give engineering teams the data they need to act fast and maintain with precision"
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
                  Get a Project Estimate <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="The problem"
            title="Traditional inspections are slow, costly, and dangerous"
            description="Energy operators lose millions to undetected faults and inefficient maintenance routines. Utilisight helps teams act faster with better data."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl bg-card border border-border p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
              </motion.div>
            ))}
          </div>
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
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          eyebrowClassName="text-primary-foreground"
          titleClassName="text-white"
          descriptionClassName="text-slate-100/80"
        />
      </div>
    </section>
  );
}
