// TODO: Implement your tests here
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Stepper from "../../../components/stepper/stepper";
import { steps } from "../../../components/stepper/steps";
describe("Stepper", () => {
  it("renders all steps", () => {
    render(<Stepper currentStep={1} />);

    steps.forEach((step, index) => {
      expect(screen.getByText(step.title)).toBeInTheDocument();
      expect(screen.getByText(String(index + 1))).toBeInTheDocument();
    });
  });

  it("highlights current and previous steps", () => {
    render(<Stepper currentStep={2} />);

    const step1 = screen.getByText("1");
    const step2 = screen.getByText("2");
    const step3 = screen.getByText("3");

    expect(step1).toHaveClass("bg-blue-500");
    expect(step2).toHaveClass("bg-blue-500");
    expect(step3).toHaveClass("bg-blue-500");
  });

   it("renders correct number of connection lines", () => {
    render(<Stepper currentStep={1} />);
    
    const connectionLines = screen.getAllByTestId('connection-line');
    expect(connectionLines).toHaveLength(steps.length - 1);
  });

  it("applies responsive classes", () => {
    render(<Stepper currentStep={1} />);

    const stepCircle = screen.getByText("1");
    expect(stepCircle).toHaveClass(
      "w-[30px]",
      "h-[30px]",
      "md:w-10",
      "md:h-10"
    );

    const stepTitle = screen.getByText(steps[0].title);
    expect(stepTitle).toHaveClass("text-[12px]", "lg:text-[16px]");
  });


  it("renders correctly with last step as current", () => {
    render(<Stepper currentStep={steps.length} />);

    steps.forEach((_, index) => {
      const stepCircle = screen.getByText(String(index + 1));
      expect(stepCircle).toHaveClass("bg-blue-500");
    });
  });
});
