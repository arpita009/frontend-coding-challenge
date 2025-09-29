import { useEffect } from "react";
import Header from "../components/repareo/header";
import MainWrapper from "../components/repareo/mainWrapper";
import StepperWrapper from "../components/repareo/stepperWrapper";
import Stepper from "../components/stepper/stepper";
import ButtonWrapper from "../components/repareo/buttonWrapper";
import Button from "../components/repareo/button";
import { useStepperContext } from "../context/stepperContext";

export default function Termin() {
  const { steps, currentStep, handleNextStep, setCurrentStep } =
    useStepperContext();
  useEffect(() => {
    setCurrentStep(1);
  }, [setCurrentStep]);

  return (
    <>
      <Header />
      <MainWrapper>
        <StepperWrapper>
          <Stepper steps={steps} currentStep={currentStep} />
        </StepperWrapper>

        <ButtonWrapper>
          <Button onClick={handleNextStep}>Next</Button>
        </ButtonWrapper>
      </MainWrapper>
    </>
  );
}
