import React from "react";
import { Stepper, Step, StepButton } from "@mui/material";

const StepperCard = () => {
  const steps = [1, 2, 3, 4, 5];
  return (
    <>
      <Stepper nonLinear>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" />
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default StepperCard;
