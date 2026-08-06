"use client";

import { useState } from "react";

export default function RetoolEmbed({ title, description, src }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-w-0 w-full overflow-hidden rounded-3xl border border-stone-900/10 bg-stone-100/70 dark:border-white/10 dark:bg-stone-950/70">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-stone-900 dark:text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">{description}</p>
        {!loaded && (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-500 dark:bg-orange-500 dark:text-stone-950 dark:hover:bg-orange-400"
          >
            Launch app
          </button>
        )}
      </div>
      {loaded && (
        <div className="w-full overflow-x-auto">
          <iframe
            src={src}
            title={title}
            loading="lazy"
            className="block h-[800px] w-full max-w-full border-0"
          />
        </div>
      )}
    </div>
  );
}
