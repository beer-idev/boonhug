import { HeartHandshake, SearchCheck, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = { title: "เกี่ยวกับเรา | Boonhug" };

export default function AboutPage() {
  return (
    <div className="page-section py-8 md:py-12">
      <section className="gradient-brand overflow-hidden rounded-[36px] px-7 py-14 text-white shadow-[var(--shadow)] md:px-14 md:py-20">
        <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-cyan-100">about boonhug</span>
        <h1 className="mt-3 max-w-4xl balance text-4xl font-black leading-tight md:text-7xl">เพราะทุกชีวิต<br />มีค่าเสมอ</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50 md:text-lg">Boonhug เกิดจากความตั้งใจที่จะทำให้การช่วยเหลือสัตว์จรจัดเป็นเรื่องง่าย โปร่งใส และเข้าถึงได้สำหรับทุกคน</p>
      </section>

      <section className="grid gap-6 py-14 md:grid-cols-3">
        {[
          { icon: SearchCheck, title: "คัดกรององค์กร", text: "ตรวจสอบข้อมูลติดต่อ บัญชี และภารกิจขององค์กรก่อนเผยแพร่" },
          { icon: ShieldCheck, title: "โปร่งใสตรวจสอบได้", text: "แสดงยอดและความคืบหน้าของแต่ละแคมเปญอย่างชัดเจน" },
          { icon: HeartHandshake, title: "ส่งต่อได้ตรงจุด", text: "เชื่อมคนใจดีไปยังเคสและน้อง ๆ ที่ต้องการความช่วยเหลือ" },
        ].map(({ icon: Icon, title, text }) => (
          <article key={title} className="soft-card p-7">
            <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-[#e7fbfb] text-[#08abc1]"><Icon className="size-7" /></div>
            <h2 className="text-xl font-black text-[#0753bb]">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[34px] bg-white p-8 text-center shadow-[var(--shadow)] md:p-12">
        <Sparkles className="mx-auto size-10 text-[#ffb51b]" />
        <h2 className="mt-4 text-3xl font-black text-[#0753bb]">พร้อมส่งต่อความใจดีหรือยัง?</h2>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="warm"><Link href="/donation">เริ่มบริจาค</Link></Button>
          <Button asChild size="lg" variant="outline"><Link href="/adoption">ดูน้องที่รอบ้าน</Link></Button>
        </div>
      </section>
    </div>
  );
}
