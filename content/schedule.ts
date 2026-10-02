// PLACEHOLDER timetable. Replace with the real weekly schedule.

export type Slot = { time: string; name: string; place: string };

export const schedule: { day: string; slots: Slot[] }[] = [
  {
    day: "Mon",
    slots: [
      { time: "5:30am", name: "Morning Strength", place: "Gym floor" },
      { time: "6:00pm", name: "Aerobics", place: "Studio" },
    ],
  },
  {
    day: "Tue",
    slots: [
      { time: "5:30am", name: "Fat Burn Circuit", place: "Gym floor" },
      { time: "6:00pm", name: "Group Training", place: "Gym floor" },
    ],
  },
  {
    day: "Wed",
    slots: [
      { time: "5:30am", name: "Morning Strength", place: "Gym floor" },
      { time: "6:00pm", name: "Aerobics", place: "Studio" },
    ],
  },
  {
    day: "Thu",
    slots: [
      { time: "5:30am", name: "Fat Burn Circuit", place: "Gym floor" },
      { time: "6:00pm", name: "Group Training", place: "Gym floor" },
    ],
  },
  {
    day: "Fri",
    slots: [
      { time: "5:30am", name: "Morning Strength", place: "Gym floor" },
      { time: "6:00pm", name: "Aerobics", place: "Studio" },
    ],
  },
  {
    day: "Sat",
    slots: [
      { time: "6:00am", name: "Outdoor Aerobics", place: "Road session, Accra" },
      { time: "8:00am", name: "Turf Bootcamp", place: "Astro turf" },
    ],
  },
];
