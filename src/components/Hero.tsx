import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative min-h-[88vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=2000&q=75)",
      }}
    >
      <div className="absolute inset-0 hero-gradient" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.12_0.04_257/0.6)_100%)]" aria-hidden />

      <div className="container-narrow relative z-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-white/90">
            <ShieldCheck className="h-3.5 w-3.5" /> Certified aerial operations
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance leading-[1.05]">
            Intelligent inspections from above
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl">
            We reduce inspection times by up to 80% using drone technology and detect failures before they occur.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary-hover transition-colors"
            >
              Request a free inspection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-8 text-sm text-white/70">
            Certified pilots by Transport Canada · Ontariowide operations
          </p>
        </motion.div>
      </div>
    </section>
  );
}
