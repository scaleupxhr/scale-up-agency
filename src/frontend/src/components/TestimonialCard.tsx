import { Star } from "lucide-react";
import { motion } from "motion/react";

interface TestimonialCardProps {
  name: string;
  business: string;
  location: string;
  quote: string;
  rating?: number;
  index?: number;
  initials: string;
  "data-ocid"?: string;
}

export default function TestimonialCard({
  name,
  business,
  location,
  quote,
  rating = 5,
  index = 0,
  initials,
  "data-ocid": dataOcid,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-ocid={dataOcid}
      className="card-elevated p-7 flex flex-col gap-4"
    >
      <div className="flex gap-1">
        {Array.from({ length: rating }, (_, i) => (
          <Star
            key={`star-pos-${i + 1}-of-${rating}`}
            size={14}
            className="fill-primary text-primary"
          />
        ))}
      </div>
      <p className="text-foreground/85 text-sm leading-relaxed italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center font-display font-bold text-sm text-primary">
          {initials}
        </div>
        <div>
          <p className="font-display font-semibold text-sm text-foreground">
            {name}
          </p>
          <p className="text-xs text-muted-foreground">
            {business} · {location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
