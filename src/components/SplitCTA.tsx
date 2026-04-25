import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function SplitCTA() {
  return (
    <section className="grid md:grid-cols-2">
      <div
        className="relative min-h-[340px] flex items-center p-8 md:p-14 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, oklch(0.18 0.04 257 / 0.88), oklch(0.40 0.10 248 / 0.7)), url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=70)",
        }}
      >
        <div className="text-white max-w-md">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to inspect your assets?</h3>
          <p className="mt-3 text-white/80">
            Request a free site assessment. Our team responds within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-white/90 transition-colors"
          >
            Request inspection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div
        className="relative min-h-[340px] flex items-center p-8 md:p-14 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, oklch(0.27 0.03 257 / 0.92), oklch(0.18 0.04 257 / 0.85)), url(https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=70)",
        }}
      >
        <div className="text-white max-w-md">
          <h3 className="text-2xl md:text-3xl font-bold">Want to learn more?</h3>
          <p className="mt-3 text-white/80">
            Get in touch and we’ll share sample deliverables and walk you through our inspection approach.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/0 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
