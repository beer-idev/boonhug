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
        <div className="relative mx-auto hidden aspect-[960/446] w-full max-w-[1440px] lg:block">
          <Image
            src="/images/home-hero.png"
            alt="ร่วมทำบุญออนไลน์กับ Boonhug เพื่อสัตว์ที่คุณรัก"
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-contain"
          />
          <Link href="/donation" aria-label="เริ่มบริจาคเลย" className="absolute bottom-[25%] left-[8%] h-[12%] w-[27%] rounded-full" />
        </div>
        <div className="gradient-brand mx-auto max-w-[1440px] lg:hidden">
          <div className="page-section grid gap-7 py-9 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] sm:items-center sm:gap-8 sm:py-12">
            <div className="min-w-0 text-white">
              <p className="mb-2 text-sm font-bold text-cyan-50">เพราะทุกชีวิตมีค่าเสมอ</p>
              <h1 className="balance text-4xl font-black leading-tight sm:text-5xl">ทำบุญออนไลน์<br />กับเราที่ <span className="text-[#cffbff]">Boonhug</span></h1>
              <p className="mt-4 text-xl font-black text-[#10213f]">บริจาค เพื่อสัตว์ที่คุณรัก</p>
              <p className="mt-2 max-w-md text-sm leading-7 text-blue-50">ร่วมเป็นส่วนหนึ่งในการช่วยเหลือสัตว์จรจัด ผ่านการบริจาคออนไลน์ที่ง่าย สะดวก และโปร่งใส</p>
              <Button asChild variant="warm" size="lg" className="mt-6 w-full sm:w-auto">
                <Link href="/donation"><PawPrint className="size-5" /> เริ่มบริจาคเลย</Link>
              </Button>
            </div>
            <div className="grid min-w-0 grid-cols-3 gap-2.5 sm:gap-3" aria-label="น้องสี่ขาที่รอความช่วยเหลือ">
              {[
                ["/images/donation-cat.png", "ลูกแมวสีส้มขาว"],
                ["/images/pet-dumbo.png", "สุนัขดัมโบ"],
                ["/images/pet-jaja.png", "แมวจาจ้า"],
              ].map(([src, alt]) => (
                <div key={src} className="relative aspect-[3/4] min-w-0 overflow-hidden rounded-[22px] border-4 border-white/30 bg-white/20 shadow-lg">
                  <Image src={src} alt={alt} fill sizes="(max-width: 640px) 30vw, 12vw" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 sm:col-span-2">
              <div className="rounded-2xl bg-white/15 px-4 py-3 text-center text-white"><span className="block text-xs">ยอดบริจาคทั้งหมด</span><strong className="text-lg">200,000 บาท</strong></div>
              <div className="rounded-2xl bg-white/15 px-4 py-3 text-center text-white"><span className="block text-xs">จำนวนผู้บริจาค</span><strong className="text-lg">120 คน</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section py-12 sm:py-16 lg:py-20">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#08a9bf]">ความช่วยเหลือที่มองเห็นได้</span>
            <h2 className="mt-2 text-3xl font-black text-[#0753bb] md:text-5xl">ส่งต่อโอกาสให้น้อง ๆ</h2>
          </div>
          <Button asChild variant="ghost">
            <Link href="/donation">ดูทุกแคมเปญ <ArrowRight className="size-4" /></Link>
          </Button>
        </div>

        <div className="relative mb-8 hidden aspect-[842/204] overflow-hidden rounded-[30px] shadow-[var(--shadow)] lg:block">
          <Image src="/images/home-stray-banner.png" alt="ช่วยหาบ้านและอาหารให้สัตว์จร" fill sizes="(max-width: 1180px) 100vw, 1180px" className="object-contain" />
        </div>
        <div className="gradient-brand mb-8 flex flex-col gap-6 overflow-hidden rounded-[28px] p-6 text-white shadow-[var(--shadow)] sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:hidden">
          <div className="min-w-0">
            <h3 className="text-2xl font-black sm:text-3xl">หาบ้านให้น้อง</h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-blue-50">น้อง ๆ รอคนใจดีมาร่วมเป็นครอบครัว เริ่มต้นทำความรู้จักกันได้เลย</p>
            <Button asChild variant="outline" className="mt-5 w-full sm:w-auto"><Link href="/adoption">ดูน้องที่รอบ้าน <ArrowRight className="size-4" /></Link></Button>
          </div>
          <div className="flex shrink-0 gap-2.5">
            {["/images/pet-mali.png", "/images/pet-dumbo.png", "/images/pet-jaja.png"].map((src, index) => (
              <div key={src} className="relative size-20 overflow-hidden rounded-2xl border-2 border-white/40 bg-white/20 sm:size-24"><Image src={src} alt={["น้องมะลิ", "น้องดัมโบ", "น้องจาจ้า"][index]} fill sizes="96px" className="object-cover" /></div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="page-section grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
