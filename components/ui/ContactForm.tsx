"use client";

import { useState } from "react";
import { programs } from "@/content/programs";
import { waLink } from "@/lib/whatsapp";
import { Arrow } from "@/components/ui/CapsuleButton";

const goals = ["Lose fat", "Build muscle", "Get fitter", "Not sure yet"];

const field =
  "h-14 w-full rounded-full border border-line bg-transparent px-6 text-base text-bone placeholder:text-ash/70 transition-colors hover:border-bone/40 focus:border-bone";

/** Nothing is sent to a server: the answers are composed into a WhatsApp message. */
export function ContactForm() {
  const [name, setName] = useState("");
  const [program, setProgram] = useState(programs[0].name);
  const [goal, setGoal] = useState(goals[0]);

  const message = `Hi PayneKiller, my name is ${name.trim() || "..."}. I'm interested in ${program}. My goal: ${goal.toLowerCase()}.`;

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waLink(message), "_blank", "noopener,noreferrer");
      }}
    >
      <div>
        <label htmlFor="name" className="label mb-2 block text-ash">
          Your name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="given-name"
          placeholder="Ama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
        />
      </div>

      <div>
        <label htmlFor="program" className="label mb-2 block text-ash">
          Program
        </label>
        <select
          id="program"
          name="program"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className={`${field} appearance-none`}
        >
          {programs.map((p) => (
            <option key={p.slug} className="bg-ink">
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className="label mb-3 text-ash">Your goal</legend>
        <div className="flex flex-wrap gap-2">
          {goals.map((option) => (
            <label
              key={option}
              className="flex h-11 cursor-pointer items-center rounded-full border border-line px-5 text-sm transition-colors hover:border-bone/40 has-checked:border-bone has-checked:bg-bone has-checked:text-ink has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ember"
            >
              <input
                type="radio"
                name="goal"
                value={option}
                checked={goal === option}
                onChange={() => setGoal(option)}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="rounded-3xl border border-line bg-coal p-5">
        <p className="label text-ash">Your message</p>
        <p className="mt-2 leading-relaxed text-bone/90">{message}</p>
      </div>

      <button
        type="submit"
        className="flex h-14 items-center justify-between rounded-full bg-ember pl-7 pr-2 font-medium text-ink transition-transform duration-300 active:scale-[0.97]"
      >
        Open in WhatsApp
        <span className="grid size-10 place-items-center rounded-full bg-ink text-bone">
          <Arrow />
        </span>
      </button>
    </form>
  );
}
