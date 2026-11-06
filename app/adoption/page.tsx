import Image from "next/image";
import { AdoptionList } from "@/components/adoption-list";

export const metadata = { title: "รับเลี้ยงน้อง | Boonhug" };

export default function AdoptionPage() {
  return (
    <div className="page-section py-8 md:py-12">
      <section className="relative hidden aspect-[881/149] overflow-hidden rounded-[32px] shadow-[var(--shadow)] lg:block">
        <Image src="/images/adoption-hero.png" alt="น้อง ๆ รอคนใจดีอยู่ที่นี่" fill priority sizes="(max-width: 1180px) 100vw, 1180px" className="object-contain" />
      </section>
      <section className="gradient-brand overflow-hidden rounded-[32px] p-6 text-white shadow-[var(--shadow)] sm:p-9 lg:hidden">
        <p className="text-sm font-bold text-cyan-50">เพื่อนสี่ขากำลังรอคุณ</p>
        <h1 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">น้อง ๆ รอคนใจดีอยู่ที่นี่</h1>
        <p className="mt-3 max-w-xl text-sm leading-7 text-blue-50">เปิดบ้านให้น้องได้เริ่มต้นชีวิตใหม่ เลือกทำความรู้จักเพื่อนสี่ขาที่พร้อมรับเลี้ยง</p>
        <div className="mt-6 grid grid-cols-3 gap-2.5 sm:max-w-xl sm:gap-4">
          {[
            ["/images/pet-mali.png", "น้องมะลิ"],
            ["/images/pet-dumbo.png", "น้องดัมโบ"],
            ["/images/pet-jaja.png", "น้องจาจ้า"],
          ].map(([src, alt]) => (
            <div key={src} className="relative aspect-square min-w-0 overflow-hidden rounded-2xl border-2 border-white/40 bg-white/20">
              <Image src={src} alt={alt} fill sizes="(max-width: 640px) 28vw, 180px" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="gradient-brand mt-8 rounded-[34px] p-4 shadow-[var(--shadow)] md:p-7">
        <div className="mb-5 px-2 text-white">
          <p className="text-sm font-bold text-cyan-50">บ้านที่พร้อม คือจุดเริ่มต้นของชีวิตใหม่</p>
          <h1 className="mt-1 text-2xl font-black md:text-4xl">พบเพื่อนสี่ขาที่กำลังรอคุณ</h1>
        </div>
        <div className="rounded-[28px] bg-[#fffcf5] p-4 md:p-6">
          <AdoptionList />
        </div>
      </section>
    </div>
  );
}
