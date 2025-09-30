import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StepPage from "../../../components/stepper/stepPage";
import { useStepperContext } from "../../../context/stepperContext";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../../../context/stepperContext", () => ({
  useStepperContext: jest.fn(),
}));


jest.mock("../../../components/stepper/stepMapping", () => {
  const mockStepMapping = { step1: 1, step2: 2, termin: 1 };
  return {
    stepMapping: mockStepMapping,
  };
});

describe("StepPage", () => {
  const mockSteps = [
    { title: "Step 1", isCompleted: false, navigateTo: "/step1" },
    { title: "Step 2", isCompleted: false, navigateTo: "/step2" },
  ];

  const mockUseStepperContext = {
    steps: mockSteps,
    currentStep: 0,
    handleNextStep: jest.fn(),
    setCurrentStep: jest.fn(),
  };

  beforeEach(() => {
    (useStepperContext as jest.Mock).mockReturnValue(mockUseStepperContext);
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/step1",
      query: {},
      push: jest.fn(),
      events: {
        emit: jest.fn(),
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => Promise.resolve()),
    });
  });

  it("renders the Stepper component", () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/step1",
      query: {},
      push: jest.fn(),
      events: {
        emit: jest.fn(),
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => Promise.resolve()),
    });
    render(<StepPage />);
    expect(screen.getByText("Step 1")).toBeInTheDocument();
  });

  it("calls setCurrentStep with the correct step index based on pathname", () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/termin",
      query: {},
      push: jest.fn(),
      events: {
        emit: jest.fn(),
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => Promise.resolve()),
    });

    render(<StepPage />);
    expect(mockUseStepperContext.setCurrentStep).toHaveBeenCalledWith(1);
  });

  it("renders 'Invalid Step' if the pathname does not match any step", () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/unknown",
      query: {},
      push: jest.fn(),
      events: {
        emit: jest.fn(),
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => Promise.resolve()),
    });

    const { container } = render(<StepPage />);
    expect(container).toHaveTextContent("Invalid Step");
  });
});
