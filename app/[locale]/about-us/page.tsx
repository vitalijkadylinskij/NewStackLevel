"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutUsPage() {
  const t = useTranslations("aboutUs");

  return (
    <section className="w-full bg-white mb-16 md:mb-32 lg:mb-40">
      
      {/* TOP BLOCK */}
      <div className="mx-auto flex flex-col md:flex-row items-stretch">

        {/* LEFT */}
        <div className="flex w-full md:w-1/2 items-center justify-center px-4 py-8 md:py-12">
          <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[470px] aspect-[470/170]">
            <Image
              src="/logo.svg"
              alt="STACKLEVEL GROUP"
              width={470}
              height={170}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full md:w-1/2 bg-blue-700 text-white px-4 sm:px-6 md:px-16 py-10 sm:py-12 md:py-20 md:mr-5">

          {/* TEXT */}
          <div className="relative z-10 w-full max-w-[510px] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold">
            <p className="my-4 md:my-6">
              {t("intro.first")}
            </p>

            <p className="my-4 md:my-6">
              {t("intro.second")}
            </p>
          </div>

          {/* SVG */}
          <div className="pointer-events-none absolute top-[-30px] right-[-5px] w-[80px] sm:w-[120px] md:w-[170px] opacity-50 md:opacity-100 max-[1025px]:hidden">
            <Image
              src="/images/vector3.svg"
              alt=""
              width={260}
              height={680}
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>

      {/* CEO BLOCK */}
      <div className="relative mx-auto max-w-[1476px] my-12 md:my-20 lg:my-[100px] px-4 md:px-0">

        <div className="flex flex-col md:flex-row w-full">

          {/* IMAGE */}
          <div className="relative w-full md:w-auto md:min-w-[260px] lg:min-w-[301px] aspect-[301/305] md:h-[305px] shrink-0">
            <Image
              src="/images/persons/max.jpg"
              alt="Maxim Garbar"
              width={301}
              height={305}
              className="object-cover w-full h-full object-top"
            />
            <div className="absolute -bottom-2 left-0 h-[5px] w-full bg-blue-600" />
          </div>

          {/* CONTENT */}
          <div className="relative flex w-full flex-col justify-between border-t md:border-t-0 md:border-l border-gray-200 p-5 sm:p-6 md:min-h-[305px]">

            {/* QUOTES */}
            <div className="pointer-events-none absolute -top-6 right-0 w-14 sm:w-16 md:w-20">
              <Image
                src="/images/_quotes.svg"
                alt=""
                width={146}
                height={111}
                className="w-full h-auto"
              />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="mb-3 sm:mb-4 md:mb-6 text-[22px] sm:text-[26px] md:text-[32px] font-bold uppercase text-blue-600">
                {t("ceo.name")}
              </h3>

              <p className="max-w-[820px] text-[15px] sm:text-[16px] md:text-[18px] leading-[1.3] md:ml-5 mb-4 md:mb-5 text-black">
                {t("ceo.quote")}
              </p>
            </div>

            {/* POSITION */}
            <div>
              <p className="mt-6 md:mt-[55px] md:ml-5 text-[15px] sm:text-[16px] md:text-[18px] font-semibold uppercase text-blue-600">
                {t("ceo.position")}
              </p>

              <div className="mt-4 md:mt-6 h-[3px] w-full bg-blue-600" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
