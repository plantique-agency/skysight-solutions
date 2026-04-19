import { Link } from "@tanstack/react-router";
import { Plane, Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-narrow py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
                <Plane className="h-5 w-5 -rotate-45" />
              </span>
              <span className="font-bold text-lg">AeroInspect</span>
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              Safer, more efficient energy infrastructure — from above.
            </p>
            <div className="mt-5 flex gap-3">
              {[Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-primary transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/services" className="hover:text-white">Power line inspection</Link></li>
              <li><Link to="/services" className="hover:text-white">Solar farm inspection</Link></li>
              <li><Link to="/technology" className="hover:text-white">Thermographic surveys</Link></li>
              <li><Link to="/process" className="hover:text-white">Technical reports</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/sectors" className="hover:text-white">Sectors</Link></li>
              <li><Link to="/process" className="hover:text-white">Our process</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Nationwide operations</li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> <a href="tel:+15555550123" className="hover:text-white">+1 (555) 555-0123</a></li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> <a href="mailto:hello@aeroinspect.co" className="hover:text-white">hello@aeroinspect.co</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} AeroInspect. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Certifications</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
