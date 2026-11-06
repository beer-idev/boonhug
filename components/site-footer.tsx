import Link from "next/link";
import { Camera, Mail, MessageCircle, PawPrint } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-[#083e9e] text-white">
      <div className="page-section grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <div className="mb-4 flex items-center gap-2 text-2xl font-extrabold">
            <PawPrint className="size-8 fill-[#53d7dc] stroke-[#53d7dc]" /> boonhug.net
          </div>
          <p className="max-w-md text-sm leading-7 text-blue-100">
            พื้นที่เล็ก ๆ ที่เชื่อมคนใจดีเข้ากับน้องสี่ขา ให้ทุกการบริจาคและการรับเลี้ยงเกิดขึ้นอย่างโปร่งใส
          </p>
        </div>
        <div>
          <p className="mb-3 font-bold">สำรวจ</p>
          <div className="grid gap-2 text-sm text-blue-100">
            <Link href="/adoption">รับเลี้ยงน้อง</Link>
            <Link href="/donation">บริจาค</Link>
            <Link href="/shop">ร้านค้า</Link>
          </div>
        </div>
        <div>
          <p className="mb-3 font-bold">ติดตามเรา</p>
          <div className="flex gap-3">
            {[MessageCircle, Camera, Mail].map((Icon, index) => (
              <a key={index} href="#" aria-label={["Facebook", "Instagram", "อีเมล"][index]} className="grid size-11 place-items-center rounded-full bg-white/12 hover:bg-white/20">
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-xs text-blue-200">© 2026 boonhug.net · Mockup experience</div>
    </footer>
  );
}
