import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HireLinks() {
  const t = useTranslations("hireLinks");
  return (
    <div className="mx-[50px] mt-[100px] flex w-full max-w-[900px] justify-between gap-6">
      <Link
        href="/hire-web-developers"
        className="
          w-full max-w-[420px]
          border-[6px] border-blue-600
          bg-blue-600 px-8 py-8
          text-left text-[24px] font-semibold uppercase leading-tight text-white
          transition-all duration-500
          hover:bg-white hover:text-blue-600
        "
      >
        {t("hireDeveloper")}
      </Link>

      <Link
        href="/hire-dedicated-team"
        className="
          w-full max-w-[420px]
          border-[6px] border-blue-600
          bg-blue-600 px-8 py-8
          text-left text-[24px] font-semibold uppercase leading-tight text-white
          transition-all duration-500
          hover:bg-white hover:text-blue-600
        "
      >
        {t("hireDedicated")}
      </Link>
    </div>
  );
}
