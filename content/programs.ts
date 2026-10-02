// PLACEHOLDER prices, doses and durations. Replace with the real offer.

export type Program = {
  slug: string;
  rx: string;
  name: string;
  tagline: string;
  summary: string;
  dose: string;
  duration: string;
  price: string;
  clip: string; // file stem in public/media
  ingredients: string[];
  indications: string[];
  steps: { title: string; body: string }[];
};

export const programs: Program[] = [
  {
    slug: "personal-training",
    rx: "01",
    name: "Personal Training",
    tagline: "One coach. One plan. Yours.",
    summary:
      "One-on-one sessions in the gym with PayneKiller. He watches every rep, fixes your form and raises the load when you are ready.",
    dose: "3 to 5 sessions a week",
    duration: "12 weeks",
    price: "From GHS 800 / month",
    clip: "training",
    ingredients: ["Strength work", "Form coaching", "Progress tracking", "Meal guidance"],
    indications: [
      "You want to build muscle or lose fat with someone holding you to it",
      "You have trained alone and stopped seeing change",
      "You are new to the gym and want to learn it properly",
    ],
    steps: [
      { title: "Assessment", body: "A first session to check where you are: strength, mobility, weight and goals." },
      { title: "Your plan", body: "A weekly split built around your schedule, with target weights for every lift." },
      { title: "Review", body: "Measurements every four weeks. The plan changes when the numbers say it should." },
    ],
  },
  {
    slug: "aerobics-group-training",
    rx: "02",
    name: "Aerobics & Group Training",
    tagline: "Sweat with the squad.",
    summary:
      "High-energy aerobics and road sessions, indoors and outdoors across Accra. Loud music, a big group and no one left behind.",
    dose: "Up to 6 sessions a week",
    duration: "Ongoing",
    price: "From GHS 30 / session",
    clip: "aerobics",
    ingredients: ["Aerobics", "Road work", "Bodyweight circuits", "Stretching"],
    indications: [
      "You train harder when other people are around",
      "You want cardio that does not feel like a treadmill",
      "You are looking for a Saturday morning habit",
    ],
    steps: [
      { title: "Show up", body: "Message for this week's location and time. Bring water and a towel." },
      { title: "Warm up together", body: "Ten minutes of mobility and light movement before the pace picks up." },
      { title: "Finish strong", body: "Circuits, a cool-down stretch and a group photo you will be proud of." },
    ],
  },
  {
    slug: "online-fat-loss",
    rx: "03",
    name: "Online Fat Loss",
    tagline: "Lose fat without the gym.",
    summary:
      "A home program for people who cannot get to the gym. Short daily workouts, simple food rules and weekly check-ins on WhatsApp.",
    dose: "25 minutes a day",
    duration: "8 weeks",
    price: "From GHS 350 / program",
    clip: "no-gym-fat-loss",
    ingredients: ["Home workouts", "Local-food meal guide", "Weekly check-in", "Video demos"],
    indications: [
      "You are outside Accra or your schedule will not allow gym hours",
      "You want to lose belly fat with food you already eat",
      "You need someone checking in every week",
    ],
    steps: [
      { title: "Start", body: "Send your weight, a photo and your goal. You get your plan within 48 hours." },
      { title: "Daily dose", body: "One short workout a day with a video for each move. No equipment needed." },
      { title: "Check-in", body: "Every Sunday you report in and the next week is adjusted." },
    ],
  },
  {
    slug: "supplements",
    rx: "04",
    name: "Supplements",
    tagline: "Fuel that matches the work.",
    summary:
      "Protein, creatine, mass gainers and fat burners that PayneKiller uses and recommends, with honest advice on what you actually need.",
    dose: "As advised",
    duration: "Delivery in Accra",
    price: "From GHS 150",
    clip: "belly-fat",
    ingredients: ["Whey protein", "Creatine", "Mass gainer", "Pre-workout"],
    indications: [
      "You train hard and your food is not covering it",
      "You are not sure which products are genuine",
      "You want a stack that fits your goal and budget",
    ],
    steps: [
      { title: "Ask", body: "Message your goal and budget. You will be told what is worth buying and what is not." },
      { title: "Order", body: "Confirm on WhatsApp. Pay on delivery or by mobile money." },
      { title: "Use it right", body: "You get dosing and timing instructions with every order." },
    ],
  },
];

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug);
}
