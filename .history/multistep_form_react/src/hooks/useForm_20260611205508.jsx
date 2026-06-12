import { useState } from "react";

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);
  function changeStep)if,e

  return {currentStep,
    currentComponent: steps [currentStep]
  };
}
