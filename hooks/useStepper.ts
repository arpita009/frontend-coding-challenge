import { useState } from "react";
import { steps } from "../components/stepper/steps";

export default function useStepper() {
  const [stepsState, setStepsState] = useState(() =>
    steps.map((step) => ({ ...step }))
  );
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setStepsState((prevSteps) =>
      prevSteps.map((step, index) => index === currentStep ? { ...step, isCompleted: true } : step)
    );

    setCurrentStep(prev => {
		return Math.min(prev + 1, stepsState.length - 1);
	});
  };
  return { steps: stepsState, currentStep, handleNextStep };
}
