"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import HireUsModal from "./HireUsModal";
import { useLocale, useTranslations } from "next-intl";

type Stack = "all" | "react" | "php";

export default function DevelopersFilter() {
  const locale = useLocale();
  const t = useTranslations("pageWebDevelopers");
  const [active, setActive] = useState<Stack>("all");
  const [isOpen, setIsOpen] = useState(false);

  const CTA_CONFIG: Record<Stack, { label: string; href?: string }> = {
    all: {
      label: t("textButtonAll"),
    },
    react: {
      label: t("textButtonReact"),
      href: "/hire-react-developers",
    },
    php: {
      label: t("textButtonPHP"),
      href: "/hire-php-developers",
    },
  };

  const { label, href } = CTA_CONFIG[active];

  return (
    <>
      <div className="relative mx-auto flex w-full max-w-[1476px] flex-col items-center gap-12 lg:items-start">
        {/* Filter */}
        <div className="w-full max-w-xs border border-gray-200 bg-white p-6 lg:w-52">
          <ul className="space-y-4 text-lg">
            {(["all", "react", "php"] as Stack[]).map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`cursor-pointer ${
                  active === item
                    ? "font-semibold text-blue-600 underline decoration-4 underline-offset-4"
                    : "font-medium hover:text-blue-600 hover:underline decoration-4 underline-offset-4"
                }`}
              >
                {item === "all"
                  ? t("allDevelopers")
                  : item.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        {active === "all" ? (
          <button
            onClick={() => setIsOpen(true)}
            className="
              flex w-full max-w-5xl max-h-[78px] mx-auto cursor-pointer items-center justify-center
              border-[6px] border-blue-600
              bg-blue-600 py-6
              text-center text-xl font-semibold uppercase tracking-wide text-white
              transition-all duration-200
              hover:bg-white hover:text-blue-600
            "
          >
            {label}
          </button>
        ) : (
          <Link
            href={href!}
            className="
              flex w-full max-w-5xl max-h-[78px] mx-auto cursor-pointer items-center justify-center
              border-[6px] border-blue-600
              bg-blue-600 py-6
              text-center text-xl font-semibold uppercase tracking-wide text-white
              transition-all duration-200
              hover:bg-white hover:text-blue-600
            "
          >
            {label}
          </Link>
        )}
      </div>

      {/* Modal */}
      {isOpen && <HireUsModal onClose={() => setIsOpen(false)} />}
    </>
  );
}
