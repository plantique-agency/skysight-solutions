import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader } from "./services";
import { ContactForm } from "../components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Request an inspection | Utilisight" },
      { name: "description", content: "Request a free site assessment. Our team responds within 24 hours. Nationwide drone inspection operations." },
      { property: "og:title", content: "Contact Utilisight" },
      { property: "og:description", content: "Let's talk about your project — request a free inspection assessment." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell us about your assets and timeline. We'll get back within 24 hours."
      />
      <section className="py-16 md:py-24">
        <div className="container-narrow grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <InfoRow icon={Phone} title="Phone / WhatsApp" lines={[<a key="t" href="tel:+14379858229" className="hover:text-primary">+1 437-985-8229</a>]} />
            <InfoRow icon={Mail} title="Email" lines={[<a key="m" href="mailto:ralvarez@utilisight.ca" className="hover:text-primary">ralvarez@utilisight.ca</a>]} />
            <InfoRow icon={MapPin} title="Location" lines={["North York, Ontario"]} />
            <InfoRow icon={Clock} title="Response time" lines={["Within 24 hours", "Mon–Fri, 8am–6pm"]} />

            <div className="mt-8 rounded-xl border border-border bg-surface p-5">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Prefer a quick chat?</strong> Use the floating WhatsApp button to reach our operations team directly.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon: Icon, title, lines }: { icon: typeof Mail; title: string; lines: React.ReactNode[] }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="mt-1 text-sm text-muted-foreground space-y-0.5">
          {lines.map((l, i) => <div key={i}>{l}</div>)}
        </div>
      </div>
    </div>
  );
}
