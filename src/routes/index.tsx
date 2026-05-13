import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Utilisight — Drone inspections for power lines & solar farms" },
      { name: "description", content: "Reduce inspection times by up to 80%. Thermographic & RGB drone surveys for utilities and solar operators. Reports in 48–72h." },
      { property: "og:title", content: "Utilisight — Intelligent inspections from above" },
      { property: "og:description", content: "Drone-based inspections for energy infrastructure. Faster, safer, data-driven." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=70" },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=70" },
    ],
  }),
  component: HomePage,
});

const WHY_US_BLOCKS = [
  {
    title: "Energy infrastructure is our primary focus",
    text: "Energy is at the core of what we do — distribution lines, solar arrays, rooftops with energy assets. That focus shapes how we fly, what we look for, and how we report. If you work in energy, you are talking to someone who understands your assets.",
  },
  {
    title: "Radiometric thermal imaging on every mission",
    text: "Not all thermal data is equal. We capture fully radiometric thermal imagery — every pixel contains real temperature data, not just a color picture. That is the difference between spotting a problem and being able to measure and document it precisely.",
  },
  {
    title: "You work directly with the operator",
    text: "No account managers, no handoffs. The person you contact is the same person flying the mission and building your report. Better context, faster answers, and no details lost in translation.",
  },
  {
    title: "Reports built for action, not archives",
    text: "Every finding is geolocated and ranked by criticality. Your team gets a clear picture of what needs attention first — no raw data to interpret, no guesswork.",
  },
] as const;

function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-20 md:py-28">
        <div className="container-narrow grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader align="left" eyebrow="WHY US" title="Specialized focus. Reliable data. Clear results." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {WHY_US_BLOCKS.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-xl bg-card border border-border p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all"
                >
                  <h3 className="font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{b.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
            <img
              alt="Engineer reviewing drone inspection data"
              loading="lazy"
              className="h-full w-full object-cover"
              src="/autel.jpg"
              style={{ objectPosition: "60% 30%" }}
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-background/95 backdrop-blur p-5 shadow-card">
              <div className="text-3xl font-bold text-primary">98.6%</div>
              <div className="text-sm text-muted-foreground">defect detection accuracy across audited projects</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
