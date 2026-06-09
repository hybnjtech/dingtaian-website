"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { siteConfig } from "@/lib/site-config";
import { HiCheckCircle, HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope, HiOutlineClock } from "react-icons/hi2";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tNav = useTranslations("nav");
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/en") ? "en" : "zh";
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: HiOutlineMapPin, label: t("address"), value: currentLocale === "zh" ? siteConfig.address : "No.15 Beihuqu Road, Chaoyang District, Beijing" },
    { icon: HiOutlinePhone, label: t("phone"), value: siteConfig.phone },
    { icon: HiOutlineEnvelope, label: t("email"), value: siteConfig.email },
    { icon: HiOutlineClock, label: currentLocale === "zh" ? "工作时间" : "Working Hours", value: currentLocale === "zh" ? "周一至周五 9:00-18:00" : "Mon-Fri 9:00-18:00" },
  ];

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} image="/images/site/chief-engineer-salon.webp" />
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: t("title") },
        ]}
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-8">
                {currentLocale === "zh" ? "联系方式" : "Get in Touch"}
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-text-secondary">{info.label}</p>
                        <p className="font-medium text-primary">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="relative mt-10 h-72 overflow-hidden rounded-xl border border-gray-100 bg-bg-light shadow-sm">
                <Image
                  src="/images/site/beihuqu-location-map.webp"
                  alt={currentLocale === "zh" ? "研究院位置局部地图" : "Institute location map"}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-8">
                {currentLocale === "zh" ? "在线咨询" : "Online Inquiry"}
              </h2>
              {submitted ? (
                <div className="rounded-2xl bg-safety-green/10 p-8 text-center">
                  <HiCheckCircle className="mx-auto mb-4 h-12 w-12 text-safety-green" />
                  <p className="font-medium text-safety-green">{t("form_success")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        {t("form_name")}
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        {t("form_company")}
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        {t("form_phone")}
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        {t("form_email")}
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      {t("form_message")}
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
                  >
                    {t("form_submit")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
