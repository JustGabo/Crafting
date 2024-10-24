import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GsapProvider } from "./components/gsapContext";
import "../globals.css";
import s from './styles.module.css'

export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery layout",
};

const montserrat = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={s.html} lang="en">
      <GsapProvider>
        <body className={`${montserrat.className} ${s.body}`}>
          
          {children}
        </body>
      </GsapProvider>
    </html>
  );
}
