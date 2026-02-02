"use client";
import { useState } from "react";
import { StepCard } from "../../components/StepСard";
import HireDevelopersHero from "../../components/HireDevelopersHero";
import { ExpertCard } from "../../components/ExpertCard";
import HireUsModal from "../../components/HireUsModal";
import { useLocale, useTranslations } from "next-intl";

export default function HireDedicatedTeamPage() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("dedicatedHero");
  const locale = useLocale();

  return (
    <section className="relative w-full mx-auto pb-20">
      <HireDevelopersHero text={t("requestTeam")} />

      <div className="relative mt-12 md:mt-[100px]">
        <div className="dots-pattern absolute left-0 top-[-60px] h-[140px] w-[40px] z-0" />
        <div className="dots-pattern absolute left-0 bottom-[-80px] h-[320px] w-[28%] -z-10" />

        <h2 className="relative text-2xl z-10 mb-10 md:mb-20 text-center justyfi-center px-4 text-4xl font-bold uppercase tracking-wide">
          {t("title")}
        </h2>

        <div className="relative z-10 mx-auto flex w-full max-w-[90%] flex-col gap-6 md:flex-row md:justify-between md:gap-4 px-4 md:px-0">
          <StepCard step={locale === "en" ? "STEP 1" : "ШАГ 1"} text={t("steps.step1")} />
          <StepCard step={locale === "en" ? "STEP 2" : "ШАГ 2"} text={t("steps.step2")} />
          <StepCard
            step={locale === "en" ? "STEP 3" : "ШАГ 3"}
            showArrow={false}
            text={t("steps.step3")}
          />
        </div>
      </div>

      <h2 className="mb-10 md:mb-[70px] mt-16 md:mt-[100px] text-center px-4 text-2xl font-bold uppercase tracking-wide [font-size:clamp(22px,4vw,36px)]">
        {t("expertsTitle")}
      </h2>

      <div className="mx-auto grid w-full max-w-[90%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 px-4 md:px-0 justify-items-center">
        <ExpertCard
          title={t("experts.pmTitle")}
          text={t("experts.pmText")}
        />
        <ExpertCard
          title={t("experts.baTitle")}
          text={t("experts.baText")}
        />
        <ExpertCard
          title={t("experts.uxTitle")}
          text={t("experts.uxText")}
        />
        <ExpertCard
          title={t("experts.devTitle")}
          text={t("experts.devText")}
        />
        <ExpertCard
          title={t("experts.qaTitle")}
          text={t("experts.qaText")}
        />
      </div>

      <div className="mx-auto mt-12 md:mt-20 flex justify-center items-center text-center px-4">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full max-w-[370px] max-h-[70px] cursor-pointer bg-blue-700 px-8 md:px-16 py-4 md:py-4 text-xl font-semibold uppercase text-white transition duration-500 border-[6px] border-blue-700 hover:bg-white hover:text-blue-700"
        >
          {t("cta")}
        </button>
      </div>

      {isOpen && <HireUsModal onClose={() => setIsOpen(false)} />}
    </section>
  );
}
