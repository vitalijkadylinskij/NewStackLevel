import HireDevelopersHero from "../../components/HireDevelopersHero";
import PhpAboutSection from "../../components/PhpAboutSection";

export const metadata = {
  title: "Hire PHP Developers | STACKLEVEL",
  description: "PHP web development services.",
};

export default function HirePhpDevelopersPage() {
  return (
    <section className="w-full mb-10">
      <HireDevelopersHero buttonVariant="outlined" />
      <PhpAboutSection />
    </section>
  );
}
