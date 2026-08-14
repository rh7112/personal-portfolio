"use client";

import { useEffect, useState } from "react";

// Real, verifiable other people who share this name -- not a joke list, an
// actual disambiguation. Keep this to names that can be backed up (country
// singer-songwriter; dream/sleep-paralysis researcher and author) rather
// than guessing at others.
const otherRyanHurds = ["the country singer", "the dream researcher"];

export default function NotTheOtherRyanHurd() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((current) => (current + 1) % otherRyanHurds.length);
        setVisible(true);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="mt-3 text-sm italic text-stone-500 dark:text-stone-400">
      Not{" "}
      <span
        className={`inline-block min-w-[9.5rem] transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {otherRyanHurds[index]}
      </span>
      .
    </p>
  );
}
