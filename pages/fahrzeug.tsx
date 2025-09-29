import { useEffect } from "react";
import Header from "../components/repareo/header";
import MainWrapper from "../components/repareo/mainWrapper";
import StepperWrapper from "../components/repareo/stepperWrapper";
import Stepper from "../components/stepper/stepper";
import ButtonWrapper from "../components/repareo/buttonWrapper";
import Button from "../components/repareo/button";
import useStepper from "../hooks/useStepper";

export default function Fahrzeug() {
  const { steps, currentStep, handleNextStep, setCurrentStep } = useStepper();

  useEffect(() => {
    setCurrentStep(2);
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
