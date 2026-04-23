import CTAButton from "@/components/CTAButton";
import SEOMeta from "@/components/SEOMeta";
import SectionHeader from "@/components/SectionHeader";
import {
  BarChart3,
  HandshakeIcon,
  Heart,
  Lightbulb,
  MapPin,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "3+", label: "Years Experience" },
];

const differentiators = [
  {
    icon: BarChart3,
    title: "Systems Approach",
    desc: "We don't sell one-off services. We build complete, interconnected growth systems — website, ads, and social media working as one engine for your business.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Results",
    desc: "Every decision is backed by real numbers. We track, measure, and optimize continuously so your investment always moves in the right direction.",
  },
  {
    icon: MapPin,
    title: "Kerala Focus",
    desc: "We know the Kerala market inside out — local consumer behavior, regional trends, and what actually converts for businesses in this unique market.",
  },
  {
    icon: HandshakeIcon,
    title: "End-to-End Support",
    desc: "From strategy to execution and ongoing optimization, we stay with you every step of the way. No handoffs, no drop-offs, no disappearing acts.",
  },
];

const team = [
  {
    name: "Arjun Krishnan",
    role: "Founder & Strategy Lead",
    initials: "AK",
    bio: "10+ years in digital growth. Former lead at a Bangalore startup, now fully focused on transforming Kerala businesses online.",
  },
  {
    name: "Priya Varghese",
    role: "Creative & Brand Director",
    initials: "PV",
    bio: "Award-winning designer specializing in brand identity and conversion-focused UI for Kerala SMBs.",
  },
  {
    name: "Sreejith Nair",
    role: "Performance Ads Expert",
    initials: "SN",
    bio: "Managed ₹2Cr+ in Meta Ads spend. Specialist in high-converting lead gen campaigns for Kerala businesses.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Transparency",
    desc: "No hidden fees, no vague reports. You always know exactly what's happening, why, and what it's delivering for your business.",
  },
  {
    icon: Target,
    title: "Results-First",
    desc: "We measure success by your growth — not vanity metrics. Every campaign, every page, every post is built to convert visitors into customers.",
  },
  {
    icon: Lightbulb,
    title: "Long-term Partnership",
    desc: "We're not a vendor. We're your growth partner. Our goal is a relationship where your compounding success fuels ours.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  },
});

export default function AboutPage() {
  return (
    <>
      <SEOMeta
        title="About Scale Up | Digital Marketing Agency Kerala"
        description="Scale Up is a Kerala-based digital agency building online growth systems for businesses. Learn our story, mission, and approach."
        keywords="digital marketing agency Kerala, website development Kerala, Instagram growth service Kerala, Scale Up agency"
      />

      {/* ── Hero ── */}
      <section
        data-ocid="about.hero.section"
        className="relative bg-background overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-start justify-center"
        >
          <div className="w-[700px] h-[380px] rounded-full opacity-20 blur-3xl gradient-primary mt-10" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 text-xs font-display font-bold tracking-widest uppercase text-primary border border-primary/30 bg-primary/10 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Our Story
          </motion.span>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
          >
            About <span className="text-gradient">Scale Up</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We build complete online growth systems for businesses — not just
            websites or ads, but an integrated engine that brings you real,
            measurable customers.
          </motion.p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        data-ocid="about.stats.section"
        className="bg-card border-y border-border py-14"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x divide-border">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp(i * 0.1)}
                data-ocid={`about.stat.item.${i + 1}`}
                className="flex flex-col items-center gap-2 px-6 py-4"
              >
                <span className="font-display font-extrabold text-4xl md:text-5xl text-gradient">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm font-body tracking-wide text-center">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section
        data-ocid="about.mission.section"
        className="bg-background py-20 md:py-28"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 text-xs font-display font-bold tracking-widest uppercase text-primary border border-primary/30 bg-primary/10 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Our Mission
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">
                Why we do <span className="text-gradient">what we do</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Too many Kerala businesses invest in digital services and see no
                real results. A website here, a few ads there — but nothing
                connected. We started Scale Up to change that by building
                complete systems, not just selling services.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <div className="relative p-8 rounded-2xl border border-primary/30 bg-primary/5 glow-blue overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-30 blur-2xl gradient-primary"
                />
                <div className="w-10 h-1 rounded-full gradient-primary mb-6" />
                <blockquote className="font-display font-semibold text-xl md:text-2xl text-foreground leading-snug">
                  "To help every business in Kerala grow online with systems
                  that actually <span className="text-gradient">work</span>."
                </blockquote>
                <p className="text-muted-foreground text-sm mt-4 font-body">
                  — The Scale Up Mission
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section
        data-ocid="about.who-we-are.section"
        className="bg-muted/30 border-y border-border py-20 md:py-28"
      >
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            label="Who We Are"
            title="A systems-focused agency"
            titleHighlight="built in Kerala"
            align="center"
          />

          <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            <motion.p {...fadeUp(0)}>
              Scale Up was founded in Kerala by a team that noticed a pattern:
              local businesses were spending money on digital services — a
              website here, a social media page there — but never seeing
              consistent, measurable growth. The pieces existed; they just
              weren't connected into a system.
            </motion.p>
            <motion.p {...fadeUp(0.1)}>
              We built Scale Up to fill that gap. Our approach isn't to sell you
              a service — it's to build you a growth engine. That means your
              website, your ads, and your social media all work together, each
              one feeding the next, creating a compounding loop that brings in
              customers consistently.
            </motion.p>
            <motion.p {...fadeUp(0.2)}>
              Every project we take on is treated as a long-term partnership. We
              obsess over real results — leads generated, revenue grown,
              customers acquired — because that's the only metric that matters
              for your business. And because we're based right here in Kerala,
              we bring local insight that national agencies simply can't match.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Why Scale Up ── */}
      <section
        data-ocid="about.differentiators.section"
        className="bg-background py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Why Scale Up"
            title="What makes us"
            titleHighlight="different"
            subtitle="We don't compete on price — we compete on outcomes. Here's what sets us apart from every other agency in Kerala."
            align="center"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp(i * 0.1)}
                  data-ocid={`about.differentiator.item.${i + 1}`}
                  className="card-elevated p-6 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 glow-blue">
                    <Icon className="text-white" size={22} />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section
        data-ocid="about.team.section"
        className="bg-card border-y border-border py-20 md:py-28"
      >
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            label="The Team"
            title="People behind"
            titleHighlight="your growth"
            subtitle="Small team, big results. Every member is deeply invested in your success."
            align="center"
          />

          <div className="grid sm:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                {...fadeUp(i * 0.12)}
                data-ocid={`about.team.item.${i + 1}`}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl border border-border bg-background hover:border-primary/40 transition-smooth"
              >
                <div
                  className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center text-white font-display font-bold text-xl glow-blue shrink-0"
                  aria-label={`${member.name} avatar`}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="font-display font-bold text-foreground text-lg">
                    {member.name}
                  </p>
                  <p className="text-primary text-xs font-semibold mt-1 mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        data-ocid="about.values.section"
        className="bg-muted/30 border-b border-border py-20 md:py-28"
      >
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            label="Our Values"
            title="How we work"
            titleHighlight="with you"
            subtitle="Three principles that guide every decision we make at Scale Up."
            align="center"
          />

          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  {...fadeUp(i * 0.12)}
                  data-ocid={`about.value.item.${i + 1}`}
                  className="flex flex-col gap-4 p-7 rounded-2xl border border-border bg-card hover:border-primary/40 transition-smooth"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl">
                    {val.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        data-ocid="about.cta.section"
        className="relative bg-background overflow-hidden py-24 md:py-32"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[600px] h-[300px] rounded-full opacity-25 blur-3xl gradient-primary" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Heart
              className="text-primary mx-auto mb-6 opacity-80"
              size={36}
              strokeWidth={1.5}
            />
          </motion.div>
          <motion.h2
            {...fadeUp(0.05)}
            className="font-display font-extrabold text-3xl md:text-5xl text-foreground leading-tight mb-5"
          >
            Ready to partner <span className="text-gradient">with us?</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.12)}
            className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed"
          >
            Let's build your growth system together. A free consultation call is
            all it takes to get started.
          </motion.p>
          <motion.div {...fadeUp(0.18)}>
            <CTAButton
              label="Let's Talk"
              size="lg"
              data-ocid="about.cta.primary_button"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
