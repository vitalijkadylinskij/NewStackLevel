"use client";

import Image from "next/image";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

const linkClass = "font-bold text-xl text-black no-underline transition hover:text-[var(--accent)] hover:shadow-[0_4px_0_0_var(--accent)]";
const linkClassModal = "font-semibold text-black no-underline hover:text-[var(--accent)]";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("header");

  const closeMobile = () => setMobileOpen(false);

  const localeLinkClass = (loc: string) =>
    `font-semibold no-underline hover:shadow-[0_4px_0_0_var(--accent)] ${locale === loc ? "text-[var(--accent)]" : "text-black hover:text-[var(--accent)]"}`;

  return (
    <header className="relative z-50 flex h-20 w-full items-center bg-white md:h-[150px]">
      <div className="dots-pattern absolute left-0 right-0 top-0 h-full md:left-[35px] md:right-[35px] md:hidden" />
      <div className="width-wrapper relative z-10 flex w-full justify-between">
        <div className="flex flex-1 items-center">
          <Link href="/" className="relative z-10 mr-[3vw] shrink-0 md:mr-[6vw] xl:mr-[130px]">
            <Image
              src="/logo.svg"
              alt="STACKLEVEL GROUP"
              width={254}
              height={48}
              className="hidden w-[12vw] max-w-[254px] lg:block xl:w-auto"
            />
            <Image
              src="/logo.svg"
              alt="STACKLEVEL"
              width={120}
              height={24}
              className="block h-8 w-24 object-contain object-left lg:hidden"
            />
          </Link>

          <nav className="hidden flex-1 lg:flex lg:items-center lg:justify-between">
            <div className="flex flex-[2] items-center gap-[5vw] xl:gap-0 xl:gap-[30px]">
              <div className="group relative inline-block w-[195px]">
                <Link href="/hire-web-developers" className={`relative block w-full ${linkClass}`}>
                  {t("hireDevelopers")}
                </Link>
                <div className="absolute left-0 top-full z-50 -mt-0.5 hidden min-w-[200px] flex-col gap-0 rounded bg-white pr-2.5 pb-2.5 pt-3 shadow group-hover:flex">
                  <Link href="/hire-react-developers" className={`block w-full py-1.5 pr-2 ml-1 text-left text-lg font-medium capitalize ${linkClass}`}>
                    {t("reactDevelopment")}
                  </Link>
                  <Link href="/hire-php-developers" className={`block w-full py-1.5 pr-2 ml-1 text-left text-lg font-medium capitalize ${linkClass}`}>
                    {t("phpDevelopment")}
                  </Link>
                </div>
              </div>
              <Link href="/hire-dedicated-team" className={linkClass}>
                {t("hireTeam")}
              </Link>
              <Link href="/case-studies" className={linkClass}>
                {t("ourCases")}
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-end gap-[5vw] xl:gap-[20px]">
              <Link href="/about-us" className={linkClass}>
                {t("aboutUs")}
              </Link>
              <Link href="/blog" className={linkClass}>
                {t("blog")}
              </Link>
              <Link href="/careers" className={linkClass}>
                {t("career")}
              </Link>
              <span className="flex items-center gap-1">
                <Link href={pathname} locale="en" className={localeLinkClass("en")}>
                  EN
                </Link>
               {/* <Link href={pathname} locale="ru" className={`ml-1 ${localeLinkClass("ru")}`}>
                  RU
                </Link>*/}
              </span>
            </div>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            className="ml-auto cursor-pointer lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Image src="/images/burger.svg" alt="" width={25} height={18} />
          </button>
        </div>
      </div>

      {/* Mobile modal */}
      <div
        className={`fixed inset-0 z-[200] bg-white ${mobileOpen ? "block" : "hidden"}`}
        aria-hidden={!mobileOpen}
      >
        <div className="width-wrapper flex h-20 items-center justify-between">
          <Link href="/" onClick={closeMobile}>
            <Image src="/logo.svg" alt="STACKLEVEL" width={180} height={40} />
          </Link>
          <span className="flex gap-4">
            <Link href={pathname} locale="en" className={localeLinkClass("en")} onClick={closeMobile}>EN</Link>
            <Link href={pathname} locale="ru" className={localeLinkClass("ru")} onClick={closeMobile}>RU</Link>
          </span>
          <button type="button" aria-label="Close menu" onClick={closeMobile}>
            <Image src="/images/modal-close.svg" alt="" width={40} height={40} />
          </button>
        </div>
        <div className="width-wrapper mt-24 flex flex-col items-end gap-4 text-2xl">
          <Link href="/hire-web-developers" className={linkClassModal} onClick={closeMobile}>{t("hireDevelopers")}</Link>
          <Link href="/hire-dedicated-team" className={linkClassModal} onClick={closeMobile}>{t("hireTeam")}</Link>
          <Link href="/case-studies" className={linkClassModal} onClick={closeMobile}>{t("ourCases")}</Link>
          <Link href="/about-us" className={linkClassModal} onClick={closeMobile}>{t("aboutUs")}</Link>
          <Link href="/blog" className={linkClassModal} onClick={closeMobile}>{t("blog")}</Link>
          <Link href="/careers" className={linkClassModal} onClick={closeMobile}>{t("career")}</Link>
        </div>
      </div>
    </header>
  );
}
