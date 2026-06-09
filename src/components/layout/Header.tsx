"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { mainNav, type NavItem } from "@/lib/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { HiOutlineGlobe } from "react-icons/hi";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const localePath = (path: string) => {
    const suffix = path === "/" ? "" : path;
    return `/${currentLocale}${suffix}`;
  };

  const switchLocale = () => {
    const newLocale = currentLocale === "zh" ? "en" : "zh";
    const rest = pathname.replace(/^\/(zh|en)/, "") || "";
    window.location.href = `/${newLocale}${rest}`;
  };

  const isActive = (href: string) => {
    const target = localePath(href);
    if (href === "/") return pathname === target || pathname === `${target}/`;
    return pathname === target || pathname.startsWith(`${target}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-lg"
          : "bg-primary/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={localePath("/")} className="flex shrink-0 items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded bg-[linear-gradient(135deg,#d7aa4e_0%,#b57f2b_100%)] shadow-lg shadow-black/20 ring-1 ring-white/10">
              <span className="absolute left-2 right-2 top-2 h-px bg-white/38" />
              <span className="font-serif text-[19px] font-bold leading-none text-white">鼎泰</span>
              <span className="absolute bottom-1 text-[6px] font-semibold tracking-[0.16em] text-white/72">DTA</span>
            </div>
            <div className="hidden min-w-[160px] lg:block">
              <div className="whitespace-nowrap text-[12px] font-semibold leading-tight text-white xl:text-[13px]">
                {currentLocale === "zh"
                  ? "北京鼎泰安采"
                  : "DTA Mine Water Institute"}
              </div>
              <div className="mt-0.5 whitespace-nowrap text-[10px] font-medium tracking-[0.08em] text-accent-light/90 xl:text-[11px]">
                {currentLocale === "zh"
                  ? "矿山水害防治研究院"
                  : "Mine Water Hazard Control Institute"}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex lg:items-center lg:gap-0.5 xl:gap-1">
            {mainNav.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={localePath(item.href)}
                  className={`flex items-center gap-1 rounded px-2.5 py-2 text-[13px] font-medium transition-colors xl:px-3 xl:text-sm ${
                    isActive(item.href)
                      ? "bg-white/10 text-accent-light"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {t(item.key)}
                  {item.children && (
                    <svg className="h-3 w-3 opacity-50" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>
                {item.children && activeDropdown === item.key && (
                  <div className="absolute left-0 top-full pt-1">
                    <div className="min-w-[180px] rounded bg-white py-2 shadow-xl ring-1 ring-black/5">
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={localePath(child.href)}
                          className="block px-4 py-2.5 text-sm text-text-primary hover:bg-primary/5 hover:text-primary transition-colors"
                        >
                          {t(child.key)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={switchLocale}
              className="flex items-center gap-1 rounded px-2 py-1.5 text-xs text-white/70 hover:text-white transition-colors"
              title="Switch language"
            >
              <HiOutlineGlobe className="h-4 w-4" />
              <span className="hidden sm:inline">
                {currentLocale === "zh" ? "EN" : "中文"}
              </span>
            </button>
            <button
              className="lg:hidden rounded p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <HiOutlineX className="h-6 w-6" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-primary">
          <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto px-4 py-4">
            {mainNav.map((item) => (
              <MobileNavItem
                key={item.key}
                item={item}
                localePath={localePath}
                isActive={isActive}
                t={t}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileNavItem({
  item,
  localePath,
  isActive,
  t,
}: {
  item: NavItem;
  localePath: (path: string) => string;
  isActive: (href: string) => boolean;
  t: (key: string) => string;
}) {
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between rounded px-3 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        >
          {t(item.key)}
          <svg
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {open && (
          <div className="ml-4 border-l border-white/10 pl-4">
            {item.children.map((child) => (
              <a
                key={child.key}
                href={localePath(child.href)}
                className="block rounded px-3 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                {t(child.key)}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={localePath(item.href)}
      className={`block rounded px-3 py-3 text-sm font-medium transition-colors ${
        isActive(item.href)
          ? "bg-white/10 text-accent-light"
          : "text-white/80 hover:text-white hover:bg-white/10"
      }`}
    >
      {t(item.key)}
    </a>
  );
}
