# repareo frontend coding challenge

Hello there!

### Task Overview

Implemented a new Stepper component
based on [these specifications in Figma](https://www.figma.com/design/gvf4xjR6f9rvaj94BPFFyZ/Frontend-Coding-Challenge?node-id=0-1&t=tHGuIxWbpBVVsH5B-1).

## File structure

```text
__tests__/
  components/
    stepper/
      stepper.test.tsx
      -> Contains tests for the Stepper component, verifying that it renders correctly and displays the steps.
      stepPage.test.tsx
      -> Contains tests for the StepPage component, verifying that it renders the correct content based on the route, calls the `setCurrentStep` function with the correct index, and handles invalid routes.

components/
  stepper/
    stepper.tsx
    -> The stepper component
    steps.ts
    -> Configuring the steps
    stepMapping.tsx
    -> step mapping for each page
    stepPage.ts
    -> For creating dynamic routes
hooks/
  useStepper.ts
  -> Custom hook that handles navigation

context/
  stepperContext.tsx
  -> Contains React context providers for managing application state- `StepperContext`

pages/
  index.tsx
  -> The main page (localhost:3000)
  termin.tsx, fahrzeug.tsx, kontakt.tsx:
  -> Page components that use the StepPage component.
```

## Architecture Diagram
![Project Architecture](../frontend-coding-challenge/public/architectureDiagram.png)

## Setting up everything

Install the dependencies

```bash
npm install
```

Start the dev server to get a preview

```bash
npm run dev
```

Check out the page on [localhost:3000](http://localhost:3000)

To run the tests

```bash
npm run test
```



## Features & Functionality

- Stepper Component implementation ✅
- Steps configured ✅
- useStepper hook to encapsulate the stepper logic and manage navigation of steps and routing ✅
- Responsiveness ✅
- StepperContext to manage the stepper state (steps, current step) and functions (handleNextStep, setCurrentStep) ✅
- Dynamic step management ✅
- Basic error handling to display an "Invalid Step" message if the route does not match a valid step. ✅
- StepPage is a reusable component that renders the core layout of each step page ✅
- Tests for Stepper component and StepPage ✅