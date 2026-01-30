import Image from "next/image";

const ROW1 = [
  { slug: "gazprom-ru", alt: "ГАЗПРОМ" },
  { slug: "duma_ru", alt: "Московская городская дума" },
  { slug: "papajobs", alt: "PAPA JOBS" },
  { slug: "hvmn", alt: "HVMN" },
  { slug: "unicredit_ru", alt: "ЮниКредит Банк" },
  { slug: "otkritie_ru", alt: "Открытие Банк" },
  { slug: "zenit_ru", alt: "Банк Зенит" },
] as const;

const ROW2 = [
  { slug: "jammtravel", alt: "jamm.travel" },
  { slug: "viasports", alt: "VIASPORTS" },
  { slug: "atol", alt: "ATON" },
  { slug: "tdberlin", alt: "trommsdorff + drüner" },
] as const;

function LogoCell({ slug, alt }: { slug: string; alt: string }) {
  return (
    <div className="flex min-h-[70px] min-w-[100px] items-center justify-center sm:min-h-[85px] sm:min-w-[130px] md:min-h-[90px] md:min-w-[140px]">
      <Image
        src={`/images/companies/${slug}.svg`}
        alt={alt}
        width={160}
        height={90}
        className="max-h-[70px] w-auto max-w-[120px] object-contain object-center grayscale opacity-80 transition hover:grayscale-0 hover:opacity-100 sm:max-h-[85px] sm:max-w-[140px] md:max-h-[90px] md:max-w-[160px]"
      />
    </div>
  );
}

export default function Clients() {
  return (
    <section
      id="clients"
      className="clients relative grid grid-cols-1 md:grid-cols-[1fr_77%_1fr] xl:grid-cols-[1fr_minmax(0,1476px)_1fr]"
      aria-label="Our clients"
    >
      <div
        className="dots-pattern absolute left-0 top-0 h-full w-full"
        style={{ backgroundPosition: "17px 11px, 57.5px 51.5px" }}
        aria-hidden
      />
      <div className="clients__right relative col-span-1 md:col-span-2 md:col-start-2">
        <div
          className="clients-bg absolute left-0 top-0 z-0 h-[calc(100%-200px)] w-full bg-white"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[320px] flex-col items-center justify-center gap-10 py-16 pb-[200px] md:pt-20 md:pb-[200px]">
          <div className="flex w-full max-w-[1500px] flex-wrap items-center gap-x-6 gap-y-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
            {ROW1.map(({ slug, alt }) => (
              <LogoCell key={slug} slug={slug} alt={alt} />
            ))}
          </div>
          <div className="flex w-full max-w-[1500px] flex-wrap items-center justify-start gap-x-6 gap-y-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-14">
            {ROW2.map(({ slug, alt }) => (
              <LogoCell key={slug} slug={slug} alt={alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
