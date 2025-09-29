import { useEffect } from "react";
import Header from "../../components/repareo/header";
import MainWrapper from "../../components/repareo/mainWrapper";
import StepperWrapper from "../../components/repareo/stepperWrapper";
import Stepper from "../../components/stepper/stepper";
import ButtonWrapper from "../../components/repareo/buttonWrapper";
import Button from "../../components/repareo/button";
import { useStepperContext } from "../../context/stepperContext";

interface StepPageProps {
  stepIndex: number;
}

export default function StepPage({ stepIndex }: StepPageProps) {
  const { steps, currentStep, handleNextStep, setCurrentStep } =
    useStepperContext();

  useEffect(() => {
    setCurrentStep(stepIndex);
  }, [setCurrentStep, stepIndex]);

  return (
    <>
      <Header />
      <MainWrapper>
        <StepperWrapper>
          <Stepper steps={steps} currentStep={currentStep} />
        </StepperWrapper>
        <ButtonWrapper>
          {currentStep < steps.length - 1 && (
            <Button onClick={handleNextStep}>Next</Button>
          )}
        </ButtonWrapper>
      </MainWrapper>
    </>
  );
}
