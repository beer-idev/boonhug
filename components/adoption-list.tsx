"use client";

import Image from "next/image";
import { Cat, Dog, Heart, MapPin, PawPrint, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { pets, type Pet } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AdoptionList() {
  const [filter, setFilter] = useState("all");
  const visiblePets = useMemo(() => filter === "all" ? pets : pets.filter((pet) => pet.type === filter), [filter]);

  return (
    <Tabs defaultValue="all" onValueChange={setFilter}>
      <TabsList aria-label="กรองประเภทสัตว์">
        <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
        <TabsTrigger value="dog"><Dog className="size-4" /> สุนัข</TabsTrigger>
        <TabsTrigger value="cat"><Cat className="size-4" /> แมว</TabsTrigger>
      </TabsList>
      <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePets.map((pet) => <PetCard key={pet.id} pet={pet} />)}
      </div>
    </Tabs>
  );
}

function PetCard({ pet }: { pet: Pet }) {
  return (
    <article className="soft-card overflow-hidden p-4 transition duration-200 hover:-translate-y-1">
      <div className="relative aspect-[1.7/1] overflow-hidden rounded-[20px] bg-[#dff8f8]">
        <Image src={pet.image} alt={pet.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#10213f] shadow-sm">
          <PawPrint className="size-3.5" /> พร้อมรับเลี้ยง
        </span>
      </div>
      <div className="px-2 pb-1 pt-4">
        <h3 className="mb-3 text-xl font-black text-[#0753bb]">{pet.name}</h3>
        <dl className="grid gap-1.5 text-sm text-slate-600">
          <div className="flex gap-2"><Sparkles className="mt-0.5 size-4 shrink-0 text-[#32c7d0]" /><span>{pet.sex} · {pet.color}</span></div>
          <div className="flex gap-2"><Heart className="mt-0.5 size-4 shrink-0 text-[#32c7d0]" /><span>อายุโดยประมาณ {pet.age}</span></div>
          <div className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-[#32c7d0]" /><span>{pet.location}</span></div>
        </dl>
        <AdoptionDialog pet={pet} />
      </div>
    </article>
  );
}

function AdoptionDialog({ pet }: { pet: Pet }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-5 w-full"><Heart className="size-4 fill-current" /> รับเลี้ยง{pet.name}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>เปิดบ้านให้{pet.name}</DialogTitle>
          <DialogDescription>ฝากข้อมูลติดต่อไว้ก่อน ทีมงานจะโทรกลับเพื่อพูดคุยเรื่องความพร้อมและนัดวันทำความรู้จักน้อง</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
          <label className="grid gap-2 text-sm font-bold">ชื่อผู้สนใจ<input required className="min-h-12 min-w-0 w-full rounded-2xl border-2 border-[#d9f1f2] px-4 font-normal outline-none focus:border-[#45ccd5]" placeholder="ชื่อ-นามสกุล" /></label>
          <label className="grid gap-2 text-sm font-bold">เบอร์โทรศัพท์<input required type="tel" className="min-h-12 min-w-0 w-full rounded-2xl border-2 border-[#d9f1f2] px-4 font-normal outline-none focus:border-[#45ccd5]" placeholder="08x-xxx-xxxx" /></label>
          <label className="grid gap-2 text-sm font-bold">เล่าเรื่องบ้านของคุณสั้น ๆ<textarea rows={3} className="min-w-0 w-full rounded-2xl border-2 border-[#d9f1f2] p-4 font-normal outline-none focus:border-[#45ccd5]" placeholder="สมาชิกในบ้าน พื้นที่ และประสบการณ์เลี้ยงสัตว์" /></label>
          <Button type="submit" variant="warm" size="lg">ส่งความสนใจรับเลี้ยง</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
