import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone, TrendingUp } from "lucide-react";
import CTAButton from "./CTAButton";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const SERVICES = [
  "Website Development",
  "Meta Ads Management",
  "Social Media Growth",
  "SEO & Content Strategy",
  "Brand Identity Design",
];

const year = new Date().getFullYear();
const hostname =
  typeof window !== "undefined" ? window.location.hostname : "scaleup.agency";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* CTA Banner */}
      <div className="border-b border-border bg-primary/5">
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl text-foreground mb-1">
              Ready to{" "}
              <span className="text-gradient">Grow Your Business?</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Get a free strategy consultation today — no obligations.
            </p>
          </div>
          <CTAButton
            label="Chat on WhatsApp"
            size="lg"
            data-ocid="footer.cta_button"
          />
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5 w-fit">
              <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center">
                <TrendingUp size={18} className="text-primary" />
              </div>
              <span className="font-display font-black text-xl">
                <span className="text-gradient">Scale</span>
                <span className="text-foreground"> Up</span>
                <span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Kerala's premium digital agency. We build complete online growth
              systems for businesses that want real results.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="https://wa.me/919048342390"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-smooth"
              >
                <MessageCircle size={14} className="text-primary" />
                +91 90483 42390
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                Kerala, India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-foreground/75 hover:text-primary transition-smooth flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-smooth shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li
                  key={s}
                  className="text-sm text-foreground/75 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Get In Touch
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to start? Message us directly on WhatsApp for instant
              response.
            </p>
            <a
              href="https://wa.me/919048342390"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.whatsapp_link"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 bg-primary/10 rounded-xl px-4 py-2.5 hover:bg-primary/20 hover:shadow-glow-blue transition-smooth"
            >
              <Phone size={14} />
              DM on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="section-divider mt-10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} Scale Up Digital Agency. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
