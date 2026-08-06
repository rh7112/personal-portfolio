import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function BuyMeACoffeeButton() {
  return (
    <a
      href="https://buymeacoffee.com/ryan.hurd"
      target="_blank"
      rel="noreferrer"
      className={`${lato.className} inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-base font-bold shadow-md transition hover:-translate-y-0.5 hover:shadow-lg`}
      style={{
        backgroundColor: "#FFDD00",
        color: "#000000",
        borderColor: "#000000",
      }}
    >
      <span aria-hidden="true">☕</span>
      Buy me a bad idea
    </a>
  );
}
