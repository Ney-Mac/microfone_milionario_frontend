import { 
    StepButton,
    Step,
    Stepper
} from "@mui/material"

export default function Stepper() {
    return (
        <Stepper activeStep={activeStep}>
            {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                        {label}
                    </StepButton>
                </Step>
            ))}
        </Stepper>
    )
} 