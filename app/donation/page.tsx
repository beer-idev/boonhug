import Image from "next/image";
import Link from "next/link";
import { Cat, Dog, HeartHandshake, PawPrint } from "lucide-react";
import { organizations } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = { title: "บริจาค | Boonhug" };

export default function DonationPage() {
  return (
    <div className="page-section py-8 md:py-12">
      <section className="gradient-brand relative overflow-hidden rounded-[34px] px-7 py-10 text-white shadow-[var(--shadow)] md:px-12 md:py-12">
        <div className="relative z-10 max-w-2xl">
          <span className="text-sm font-bold text-cyan-100">เลือกส่งต่อความช่วยเหลือในแบบของคุณ</span>
          <h1 className="mt-2 balance text-4xl font-black leading-tight md:text-6xl">เลือกประเภทการทำบุญ<br />ที่ท่านต้องการ</h1>
        </div>
        <div className="absolute -bottom-16 right-5 opacity-95 md:right-16">
          <PawPrint className="size-48 fill-white stroke-white md:size-60" aria-hidden="true" />
        </div>
      </section>

      <Tabs defaultValue="animal" className="-mt-5 px-3 md:px-5">
        <TabsList className="relative z-10">
          <TabsTrigger value="animal">บุญวันเกิด</TabsTrigger>
          <TabsTrigger value="emergency">บุญสะเดาะเคราะห์</TabsTrigger>
          <TabsTrigger value="health">บุญสุขภาพ</TabsTrigger>
          <TabsTrigger value="family">บุญครบรอบ</TabsTrigger>
        </TabsList>
        <TabsContent value="animal">
          <DonationContent />
        </TabsContent>
        <TabsContent value="emergency"><DonationContent /></TabsContent>
        <TabsContent value="health"><DonationContent /></TabsContent>
        <TabsContent value="family"><DonationContent /></TabsContent>
      </Tabs>
    </div>
  );
}

function DonationContent() {
  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        <Button size="sm">บริจาคของใช้</Button>
        <Button size="sm">บริจาคอาหาร</Button>
        <Button size="sm" variant="brand">บริจาคเงิน</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {organizations.map((organization, index) => (
          <article key={organization.id} className="soft-card flex min-h-[280px] flex-col p-6 transition duration-200 hover:-translate-y-1">
            <div className="relative mb-4 h-20 w-full">
              <Image src={organization.logo} alt={`โลโก้ ${organization.name}`} fill sizes="300px" className="object-contain object-left" />
            </div>
            <h2 className="mb-2 text-lg font-black leading-snug text-[#0753bb]">{organization.name}</h2>
            <p className="mb-5 text-sm leading-6 text-slate-600">ชื่อบัญชี {organization.name}<br />{organization.account}</p>
            <div className="mt-auto flex items-center gap-3">
              <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#e1f6f7]">
                <div className="h-full rounded-full bg-gradient-to-r from-[#53d7dc] to-[#0753bb]" style={{ width: `${organization.progress}%` }} />
              </div>
              <span className="text-xs font-black text-[#0753bb]">{organization.amount}</span>
            </div>
            <Button asChild variant={index === 1 ? "warm" : "outline"} className="mt-5 w-full">
              <Link href={`/donation/${organization.id}`}><HeartHandshake className="size-4" /> ช่วยองค์กรนี้</Link>
            </Button>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-[28px] bg-[#e9fbfb] p-6">
          <Dog className="mb-3 size-9 text-[#0753bb]" />
          <h3 className="text-xl font-black text-[#0753bb]">อาหารและยาสำหรับสุนัข</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">ช่วยเติมคลังอาหารและเวชภัณฑ์ที่จำเป็นให้บ้านพักพิง</p>
        </div>
        <div className="rounded-[28px] bg-[#fff1f8] p-6">
          <Cat className="mb-3 size-9 text-pink-500" />
          <h3 className="text-xl font-black text-[#0753bb]">ค่ารักษาน้องแมวฉุกเฉิน</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">ร่วมเป็นทุนรักษา ทำหมัน และฉีดวัคซีนแมวจรจัด</p>
        </div>
      </div>
    </>
  );
}
