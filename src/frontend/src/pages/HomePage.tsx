import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Globe,
  Megaphone,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import CTAButton from "../components/CTAButton";
import SEOMeta from "../components/SEOMeta";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";

// Schema injection without dangerouslySetInnerHTML
function SchemaScript({ schema }: { schema: Record<string, unknown> }) {
  useEffect(() => {
    const existing = document.getElementById("org-schema");
    if (existing) existing.remove();
    const el = document.createElement("script");
    el.id = "org-schema";
    el.type = "application/ld+json";
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);
    return () => {
      const s = document.getElementById("org-schema");
      if (s) s.remove();
    };
  }, [schema]);
  return null;
}

const SERVICES = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, mobile-first websites built to convert visitors into paying customers.",
    benefits: [
      "Mobile-responsive design",
      "SEO-ready structure",
      "Lightning fast load speed",
    ],
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    description:
      "Targeted Facebook & Instagram campaigns that bring qualified leads directly to you.",
    benefits: [
      "Precision audience targeting",
      "Ad copy + creative design",
      "Daily optimization & scaling",
    ],
  },
  {
    icon: Users,
    title: "Social Media Management",
    description:
      "Full content strategy and community management for Instagram & Facebook growth.",
    benefits: [
      "Content creation & scheduling",
      "Engagement & growth tactics",
      "Monthly analytics reports",
    ],
  },
];

const STATS = [
  { value: 85, suffix: "+", label: "Businesses Scaled" },
  { value: 3, suffix: "x", label: "Avg. ROI Delivered" },
  { value: 120, suffix: "+", label: "Campaigns Launched" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const PROCESS_STEPS = [
  {
    step: "01",
    icon: Target,
    title: "Strategy",
    desc: "We audit your market, competition, and goals to craft a growth blueprint tailored for your business.",
  },
  {
    step: "02",
    icon: Zap,
    title: "Execution",
    desc: "Our team builds your website, launches ads, and sets up social systems — all running in sync.",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Growth",
    desc: "We monitor, optimize, and scale what's working — turning your online presence into a lead machine.",
  },
];

const TESTIMONIALS = [
  {
    initials: "RK",
    name: "Rahul Krishnan",
    business: "Krishnan Builders",
    location: "Kochi, Kerala",
    quote:
      "Scale Up redesigned our website and ran Meta Ads for 3 months — we now get 40+ inquiries every month. Absolute game-changer for our construction business.",
    rating: 5,
  },
  {
    initials: "AN",
    name: "Ananya Nair",
    business: "Nair's Boutique Hotel",
    location: "Thrissur, Kerala",
    quote:
      "Our Instagram grew from 500 to 8,000 followers in 4 months. Bookings doubled. The team knows exactly what works for Kerala audiences.",
    rating: 5,
  },
  {
    initials: "JS",
    name: "Jijo Sebastian",
    business: "JS Auto Works",
    location: "Thiruvananthapuram",
    quote:
      "We spent years without an online presence. Scale Up built us a website and we now rank on Google for our main keywords. Incredible results!",
    rating: 5,
  },
  {
    initials: "PM",
    name: "Priya Menon",
    business: "Menon's Organic Farm",
    location: "Palakkad, Kerala",
    quote:
      "Social media was a mystery to us. Scale Up handled everything — content, ads, DMs. Sales from Instagram went up 220% in 6 months!",
    rating: 5,
  },
  {
    initials: "AT",
    name: "Arun Thomas",
    business: "Thomas Real Estate",
    location: "Kottayam, Kerala",
    quote:
      "The website they built for us generates 15–20 serious property inquiries per week. Our old site had zero. The ROI paid for itself in the first month.",
    rating: 5,
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://scaleup.in/#organization",
      name: "Scale Up",
      description:
        "Scale Up is a premium digital marketing agency in Kerala. We build websites, run Meta Ads, and manage social media for real business growth.",
      url: "https://scaleup.in",
      telephone: "+919048342390",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      areaServed: "Kerala",
      sameAs: ["https://www.instagram.com/scaleupkerala"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+919048342390",
        availableLanguage: ["English", "Malayalam"],
      },
    },
  ],
};

// Animated floating particles for hero
function HeroParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {(["p0", "p1", "p2", "p3", "p4", "p5"] as const).map((id, i) => (
        <motion.div
          key={id}
          className="absolute rounded-full"
          style={{
            width: `${[4, 6, 3, 5, 4, 6][i]}px`,
            height: `${[4, 6, 3, 5, 4, 6][i]}px`,
            left: `${[15, 75, 45, 85, 25, 60][i]}%`,
            top: `${[20, 35, 70, 55, 80, 25][i]}%`,
            background: "oklch(0.62 0.23 264 / 0.6)",
            boxShadow: "0 0 12px oklch(0.62 0.23 264 / 0.8)",
          }}
          animate={{
            y: [-12, 12, -12],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: [3.5, 4, 3, 4.5, 3.8, 4.2][i],
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated Scale Up logo badge
function ScaleUpBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
      className="inline-flex items-center gap-3 mb-2"
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-white text-lg"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.62 0.23 264) 0%, oklch(0.52 0.2 268) 100%)",
            boxShadow: "0 0 20px oklch(0.62 0.23 264 / 0.5)",
          }}
        >
          S
        </div>
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary"
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ boxShadow: "0 0 8px oklch(0.62 0.23 264)" }}
        />
      </motion.div>
      <motion.span
        className="font-display font-black text-2xl tracking-tight"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.62 0.23 264) 0%, #ffffff 60%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Scale Up
      </motion.span>
    </motion.div>
  );
}

export default function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    autoplayRef.current = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi]);

  return (
    <>
      <SEOMeta
        title="Scale Up | Digital Marketing Agency Kerala | Website Development"
        description="Scale Up is a premium digital marketing agency in Kerala. We build websites, run Meta Ads, and manage social media for real business growth."
        keywords="website development Kerala, digital marketing agency Kerala, Instagram growth service Kerala"
      />

      {/* Schema Markup */}
      <SchemaScript schema={SCHEMA} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        data-ocid="home.hero_section"
        className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-background"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-abstract.dim_1200x600.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Blue glow orb */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 55%, oklch(0.62 0.23 264 / 0.18) 0%, transparent 70%)",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(oklch(0.62 0.23 264 / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.62 0.23 264 / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <HeroParticles />

        <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-7 py-24">
          <ScaleUpBadge />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 text-xs font-display font-bold tracking-widest uppercase text-primary border border-primary/30 bg-primary/10 rounded-full px-5 py-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Kerala's Growth Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] tracking-tight max-w-5xl"
          >
            We build systems that{" "}
            <span className="text-gradient">bring customers.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Websites, Ads, and Social Media — built for real growth. Trusted by{" "}
            <span className="text-primary font-semibold">
              85+ Kerala businesses.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <CTAButton
              label="Chat on WhatsApp"
              size="lg"
              data-ocid="home.hero_cta_primary"
            />
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-smooth"
              data-ocid="home.hero_services_link"
            >
              View Our Services <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-6 bg-border rounded-2xl overflow-hidden border border-border/60 w-full max-w-3xl shadow-elevation-2"
          >
            {STATS.map(({ value, suffix, label }) => (
              <div
                key={label}
                className="bg-card/90 backdrop-blur-sm px-5 py-5 flex flex-col items-center gap-1 group hover:bg-primary/10 transition-smooth"
              >
                <span className="font-display font-black text-3xl text-gradient">
                  <AnimatedCounter end={value} suffix={suffix} />
                </span>
                <span className="text-xs text-muted-foreground font-medium text-center">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section
        data-ocid="home.services_section"
        className="bg-muted/20 py-24 border-y border-border"
      >
        <div className="container mx-auto px-4">
          <SectionHeader
            label="What We Do"
            title="Complete Growth"
            titleHighlight="Systems"
            subtitle="Everything your business needs to dominate online — under one roof."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <ServiceCard
                key={s.title}
                {...s}
                index={i}
                data-ocid={`home.service_card.${i + 1}`}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-10"
          >
            <a
              href="/services"
              data-ocid="home.services_view_all_link"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline transition-smooth"
            >
              See All Services <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── RESULTS / PROOF ──────────────────────────────────── */}
      <section data-ocid="home.results_section" className="bg-background py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Real Results"
            title="Numbers That"
            titleHighlight="Speak for Themselves"
            subtitle="Our work is measured in leads, sales, and growth — not just likes."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                value: 250,
                suffix: "+",
                label: "Leads Generated",
                desc: "Qualified leads delivered to our clients every month across all campaigns.",
              },
              {
                value: 98,
                suffix: "%",
                label: "Client Satisfaction",
                desc: "Of our clients renew their contracts — because results speak louder than promises.",
              },
              {
                value: 3,
                suffix: "x",
                label: "Average ROI",
                desc: "On average, clients see 3x return on their investment within the first 90 days.",
              },
            ].map(({ value, suffix, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.14 }}
                data-ocid={`home.result_card.${i + 1}`}
                className="card-elevated p-8 text-center flex flex-col items-center gap-3"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.62 0.23 264 / 0.2) 0%, oklch(0.52 0.2 268 / 0.1) 100%)",
                    border: "1px solid oklch(0.62 0.23 264 / 0.3)",
                  }}
                >
                  <span className="font-display font-black text-2xl text-gradient">
                    <AnimatedCounter end={value} suffix={suffix} />
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  {label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section
        data-ocid="home.process_section"
        className="bg-muted/20 py-24 border-y border-border"
      >
        <div className="container mx-auto px-4">
          <SectionHeader
            label="How It Works"
            title="Our 3-Step"
            titleHighlight="Growth Process"
            subtitle="A clear, proven approach to building your online presence and driving results."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[calc(16.7%+28px)] right-[calc(16.7%+28px)] h-px bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />

            {PROCESS_STEPS.map(({ step, icon: Icon, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                data-ocid={`home.process_step.${i + 1}`}
                className="relative flex flex-col gap-5 p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-smooth group"
              >
                <div className="absolute -top-4 right-6 font-display font-black text-6xl text-primary/8 group-hover:text-primary/15 transition-smooth select-none">
                  {step}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:shadow-glow-blue transition-smooth z-10">
                  <Icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SCALE UP ─────────────────────────────────────── */}
      <section data-ocid="home.why_section" className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeader
                label="Why Choose Us"
                title="We Don't Just Manage —"
                titleHighlight="We Grow"
                align="left"
              />
              <div className="flex flex-col gap-4 mb-8">
                {[
                  "Kerala-based team that understands local markets",
                  "Full-stack digital approach — website + ads + social",
                  "Dedicated account manager for every client",
                  "Transparent reporting with real metrics",
                  "Fast turnaround, premium quality delivery",
                ].map((point, i) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 text-sm text-foreground/85"
                  >
                    <CheckCircle
                      size={18}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    {point}
                  </motion.div>
                ))}
              </div>
              <CTAButton
                label="Get Free Consultation"
                size="md"
                data-ocid="home.why_cta_button"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-border aspect-video relative"
              style={{ boxShadow: "0 8px 40px oklch(0.62 0.23 264 / 0.15)" }}
            >
              <img
                src="/assets/generated/hero-abstract.dim_1200x600.jpg"
                alt="Scale Up digital marketing agency Kerala — growth systems for businesses"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent" />
              {/* Floating stat */}
              <div
                className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-xl px-4 py-3 flex items-center gap-3"
                style={{ boxShadow: "0 0 20px oklch(0.62 0.23 264 / 0.2)" }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <TrendingUp size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-foreground">
                    3x Growth
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Avg. client ROI
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section
        data-ocid="home.testimonials_section"
        className="bg-muted/20 py-24 border-y border-border"
      >
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Client Stories"
            title="Real Results from"
            titleHighlight="Real Businesses"
            subtitle="Hear from Kerala business owners who've scaled with us."
          />

          {/* Carousel */}
          <div className="relative">
            <div
              className="overflow-hidden"
              ref={emblaRef}
              data-ocid="home.testimonials_carousel"
            >
              <div className="flex gap-6">
                {TESTIMONIALS.map((t, i) => (
                  <div
                    key={t.name}
                    className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <TestimonialCard
                      {...t}
                      index={i}
                      data-ocid={`home.testimonial.${i + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Nav controls */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                type="button"
                onClick={scrollPrev}
                data-ocid="home.testimonials_prev"
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-smooth"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                data-ocid="home.testimonials_next"
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-smooth"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section
        data-ocid="home.final_cta_section"
        className="relative bg-background py-28 overflow-hidden"
      >
        {/* Glow background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 50% 50%, oklch(0.62 0.23 264 / 0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(oklch(0.62 0.23 264) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.62 0.23 264) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-6 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-display font-bold tracking-widest uppercase text-primary border border-primary/30 bg-primary/10 rounded-full px-5 py-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Free Consultation
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight"
          >
            Ready to <span className="text-gradient">Grow Your Business?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl"
          >
            Get a free strategy session. We'll analyze your business and show
            you exactly how to grow online — no obligation, just clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <CTAButton
              label="Get Free Consultation"
              size="lg"
              data-ocid="home.final_cta_button"
            />
            <a
              href="/contact"
              data-ocid="home.final_contact_link"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-smooth"
            >
              Or send us a message →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
