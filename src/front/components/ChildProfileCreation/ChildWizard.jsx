import React, { useState } from "react";
import { ChildRegistration } from "./ChildRegistration";
import { ChildGoalSetting } from "./ChildGoalSetting";

export const ChildWizard = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);
    const handleClose = () => {
        window.location.href = "/profile";
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
            {/* Contenedor Maestro con tamaño bloqueado */}
            <div style={{ 
                width: "550px", 
                height: "650px", 
                display: "flex" 
            }}>
                {step === 1 && (
                    <div className="w-100 h-100">
                        <ChildRegistration 
                            onNextStep={handleNext} 
                            onClose={handleClose} 
                        />
                    </div>
                )}

                {step === 2 && (
                    <div className="w-100 h-100">
                        <ChildGoalSetting 
                            onBack={handleBack} 
                            onNextStep={() => alert("¡Próximamente: Tareas de Diego!")} 
                        />
                    </div>
                )}
            </div>
        </div>
    );
};