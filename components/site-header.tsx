"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PawPrint, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "adoption", href: "/adoption" },
  { label: "donation", href: "/donation" },
  { label: "shop", href: "/shop", icon: ShoppingBag },
  { label: "profile", href: "/profile" },
  { label: "about", href: "/about" },
  { label: "home", href: "/" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const currentPath = pathname ?? "/";
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? currentPath === "/" : currentPath.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-[#dff4f4]/80 bg-[#fffcf5]/92 backdrop-blur-xl">
      <div className="page-section flex h-[76px] items-center justify-between">
        <Link href="/" className="flex min-h-11 items-center gap-2 rounded-full pr-3 text-[#43ccd4]">
          <PawPrint className="size-8 fill-[#53d7dc] stroke-[#53d7dc]" aria-hidden="true" />
          <span className="text-xl font-extrabold tracking-tight">boonhug.net</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="เมนูหลัก">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex min-h-11 items-center gap-1.5 rounded-full px-4 text-sm font-bold text-[#35c7d1] transition hover:bg-[#e8fbfb] hover:text-[#0753bb]",
                  isActive(item.href) && "bg-gradient-to-r from-[#53d7dc] to-[#0753bb] text-white shadow-md hover:text-white",
                )}
              >
                {Icon && <Icon className="size-4" aria-hidden="true" />}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full bg-[#e9fbfb] text-[#087ba0] lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="page-section grid gap-2 pb-5 lg:hidden" aria-label="เมนูมือถือ">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-bold text-[#087ba0]",
                isActive(item.href) ? "gradient-brand text-white shadow-md" : "bg-white shadow-sm",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
