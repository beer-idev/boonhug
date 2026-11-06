import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Boonhug — เพราะทุกชีวิตมีค่าเสมอ",
  description: "บริจาค รับเลี้ยง และช่วยเหลือน้องสี่ขาอย่างโปร่งใสกับ Boonhug",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
