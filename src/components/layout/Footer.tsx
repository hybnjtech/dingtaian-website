"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site-config";
import { mainNav } from "@/lib/navigation";
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";
  const localePath = (path: string) => {
    const suffix = path === "/" ? "" : path;
    return `/${currentLocale}${suffix}`;
  };

  const serviceItems = ["consulting", "assessment", "engineering"];

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Contact */}
          <div>
            <h3 className="mb-5 font-serif text-base font-semibold text-accent-light">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <HiOutlineMapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>
                  {currentLocale === "zh" ? siteConfig.address : "Beijing, China"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <HiOutlinePhone className="h-4 w-4 shrink-0 text-white/40" />
                <span>{siteConfig.phone || "——"}</span>
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineEnvelope className="h-4 w-4 shrink-0 text-white/40" />
                <span>{siteConfig.email || "——"}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-serif text-base font-semibold text-accent-light">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              {mainNav.slice(0, 5).map((item) => (
                <li key={item.key}>
                  <Link
                    href={localePath(item.href)}
                    className="hover:text-accent-light transition-colors"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-serif text-base font-semibold text-accent-light">
              {t("footer.services")}
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              {serviceItems.map((s) => (
                <li key={s}>
                  <Link
                    href={localePath(`/services/${s}`)}
                    className="hover:text-accent-light transition-colors"
                  >
                    {t(`nav.${s}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WeChat / Follow */}
          <div>
            <h3 className="mb-5 font-serif text-base font-semibold text-accent-light">
              {t("footer.follow")}
            </h3>
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-28 w-28 items-center justify-center rounded bg-white/10">
                <span className="text-xs text-white/40">
                  {t("footer.wechat")}
                  <br />
                  QR
                </span>
              </div>
              <span className="text-xs text-white/40">
                {t("footer.wechat")}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-accent/80">
              <span className="text-xs font-bold text-white">鼎</span>
            </div>
            <span className="text-xs text-white/40">
              {currentLocale === "zh"
                ? siteConfig.shortName
                : siteConfig.shortNameEn}
            </span>
          </div>
          <div className="text-center text-xs text-white/30">
            <p>{t("footer.copyright")}</p>
            <p className="mt-1">{t("footer.icp")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
