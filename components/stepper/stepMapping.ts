import { steps, Step } from "./steps";

interface StepMapping {
  [key: string]: number;
}

export const stepMapping: StepMapping = steps.reduce(
  (acc: StepMapping, step: Step, index: number) => {
    const pageName: string | null = step.navigateTo
      ? step.navigateTo.replace("/", "")
      : null;
    // console.log(
    //   `Mapping step "${step.title}" to page "${pageName}" with index ${index}`
    // );

    if (pageName) {
      acc[pageName] = index + 1;
    }

    return acc;
  },
  {}
);
