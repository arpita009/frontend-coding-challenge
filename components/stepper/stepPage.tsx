import { useEffect } from "react";
import Header from "../../components/repareo/header";
import MainWrapper from "../../components/repareo/mainWrapper";
import StepperWrapper from "../../components/repareo/stepperWrapper";
import Stepper from "../../components/stepper/stepper";
import ButtonWrapper from "../../components/repareo/buttonWrapper";
import Button from "../../components/repareo/button";
import { useStepperContext } from "../../context/stepperContext";
import { useRouter } from "next/router";
import { stepMapping } from "./stepMapping";

interface StepPageProps {}

export default function StepPage({}: StepPageProps) {
  const { steps, currentStep, handleNextStep, setCurrentStep } =
    useStepperContext();

  const router = useRouter();
  const { pathname } = router;
  const pageName = pathname.split("/").pop() || "";
  const stepIndex = stepMapping[pageName];
  useEffect(() => {
    if (stepIndex) {
      setCurrentStep(stepIndex);
    }
  }, [setCurrentStep, stepIndex]);

  if (!stepIndex) {
    return <p>Invalid Step</p>;
  }

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
