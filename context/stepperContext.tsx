import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from "react";
import useStepper from "../hooks/useStepper";
import { Step } from "../components/stepper/steps";

interface StepperContextType {
  steps: Step[];
  currentStep: number;
  handleNextStep: () => void;
  setCurrentStep: (step: number) => void;
}

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export function StepperProvider({ children }: { children: ReactNode }) {
  const [contextCurrentStep, setContextCurrentStep] = useState(0);

  const onStepChange = useCallback((step: number) => {
    setContextCurrentStep(step);
  }, []);

  const stepperHook = useStepper(onStepChange);

  return (
    <StepperContext.Provider
      value={{ ...stepperHook, currentStep: contextCurrentStep }}
    >
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const context = useContext(StepperContext);
  if (context === undefined) {
    throw new Error("useStepperContext must be used within a StepperProvider");
  }
  return context;
}
