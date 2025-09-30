import { steps, Step } from "./steps";

interface StepMapping {
  [key: string]: number;
}

export const stepMapping: StepMapping = steps.reduce(
  (accStepMapping: StepMapping, step: Step, stepIndex: number) => {
    const pageName: string | null = step.navigateTo
      ? step.navigateTo.replace("/", "")
      : null;
    // console.log(
    //   `Mapping step "${step.title}" to page "${pageName}" with index ${index}`
    // );

    if (pageName) {
      accStepMapping[pageName] = stepIndex + 1;
    }

    return accStepMapping;
  },
  {}
);
