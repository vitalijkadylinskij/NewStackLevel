"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CaseStudiesPage() {
  const t = useTranslations("caseStudies");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const technology = formData.get("technology");

    console.log("Search:", technology);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="relative mb-20 flex flex-col gap-10 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-700 px-4 py-10 md:px-10 md:py-12 lg:px-[80px] lg:py-16 lg:flex-row lg:items-center lg:justify-between"
      >
        {/* LEFT */}
        <div className="flex w-full max-w-[520px] flex-col justify-center text-white">
          <h1 className="mb-6 text-[clamp(24px,4vw,36px)] font-bold leading-tight">
            {t("title")}
          </h1>

          <p className="mb-4 text-base font-semibold md:text-lg">
            {t("subtitle")}
          </p>

          <input
            name="technology"
            type="text"
            placeholder={t("inputPlaceholder")}
            className="w-full max-w-[440px] border-b-[3px] border-white bg-transparent pb-2 text-sm font-semibold leading-[2] text-white placeholder-white outline-none md:text-base"
          />
        </div>

        {/* RIGHT */}
        <div className="relative flex w-full max-w-[440px] flex-col items-start lg:items-end">
          
          {/* Dots */}
          <div className="w-[670px] h-[215px] pointer-events-none absolute right-[-190px] top-[-90px] z-0 hidden lg:block">

            <Image
              src="/images/OurCasesDots.svg"
              alt=""
              width={670}
              height={215}
              className="h-full w-full object-cover object-left"
            />
          </div>

          <button
            type="submit"
            className="relative z-10 mt-6 w-full cursor-pointer border-[3px] border-white bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white md:px-8 md:py-4 md:text-base lg:mt-0"
          >
            {t("submitButton")}
          </button>
        </div>
      </form>
    </section>
  );
}
