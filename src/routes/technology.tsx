import { createFileRoute } from "@tanstack/react-router";
import {
  PlaneTakeoff,
  Drone,
  Thermometer,
  Camera,
  Target,
  MapPinned,
  Layers,
  BarChart3,
  Shield,
} from "lucide-react";
import { PageHeader } from "./services";
import { SplitCTA } from "../components/SplitCTA";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology & Equipment | Utilisight" },
      { name: "description", content: "Fixed-wing & multirotor drones, radiometric thermal cameras, RGB sensors and AI analytics for energy inspections." },
      { property: "og:title", content: "Utilisight Technology" },
      { property: "og:description", content: "Industrial-grade drones, sensors and software for energy asset inspections." },
    ],
  }),
  component: TechnologyPage,
});

const TECH = [
  {
    icon: PlaneTakeoff,
    title: "Fixed-wing drones",
    text: "Long-endurance platforms covering up to 60 km of corridor per day with VTOL capability.",
  },
  {
    icon: Drone,
    title: "Multirotor RPAS",
    text: "Industrial multirotor platform for close-range, high-precision inspection of distribution infrastructure, poles, and substation equipment.",
  },
  {
    icon: Thermometer,
    title: "Radiometric Thermal Imaging",
    text: "640 × 512 radiometric thermal sensor with temperature measurement capability (±2°C or ±2%) for detection of thermal anomalies in electrical components.",
  },
  {
    icon: Camera,
    title: "High-Resolution RGB Imaging",
    text: "48 MP visual sensor with zoom capability for detailed inspection of conductors, hardware, insulators, and structural components.",
  },
  {
    icon: Target,
    title: "RTK Positioning",
    text: "Integrated RTK GNSS for centimeter-level positioning accuracy, enabling precise geolocation of defects and repeatable inspection workflows.",
  },
  {
    icon: MapPinned,
    title: "GIS-Ready Deliverables",
    text: "Georeferenced inspection outputs delivered in PDF, KMZ, GeoJSON, and interactive map formats for seamless integration into client systems.",
  },
  {
    icon: Layers,
    title: "Geospatial Data Processing",
    text: "Photogrammetry and mapping workflows (Pix4D / Metashape) for orthomosaics, 3D models, and asset-level measurements.",
  },
  {
    icon: BarChart3,
    title: "Inspection Analytics",
    text: "Structured defect classification and severity-based reporting to support maintenance prioritization and asset management decisions.",
  },
  {
    icon: Shield,
    title: "Operational Safety & Compliance",
    text: "RPAS operations conducted under Transport Canada regulations with site-specific risk assessments and standardized safety procedures.",
  },
];

function TechnologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technology"
        title="The Equipment Behind Every Mission"
        description="A fully integrated stack of aircraft, sensors and software, calibrated for energy infrastructure."
      />
      <section className="py-16 md:py-24">
        <div className="container-narrow grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {TECH.map((t) => (
            <div
              key={t.title}
              className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{t.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{t.text}</p>
            </div>
          ))}
        </div>
      </section>
      <SplitCTA />
    </>
  );
}
