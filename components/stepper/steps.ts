export interface Step {
  title: string;
  isCompleted: boolean;
}

export const steps: Step[] = [
  { title: "Service", isCompleted: false },
  { title: "Termin", isCompleted: false },
  { title: "Fahrzeug", isCompleted: false },
  { title: "Kontakt", isCompleted: false },
];
