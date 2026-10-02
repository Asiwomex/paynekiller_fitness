// PLACEHOLDER catalogue and prices. Replace with real stock.

export type Supplement = {
  code: string;
  name: string;
  purpose: string;
  directions: string;
  size: string;
  price: string;
};

export const supplements: Supplement[] = [
  {
    code: "WP",
    name: "Whey Protein",
    purpose: "Muscle repair and growth",
    directions: "One scoop after training or with breakfast.",
    size: "2 kg",
    price: "GHS 650",
  },
  {
    code: "CR",
    name: "Creatine Monohydrate",
    purpose: "Strength and power",
    directions: "5 g daily with water, every day.",
    size: "300 g",
    price: "GHS 280",
  },
  {
    code: "MG",
    name: "Mass Gainer",
    purpose: "Weight and size",
    directions: "One serving between meals.",
    size: "5 kg",
    price: "GHS 850",
  },
  {
    code: "PW",
    name: "Pre-Workout",
    purpose: "Energy and focus",
    directions: "One scoop 20 minutes before training.",
    size: "30 servings",
    price: "GHS 320",
  },
  {
    code: "FB",
    name: "Fat Burner",
    purpose: "Supports fat loss",
    directions: "As advised, alongside a calorie deficit.",
    size: "60 capsules",
    price: "GHS 300",
  },
  {
    code: "MV",
    name: "Multivitamin",
    purpose: "Daily cover",
    directions: "One tablet with food.",
    size: "90 tablets",
    price: "GHS 150",
  },
];
