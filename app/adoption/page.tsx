import Image from "next/image";
import { AdoptionList } from "@/components/adoption-list";

export const metadata = { title: "รับเลี้ยงน้อง | Boonhug" };

export default function AdoptionPage() {
  return (
    <div className="page-section py-8 md:py-12">
      <section className="relative aspect-[881/149] min-h-[220px] overflow-hidden rounded-[32px] shadow-[var(--shadow)]">
        <Image src="/images/adoption-hero.png" alt="น้อง ๆ รอคนใจดีอยู่ที่นี่" fill priority sizes="(max-width: 1180px) 100vw, 1180px" className="object-cover max-md:object-[53%_center]" />
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
