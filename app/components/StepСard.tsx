import { StepArrow } from "./ArrowBetweenSteps";

type Props = {
  step: string;
  text: string;
  showArrow?: boolean;
};

export function StepCard({
  step,
  text,
  showArrow = true,
}: Props) {
  return (
    <div className="relative border border-gray-200 bg-white p-6 md:p-8 w-full md:w-[30%]">
      {/* Arrow - hidden on mobile when cards stack */}
      {showArrow && (
        <div className="hidden md:block">
          <StepArrow />
        </div>
      )}

      {/* Content */}
      <div>
        <div className="mb-3 md:mb-4 text-[28px] md:text-[36px] font-bold text-blue-700">
          {step}
        </div>

        <p className="text-[18px] md:text-[24px] leading-[1.2]">
          {text}
        </p>
      </div>

      {/* Bottom blue line */}
      <div className="absolute bottom-0 left-0 h-[6px] w-full bg-blue-700" />
    </div>
  );
}


  