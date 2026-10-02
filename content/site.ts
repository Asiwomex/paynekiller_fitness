// PLACEHOLDER marks anything invented for the first build. Replace with real details.

export const site = {
  name: "PayneKiller Fitness",
  shortName: "PayneKiller",
  tagline: "No Pain No Gain",
  description:
    "Personal training, aerobics, group sessions and supplements with PayneKiller in Accra, Ghana. Book your first session on WhatsApp.",
  url: "https://paynekiller.lytaworks.com",
  city: "Accra",
  country: "Ghana",
  address: "Accra, Ghana", // PLACEHOLDER: add the gym's street address
  hours: "Mon to Sat, 5:30am to 8:00pm", // PLACEHOLDER
  phones: [
    { label: "055 660 3202", tel: "+233556603202" },
    { label: "050 725 6410", tel: "+233507256410" },
  ],
  whatsapp: "233556603202",
  socials: [
    { label: "TikTok", href: "https://www.tiktok.com/@paynekillerfitness" },
    { label: "YouTube", href: "https://youtu.be/m-R0xVsXBDw" },
  ],
  nav: [
    { label: "Programs", href: "/programs" },
    { label: "Supplements", href: "/supplements" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  // PLACEHOLDER numbers
  stats: [
    { value: 8, suffix: "+", label: "Years coaching" },
    { value: 500, suffix: "+", label: "People trained" },
    { value: 6, suffix: "", label: "Sessions a week" },
  ],
} as const;
