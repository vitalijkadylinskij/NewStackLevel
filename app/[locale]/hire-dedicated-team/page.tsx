"use client";
import { useState } from "react";
import { StepCard } from "../../components/StepСard";
import HireDevelopersHero from "../../components/HireDevelopersHero";
import { ExpertCard } from "../../components/ExpertCard";
import HireUsModal from "../../components/HireUsModal";
import { useTranslations } from "next-intl";

export default function HireDedicatedTeamPage() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("hireHero");

  return (
    <section className="relative w-full mx-auto pb-20">
      <HireDevelopersHero text={t("requestTeam")} />
      <div className="relative mt-12 md:mt-[100px]">
        <div className="dots-pattern absolute left-0 top-[-60px] h-[140px] w-[40px] z-0" />
        <div className="dots-pattern absolute left-0 bottom-[-80px] h-[320px] w-[28%] -z-10" />

        <h2 className="relative z-10 mb-10 md:mb-16 text-center px-4 text-[24px] sm:text-[30px] md:text-[36px] font-extrabold uppercase tracking-wide [font-size:clamp(22px,4vw,36px)]">
          WE HELP YOU TO CHOOSE THE EXPERT OR HIRE A DEDICATED TEAM YOU NEED
        </h2>

        <div className="relative z-10 mx-auto flex w-full max-w-[90%] flex-col gap-6 md:flex-row md:justify-between md:gap-4 px-4 md:px-0">
          <StepCard step="STEP 1" text="Together we define your business needs" />
          <StepCard step="STEP 2" text="We provide you with a perfect specialist or a dedicated team" />
          <StepCard step="STEP 3" showArrow={false} text="You start an effective partnership and scale your business" />
        </div>
      </div>

      <h2 className="mb-10 md:mb-[70px] mt-16 md:mt-[100px] text-center px-4 text-[24px] md:text-[36px] font-extrabold uppercase tracking-wide [font-size:clamp(22px,4vw,36px)]">
        Our Experts
      </h2>

      <div className="mx-auto grid w-full max-w-[90%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 px-4 md:px-0 justify-items-center">
        <ExpertCard title="Hire a Project Manager" text="High-performing talented STACKLEVEL GROUP experts bring order to every chaos and manage projects effectively." />
        <ExpertCard title="Hire a Business Analyst" text="Lowering project costs and increasing the value of the business? That's what STACKLEVEL GROUP business analysts will bring you." />
        <ExpertCard title="Hire a UX/UI Designer" text="STACKLEVEL GROUP UX/UI designer will identify the user-persona of your business and will implement features to grow your revenue." />
        <ExpertCard title="Hire Developers" text="Experienced dedicated developers: php developers, iOS/Android developers, react js developers." />
        <ExpertCard title="Hire a QA Engineer" text="Deploying only perfectly working products within deadlines — is what STACKLEVEL GROUP QA engineers do. See for yourself!" />
      </div>

      <div className="mx-auto mt-12 md:mt-20 flex justify-center items-center text-center px-4">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full max-w-[370px] cursor-pointer bg-blue-700 px-8 md:px-16 py-4 md:py-5 text-[18px] md:text-[24px] font-semibold uppercase text-white transition duration-500 border-[6px] border-blue-700 hover:bg-white hover:text-blue-700"
        >
          Request Team
        </button>
      </div>
      {isOpen && <HireUsModal onClose={() => setIsOpen(false)} />}
    </section>
  );
}
