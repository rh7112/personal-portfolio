"use client";

import { useState } from "react";

export default function RetoolEmbed({ title, description, src }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
        {!loaded && (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-400"
          >
            Launch app
          </button>
        )}
      </div>
      {loaded && (
        <iframe
          src={src}
          title={title}
          width="100%"
          height="800"
          loading="lazy"
          className="block border-0"
        />
      )}
    </div>
  );
}
