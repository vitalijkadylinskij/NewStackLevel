"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function BlogPage() {
  const t = useTranslations("blog");

  return (
    <section className="relative w-full mx-auto">
      <div className="overflow-hidden w-full bg-[linear-gradient(90deg,#C4007A_0%,#7A1FD1_70%,#2A1CFF_100%)] mb-5">
        <div className="relative flex w-full min-h-[180px] md:h-[240px] items-center pl-[5%] pr-4 py-8">
          <h1 className="text-[24px] md:text-[31px] font-bold text-white leading-[1.2] [font-size:clamp(22px,3vw,31px)] z-10">
            {t("title")}
          </h1>

          <div className="pointer-events-none absolute right-0 top-[10px] w-[200px] md:w-[400px] lg:w-[670px] h-auto opacity-60 md:opacity-100 hidden sm:block">
            <Image
              src="/images/blog_dots.svg"
              alt=""
              width={670}
              height={217}
              priority
              className="w-full h-auto object-contain object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

