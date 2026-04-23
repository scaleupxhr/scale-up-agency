import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const WA_LINK = "https://wa.me/919048342390";

interface CTAButtonProps {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "ghost";
  "data-ocid"?: string;
}

export default function CTAButton({
  label = "Chat on WhatsApp",
  className = "",
  size = "md",
  variant = "primary",
  "data-ocid": dataOcid,
}: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm gap-1.5",
    md: "px-7 py-3.5 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const variantClasses = {
    primary:
      "gradient-primary text-white shadow-glow-blue hover:shadow-glow-blue-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "text-primary hover:bg-primary/10",
  };

  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid={dataOcid ?? "cta.button"}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center font-display font-bold rounded-xl transition-smooth cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle
        className="shrink-0"
        size={size === "sm" ? 16 : size === "lg" ? 22 : 18}
      />
      {label}
    </motion.a>
  );
}
