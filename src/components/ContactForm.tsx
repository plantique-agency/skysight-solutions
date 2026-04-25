import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 text-2xl font-bold">Request received</h3>
        <p className="mt-2 text-muted-foreground">
          Thank you. Our team will reach out within 24 hours to coordinate the assessment.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card grid gap-4"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone / WhatsApp" name="phone" type="tel" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Select label="Project type" name="type" options={["Distribution Pole Inspection", "Solar farm inspection", "Both", "Other"]} />
        <Select label="Project size" name="size" options={["< 10 km / 5 MW", "10–50 km / 5–25 MW", "50+ km / 25+ MW", "Not sure yet"]} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={1000}
          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Tell us about your assets, location and timing…"
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
      >
        Submit request <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-1.5">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <select
        id={name}
        name={name}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
