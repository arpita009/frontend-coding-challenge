// TODO: Implement your tests here
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Stepper from "../../../components/stepper/stepper";
import { steps } from "../../../components/stepper/steps";

describe("Stepper", () => {
  it("renders all steps", () => {
    render(<Stepper steps={steps} currentStep={1} />);

    steps.forEach((step, index) => {
      expect(screen.getByText(step.title)).toBeInTheDocument();
      expect(screen.getByText(String(index + 1))).toBeInTheDocument();
    });
  });

  it("highlights current and previous steps", () => {
    const current = 2;
    const stepsWithCompleted = steps.map((s, i) => ({ ...s, isCompleted: i <= current }));

    render(<Stepper steps={stepsWithCompleted} currentStep={current} />);

    for (let i = 0; i <= current; i++) {
      const stepCircle = screen.getByText(String(i + 1));
      expect(stepCircle).toHaveClass("bg-blue-500");
    }
  });

  it("renders correct number of connection lines", () => {
    render(<Stepper steps={steps} currentStep={1} />);

    const connectionLines = screen.getAllByTestId("connection-line");
    expect(connectionLines).toHaveLength(steps.length - 1);
  });

  it("applies responsive classes", () => {
    render(<Stepper steps={steps} currentStep={1} />);

    const stepCircle = screen.getByText("1");
    expect(stepCircle).toHaveClass("w-[30px]");
    expect(stepCircle).toHaveClass("h-[30px]");
    expect(stepCircle).toHaveClass("md:w-10");
    expect(stepCircle).toHaveClass("md:h-10");

    const stepTitle = screen.getByText(steps[0].title);
    expect(stepTitle).toHaveClass("text-[12px]");
    expect(stepTitle).toHaveClass("lg:text-[16px]");
  });

  it("renders correctly with last step as current", () => {
    const lastIndex = steps.length - 1;
    const stepsAllCompleted = steps.map((s) => ({ ...s, isCompleted: true }));

    render(<Stepper steps={stepsAllCompleted} currentStep={lastIndex} />);

    steps.forEach((_, index) => {
      const stepCircle = screen.getByText(String(index + 1));
      expect(stepCircle).toHaveClass("bg-blue-500");
    });
  });
});
