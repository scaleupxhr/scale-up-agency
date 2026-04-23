import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const WA_LINK = "https://wa.me/919048342390";

export default function WhatsAppFAB() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-card border border-border rounded-2xl p-4 shadow-elevation-2 w-64"
          >
            <p className="font-display font-bold text-sm text-foreground mb-1">
              Chat with us! 👋
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Hi there! Ready to grow your business? Let's talk.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="whatsapp_fab.chat_link"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm rounded-xl py-2.5 hover:bg-[#22c55e] transition-smooth"
            >
              <SiWhatsapp size={16} />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setExpanded(!expanded)}
        data-ocid="whatsapp_fab.toggle_button"
        aria-label="Open WhatsApp chat"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        className="w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-elevation-2 hover:shadow-glow-blue transition-smooth animate-pulse-glow"
      >
        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <SiWhatsapp size={26} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
