import { steps } from "./steps";
interface StepperProps {
  currentStep: number;
}

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="p-4 relative min-h-[150px] flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-4xl px-2 sm:px-4 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative w-1/4"
          >
            <div
              className={`w-[30px] h-[30px] md:w-10 md:h-10 flex items-center justify-center rounded-full font-bold  text-[12px] lg:text-[14px] font-semibold ${
                currentStep >= index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } z-10`}
            >
              {index + 1}
            </div>

            {index < steps.length - 1 && (
              <div
                data-testid="connection-line"
                className={`absolute top-3 sm:top-4 md:top-5 left-1/2 w-full h-[4px] md:h-[4px] lg:h-[6px] bg-gray-300`}
              />
            )}

            <div className="mt-2 text-gray-700 text-[12px] lg:text-[16px] text-center font-semibold">
              {step.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
