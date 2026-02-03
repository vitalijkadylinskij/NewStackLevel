"use client";

import Image from "next/image";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

const linkClass =
  // NEW — clamp + запрет переноса
  "font-bold whitespace-nowrap text-[clamp(12px,0.85vw,18px)] text-black no-underline transition hover:text-[var(--accent)] hover:shadow-[0_4px_0_0_var(--accent)]";

const linkClassModal =
  "font-semibold text-black no-underline hover:text-[var(--accent)]";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("header");

  const closeMobile = () => setMobileOpen(false);

  const localeLinkClass = (loc: string) =>
    `font-semibold whitespace-nowrap ${locale === loc
      ? "text-[var(--accent)]"
      : "text-black hover:text-[var(--accent)]"
    }`;

  return (
    <header className="relative z-50 flex h-20 w-full items-center bg-white md:h-[150px]">

      <div className="dots-pattern absolute left-0 right-0 top-0 h-full md:left-[35px] md:right-[35px] md:hidden" />

      <div className="width-wrapper relative z-10 flex w-full items-center">

        {/* LOGO */}
        <Link
          href="/"
          className="relative z-10 shrink-0 mr-[clamp(20px,3vw,130px)]"
        >
          <Image
            src="/logo.svg"
            alt="STACKLEVEL GROUP"
            width={254}
            height={48}
            // NEW — адаптив логотип
            className="hidden lg:block w-[clamp(140px,11vw,254px)]"
          />

          <Image
            src="/logo.svg"
            alt="STACKLEVEL"
            width={120}
            height={24}
            className="block h-8 w-24 object-contain lg:hidden"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex flex-1 items-center">

          {/* LINKS */}
          <div className="flex items-center gap-[clamp(12px,2vw,32px)]">

            <div className="group relative inline-block">
              <Link
                href="/hire-web-developers"
                className={linkClass}
              >
                {t("hireDevelopers")}
              </Link>

              <div className="absolute left-0 top-full z-50 hidden min-w-[230px] flex-col rounded bg-white shadow group-hover:flex">
                <Link
                  href="/hire-react-developers"
                  className={`block px-3 py-1 text-base font-medium ${linkClass}`}
                >
                  {t("reactDevelopment")}
                </Link>

                <Link
                  href="/hire-php-developers"
                  className={`block px-3 py-1 text-base font-medium ${linkClass}`}
                >
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

            <Link href="/about-us" className={linkClass}>
              {t("aboutUs")}
            </Link>

            <Link href="/blog" className={linkClass}>
              {t("blog")}
            </Link>

            <Link href="/careers" className={linkClass}>
              {t("career")}
            </Link>

          </div>

          {/* LANGUAGE */}
          <div className="ml-auto flex shrink-0 items-center gap-2 pl-4">
            <Link href={pathname} locale="en" className={localeLinkClass("en")}>
              EN
            </Link>

            <Link href={pathname} locale="ru" className={localeLinkClass("ru")}>
              RU
            </Link>
          </div>

        </nav>

        {/* BURGER */}
        <button
          type="button"
          aria-label="Open menu"
          className="ml-auto cursor-pointer lg:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Image src="/images/burger.svg" alt="" width={25} height={18} />
        </button>

      </div>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-[200] bg-white ${mobileOpen ? "block" : "hidden"}`}>
        <div className="width-wrapper flex h-20 items-center justify-between">

          <Link href="/" onClick={closeMobile}>
            <Image src="/logo.svg" alt="STACKLEVEL" width={180} height={40} />
          </Link>

          <span className="flex gap-4">
            <Link href={pathname} locale="en" className={localeLinkClass("en")} onClick={closeMobile}>
              EN
            </Link>

            <Link href={pathname} locale="ru" className={localeLinkClass("ru")} onClick={closeMobile}>
              RU
            </Link>
          </span>

          <button onClick={closeMobile}>
            <Image src="/images/modal-close.svg" alt="" width={40} height={40} />
          </button>

        </div>

        <div className="width-wrapper mt-24 flex flex-col items-end gap-4 text-2xl">
          <Link href="/hire-web-developers" className={linkClassModal} onClick={closeMobile}>
            {t("hireDevelopers")}
          </Link>

          <Link href="/hire-dedicated-team" className={linkClassModal} onClick={closeMobile}>
            {t("hireTeam")}
          </Link>

          <Link href="/case-studies" className={linkClassModal} onClick={closeMobile}>
            {t("ourCases")}
          </Link>

          <Link href="/about-us" className={linkClassModal} onClick={closeMobile}>
            {t("aboutUs")}
          </Link>

          <Link href="/blog" className={linkClassModal} onClick={closeMobile}>
            {t("blog")}
          </Link>

          <Link href="/careers" className={linkClassModal} onClick={closeMobile}>
            {t("career")}
          </Link>
        </div>

      </div>
    </header>
  );
}
