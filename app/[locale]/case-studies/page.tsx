"use client";
import Image from "next/image";

export default function CaseStudiesPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const technology = formData.get("technology");

    console.log("Search:", technology);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-pink-600 via-purple-600 to-blue-700">
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col min-h-[450px] px-4 py-10 md:px-12 lg:px-[89px] md:flex-row md:justify-between md:py-12"
      >
        {/* LEFT */}
        <div className="flex flex-col w-full max-w-[520px] text-white justify-center">
          <h1 className="mb-8 md:mb-12 text-[24px] md:text-[31px] font-bold leading-tight">
            We Provide You With Developers
            And Dedicated Teams
          </h1>

          <p className="mb-4 text-[18px] md:text-[24px] font-semibold">Find cases</p>

          <input
            name="technology"
            type="text"
            placeholder="Enter technology"
            className="
              w-full
              max-w-[440px]
              bg-transparent
              pb-2
              text-white
              placeholder-white
              outline-none
              border-b-[5px]
              border-white
              text-[16px]
              md:text-[18px]
              font-semibold
              leading-[2.2]
              cursor-pointer
            "
          />
        </div>

        {/* RIGHT */}
        <div className="relative flex flex-col items-center justify-end mt-8 md:mt-0">
          <div className="pointer-events-none absolute z-0 w-[400px] md:w-[670px] h-[120px] md:h-[215px] top-[20px] right-[-120px] md:right-[-200px] opacity-40 md:opacity-100 hidden sm:block">
            <Image
              src="/images/OurCasesDots.svg"
              alt=""
              width={670}
              height={215}
              className="w-full h-full object-cover object-left"
            />
          </div>

          <button
            type="submit"
            className="
              cursor-pointer
              mb-12
              md:mb-[50px]
              w-[440px]
              h-[50px]
              relative z-10
              bg-white
              text-[16px]
              md:text-[18px]
              font-semibold
              text-blue-700
              transition
              duration-400
              hover:bg-blue-700
              hover:text-white
            "
          >
            Find for cases
          </button>
        </div>
      </form>
    </section>
  );
}
