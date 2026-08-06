"use client";

import Script from "next/script";

export default function BuyMeACoffeeButton() {
  return (
    <Script
      src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
      data-name="bmc-button"
      data-slug="ryan.hurd"
      data-color="#d47f08"
      data-emoji=""
      data-font="Cookie"
      data-text="Buy me a coffee"
      data-outline-color="#000000"
      data-font-color="#000000"
      data-coffee-color="#FFDD00"
      strategy="lazyOnload"
    />
  );
}
