import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Clock, DollarSign, ShieldAlert, FileX2,
  Zap, SunMedium, ArrowRight,
  Cpu, Camera, Thermometer, PlaneTakeoff, Map,
  CheckCircle2,
} from "lucide-react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { SplitCTA } from "../components/SplitCTA";
import { FAQ } from "../components/FAQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AeroInspect — Drone inspections for power lines & solar farms" },
      { name: "description", content: "Reduce inspection times by up to 80%. Thermographic & RGB drone surveys for utilities and solar operators. Reports in 48–72h." },
      { property: "og:title", content: "AeroInspect — Intelligent inspections from above" },
      { property: "og:description", content: "Drone-based inspections for energy infrastructure. Faster, safer, data-driven." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=70" },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=70" },
    ],
  }),
  component: HomePage,
});

const PROBLEMS = [
  { icon: Clock, title: "Time inefficiency", text: "Manual ground inspections take weeks for what drones complete in days." },
  { icon: DollarSign, title: "High operational costs", text: "Trucks, climbers and shutdowns inflate budgets without improving accuracy." },
  { icon: ShieldAlert, title: "Personnel safety risks", text: "Working at height and near energized assets exposes crews to serious hazards." },
  { icon: FileX2, title: "Incomplete data", text: "Visual-only inspections miss thermal anomalies and structural micro-defects." },
];

const METRICS = [
  { v: "500+", l: "km inspected" },
  { v: "120+", l: "MW audited" },
  { v: "78%", l: "faster inspections" },
  { v: "0", l: "accidents" },
  { v: "48h", l: "avg. delivery" },
];

const TECH = [
  { icon: PlaneTakeoff, title: "Fixed-wing drones", text: "Long-range coverage for transmission corridors up to 60 km/day." },
  { icon: PlaneTakeoff, title: "Multirotor drones", text: "Precision close-range inspection of substations and structures." },
  { icon: Thermometer, title: "Thermographic cameras", text: "Radiometric sensors detect hotspots invisible to the eye." },
  { icon: Camera, title: "RGB high-resolution cameras", text: "45MP imaging reveals corrosion, cracks and hardware defects." },
  { icon: Cpu, title: "AI-powered analytics", text: "Automated defect classification with geolocation for every finding." },
  { icon: Map, title: "GIS reporting", text: "Interactive maps and PDF deliverables ready for engineering teams." },
];

const STEPS = [
  { n: "01", t: "Contact & scoping", d: "We learn your assets, goals and constraints." },
  { n: "02", t: "Mission planning", d: "Permits, flight paths and safety protocols defined." },
  { n: "03", t: "Flight execution", d: "Certified pilots capture RGB and thermal data." },
  { n: "04", t: "Data processing", d: "AI-assisted analysis, defect classification, geolocation." },
  { n: "05", t: "Report delivery", d: "Engineering-grade reports delivered in 48–72h." },
];

const WHY = [
  "Energy-focused expertise — we only do infrastructure",
  "Certified pilots and thermography analysts (Level II)",
  "Actionable reports prioritized by criticality",
  "Strict safety and regulatory compliance",
  "Fast 48–72h delivery, nationwide operations",
];

function HomePage() {
  return (
    <>
      <Hero />

      {/* Problem */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="The problem"
            title="Traditional inspections are slow, costly, and dangerous"
            description="Energy operators lose millions to undetected faults and inefficient maintenance routines. We built AeroInspect to fix that."
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

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeader eyebrow="What we do" title="Specialized services for energy assets" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <ServiceCard
              icon={Zap}
              title="Electrical distribution line inspection"
              text="From medium-voltage networks to transmission corridors, we map every defect with RGB and thermal imaging."
              detects={["Hotspots in connectors", "Insulator damage", "Vegetation encroachment", "Pole tilt & corrosion"]}
              image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=70"
            />
            <ServiceCard
              icon={SunMedium}
              title="Solar farm inspection"
              text="Locate underperforming modules, hotspots and string failures across multi-MW arrays in a single flight."
              detects={["Cell-level hotspots", "Diode failures", "Soiling & shading", "Tracker misalignment"]}
              image="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=70"
            />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-narrow grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Why us"
              title="The difference of working with specialists"
              description="We're not a generic drone company. Energy infrastructure is all we do — and that focus translates into better data, better decisions."
            />
            <ul className="mt-8 space-y-3">
              {WHY.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated"
          >
            <img
              src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=900&q=75"
              alt="Engineer reviewing drone inspection data"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-background/95 backdrop-blur p-5 shadow-card">
              <div className="text-3xl font-bold text-primary">98.6%</div>
              <div className="text-sm text-muted-foreground">defect detection accuracy across audited projects</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Equipment"
            title="Industrial-grade technology"
            description="From radiometric sensors to AI analytics, our stack is engineered for energy-sector accuracy."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-28">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">How we work</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">A clear, repeatable process</h2>
            <p className="mt-4 text-white/70">Five steps from first call to final report.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-5">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-xl bg-white/5 border border-white/10 p-6"
              >
                <div className="text-primary font-bold tracking-wider">{s.n}</div>
                <div className="mt-2 font-semibold text-white">{s.t}</div>
                <div className="mt-1.5 text-sm text-white/65">{s.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container-narrow">
          <SectionHeader eyebrow="Track record" title="Results that speak for themselves" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6">
            {METRICS.map((m) => (
              <div key={m.l} className="text-center rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="text-3xl md:text-4xl font-bold text-primary">{m.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split CTA */}
      <SplitCTA />

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
          <FAQ />
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon: Icon, title, text, detects, image,
}: {
  icon: typeof Zap; title: string; text: string; detects: string[]; image: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:shadow-elevated transition-all"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-7">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{text}</p>
        <ul className="mt-4 grid grid-cols-2 gap-y-1.5 text-sm">
          {detects.map((d) => (
            <li key={d} className="flex items-center gap-2 text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {d}
            </li>
          ))}
        </ul>
        <Link
          to="/services"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover"
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
