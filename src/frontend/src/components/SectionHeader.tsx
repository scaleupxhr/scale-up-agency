import { motion } from "motion/react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  titleHighlight,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 mb-12 ${alignClass}`}
    >
      {label && (
        <span className="inline-flex items-center gap-2 text-xs font-display font-bold tracking-widest uppercase text-primary border border-primary/30 bg-primary/10 rounded-full px-4 py-1.5 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          {label}
        </span>
      )}
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
        {title}{" "}
        {titleHighlight && (
          <span className="text-gradient">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
