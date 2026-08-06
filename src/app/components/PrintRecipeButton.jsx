"use client";

export default function PrintRecipeButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-stone-100/70 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-orange-600 hover:text-stone-900 dark:border-white/10 dark:bg-stone-950/70 dark:text-stone-200 dark:hover:border-orange-400 dark:hover:text-white"
    >
      Print recipe
    </button>
  );
}
