import { useState } from "react";

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);
  function changeStep

  return {currentStep,
    currentComponent: steps [currentStep]
  };
}
