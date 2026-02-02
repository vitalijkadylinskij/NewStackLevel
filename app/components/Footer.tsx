"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const stats = [
    { value: "30+", labelKey: "experiencedDevelopers" },
    { value: "3+", labelKey: "yearsOnTheMarket" },
    { value: "20+", labelKey: "successfulProjects" },
    { value: "92%", labelKey: "ofReturnedCustomers" },
    { value: locale === "ru" ? "ТОЛЬКО ..." : "POSITIVE", labelKey: "positiveOnly" },
  ];

  return (
    <footer className="relative z-[1] overflow-hidden bg-white">
      <div
        className="dots-pattern absolute inset-0"
        style={{ backgroundPosition: "10px 0, 50.5px 40.5px" }}
        aria-hidden
      />

      <div className="relative flex flex-col z-10 w-full pb-1 flex">
        {/* Top: WE ARE + stats + CTA (white + dots) */}
        <div className="mx-auto max-w-[min(1476px,92%)] grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] md:gap-0">
          <div className="flex w-full max-w-[120px] h-[270px] justify-center md:col-start-1 md:row-span-1 md:mr-[5vw] md:justify-center bg-white">
            <Image
              src="/images/_we-are.svg"
              alt="We are"
              width={150}
              height={400}
              className="max-h-[400px] w-auto max-w-[150px] object-contain object-left"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col pb-10 md:col-start-2 md:items-center md:justify-center md:py-12 md:px-6 md:pb-12">
              <div className="grid w-full max-w-[1000px] grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:gap-x-[3vw] md:gap-y-11 xl:grid-cols-3 xl:gap-x-[110px]">
                {stats.map((s) => (
                  <div
                    key={s.labelKey}
                    className="flex flex-col max-w-[300px] font-semibold uppercase text-2xl bg-white ml-5 pl-5 py-1"
                  >
                    {t.rich(`${s.labelKey}`, {
                      value: () => (
                        <span className="text-[var(--accent)]">{s.value}</span>
                      )
                    })}
                  </div>
                ))}

                <Link
                  href="/about-us"
                  className="hover-footer-btn flex h-[75px] w-full items-center justify-center self-center border-[6px] border-[var(--accent)] bg-[var(--accent)] px-4 font-medium uppercase leading-tight text-white no-underline text-xl"
                >
                  {t("wantToKnow")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom: blue block — stuck to right edge (breakout right only), responsive width */}
        <div
          className="footer-blue-block w-full mt-8 flex w-full flex-col gap-6 bg-[var(--accent)] px-4 py-8 sm:mt-12 sm:gap-8 sm:px-6 sm:py-10  md:flex-row md:items-start md:justify-between md:gap-12 md:px-10 md:py-12 lg:gap-14 lg:px-12 lg:py-14 xl:px-16 xl:py-16"
        >
          <div className="flex flex-col w-full max-w-[300px]">
            <Image
              src="/images/_logo_white.svg"
              alt="STACKLEVEL GROUP"
              width={250}
              height={110}
              className="mb-6 w-[200px] self-start md:mb-8 md:w-[200px] xl:w-[200px]"
            />
            <Link
              href="/hire-web-developers"
              className="hover-hire-us mt-4 flex h-[65px] w-full max-w-[300px] items-center justify-center border-[4px] border-white font-semibold uppercase leading-tight text-white no-underline md:w-[300px] text-xl"
            >
              {t("hireUs")}
            </Link>
          </div>

          <div className="flex flex-col">
            <h3 className="font-medium uppercase tracking-wide text-white text-2xl">
              {t("contacts")}
            </h3>
            <a
              href="tel:+375293444489"
              className="mt-4 font-normal text-white no-underline text-xl"
            >
              +375 (29) 344-44-89
            </a>
            <a
              href="mailto:contact@stacklevel.org"
              className="mt-3 lowercase text-white no-underline text-xl"
            >
              contact@stacklevel.org
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="font-medium uppercase tracking-wide text-white text-2xl">
              {t("beInTouch")}
            </h3>
            <div className="mt-4 flex gap-6">
              <a
                href="https://www.linkedin.com/company/stacklevel"
                className="transition hover:scale-110"
                aria-label="LinkedIn"
              >
                <Image src="/images/social/_linkedin.svg" alt="" width={24} height={24} />
              </a>
              <a
                href="https://www.instagram.com/stacklevel_group/"
                className="transition hover:scale-110"
                aria-label="Instagram"
              >
                <Image src="/images/social/_instagram.svg" alt="" width={24} height={24} />
              </a>
              <a
                href="https://www.facebook.com/stacklevel"
                className="transition hover:scale-110"
                aria-label="Facebook"
              >
                <Image src="/images/social/_fb.svg" alt="" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
