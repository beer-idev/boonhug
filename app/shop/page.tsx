import { ShopProduct } from "@/components/shop-product";

export const metadata = { title: "Shop | Boonhug" };

export default function ShopPage() {
  return (
    <div className="page-section py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#08a9bf]">shop for good</span>
          <h1 className="mt-2 text-3xl font-black text-[#0753bb] md:text-5xl">ของน่ารักที่ช่วยน้องได้</h1>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-600">ทุกการสั่งซื้อมีส่วนช่วยสนับสนุนค่าอาหารและการรักษาสัตว์จรจัดในเครือข่าย</p>
      </div>
      <ShopProduct />
    </div>
  );
}
