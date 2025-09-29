import { useState, useCallback } from "react";
import { steps as initialSteps, Step } from "../components/stepper/steps";
import { useRouter } from "next/router";

export default function useStepper(onStepChange?: (step: number) => void) {
  const router = useRouter();
  const [stepsState, setStepsState] = useState<Step[]>(() =>
    initialSteps.map((s) => ({ ...s }))
  );
  const [currentStep, setCurrentStep] = useState(0);

  const updateStepCompletion = useCallback((stepIndex: number) => {
    setStepsState((prevSteps) =>
      prevSteps.map((step, index) =>
        index < stepIndex ? { ...step, isCompleted: true } : step
      )
    );
  }, []);

  const setCurrentStepAndNotify = useCallback((newStep: number) => {
    setCurrentStep(newStep);
    updateStepCompletion(newStep);
    if (onStepChange) {
      onStepChange(newStep);
    }
  }, [onStepChange, updateStepCompletion]);

  const handleNextStep = useCallback(() => {
    const nextStep = Math.min(currentStep + 1, stepsState.length - 1);
    updateStepCompletion(nextStep);
    setCurrentStepAndNotify(nextStep);
    const navigateTo = stepsState[currentStep]?.navigateTo ?? "";
    if (navigateTo) {
      router.push(navigateTo);
    }
  }, [currentStep, stepsState, router, setCurrentStepAndNotify, updateStepCompletion]);

  return { 
    steps: stepsState, 
    currentStep, 
    handleNextStep, 
    setCurrentStep: setCurrentStepAndNotify 
  };
}
