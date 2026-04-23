# Scale Up — Design System

## Tone & Purpose
Premium tech SaaS landing page for digital agency. Bold, electric, purposeful. Converts leads via WhatsApp while maintaining premium minimal aesthetic.

## Color Palette

| Token | OKLCH | Hex | Usage |
| --- | --- | --- | --- |
| Primary (Electric Blue) | `0.62 0.23 264` | #3A86FF | Buttons, accents, CTAs, logo, glow effects |
| Background (Deep Black) | `0.08 0 0` | #0B0B0B | Page background (dark mode only) |
| Foreground (White) | `0.95 0 0` | #F5F5F5 | Text, headings, strong contrast |
| Muted (Dark Grey) | `0.17 0 0` | #2A2A2A | Secondary backgrounds, cards, elevation |
| Accent (Blue Echo) | `0.62 0.23 264` | #3A86FF | Highlights, borders, interactive states |
| Border (Blue Tint) | `0.22 0.08 264` | #1F1F3F | Subtle blue-tinted borders for cards |

## Typography

| Role | Font | Weights | Usage |
| --- | --- | --- | --- |
| Display | Bricolage Grotesque | 400–900 | H1, H2, brand logo, large CTAs |
| Body | General Sans | 400, 700 | Body text, labels, meta information |
| Mono | JetBrains Mono | 400, 700 | Code snippets, technical details (rare) |

**Type Scale:** H1 48px/700, H2 36px/700, H3 28px/600, Body 16px/400, Small 14px/400

## Elevation & Depth

| Zone | Treatment | Background | Border |
| --- | --- | --- | --- |
| Header | Sticky, elevated | `0.13 0 0` (dark card) | `0.22 0.08 264` (blue-tinted) |
| Hero | Full-width hero section | `0.08 0 0` (deep black) | None |
| Content Cards | Service/testimonial blocks | `0.13 0 0` (elevated) | `0.22 0.08 264` (subtle blue) |
| CTA Buttons | Primary actions | Gradient blue (var(--gradient-primary)) | None, with glow-blue shadow |
| Floating Button | Sticky WhatsApp button | Electric blue with glow | Circular, no border |
| Footer | Base elevation | `0.08 0 0` (deep black) | `0.22 0.08 264` (top border only) |

## Spacing & Rhythm

- **Base unit:** 8px grid system
- **Padding:** 16px (2 units) small, 24px (3 units) medium, 32px (4 units) large, 48px (6 units) hero
- **Gap between sections:** 64px desktop, 48px tablet, 32px mobile
- **Internal card spacing:** 20px heading + 16px body + 16px bottom padding

## Shape Language

- **Buttons & CTAs:** `rounded-lg` (10px)
- **Cards:** `rounded-lg` (10px)
- **Inputs:** `rounded-md` (8px)
- **Small elements:** `rounded-sm` (6px)
- **Floating button:** `rounded-full` (50%)

## Component Patterns

- **Primary Button:** `bg-gradient-primary text-white font-bold px-6 py-3 rounded-lg shadow-glow-blue hover:shadow-glow-blue-lg transition-smooth hover:scale-105 active:scale-95`
- **Secondary Button:** `border-2 border-primary text-primary bg-transparent px-6 py-3 rounded-lg transition-smooth hover:bg-primary/10`
- **Service Card:** `bg-muted border-l-4 border-accent rounded-lg p-6 transition-smooth hover:shadow-elevation-2`
- **CTA Section:** Hero-height blue gradient background with centered white text and prominent primary button below

## Motion & Animation

- **Page load:** Fade-in (400ms) on hero + slide-up stagger on sections
- **Scroll interactions:** Fade-in + slide-up triggered at 80% viewport entry
- **Button hover:** Scale 105% + glow intensification over 300ms
- **Button active:** Scale 95%, immediate feedback
- **Logo animation:** Continuous gentle bounce on hover, expandable on mobile tap
- **Floating button:** Pulse-glow animation (2s infinite) to draw attention
- **Transitions:** All interactive elements use `transition-smooth` (300ms cubic-bezier)

## Structural Zones

1. **Header:** Sticky dark card with blue border bottom, contains animated Scale Up logo (left) and nav links + WhatsApp button (right). Logo scales/bounces on hover.
2. **Hero Section:** Full-width deep black background, center-aligned white headline + subheading, large blue gradient button with glow, secondary info text below.
3. **Services Section:** Three equal-width cards (stacked mobile) with blue left borders, white text, blue accent icons, prominent CTA buttons per service.
4. **Proof Section:** Metrics cards with dark backgrounds, white numbers, blue accent lines, subtle animations on scroll.
5. **Process Section:** Three vertical steps with blue connectors, dark backgrounds, white text, alternating left/right layout.
6. **Testimonials Section:** Dark card backgrounds, blue accent top border, white text, subtle elevation, profile images (rounded circle).
7. **CTA Section:** Full-width blue gradient background with white headline + subheading, large primary button, floating WhatsApp button always visible.
8. **Footer:** Deep black background, blue top border, grey text links, copyright info, social links in blue.

## Signature Detail

Electric blue gradient glow effects on all primary CTAs — creates premium, tech-forward impression. Subtle shadow with radial glow (`0 0 30px oklch(0.62 0.23 264 / 0.4)`) intensifies on hover. Animated Scale Up logo bounces on interaction, reinforcing brand energy.

## Constraints

- No heavy/bouncy animations—smooth, purposeful motion only (cubic-bezier easing)
- No rainbow or mismatched color palettes—only Electric Blue + Deep Black + White
- All text must meet AA contrast ratio (minimum 7:1 on primary CTA)
- Lazy-load images, minimize JavaScript, optimize Core Web Vitals
- Mobile-first responsive; test on 375px+ viewports
- Dark mode only (no light theme variant)
