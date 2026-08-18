"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function getStoredTheme() {
  if (typeof window === "undefined") {
    return null;
  }
  return window.localStorage.getItem("theme");
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  if (theme === "dark" || theme === "light") {
    root.classList.add(theme);
  }
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = getStoredTheme();
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(stored ? stored === "dark" : systemDark);
  }, []);

  function toggleTheme() {
    const next = isDark ? "light" : "dark";
    setIsDark(!isDark);
    window.localStorage.setItem("theme", next);
    applyTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center rounded-full border border-stone-900/10 p-2 text-stone-700 transition hover:border-orange-600 hover:text-stone-900 dark:border-white/10 dark:text-stone-200 dark:hover:border-orange-400 dark:hover:text-white"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
