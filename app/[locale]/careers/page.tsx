import HireDevelopersHero from "../../components/HireDevelopersHero";


export default function CareersPage() {
  return (
    <section className="relative w-full mx-auto">
      <HireDevelopersHero text="HIRE US" />
        <div className="relative mx-auto mt-12 md:mt-[100px] mb-8 md:mb-[50px]">

        {/* DOTS LEFT */}
        <div
          className="
            dots-pattern
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            w-[85px]
            h-[220px]
          "
        />

        {/* CONTENT */}
        <div className="mx-auto w-full max-w-[1100px] text-center px-4">
          <h2 className="mb-8 md:mb-[60px] text-[24px] md:text-[36px] font-bold text-black [font-size:clamp(22px,4vw,36px)]">
            We're always looking for new talents. Join us!
          </h2>

          <p className="text-[22px] md:text-[36px] font-bold leading-[1.2] text-black [font-size:clamp(20px,3.5vw,36px)]">
            If you didn't find your vacancy, just send a message, and we will
            figure it out!
          </p>
        </div>

      </div>
    </section>
  );
}
