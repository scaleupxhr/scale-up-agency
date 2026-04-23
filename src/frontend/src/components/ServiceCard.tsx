import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import CTAButton from "./CTAButton";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  index?: number;
  "data-ocid"?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  benefits,
  index = 0,
  "data-ocid": dataOcid,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      data-ocid={dataOcid}
      className="card-elevated p-8 flex flex-col gap-5 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center transition-smooth group-hover:bg-primary/25 group-hover:shadow-glow-blue">
        <Icon size={26} className="text-primary" />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <ul className="flex flex-col gap-2">
        {benefits.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2 text-sm text-foreground/80"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-2">
        <CTAButton
          label="Get Free Quote"
          size="sm"
          data-ocid={`${dataOcid ?? "service"}.cta_button`}
        />
      </div>
    </motion.div>
  );
}
