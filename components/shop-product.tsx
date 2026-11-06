"use client";

import Image from "next/image";
import { Check, Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const gallery = [
  { src: "/images/shop-main.png", thumb: "/images/shop-thumb-shirt.png", alt: "เสื้อยืด Boonhug สีเขียว" },
  { src: "/images/shop-thumb-merch.png", thumb: "/images/shop-thumb-merch.png", alt: "ชุดแก้วและของที่ระลึก Boonhug" },
  { src: "/images/shop-thumb-cards.png", thumb: "/images/shop-thumb-cards.png", alt: "โปสการ์ดและการ์ด Boonhug" },
];

const colors = ["#173d36", "#e2e0dc", "#14b6d2", "#f58fd1"];
const sizes = ["S", "M", "L", "XL", "XXL"];

export function ShopProduct() {
  const [imageIndex, setImageIndex] = useState(0);
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <div className="soft-card grid gap-7 p-4 md:p-7 lg:grid-cols-[90px_1.05fr_0.9fr] lg:gap-8">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {gallery.map((item, index) => (
          <button
            key={item.thumb}
            type="button"
            aria-label={`ดูภาพสินค้า ${index + 1}`}
            aria-pressed={imageIndex === index}
            onClick={() => setImageIndex(index)}
            className={cn("relative aspect-square w-[76px] shrink-0 overflow-hidden rounded-2xl bg-[#cef7f7] transition hover:-translate-y-0.5 lg:w-full", imageIndex === index && "ring-3 ring-[#0753bb]")}
          >
            <Image src={item.thumb} alt="" fill sizes="90px" className="object-cover" />
          </button>
        ))}
      </div>

      <div className="relative order-1 aspect-square overflow-hidden rounded-[26px] bg-[#cef7f7] lg:order-2">
        <Image src={gallery[imageIndex].src} alt={gallery[imageIndex].alt} fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="object-contain" />
      </div>

      <section className="order-3 flex flex-col py-2 lg:py-5">
        <span className="mb-3 w-fit rounded-full bg-[#e8fbfb] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#087ba0]">Boonhug collection</span>
        <h1 className="text-3xl font-black text-[#10213f] md:text-4xl">T-shirt boonhug</h1>
        <div className="mt-3 flex items-center gap-1 text-[#ffb51b]" aria-label="คะแนน 4.8 จาก 5">
          {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="size-5 fill-current" />)}
          <span className="ml-2 text-sm font-bold text-slate-500">4.8 (126 รีวิว)</span>
        </div>
        <p className="mt-4 text-3xl font-black text-[#0753bb]">฿390</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">เสื้อยืด Premium cotton เนื้อนุ่ม ใส่สบาย พร้อมลายที่ช่วยเล่าเรื่องของน้องสี่ขา รายได้หลังหักค่าใช้จ่ายร่วมสมทบทุนช่วยสัตว์จรจัด</p>

        <fieldset className="mt-6">
          <legend className="mb-3 font-bold">สี</legend>
          <div className="flex gap-3">
            {colors.map((value) => (
              <button key={value} type="button" onClick={() => setColor(value)} aria-label={`เลือกสี ${value}`} aria-pressed={color === value} className={cn("grid size-11 place-items-center rounded-full border-2 border-white shadow-sm ring-offset-2", color === value && "ring-2 ring-[#10213f]")} style={{ backgroundColor: value }}>
                {color === value && <Check className={cn("size-5", value === "#e2e0dc" ? "text-[#10213f]" : "text-white")} />}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className="mb-3 font-bold">ขนาด</legend>
          <div className="flex flex-wrap gap-2">
            {sizes.map((value) => (
              <button key={value} type="button" onClick={() => setSize(value)} aria-pressed={size === value} className={cn("min-h-11 min-w-11 rounded-xl bg-[#edf1f2] px-3 text-sm font-bold transition", size === value && "bg-[#0753bb] text-white shadow-md")}>{value}</button>
            ))}
          </div>
        </fieldset>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex min-h-12 items-center rounded-full bg-[#effafa] p-1">
            <button type="button" aria-label="ลดจำนวน" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="grid size-10 place-items-center rounded-full text-[#087ba0] hover:bg-white"><Minus className="size-4" /></button>
            <span className="w-8 text-center font-black">{quantity}</span>
            <button type="button" aria-label="เพิ่มจำนวน" onClick={() => setQuantity((value) => value + 1)} className="grid size-10 place-items-center rounded-full text-[#087ba0] hover:bg-white"><Plus className="size-4" /></button>
          </div>
          <Button onClick={() => { setAdded(true); window.setTimeout(() => setAdded(false), 2200); }} className="flex-1" size="lg">
            {added ? <><Check className="size-5" /> เพิ่มแล้ว</> : <><ShoppingBag className="size-5" /> เพิ่มลงตะกร้า</>}
          </Button>
          <Button type="button" size="icon" variant="outline" aria-label={liked ? "นำออกจากรายการโปรด" : "เพิ่มในรายการโปรด"} onClick={() => setLiked((value) => !value)}>
            <Heart className={cn("size-5", liked && "fill-pink-500 text-pink-500")} />
          </Button>
        </div>
      </section>
    </div>
  );
}
