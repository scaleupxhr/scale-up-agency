import { Check, Globe, Megaphone, Users } from "lucide-react";
import { motion } from "motion/react";
import CTAButton from "../components/CTAButton";
import SEOMeta from "../components/SEOMeta";
import SectionHeader from "../components/SectionHeader";

const SERVICES = [
  {
    icon: Globe,
    id: "website",
    tag: "Service 01",
    title: "Website Development",
    tagline: "Fast. Beautiful. Built to Convert.",
    description:
      "Your website is your 24/7 salesperson. We build fast, mobile-friendly, conversion-focused sites that rank on Google, load instantly, and turn visitors into paying customers.",
    benefits: [
      "Custom designed for your brand identity",
      "Mobile-first responsive layout",
      "SEO-optimized structure & meta tags",
      "Google Core Web Vitals compliant",
      "Contact forms + WhatsApp integration",
      "Fast delivery in 7–14 days",
    ],
    deliverables: [
      "5–10 page website",
      "1 year hosting guidance",
      "Google Analytics setup",
      "Domain + SSL setup",
      "3 revision rounds",
    ],
    ctaLabel: "Get a Free Quote",
    color: "from-blue-600/20 to-blue-400/5",
  },
  {
    icon: Megaphone,
    id: "meta-ads",
    tag: "Service 02",
    title: "Meta Ads Management",
    tagline: "Targeted Ads. Qualified Leads. Real ROI.",
    description:
      "Stop wasting money on ads that don't work. We create, launch, and optimize Facebook & Instagram campaigns that bring qualified leads to your business — not just clicks.",
    benefits: [
      "Custom audience & interest targeting strategy",
      "Professional ad creative & copywriting",
      "A/B testing for maximum ROI",
      "Lead generation & retargeting campaigns",
      "Weekly performance reports",
      "Dedicated campaign manager",
    ],
    deliverables: [
      "Campaign strategy document",
      "Ad creative (3–5 sets)",
      "Pixel & tracking setup",
      "Monthly analytics report",
      "Ongoing optimization",
    ],
    ctaLabel: "Start Getting Leads",
    color: "from-violet-600/20 to-violet-400/5",
  },
  {
    icon: Users,
    id: "social-media",
    tag: "Service 03",
    title: "Social Media Management",
    tagline: "Content. Strategy. Consistent Growth.",
    description:
      "Your Instagram and Facebook should be working for you every day. We handle everything — content creation, posting, community engagement, and a long-term growth strategy that builds your brand.",
    benefits: [
      "12–20 posts per month with custom design",
      "Reels & story creation",
      "Hashtag strategy for organic reach",
      "Comment & DM management",
      "Monthly content calendar",
      "Competitor analysis & growth tracking",
    ],
    deliverables: [
      "Monthly content calendar",
      "Custom post designs",
      "Reel scripts + editing",
      "Engagement management",
      "Monthly growth report",
    ],
    ctaLabel: "Grow My Social",
    color: "from-emerald-600/20 to-emerald-400/5",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SEOMeta
        title="Services | Scale Up Kerala — Website Development, Meta Ads, Social Media"
        description="Explore Scale Up services: website development, Meta Ads, and social media management in Kerala. Conversion-focused digital solutions."
        keywords="website development Kerala, Meta ads Kerala, social media management Kerala, digital marketing agency Kerala, Instagram growth service Kerala"
      />

      {/* Hero */}
      <section
        data-ocid="services.hero_section"
        className="relative bg-background py-28 border-b border-border overflow-hidden"
      >
        {/* Glow backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[600px] h-[300px] rounded-full bg-primary/10 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              label="Our Services"
              title="Everything You Need to"
              titleHighlight="Grow Online"
              subtitle="Everything you need to grow online — under one roof. Three core services built to work together for maximum impact."
            />
          </motion.div>

          {/* Service quick-links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-3 mt-2"
          >
            {SERVICES.map(({ id, title, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                data-ocid={`services.hero_link.${id}`}
                className="inline-flex items-center gap-2 text-sm font-display font-semibold text-muted-foreground border border-border rounded-full px-4 py-2 transition-smooth hover:border-primary/60 hover:text-primary hover:bg-primary/5"
              >
                <Icon size={15} />
                {title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      <div data-ocid="services.list_section">
        {SERVICES.map(
          (
            {
              icon: Icon,
              id,
              tag,
              title,
              tagline,
              description,
              benefits,
              deliverables,
              ctaLabel,
              color,
            },
            i,
          ) => (
            <section
              key={id}
              id={id}
              data-ocid={`services.service_section.${i + 1}`}
              className={`py-24 ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`}
            >
              <div className="container mx-auto px-4">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}
                >
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={i % 2 !== 0 ? "lg:col-start-2" : ""}
                  >
                    <span className="text-xs font-display font-bold tracking-widest uppercase text-primary mb-3 block">
                      {tag}
                    </span>
                    <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-2 leading-tight">
                      {title}
                    </h2>
                    <p className="text-primary font-semibold text-lg mb-4">
                      {tagline}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {description}
                    </p>

                    <h3 className="font-display font-bold text-xs uppercase tracking-widest text-muted-foreground mb-4">
                      What's Included
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-foreground/85"
                        >
                          <Check
                            size={16}
                            className="text-primary shrink-0 mt-0.5"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <CTAButton
                      label={ctaLabel}
                      size="md"
                      data-ocid={`services.${id}.cta_button`}
                    />
                  </motion.div>

                  {/* Deliverables Card */}
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 32 : -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={
                      i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""
                    }
                  >
                    <div
                      className={`rounded-3xl border border-border bg-gradient-to-br ${color} p-8 sticky top-24`}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center mb-6 glow-blue">
                        <Icon size={30} className="text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-1">
                        What You Get
                      </h3>
                      <p className="text-xs text-muted-foreground mb-5">
                        Deliverables included with every {title.toLowerCase()}{" "}
                        package
                      </p>
                      <ul className="flex flex-col gap-3">
                        {deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-3 text-sm text-foreground/90 border-b border-border/50 pb-3 last:border-0 last:pb-0"
                          >
                            <span className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
                              <Check size={12} className="text-primary" />
                            </span>
                            {d}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-5 border-t border-border/50">
                        <CTAButton
                          label={ctaLabel}
                          size="sm"
                          data-ocid={`services.${id}.card_cta_button`}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Divider between services */}
              {i < SERVICES.length - 1 && (
                <div className="section-divider mx-auto w-1/2 mt-24" />
              )}
            </section>
          ),
        )}
      </div>

      {/* Bottom CTA Banner */}
      <section
        data-ocid="services.cta_section"
        className="relative bg-primary/5 border-y border-primary/20 py-24 overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[500px] h-[200px] rounded-full bg-primary/15 blur-[80px]" />
        </div>
        <div className="container mx-auto px-4 text-center flex flex-col items-center gap-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <span className="text-xs font-display font-bold tracking-widest uppercase text-primary border border-primary/30 bg-primary/10 rounded-full px-4 py-1.5">
              Free Consultation
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground max-w-2xl">
              Ready to Grow Your Business?
            </h2>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              Not sure which service is right for you? Chat with us — we'll
              recommend the right growth system for your business, for free.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton
                label="Get Free Consultation"
                size="lg"
                data-ocid="services.bottom_cta_button"
              />
              <CTAButton
                label="DM on WhatsApp"
                size="lg"
                variant="outline"
                data-ocid="services.bottom_cta_outline_button"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
