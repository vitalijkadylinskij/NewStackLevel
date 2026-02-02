"use client";

import HireDevelopersHero from "../../components/HireDevelopersHero";
import { useTranslations } from "next-intl";

export default function CareersPage() {
  const t = useTranslations("careers");

  return (
    <section className="relative w-full mx-auto">
      <HireDevelopersHero text={t("hero")} />

      <div className="relative mx-auto mt-12 md:mt-[100px] mb-8 md:pb-[100px]">
        {/* DOTS LEFT */}
        <div
          className="
            dots-pattern
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            w-[85px]
            h-[220px]
          "
        />

        {/* CONTENT */}
        <div className="mx-auto w-full max-w-[1100px] text-center px-4">
          <h2 className="mb-8 md:mb-[60px] text-4xl font-bold text-black">
            {t("title")}
          </h2>

          <p className="text-4xl font-bold text-black">
            {t("subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
