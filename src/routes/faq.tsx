import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./services";
import { FAQ } from "../components/FAQ";
import { SplitCTA } from "../components/SplitCTA";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Drone inspection questions | AeroInspect" },
      { name: "description", content: "Permits, weather, capacity, regulator approval — answers to the most common questions about drone inspections." },
      { property: "og:title", content: "AeroInspect FAQ" },
      { property: "og:description", content: "Common questions about drone inspections for energy infrastructure." },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Frequently asked questions" description="Everything you need to know before your first inspection." />
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <FAQ />
        </div>
      </section>
      <SplitCTA />
    </>
  );
}
