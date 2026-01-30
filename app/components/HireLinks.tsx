import { Link } from "@/i18n/navigation";

export default function HireLinks() {
  return (
    <div className="mx-4 md:mx-12 lg:mx-[50px] mt-12 md:mt-[100px] flex w-full max-w-[900px] flex-col md:flex-row justify-between gap-4 md:gap-6">
      <Link
        href="/hire-web-developers"
        className="
          w-full max-w-[420px]
          border-[6px] border-blue-600
          bg-blue-600 px-6 py-6 md:px-8 md:py-8
          text-left text-[20px] sm:text-[26px] md:text-[31px] font-semibold uppercase leading-tight text-white
          transition-all duration-500
          hover:bg-white hover:text-blue-600
        "
      >
        Do you want to hire developer?
      </Link>

      <Link
        href="/hire-dedicated-team"
        className="
          w-full max-w-[420px]
          border-[6px] border-blue-600
          bg-blue-600 px-6 py-6 md:px-8 md:py-8
          text-left text-[20px] sm:text-[26px] md:text-[31px] font-semibold uppercase leading-tight text-white
          transition-all duration-500
          hover:bg-white hover:text-blue-600
        "
      >
        Do you want to hire dedicated team?
      </Link>
    </div>
  );
}
