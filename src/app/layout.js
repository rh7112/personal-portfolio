import localFont from "next/font/local";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import { getEmployers } from "@/lib/portfolio-data";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ryan Hurd | Software Engineer",
  description:
    "Portfolio site for Ryan Hurd, a software engineer focused on thoughtful tools and practical solutions.",
};

export default async function RootLayout({ children }) {
  const employers = await getEmployers();

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SiteHeader employers={employers} />
        {children}
      </body>
    </html>
  );
}
