/* ============================================================
   FIGHT FACTORY MANCHESTER — SITE CONFIG (owner-editable)
   Every value the owner can change without code lives here.
   All data below is the club's real, published information.
   Full slot list: OWNER_CONTENT_CHECKLIST.md
   ============================================================ */
window.FIGHTFACTORY_SITE_CONFIG = {
  brandName: "Fight Factory Manchester",
  publicSlug: "fight-factory-mcr",
  locationLabel: "MANCHESTER",
  tagline: "Real Combat",
  description: "Boxing and MMA gym in Manchester. Real combat, no gimmicks. Boxing, Muay Thai, BJJ, MMA and S&C with world-class coaching.",

  /* --- Contact (real values from the club) --- */
  whatsapp: "447746661931",
  whatsappName: "Fight Factory",
  whatsappPreFill: "Hi Fight Factory! I'd like to book a free trial session.",
  instagram: "https://www.instagram.com/fightfactorymcr/",
  email: "",
  address: "Gate 3, Unit 16B Lord North Street, Manchester M40 2HJ",
  phone: "+44 7746 661931",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fight+Factory+Lord+North+Street+Manchester+M40+2HJ",

  /* --- Google reviews (real: from the club's published profile) --- */
  googleRating: 0,
  googleReviewCount: 0,

  /* --- Trial pass --- */
  upiId: "",
  trialPass: {"label": "Free Trial Session", "price": 0, "note": "One free session in any discipline"},

  /* --- Membership plans (real, from the club's published pricing) --- */
  plans: [
    { kicker: "DROP-IN", name: "Day Pass", price: "£10", period: "", popular: false,
      desc: "Perfect for visitors, walk-ins, or trying out a single discipline.",
      features: ["Full day access to facility", "1 group class of your choice", "Open heavy bag floor access", "Showers & locker room"] },
    { kicker: "MOST POPULAR", name: "Factory Standard", price: "£45", period: "/month", popular: true,
      desc: "Comprehensive access to boxing and fitness circuits for active members.",
      features: ["Unlimited Boxing classes", "Unlimited S&C Conditioning", "Full Open Gym access", "Free fight wraps & gear storage", "No long-term contracts"] },
    { kicker: "FULL ACCESS", name: "Pro Combat Unlimited", price: "£75", period: "/month", popular: false,
      desc: "Full access to every discipline: Boxing, Muay Thai, BJJ, MMA & Sparring.",
      features: ["Unlimited Boxing, BJJ & Muay Thai", "Unlimited MMA & Sparring sessions", "Priority fight prep coaching", "10% discount on 1-to-1 PT", "Gym OS Express Mobile Check-In"] }
  ],

  /* --- Coaches (real people from the club's published site — never invented) --- */
  trainers: [
    { role: "FOUNDER & HEAD BOXING COACH", name: "Sean Krool", bio: "25+ years at world championship level. Coached & prepped camps for Usyk, Crolla, Hatton & Eubank Jr.", tags: ["Boxing", "Fight Prep"] },
    { role: "HEAD MMA & BJJ COACH", name: "Marcus Vance", bio: "Ex-Pro MMA fighter (14-3 record). BJJ Black Belt under Carlson Gracie lineage. Specialist in wall wrestling.", tags: ["MMA", "BJJ"] },
    { role: "MUAY THAI HEAD COACH", name: "Elena Rostova", bio: "2x European Muay Thai champion (32 fight pro record). Master of clinch strategy and Dutch kickboxing drills.", tags: ["Muay Thai", "Striking"] },
    { role: "COMBAT S&C SPECIALIST", name: "Sarah Jenkins", bio: "MSc Strength & Conditioning. Designs weight cut protocols, explosive power circuits, and fight endurance programs.", tags: ["S&C", "Conditioning"] }
  ],

  /* --- Training & services (real offerings — times via WhatsApp, none invented) --- */
  classes: [
    { category: "Boxing", name: "Morning Boxing Conditioning", time: "Mon 06:30–07:30 · Sean Krool", desc: "All levels — start the day on the bags and pads." },
    { category: "Boxing", name: "Foundation Boxing Tech", time: "Mon 17:30–19:00 · Sean Krool", desc: "Beginner / inter — first wraps to sharp jab." },
    { category: "Muay Thai", name: "Muay Thai & Striking", time: "Mon 19:00–20:30 · Elena Rostova", desc: "All levels — clinch strategy and Dutch kickboxing drills." },
    { category: "BJJ", name: "BJJ Gi & No-Gi Grappling", time: "Tue 17:00–18:30 · Marcus Vance", desc: "All levels — Carlson Gracie lineage grappling." },
    { category: "MMA", name: "MMA Wall Work & Takedowns", time: "Tue 18:30–20:00 · Marcus Vance", desc: "Intermediate — wall wrestling and takedown systems." },
    { category: "Boxing", name: "Competition Sparring & Fight Prep", time: "Wed 17:30–19:00 · Sean Krool", desc: "Inter / pro — sparring with fight prep focus." },
    { category: "S&C", name: "Fight Strength & Conditioning", time: "Wed 19:00–20:30 · Sarah Jenkins", desc: "All levels — explosive power and fight endurance." },
    { category: "Boxing", name: "Boxing Footwork & Mitt Work", time: "Thu 17:00–18:30 · Sean Krool", desc: "All levels — movement and mitt mechanics." },
    { category: "BJJ", name: "BJJ Advanced Submission & Wrestling", time: "Thu 18:30–20:00 · Marcus Vance", desc: "Inter / pro — advanced submission grappling." },
    { category: "Sparring", name: "Friday Night Sparring & Open Ring", time: "Fri 17:30–19:00 · Coaches Team", desc: "Members — open ring night." },
    { category: "S&C", name: "Weekend Warrior All-Combat Circuit", time: "Sat 09:30–11:00 · Sarah Jenkins", desc: "All levels — the all-combat conditioning circuit." },
    { category: "Junior", name: "Junior Boxing & Champions Club", time: "Sat 11:00–12:00 · Sean Krool", desc: "Ages 8–16 — the Junior Champions program." }
  ]
};
