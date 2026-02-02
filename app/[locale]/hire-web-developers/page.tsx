import HireDevelopersHero from "../../components/HireDevelopersHero";
import DevelopersFilter from "../../components/DevelopersFilter";
import { useLocale, useTranslations } from "next-intl";

export const metadata = {
  title: "Hire Web Developers | STACKLEVEL",
  description: "We provide you with developers and dedicated teams.",
};

export default function HireWebDevelopersPage() {
  const locale = useLocale();
  const t = useTranslations("pageWebDevelopers");

  return (
    <section className="w-full mb-10">
      <HireDevelopersHero />
      <div className="w-full bg-white py-12">
        <div className="mx-auto max-w-[1476px]">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-black">
            {t("title")}
          </h2>
        </div>
      </div>
      <div className="relative w-full pb-24">
        <div className="absolute left-0 top-0 h-full w-[280px] dots-pattern" />
        <div className="absolute bottom-0 left-[282px] right-0 h-[245px] w-[20%] dots-pattern" />
        <DevelopersFilter />
      </div>
    </section>
  );
}
