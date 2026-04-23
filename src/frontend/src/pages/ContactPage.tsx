import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SiWhatsapp } from "react-icons/si";
import SEOMeta from "../components/SEOMeta";
import SectionHeader from "../components/SectionHeader";

const WA_LINK = "https://wa.me/919048342390";
const WA_NUMBER = "+91 90483 42390";

const SERVICES = [
  "Website Development",
  "Meta Ads",
  "Social Media Management",
  "Other",
] as const;

const FAQ_ITEMS = [
  {
    q: "How do I get started?",
    a: "Simple — just send us a WhatsApp message. We'll schedule a free strategy call, understand your business goals, and map out a growth plan together.",
  },
  {
    q: "What's your pricing?",
    a: "Pricing depends on your scope and goals. We offer flexible packages for startups and growing businesses. Message us for a custom quote — no obligations.",
  },
  {
    q: "How long does a website take?",
    a: "A standard business website takes 7–14 days. E-commerce and custom builds may take 3–5 weeks. We always give you a clear timeline before starting.",
  },
  {
    q: "Do you work outside Kerala?",
    a: "Our primary focus is Kerala-based businesses, but we also work with select clients across India. Everything is handled remotely — no travel needed.",
  },
];

interface FormValues {
  name: string;
  businessName: string;
  serviceNeeded: string;
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit = (data: FormValues) => {
    const msg = `Hi Scale Up! I'm ${data.name} from ${data.businessName}.\n\nService Needed: ${data.serviceNeeded}\n\nMessage: ${data.message}`;
    window.open(`${WA_LINK}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <SEOMeta
        title="Contact Scale Up | Digital Marketing Agency Kerala"
        description="Get in touch with Scale Up Kerala. Start your free consultation for website development, Meta Ads, or social media management today."
        keywords="contact digital agency Kerala, WhatsApp digital marketing Kerala, Scale Up Kerala, website development Kerala"
      />

      {/* Hero */}
      <section
        data-ocid="contact.hero_section"
        className="bg-background pt-28 pb-16 border-b border-border relative overflow-hidden"
      >
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center top, oklch(0.62 0.23 264 / 0.15) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              <MessageCircle size={12} />
              Free Consultation
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-5">
              Let&apos;s grow your{" "}
              <span className="text-gradient">business together</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Reach out via WhatsApp for the fastest response — or fill the form
              below and we'll follow up within 2 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section data-ocid="contact.main_section" className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            {/* Left: WhatsApp CTA + Info */}
            <div className="flex flex-col gap-6">
              {/* WhatsApp Primary CTA */}
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
                className="card-elevated p-8 flex flex-col items-center gap-5 text-center"
                style={{
                  boxShadow:
                    "0 0 48px oklch(0.62 0.23 264 / 0.12), 0 4px 24px rgba(0,0,0,0.3)",
                  borderColor: "oklch(0.62 0.23 264 / 0.3)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(37,211,102,0.12)",
                    border: "2px solid rgba(37,211,102,0.45)",
                    boxShadow: "0 0 24px rgba(37,211,102,0.2)",
                  }}
                >
                  <SiWhatsapp size={36} style={{ color: "#25D366" }} />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground">
                    Chat on WhatsApp
                  </h2>
                  <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto leading-relaxed">
                    We typically respond in under 10 minutes. Get a free
                    strategy session — no strings attached.
                  </p>
                </div>
                <motion.a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.whatsapp_primary_button"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full inline-flex items-center justify-center gap-2.5 font-display font-bold text-base py-4 rounded-xl transition-smooth text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                    boxShadow: "0 0 24px rgba(37,211,102,0.3)",
                  }}
                >
                  <SiWhatsapp size={20} />
                  Start Free Consultation
                </motion.a>
                <p className="text-xs text-muted-foreground">
                  Available Mon–Sat · 9AM–7PM IST
                </p>
              </motion.div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Phone,
                    label: "WhatsApp",
                    value: WA_NUMBER,
                    href: "tel:+919048342390",
                    ocid: "contact.phone_card",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Kerala, India",
                    href: null,
                    ocid: "contact.location_card",
                  },
                ].map(({ icon: Icon, label, value, href, ocid }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.12 + 0.3, duration: 0.4 }}
                    data-ocid={ocid}
                    className="card-elevated p-5 flex flex-col gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-foreground hover:text-primary transition-smooth break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="card-elevated p-8"
            >
              <h2 className="font-display font-bold text-xl text-foreground mb-1">
                Send us a Message
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Fill the form and we'll follow up via WhatsApp.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    data-ocid="contact.form_success_state"
                    className="flex flex-col items-center gap-4 py-12 text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: "oklch(0.62 0.23 264 / 0.15)",
                        border: "2px solid oklch(0.62 0.23 264 / 0.4)",
                        boxShadow: "0 0 24px oklch(0.62 0.23 264 / 0.25)",
                      }}
                    >
                      <CheckCircle2 size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground mb-2">
                        Thanks! We'll reach out on WhatsApp shortly.
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Your details have been received. Expect a message from
                        us very soon!
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                    data-ocid="contact.inquiry_form"
                    noValidate
                  >
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="name" className="text-sm font-semibold">
                        Your Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="e.g. Rahul Krishnan"
                        data-ocid="contact.name_input"
                        className="bg-muted/30 border-border focus:border-primary"
                        aria-invalid={!!errors.name}
                        {...register("name", {
                          required: "Name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters",
                          },
                        })}
                      />
                      {errors.name && (
                        <p
                          data-ocid="contact.name_field_error"
                          className="text-xs text-destructive mt-0.5"
                        >
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Business Name */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="businessName"
                        className="text-sm font-semibold"
                      >
                        Business Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="businessName"
                        placeholder="e.g. Krishnan Builders"
                        data-ocid="contact.business_input"
                        className="bg-muted/30 border-border focus:border-primary"
                        aria-invalid={!!errors.businessName}
                        {...register("businessName", {
                          required: "Business name is required",
                          minLength: {
                            value: 2,
                            message:
                              "Business name must be at least 2 characters",
                          },
                        })}
                      />
                      {errors.businessName && (
                        <p
                          data-ocid="contact.business_field_error"
                          className="text-xs text-destructive mt-0.5"
                        >
                          {errors.businessName.message}
                        </p>
                      )}
                    </div>

                    {/* Service Needed */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="serviceNeeded"
                        className="text-sm font-semibold"
                      >
                        Service Needed <span className="text-primary">*</span>
                      </Label>
                      <select
                        id="serviceNeeded"
                        data-ocid="contact.service_select"
                        aria-invalid={!!errors.serviceNeeded}
                        className="flex h-10 w-full rounded-md border border-border bg-muted/30 px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-smooth disabled:opacity-50"
                        {...register("serviceNeeded", {
                          required: "Please select a service",
                        })}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a service…
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.serviceNeeded && (
                        <p
                          data-ocid="contact.service_field_error"
                          className="text-xs text-destructive mt-0.5"
                        >
                          {errors.serviceNeeded.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="message"
                        className="text-sm font-semibold"
                      >
                        Message <span className="text-primary">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your business and goals…"
                        data-ocid="contact.message_textarea"
                        className="bg-muted/30 border-border focus:border-primary min-h-[110px] resize-none"
                        aria-invalid={!!errors.message}
                        {...register("message", {
                          required: "Message is required",
                          minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters",
                          },
                        })}
                      />
                      {errors.message && (
                        <p
                          data-ocid="contact.message_field_error"
                          className="text-xs text-destructive mt-0.5"
                        >
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      data-ocid="contact.form_submit_button"
                      className="w-full button-primary py-5 text-sm"
                    >
                      <SiWhatsapp size={16} />
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      This opens WhatsApp with your message pre-filled — reply
                      instantly.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        data-ocid="contact.faq_section"
        className="bg-muted/20 py-20 border-t border-border"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeader
            label="FAQ"
            title="Common"
            titleHighlight="Questions"
          />
          <div className="flex flex-col gap-4 mt-2">
            {FAQ_ITEMS.map(({ q, a }, i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                data-ocid={`contact.faq_item.${i + 1}`}
                className="card-elevated p-6"
              >
                <h3 className="font-display font-bold text-base text-foreground mb-2 flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">Q.</span>
                  {q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-5">
                  {a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        data-ocid="contact.bottom_cta_section"
        className="bg-background py-20 border-t border-border relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.62 0.23 264 / 0.06) 0%, transparent 65%)",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Prefer to chat directly?
            </h2>
            <p className="text-muted-foreground text-base">
              Skip the form and message us now. We're ready to help your
              business grow.
            </p>
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp_bottom_button"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 font-display font-bold text-base px-8 py-4 rounded-xl text-white transition-smooth"
              style={{
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                boxShadow:
                  "0 0 30px rgba(37,211,102,0.3), 0 4px 16px rgba(0,0,0,0.25)",
              }}
            >
              <SiWhatsapp size={22} />
              Chat on WhatsApp
            </motion.a>
            <p className="text-xs text-muted-foreground">
              +91 90483 42390 · Kerala, India
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
