import HireDevelopersHero from "../../components/HireDevelopersHero";
import ReactAboutSection from "../../components/ReactAboutSection";

export default function HireReactDevelopersPage() {
  return (
    <section className="w-full mb-10">
      <HireDevelopersHero buttonVariant="outlined" />
      <ReactAboutSection />
    </section>
  );
}
