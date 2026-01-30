"use client";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <section className="w-full bg-white mb-20 md:mb-40">
    <div className="mx-auto flex flex-col md:flex-row items-stretch">
      {/* LEFT */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-4 py-8 md:py-12">
        <div className="w-full max-w-[400px] md:max-w-[570px] aspect-[570/170] md:h-[170px] relative">
        <Image
              src="/logo.svg"
              alt="STACKLEVEL GROUP"
              width={254}
              height={48}
              className="object-contain w-full h-full"
            />
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[720px] md:h-[720px] bg-blue-700 px-4 py-12 md:px-16 md:py-20 text-white md:mr-5">
        {/* TEXT */}
        <div className="relative z-10 w-full max-w-[510px] text-[18px] md:text-[24px] leading-[1.2] font-semibold">
          <p className="my-[24px]">
            We believe in the personal approach and the high quality of code.
            Because, let's be honest, the product should work properly. We
            know that every business can become a market leader with
            digitalization. From mobile applications developing to creating a
            complex system — the STACKLEVEL GROUP development team is always
            ready to help.
          </p>

          <p className="my-[24px]">
            The years of experience and high level of clients' trust make
            STACKLEVEL GROUP team reliable partners on the way of success.
            Business analysis, engineering, user-friendly ux/ui design,
            proper testing, product management — we guide you through the
            way. No need to worry about the quality with STACKLEVEL GROUP —
            you can focus on your business, while we do the rest.
          </p>
        </div>

        {/* SVG */}
        <div className="pointer-events-none absolute top-[-30px] right-[-5px] w-[100px] md:w-[170px] opacity-60 md:opacity-100">
          <Image
            src="/images/vector3.svg"
            alt=""
            width={260}
            height={680}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
    <div className="relative max-w-[1476px] mx-auto my-12 px-4 md:my-[100px] md:px-0">
        <div className="flex flex-col md:flex-row items-start w-full">
          <div className="relative w-full md:w-auto md:min-w-[301px] aspect-[301/305] md:aspect-auto md:h-[305px] shrink-0">
            <Image
              src="/images/persons/max.jpg"
              alt="Maxim Garbar"
              width={301}
              height={305}
              className="object-cover w-full h-full object-top"
            />
            <div className="absolute -bottom-2 left-0 h-[5px] w-full bg-blue-600" />
          </div>

          {/* RIGHT — CONTENT */}
          <div className="relative w-full flex flex-col justify-between p-5 md:p-6 min-h-[280px] md:h-[305px] border-t border-gray-200">
            {/* QUOTES IMAGE */}
            <div className="absolute -top-6 right-0 w-20 md:w-auto">
              <Image
                src="/images/_quotes.svg"
                alt=""
                width={146}
                height={111}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col">
            <h3 className="mb-4 md:mb-6 text-[24px] md:text-[32px] font-bold uppercase text-blue-600">
              MAXIM GARBAR
            </h3>

            <p className="max-w-[820px] text-[16px] md:text-[18px] leading-[1.2] ml-0 md:ml-5 mb-4 md:mb-5 text-black">
              We provide innovative developing and consulting services to make
              businesses of our clients grow and become market leaders. The
              client's success is our success.
            </p>
            </div>
            <div className="flex flex-col">
            <p className="mt-8 md:mt-[55px] ml-0 md:ml-[20px] text-[16px] md:text-[18px] font-semibold uppercase text-blue-600">
              CEO STACKLEVEL GROUP
            </p>
            <div className="mt-6 h-[3px] w-full bg-blue-600" />
            </div>
          </div>
        </div>
      </div>
  </section>
  );
}
