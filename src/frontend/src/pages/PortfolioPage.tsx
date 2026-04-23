import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import CTAButton from "../components/CTAButton";
import SEOMeta from "../components/SEOMeta";
import SectionHeader from "../components/SectionHeader";

// ── Types & Data ──────────────────────────────────────────────────────────────

type ServiceCategory = "Website Dev" | "Meta Ads" | "Social Media";

interface Project {
  id: number;
  name: string;
  location: string;
  category: ServiceCategory;
  description: string;
  metric: string;
}

interface BeforeAfterItem {
  id: number;
  project: string;
  metric: string;
  before: number;
  after: number;
  unit: string;
}

const categoryStyles: Record<ServiceCategory, string> = {
  "Website Dev": "bg-primary/15 text-primary border border-primary/30",
  "Meta Ads": "bg-violet-500/15 text-violet-400 border border-violet-500/30",
  "Social Media":
    "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
};

const projects: Project[] = [
  {
    id: 1,
    name: "The Harbour Grand",
    location: "Kochi",
    category: "Website Dev",
    description:
      "Luxury hotel website with online booking integration, gallery, and SEO-optimised landing pages targeting Kochi tourists.",
    metric: "300% increase in direct inquiries",
  },
  {
    id: 2,
    name: "Spice Route Kitchen",
    location: "Thiruvananthapuram",
    category: "Social Media",
    description:
      "Complete social media overhaul for a heritage restaurant — content calendar, reels strategy, and community engagement.",
    metric: "12x growth in monthly reach",
  },
  {
    id: 3,
    name: "Silhouette Boutique",
    location: "Kozhikode",
    category: "Meta Ads",
    description:
      "Targeted Meta Ads campaigns for a fashion boutique — product catalogues, retargeting funnels, and conversion tracking.",
    metric: "₹4.2L revenue in 60 days",
  },
  {
    id: 4,
    name: "Skyline Realty",
    location: "Thrissur",
    category: "Website Dev",
    description:
      "Conversion-focused real estate website with property listings, virtual tour CTAs, and WhatsApp lead capture.",
    metric: "5x more qualified leads/month",
  },
  {
    id: 5,
    name: "Iron Legion Gym",
    location: "Ernakulam",
    category: "Social Media",
    description:
      "Built a fitness brand from scratch — transformation reels, influencer partnerships, and membership-driven content.",
    metric: "2,800 new followers in 45 days",
  },
  {
    id: 6,
    name: "NexaCore IT Solutions",
    location: "Calicut",
    category: "Meta Ads",
    description:
      "B2B lead-gen Meta Ads for an IT services firm — targeted Facebook campaigns to reach decision-makers across Kerala.",
    metric: "47 qualified B2B leads in month 1",
  },
];

const beforeAfterData: BeforeAfterItem[] = [
  {
    id: 1,
    project: "Spice Route Kitchen",
    metric: "Monthly WhatsApp Leads",
    before: 5,
    after: 47,
    unit: "leads / mo",
  },
  {
    id: 2,
    project: "The Harbour Grand",
    metric: "Google PageSpeed Score",
    before: 38,
    after: 94,
    unit: "out of 100",
  },
  {
    id: 3,
    project: "Iron Legion Gym",
    metric: "Instagram Followers",
    before: 400,
    after: 3200,
    unit: "followers",
  },
];

const summaryStats = [
  { id: 1, value: "50+", label: "Projects Completed" },
  { id: 2, value: "₹2Cr+", label: "Revenue Generated" },
  { id: 3, value: "100%", label: "Client Retention Rate" },
  { id: 4, value: "8x", label: "Average Lead Growth" },
];

// ── Project Card ──────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const initials = project.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      data-ocid={`portfolio.item.${project.id}`}
      className="card-elevated flex flex-col overflow-hidden group"
    >
      {/* Mock visual */}
      <div className="relative h-40 bg-muted/30 flex items-center justify-center overflow-hidden border-b border-border">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.62 0.23 264 / 0.13) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-1">
          <span className="font-display font-black text-4xl text-gradient select-none">
            {initials}
          </span>
          <p className="text-xs text-muted-foreground">{project.location}</p>
        </div>
        {/* Category tag */}
        <span
          className={`absolute top-3 left-3 text-xs font-display font-bold px-3 py-1 rounded-full ${categoryStyles[project.category]}`}
        >
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="font-display font-bold text-lg text-foreground leading-snug">
            {project.name}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Metric pill */}
        <div className="flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-lg px-3 py-2">
          <TrendingUp size={14} className="text-primary shrink-0" />
          <span className="text-xs font-display font-bold text-primary">
            {project.metric}
          </span>
        </div>

        {/* CTA link */}
        <motion.a
          href="https://wa.me/919048342390"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 3 }}
          data-ocid={`portfolio.view_button.${project.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-primary hover:text-accent transition-smooth mt-auto pt-3 border-t border-border group/link"
        >
          View Details
          <ArrowRight
            size={13}
            className="transition-transform group-hover/link:translate-x-1"
          />
        </motion.a>
      </div>
    </motion.article>
  );
}

// ── Before/After Card ─────────────────────────────────────────────────────────

function BeforeAfterCard({
  item,
  index,
}: {
  item: BeforeAfterItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      data-ocid={`portfolio.before_after.${item.id}`}
      className="rounded-2xl border border-border bg-card overflow-hidden"
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-border bg-muted/20">
        <p className="text-xs font-display font-bold uppercase tracking-widest text-muted-foreground">
          {item.project}
        </p>
        <h3 className="font-display font-bold text-sm text-foreground mt-0.5">
          {item.metric}
        </h3>
      </div>

      {/* Split stats */}
      <div className="grid grid-cols-2 divide-x divide-border">
        {/* Before */}
        <div className="flex flex-col items-center justify-center py-8 px-4 gap-1">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-muted-foreground mb-1">
            Before
          </span>
          <span className="font-display font-black text-5xl text-muted-foreground/50">
            {item.before.toLocaleString()}
          </span>
          <span className="text-xs text-muted-foreground/40 text-center">
            {item.unit}
          </span>
        </div>

        {/* After */}
        <div className="relative flex flex-col items-center justify-center py-8 px-4 gap-1 bg-primary/5">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.62 0.23 264 / 0.1) 0%, transparent 70%)",
            }}
          />
          <span className="text-xs font-display font-bold uppercase tracking-widest text-primary mb-1 relative z-10">
            After
          </span>
          <span className="font-display font-black text-5xl text-gradient relative z-10">
            {item.after.toLocaleString()}
          </span>
          <span className="text-xs text-primary/60 text-center relative z-10">
            {item.unit}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <>
      <SEOMeta
        title="Portfolio | Scale Up — Digital Agency Kerala Projects"
        description="Explore Scale Up portfolio: websites, Meta Ads campaigns, and social media growth projects from Kerala businesses."
        keywords="digital agency Kerala portfolio, website development Kerala projects, Meta Ads Kerala results, Instagram growth service Kerala"
      />

      {/* ── Hero ── */}
      <section
        data-ocid="portfolio.hero"
        className="relative min-h-[56vh] flex flex-col items-center justify-center text-center overflow-hidden px-4 py-28"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/portfolio-hero.dim_1200x500.jpg"
            alt="Scale Up portfolio — digital agency Kerala project showcase"
            loading="eager"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>

        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.62 0.23 264 / 0.16) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          <motion.span
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-display font-bold tracking-widest uppercase text-primary border border-primary/30 bg-primary/10 rounded-full px-4 py-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Our Work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight"
          >
            Real results for{" "}
            <span className="text-gradient">real businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Real results for real businesses across Kerala — from hotels in
            Kochi to IT firms in Calicut.
          </motion.p>
        </div>
      </section>

      {/* ── Results Banner ── */}
      <section
        data-ocid="portfolio.stats_banner"
        className="bg-card border-y border-border py-10"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-border">
            {summaryStats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                data-ocid={`portfolio.stat.${stat.id}`}
                className="flex flex-col items-center text-center px-4 gap-1"
              >
                <span className="font-display font-black text-3xl md:text-4xl text-gradient">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground font-display font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Grid ── */}
      <section
        data-ocid="portfolio.projects_section"
        className="py-24 px-4 bg-background"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Case Studies"
            title="Projects we're"
            titleHighlight="proud of"
            subtitle="From boutique fashion stores to luxury hotels — here's how we helped Kerala businesses grow online."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section
        data-ocid="portfolio.before_after_section"
        className="py-24 px-4 border-y border-border"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.11 0.005 264 / 0.6) 0%, oklch(0.065 0 0) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Before & After"
            title="The numbers"
            titleHighlight="speak for themselves"
            subtitle="We measure every campaign. Here's what changed after Scale Up got to work."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beforeAfterData.map((item, i) => (
              <BeforeAfterCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        data-ocid="portfolio.cta_section"
        className="py-28 px-4 text-center bg-background relative overflow-hidden"
      >
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, oklch(0.62 0.23 264 / 0.15) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="inline-flex items-center gap-2 text-xs font-display font-bold tracking-widest uppercase text-primary border border-primary/30 bg-primary/10 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Ready to Grow?
            </span>

            <h2 className="font-display font-black text-3xl md:text-5xl text-foreground leading-tight">
              Want results <span className="text-gradient">like these?</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
              Every business you see above started exactly where you are. Let's
              build your growth system — starting with a free consultation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <CTAButton
              label="Get Free Consultation"
              size="lg"
              data-ocid="portfolio.cta_button"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
