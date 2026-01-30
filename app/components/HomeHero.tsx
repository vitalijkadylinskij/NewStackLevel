"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function HomeHero() {
  const t = useTranslations("home");

  return (
    <section id="hero" className="hero-grid main-section relative mb-[125px] grid max-w-full grid-cols-1 overflow-x-clip md:grid-cols-[40%_60%] md:h-[603px] lg:h-[698px] xl:h-[857px]">
      {/* Left: dots + title */}
      <div className="dots-pattern relative z-10 flex min-h-[280px] items-center justify-center md:min-h-0 md:justify-end md:pr-4 lg:pr-8">
        <h1 className="page__main max-w-[90%] bg-white py-2 text-center font-semibold uppercase leading-tight text-black md:max-w-none md:text-left [font-size:clamp(22px,5vw,64px)] xl:min-w-[200px]">
          <span className="block">{t("title1")}</span>
          <span className="block">{t("title2")}</span>
          <span className="block text-[var(--accent)]">{t("title3")}</span>
          <span className="block">{t("title4")}</span>
        </h1>
      </div>

      {/* Right: background image + subtitle + CTAs */}
      <div className="page__right relative min-h-[420px] md:col-start-2 md:min-h-0">
        <div
          className="page__subtitle__bg absolute inset-0 z-0 bg-[#0a0a0a] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/hero-bg.png)",
          }}
        />
        <Image
          src="/images/logo_icon_white.svg"
          alt=""
          width={200}
          height={160}
          className="pointer-events-none absolute bottom-[8%] right-[4%] top-auto h-auto w-[22vw] max-w-[140px] opacity-90 sm:right-[2%] sm:max-w-[200px] md:right-0 md:w-[17vw] md:max-w-[310px]"
          aria-hidden
        />
        <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-between px-[5vw] py-8 md:px-[50px] md:py-[7vw] md:pl-[60px]">
          <h2 className="page__submain m-0 max-w-[320px] font-semibold uppercase leading-tight text-white md:max-w-[400px] [font-size:clamp(16px,3.5vw,42px)]">
            {t("subtitle")}
          </h2>
          <div className="relative ml-[-20%] mt-6 flex gap-3 md:mt-0 md:gap-4 lg:gap-5 xl:gap-6">
            <Link
              href="/hire-web-developers"
              className="hero-cta-btn page__button flex h-[72px] w-full max-w-[519px] items-end justify-start border-b-4 border-[var(--accent)] px-5 py-4 font-semibold uppercase leading-tight no-underline sm:h-[100px] md:h-[120px] md:w-[400px] md:px-6 md:pb-4 xl:h-[180px] xl:w-[480px] [font-size:clamp(14px,2.2vw,28px)]"
            >
              <span>{t("ctaFind")}</span>
            </Link>
            <Link
              href="/hire-dedicated-team"
              className="hero-cta-btn page__button flex h-[72px] w-full max-w-[519px] items-end justify-start border-b-4 border-[var(--accent)] px-5 py-4 font-semibold uppercase leading-tight no-underline sm:h-[100px] md:h-[120px] md:w-[400px] md:px-6 md:pb-4 xl:h-[180px] xl:w-[480px] [font-size:clamp(14px,2.2vw,28px)]"
            >
              <span>{t("ctaHire")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
