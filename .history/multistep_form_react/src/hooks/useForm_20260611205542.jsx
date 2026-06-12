import { useState } from "react";

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);
  function changeStep(i,e){
    e.preventDCe
  }

  return {currentStep,
    currentComponent: steps [currentStep]
  };
}
