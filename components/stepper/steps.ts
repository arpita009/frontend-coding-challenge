export interface Step {
  title: string;
  isCompleted: boolean;
  navigateTo: string | null;
}

export const steps: Step[] = [
  { title: "Service", isCompleted: false, navigateTo: "/termin" },
  { title: "Termin", isCompleted: false, navigateTo: "/fahrzeug" },
  { title: "Fahrzeug", isCompleted: false, navigateTo: "/kontakt" },
  { title: "Kontakt", isCompleted: false, navigateTo: null },
];
