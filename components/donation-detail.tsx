"use client";

import Image from "next/image";
import { CheckCircle2, ImageUp, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const presets = [100, 500, 1000, 2000];

export function DonationDetail() {
  const [amount, setAmount] = useState(500);
  const [receipt, setReceipt] = useState("");

  return (
    <div className="grid gap-7 lg:grid-cols-[0.86fr_1.14fr]">
      <div className="space-y-6">
        <div className="soft-card overflow-hidden p-4">
          <div className="relative aspect-square overflow-hidden rounded-[26px] bg-[#dff8f8]">
            <Image src="/images/donation-cat.png" alt="แมวของมูลนิธิรักษ์แมว" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#087ba0]">ด่วน <span className="text-red-500">+</span></span>
          </div>
        </div>
        <div className="soft-card p-5">
          <h2 className="font-black text-[#10213f]">ช่องทางการติดตาม</h2>
          <a href="#" className="mt-3 flex min-h-11 items-center gap-3 rounded-2xl text-sm font-bold text-slate-700">
            <span className="grid size-10 place-items-center rounded-full bg-[#2c63e8] text-white"><MessageCircle className="size-5 fill-current" /></span>
            มูลนิธิรักษ์แมว
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <section className="soft-card p-6 md:p-8">
          <h1 className="text-2xl font-black text-[#10213f] md:text-3xl">มูลนิธิรักษ์แมว</h1>
          <p className="mt-2 flex gap-2 text-sm leading-6 text-slate-600"><MapPin className="mt-0.5 size-4 shrink-0 text-[#12b5c7]" /> 34 พุทธมณฑล 3 เขตทวีวัฒนา กรุงเทพมหานคร 10170</p>
          <div className="gradient-brand mt-6 rounded-[24px] p-5 text-white">
            <div className="mb-3 flex items-center justify-between text-sm font-bold"><span>ยอดทำบุญตอนนี้</span><span>2M</span></div>
            <div className="h-3 overflow-hidden rounded-full bg-white/25"><div className="h-full w-[68%] rounded-full bg-[#b9f5c9]" /></div>
          </div>
        </section>

        <section className="gradient-brand rounded-[30px] p-6 text-white shadow-[var(--shadow)] md:p-8">
          <label htmlFor="donation-amount" className="text-sm font-bold text-cyan-50">จำนวนเงินที่ต้องการบริจาค</label>
          <div className="mt-2 flex items-end gap-2 border-b-2 border-white/70 pb-3">
            <span className="text-2xl font-black">฿</span>
            <input id="donation-amount" type="number" min="1" value={amount} onChange={(event) => setAmount(Number(event.target.value))} className="w-full bg-transparent text-4xl font-black outline-none placeholder:text-white/50" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {presets.map((value) => (
              <button key={value} type="button" onClick={() => setAmount(value)} className={cn("min-h-11 rounded-full bg-white px-4 font-black text-[#08abc1] transition hover:-translate-y-0.5", amount === value && "ring-4 ring-[#ffda55] ring-offset-2 ring-offset-[#1674c4]")}>฿{value.toLocaleString()}</button>
            ))}
          </div>
        </section>

        <Dialog>
          <DialogTrigger asChild><Button variant="warm" size="lg" className="w-full text-lg">แสดงคิวอาร์โค้ด</Button></DialogTrigger>
          <DialogContent className="max-w-md text-center">
            <DialogHeader className="items-center pr-0">
              <DialogTitle>สแกนเพื่อร่วมทำบุญ</DialogTitle>
              <DialogDescription>ยอดบริจาค ฿{amount.toLocaleString()} · มูลนิธิรักษ์แมว</DialogDescription>
            </DialogHeader>
            <div className="mx-auto relative aspect-square w-full max-w-[260px] overflow-hidden rounded-2xl bg-white p-2">
              <Image src="/images/qr-code.png" alt="คิวอาร์โค้ดสำหรับบริจาค" fill sizes="260px" className="object-contain" />
            </div>
            <p className="mt-3 text-sm font-bold text-green-700">แนบหลักฐานการโอนเพื่อรับการ์ดอวยพร</p>
            <label className="mt-2 flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ffdb55] to-[#ff914d] px-5 font-bold text-[#10213f] shadow-md">
              <ImageUp className="size-5" /> {receipt || "เปิดรูปภาพ"}
              <input type="file" accept="image/*" className="sr-only" onChange={(event) => setReceipt(event.target.files?.[0]?.name || "")} />
            </label>
            {receipt && <p className="mt-3 flex items-center justify-center gap-2 text-sm font-bold text-green-700"><CheckCircle2 className="size-4" /> พร้อมส่งหลักฐานแล้ว</p>}
          </DialogContent>
        </Dialog>

        <p className="flex items-start gap-2 px-2 text-xs leading-5 text-slate-500"><ShieldCheck className="size-4 shrink-0 text-[#09afc5]" /> ข้อมูลนี้เป็น mockup สำหรับทดสอบหน้าจอ ยังไม่มีการรับชำระเงินจริง</p>
      </div>
    </div>
  );
}
