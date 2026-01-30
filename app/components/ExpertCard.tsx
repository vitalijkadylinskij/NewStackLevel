type Props = {
    title: string;
    text: string;
  };
  
export function ExpertCard({ title, text }: Props) {
    return (
      <div className="relative flex min-h-[240px] md:min-h-[280px] w-full max-w-[280px] flex-col border border-gray-200 bg-white p-6 md:p-8 justify-between">
        <h3 className="mb-3 md:mb-4 text-[20px] md:text-[24px] font-extrabold uppercase leading-[1.2] text-blue-700">
          {title}
        </h3>

        <p className="text-[16px] md:text-[18px] leading-[1.2] text-black">
          {text}
        </p>
  
        {/* Bottom blue line */}
        <div className="absolute bottom-0 left-0 h-[6px] w-full bg-blue-700" />
      </div>
    );
  }
  