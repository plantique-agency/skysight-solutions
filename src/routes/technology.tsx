import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Camera, Thermometer, PlaneTakeoff, Map, Cog } from "lucide-react";
import { PageHeader } from "./services";
import { SplitCTA } from "../components/SplitCTA";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology & Equipment | AeroInspect" },
      { name: "description", content: "Fixed-wing & multirotor drones, radiometric thermal cameras, RGB sensors and AI analytics for energy inspections." },
      { property: "og:title", content: "AeroInspect Technology" },
      { property: "og:description", content: "Industrial-grade drones, sensors and software for energy asset inspections." },
    ],
  }),
  component: TechnologyPage,
});

const TECH = [
  { icon: PlaneTakeoff, title: "Fixed-wing drones", text: "Long-endurance platforms covering up to 60 km of corridor per day with VTOL capability." },
  { icon: PlaneTakeoff, title: "Multirotor drones", text: "Industrial multirotors for close-range, high-precision inspection of structures and substations." },
  { icon: Thermometer, title: "Radiometric thermography", text: "640×512 cooled thermal sensors with ±2°C accuracy for true temperature measurement." },
  { icon: Camera, title: "RGB high-resolution", text: "45MP cameras and zoom payloads for sub-millimetric defect identification." },
  { icon: Cpu, title: "Data processing software", text: "Pix4D, Metashape and proprietary pipelines for orthomosaics and 3D models." },
  { icon: Map, title: "GIS deliverables", text: "Geolocated defect catalogs delivered as PDF, KMZ, GeoJSON and interactive web maps." },
  { icon: Cog, title: "Workflow automation", text: "AI-assisted defect classification accelerates analyst review by 5×." },
];

function TechnologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technology"
        title="The equipment behind every mission"
        description="A fully integrated stack of aircraft, sensors and software, calibrated for energy infrastructure."
      />
      <section className="py-16 md:py-24">
        <div className="container-narrow grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
