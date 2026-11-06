import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Megaphone, PawPrint, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const campaigns = [
  { title: "มื้ออิ่มเพื่อน้อง", image: "/images/home-campaign-dogs.png", progress: 72, amount: "200K" },
  { title: "ค่ารักษาน้องจร", image: "/images/home-campaign-cat.png", progress: 45, amount: "20K" },
  { title: "บ้านพักฉุกเฉิน", image: "/images/home-campaign-dog.png", progress: 84, amount: "2M" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative mx-auto aspect-[960/446] w-full max-w-[1440px] min-h-[410px] md:min-h-0">
          <Image
            src="/images/home-hero.png"
            alt="ร่วมทำบุญออนไลน์กับ Boonhug เพื่อสัตว์ที่คุณรัก"
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover object-center max-md:object-[56%_center]"
          />
          <Link href="/donation" aria-label="เริ่มบริจาคเลย" className="absolute bottom-[25%] left-[8%] hidden h-[12%] w-[27%] rounded-full md:block" />
        </div>
        <div className="page-section -mt-1 flex justify-center md:hidden">
          <Button asChild variant="warm" size="lg" className="w-full max-w-sm">
            <Link href="/donation"><PawPrint className="size-5" /> เริ่มบริจาคเลย</Link>
          </Button>
        </div>
      </section>

      <section className="page-section py-20">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#08a9bf]">ความช่วยเหลือที่มองเห็นได้</span>
            <h2 className="mt-2 text-3xl font-black text-[#0753bb] md:text-5xl">ส่งต่อโอกาสให้น้อง ๆ</h2>
          </div>
          <Button asChild variant="ghost">
            <Link href="/donation">ดูทุกแคมเปญ <ArrowRight className="size-4" /></Link>
          </Button>
        </div>

        <div className="relative mb-8 aspect-[842/204] min-h-[230px] overflow-hidden rounded-[30px] shadow-[var(--shadow)]">
          <Image src="/images/home-stray-banner.png" alt="ช่วยหาบ้านและอาหารให้สัตว์จร" fill sizes="(max-width: 1180px) 100vw, 1180px" className="object-cover max-md:object-[62%_center]" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {campaigns.map((campaign) => (
            <article key={campaign.title} className="soft-card overflow-hidden p-4 transition duration-200 hover:-translate-y-1">
              <div className="relative aspect-[2/1] overflow-hidden rounded-2xl bg-[#d8f7f7]">
                <Image src={campaign.image} alt={campaign.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="px-1 pb-1 pt-4">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="font-extrabold text-[#10213f]">{campaign.title}</h3>
                  <span className="text-xs font-bold text-[#0753bb]">{campaign.amount}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#e3f7f7]" aria-label={`ระดมทุนแล้ว ${campaign.progress} เปอร์เซ็นต์`}>
                  <div className="h-full rounded-full bg-gradient-to-r from-[#53d7dc] to-[#0753bb]" style={{ width: `${campaign.progress}%` }} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gradient-brand py-16 text-white">
        <div className="page-section grid gap-5 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "โปร่งใส", text: "ติดตามยอดบริจาคและองค์กรที่ได้รับความช่วยเหลือได้" },
            { icon: HeartHandshake, title: "มูลนิธิที่ไว้ใจได้", text: "คัดเลือกองค์กรและตรวจสอบข้อมูลก่อนเผยแพร่" },
            { icon: Megaphone, title: "ช่วยเหลือได้ตรงจุด", text: "เลือกประเภทความช่วยเหลือที่คุณตั้งใจส่งต่อ" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[28px] border border-white/20 bg-white/12 p-6 backdrop-blur-sm">
              <Icon className="mb-4 size-10" aria-hidden="true" />
              <h3 className="mb-2 text-xl font-extrabold">{title}</h3>
              <p className="text-sm leading-7 text-blue-50">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
