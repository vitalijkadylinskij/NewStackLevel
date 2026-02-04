"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function HomeHero() {
  const t = useTranslations("home");

  return (
    <section
      id="hero"
      className="
    relative
    mb-[65px]
    grid
    max-w-full
    grid-cols-[40%_60%]
    overflow-x-clip
    h-[603px]
    xl:h-[698px]
    2xl:h-[857px]

    max-[1025px]:grid-cols-1
    max-[1025px]:h-auto
  "
    >
      {/* Left */}
      <div className="dots-pattern relative z-10 flex min-h-[280px] items-center justify-center md:min-h-0 md:justify-center md:pr-4 lg:pr-8">
        <h1 className="page__main max-w-[90%] bg-white p-6 text-center font-semibold uppercase leading-tight text-black 
        text-2xl sm:text-3xl md:max-w-none md:p-8 md:text-left md:text-4xl xl:min-w-[200px]">

          <span className="block">{t("title1")}</span>
          <span className="block">{t("title2")}</span>
          <span className="block text-[var(--accent)]">{t("title3")}</span>
          <span className="block">{t("title4")}</span>

        </h1>
      </div>

      {/* Right */}
      <div className="
page__right
relative
min-h-0
col-start-2

max-[1025px]:col-auto
max-[1025px]:min-h-[420px]
max-[1025px]:ml-[10%]
">
        <div
          className="page__subtitle__bg absolute inset-0 z-0 bg-[#0a0a0a] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/hero-bg.png)" }}
        />

        <Image
          src="/images/logo_icon_white.svg"
          alt=""
          width={200}
          height={160}
          className="pointer-events-none absolute bottom-[8%] right-[4%] h-full w-[22vw] max-w-[140px] opacity-90 
          sm:right-[2%] sm:max-w-[200px] md:right-0 md:w-[17vw] md:max-w-[310px]"
          aria-hidden
        />

        <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-between px-6 py-8 
        sm:px-[5vw] md:px-[50px] md:py-[7vw] md:pl-[60px]">

          <h2 className="page__submain m-0 max-w-[320px] font-semibold uppercase leading-tight text-white 
          text-2xl sm:text-3xl md:max-w-[400px] md:text-4xl">
            {t("subtitle")}
          </h2>

          {/* CTA */}
          <div className="mt-6 flex max-[1025px]:flex-col gap-3 sm:flex-row md:mt-0 md:gap-4 lg:gap-5 xl:gap-6">

            <Link
              href="/hire-web-developers"
              className="hero-cta-btn page__button flex h-[72px] w-full items-end justify-start 
              border-b-4 border-[var(--accent)] px-5 py-4 font-semibold uppercase leading-tight 
              no-underline text-lg sm:h-[100px] sm:text-xl md:h-[120px] md:w-[400px] 
              md:px-6 md:pb-8 xl:h-[180px] xl:w-[480px] xl:text-2xl"
            >
              <span>{t("ctaFind")}</span>
            </Link>

            <Link
              href="/hire-dedicated-team"
              className="hero-cta-btn page__button flex h-[72px] w-full items-end justify-start 
              border-b-4 border-[var(--accent)] px-5 py-4 font-semibold uppercase leading-tight 
              no-underline text-lg sm:h-[100px] sm:text-xl md:h-[120px] md:w-[400px] 
              md:px-6 md:pb-8 xl:h-[180px] xl:w-[480px] xl:text-2xl"
            >
              <span>{t("ctaHire")}</span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
