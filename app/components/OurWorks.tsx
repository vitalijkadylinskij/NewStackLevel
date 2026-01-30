import { Link } from "@/i18n/navigation";

const PLACEHOLDER_CASES = [
  { title: "Project One", domains: "E-commerce, Retail", tech: "React, Node.js" },
  { title: "Project Two", domains: "Fintech", tech: "Rails, PostgreSQL" },
  { title: "Project Three", domains: "Healthcare", tech: "React, Python" },
];

export default function OurWorks() {
  return (
    <section id="our-works" className="section relative z-10 grid w-[95%] grid-cols-[1fr_85%] grid-rows-3 overflow-hidden ml-auto md:w-auto md:ml-0 md:grid-cols-[1fr_70%]">
      <div
        className="section__bg absolute z-[-1] col-start-2 h-full w-full bg-no-repeat"
        style={{ background: "linear-gradient(237.85deg, #1b0dff 25%, #ff0052 100%)" }}
      />
      <h2 className="section__title col-start-2 m-0 max-h-[175px] px-4 py-5 font-semibold uppercase leading-tight text-white md:px-[85px] md:py-[50px] [font-size:clamp(24px,4vw,48px)]">
        On more than 20 projects
      </h2>
      <div className="section__slider col-start-2 flex w-[110%] flex-col justify-self-end gap-4 md:w-[125%]">
        {PLACEHOLDER_CASES.map((c) => (
          <Link
            key={c.title}
            href="/case-studies"
            className="slider__item group relative block cursor-pointer border-b-4 border-[var(--accent)] bg-[var(--accent)] pb-[85%] transition-[transform,box-shadow] duration-300 hover:shadow-lg md:pb-[75%]"
          >
            <div className="slide__info absolute inset-0 m-auto flex h-[90%] w-[90%] flex-col justify-between text-white transition-transform duration-300 group-hover:-translate-y-[2%]">
              <h3 className="slide__header m-0 py-5 font-semibold uppercase leading-tight md:py-[1.5vw] xl:py-[30px] [font-size:clamp(18px,2.5vw,31px)]">
                {c.title}
              </h3>
              <div className="hidden gap-2 lg:block">
                <h4 className="slide__subheader m-0 font-medium [font-size:clamp(18px,2vw,24px)]">Business Domains</h4>
                <p className="m-0">{c.domains}</p>
              </div>
              <div className="hidden gap-2 lg:block">
                <h4 className="slide__subheader m-0 font-medium [font-size:clamp(18px,2vw,24px)]">Key technologies</h4>
                <p className="m-0">{c.tech}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="section__slider-nav col-start-2 flex flex-wrap items-center justify-start gap-3 px-4 py-6 md:gap-0 md:px-[85px] md:pt-10 md:pb-[30px]">
        <button type="button" aria-label="Previous slide" className="order-1 h-5 w-5 shrink-0 cursor-pointer bg-[length:contain] bg-center bg-no-repeat opacity-90 hover:opacity-100 md:mr-[3vw] md:h-[30px] md:w-[30px] xl:mr-[40px]" style={{ backgroundImage: "url(/images/_prev.svg)" }} />
        <button type="button" aria-label="Next slide" className="order-2 h-5 w-5 shrink-0 cursor-pointer bg-[length:contain] bg-center bg-no-repeat opacity-90 hover:opacity-100 md:mr-[2vw] md:h-[30px] md:w-[30px] xl:mr-[24px]" style={{ backgroundImage: "url(/images/_next.svg)" }} />
        <span className="order-3 font-semibold text-white md:mr-[6vw] [font-size:clamp(24px,2.5vw,32px)] xl:mr-[80px]">1 / 3</span>
        <Link
          href="/case-studies"
          className="hover-simple-revert order-4 flex h-[75px] shrink-0 items-center justify-center bg-[var(--accent)] px-6 md:px-9 font-semibold uppercase text-white no-underline [font-size:clamp(16px,2vw,24px)]"
        >
          MORE CASES
        </Link>
      </div>
    </section>
  );
}
