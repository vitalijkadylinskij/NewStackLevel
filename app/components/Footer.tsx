"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const stats: Array<
  | { value: string; label: string }
  | { value: string; label: string; injected: string }
> = [
  { value: "30+", label: "EXPERIENCED DEVELOPERS" },
  { value: "3+", label: "YEARS ON THE MARKET" },
  { value: "20+", label: "SUCCESSFUL PROJECTS" },
  { value: "92%", label: "OF RETURNED CUSTOMERS" },
  { value: "POSITIVE", label: "ONLY … FEEDBACK", injected: "POSITIVE" },
];

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative z-[1] overflow-hidden bg-white">
      <div
        className="dots-pattern absolute inset-0"
        style={{ backgroundPosition: "10px 0, 50.5px 40.5px" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[min(1476px,92%)] pb-1 flex">
        {/* Top: WE ARE + stats + CTA (white + dots) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] md:gap-0">
          <div className="flex w-full max-w-[200px] mb-12 md:mb-40 justify-center md:col-start-1 md:row-span-1 md:mr-[5vw] md:justify-end bg-white">
            <Image
              src="/images/_we-are.svg"
              alt="We are"
              width={200}
              height={940}
              className="max-h-[940px] w-auto max-w-[200px] object-contain object-left"
            />
          </div>
          <div className="flex flex-col justify-between">
          <div className="flex flex-col pb-10 md:col-start-2 md:items-center md:justify-center md:py-12 md:px-6 md:pb-12">
            <div className="grid w-full max-w-[1000px] grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:gap-x-[3vw] md:gap-y-11 xl:grid-cols-3 xl:gap-x-[110px]">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col justify-center bg-white font-semibold uppercase leading-tight text-black [font-size:clamp(18px,3.5vw,36px)]"
                >
                  {"injected" in s ? (
                    <>
                      ONLY <span className="text-[var(--accent)]">{s.injected}</span> FEEDBACK
                    </>
                  ) : (
                    <>
                      <span className="text-[var(--accent)]">{s.value}</span> {s.label}
                    </>
                  )}
                </div>
              ))}
              <Link
                href="/about-us"
                className="hover-footer-btn flex h-[75px] w-full items-center justify-center self-center border-[6px] border-[var(--accent)] bg-[var(--accent)] px-4 font-medium uppercase leading-tight text-white no-underline [font-size:clamp(18px,2vw,21px)]"
              >
                {t("wantToKnow")}
              </Link>
            </div>
          </div>
           {/* Bottom: blue block — stuck to right edge (breakout right only), responsive width */}
        <div
          className="footer-blue-block mt-8 flex w-full flex-col gap-6 bg-[var(--accent)] px-4 py-8 sm:mt-12 sm:gap-8 sm:px-6 sm:py-10 md:mt-20 md:flex-row md:items-start md:justify-between md:gap-12 md:px-10 md:py-12 lg:gap-14 lg:px-12 lg:py-14 xl:px-16 xl:py-16"
        >
        <div className="flex flex-col">
          <Image
            src="/images/_logo_white.svg"
            alt="STACKLEVEL GROUP"
            width={250}
            height={110}
            className="mb-6 w-[200px] self-start md:mb-8 md:w-[220px] xl:w-[250px]"
          />
          <Link
            href="/hire-web-developers"
            className="hover-hire-us mt-4 flex h-[75px] w-full max-w-[280px] items-center justify-center border-[6px] border-white font-semibold uppercase leading-tight text-white no-underline md:w-[300px] [font-size:clamp(18px,2vw,24px)]"
          >
            {t("hireUs")}
          </Link>
        </div>

        <div className="flex flex-col">
          <h3 className="font-medium uppercase tracking-wide text-white [font-size:clamp(24px,3vw,32px)]">
            {t("contacts")}
          </h3>
          <a
            href="tel:+375293444489"
            className="mt-4 font-normal text-white no-underline [font-size:clamp(18px,2vw,24px)]"
          >
            +375 (29) 344-44-89
          </a>
          <a
            href="mailto:contact@stacklevel.org"
            className="mt-3 lowercase text-white no-underline [font-size:clamp(18px,2vw,24px)]"
          >
            contact@stacklevel.org
          </a>
        </div>

        <div className="flex flex-col">
          <h3 className="font-medium uppercase tracking-wide text-white [font-size:clamp(24px,3vw,32px)]">
            {t("beInTouch")}
          </h3>
          <div className="mt-4 flex gap-6">
            <a
              href="https://www.linkedin.com/company/stacklevel"
              className="transition hover:scale-110"
              aria-label="LinkedIn"
            >
              <Image src="/images/social/_linkedin.svg" alt="" width={32} height={32} />
            </a>
            <a
              href="https://www.instagram.com/stacklevel_group/"
              className="transition hover:scale-110"
              aria-label="Instagram"
            >
              <Image src="/images/social/_instagram.svg" alt="" width={32} height={32} />
            </a>
            <a
              href="https://www.facebook.com/stacklevel"
              className="transition hover:scale-110"
              aria-label="Facebook"
            >
              <Image src="/images/social/_fb.svg" alt="" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
    </footer>
  );
}
