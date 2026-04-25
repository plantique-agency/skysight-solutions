import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";

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

function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}
