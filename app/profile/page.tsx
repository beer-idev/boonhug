import Image from "next/image";
import { Building2, CalendarDays, Coins, Heart, Pencil, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = { title: "โปรไฟล์ | Boonhug" };

const stats = [
  { icon: Heart, label: "จำนวนครั้งที่บริจาค", value: "25", unit: "ครั้ง" },
  { icon: Coins, label: "ยอดบริจาคเฉลี่ยต่อครั้ง", value: "฿500", unit: "บาท" },
  { icon: Building2, label: "องค์กรที่คุณสนับสนุน", value: "5", unit: "แห่ง" },
];

export default function ProfilePage() {
  return (
    <div className="page-section py-8 md:py-12">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="soft-card p-5 md:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="relative size-28 shrink-0 overflow-hidden rounded-full border-4 border-[#08abc1] bg-[#dff8f8]">
              <Image src="/images/profile-avatar.png" alt="รูปโปรไฟล์ นภัสสร สังขลาย" fill priority sizes="112px" className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-[#079eb5] md:text-3xl">นภัสสร สังขลาย</h1>
                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-500"><CalendarDays className="size-4" /> สมาชิกตั้งแต่ 12 ม.ค. 2569</p>
                  <p className="mt-1 text-sm text-slate-500">อายุ 22 ปี</p>
                </div>
                <Button size="icon" variant="outline" aria-label="แก้ไขโปรไฟล์"><Pencil className="size-4" /></Button>
              </div>
            </div>
          </div>
          <div className="gradient-brand mt-6 rounded-[26px] px-6 py-5 text-white">
            <p className="text-sm text-cyan-50">ยอดรวมการบริจาคของคุณ</p>
            <p className="mt-1 text-4xl font-black md:text-5xl">฿30,500 <span className="text-xl">บาท</span></p>
          </div>
        </section>

        <section className="soft-card flex flex-col items-center justify-center p-7 text-center">
          <div className="grid size-44 place-items-center rounded-full border-[10px] border-[#0ab3c9] bg-white shadow-xl">
            <div><p className="bg-gradient-to-r from-[#ffdc55] to-[#ff914d] bg-clip-text text-7xl font-black text-transparent">69</p><p className="text-sm font-black text-[#079eb5]">อันดับของคุณ</p></div>
          </div>
          <div className="gradient-brand mt-6 w-full rounded-full px-5 py-4 font-bold text-white">จากผู้บริจาคทั้งหมด 32,526 คน</div>
        </section>
      </div>

      <section className="gradient-brand mt-9 rounded-[34px] p-4 shadow-[var(--shadow)] md:p-6">
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map(({ icon: Icon, label, value, unit }) => (
            <article key={label} className="relative rounded-[26px] bg-white p-6 pt-10 text-center">
              <div className="absolute left-1/2 top-0 grid size-14 -translate-x-1/2 -translate-y-1/3 place-items-center rounded-full bg-[#50d2d9] text-white"><Icon className="size-7 fill-white/20" /></div>
              <p className="font-black text-[#079eb5]">{label}</p>
              <p className="mt-3 text-5xl font-black text-[#079eb5]">{value} <span className="text-sm font-bold">{unit}</span></p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-9 grid gap-5 md:grid-cols-2">
        <div className="soft-card p-6">
          <Trophy className="mb-3 size-9 text-[#ffb51b]" />
          <h2 className="text-xl font-black text-[#0753bb]">ตราความใจดีล่าสุด</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">คุณช่วยเติมอาหารครบ 10 มื้อแล้ว อีก 5 มื้อจะได้รับตรา “ฮีโร่จานอิ่ม”</p>
        </div>
        <div className="soft-card p-6">
          <Coins className="mb-3 size-9 text-[#08abc1]" />
          <h2 className="text-xl font-black text-[#0753bb]">ประวัติการบริจาค</h2>
          <div className="mt-3 flex items-center justify-between rounded-2xl bg-[#effafa] p-4 text-sm"><span>มูลนิธิรักษ์แมว</span><strong>฿500</strong></div>
        </div>
      </section>
    </div>
  );
}
