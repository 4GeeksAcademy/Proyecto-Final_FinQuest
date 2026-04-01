import React, { useState } from "react";
import { ChildRegistration } from "./ChildRegistration";
import { ChildTaskSetting } from "./ChildTaskSetting";
import { ChildSmallGoals } from "./ChildSmallGoals"; // Paso nuevo
import { ChildGoalSetting } from "./ChildGoalSetting"; // El gran premio (Paso final)

export const ChildWizard = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);
    
    const handleClose = () => {
        // Redirige al panel de Diego al terminar o cerrar
        window.location.href = "/parentadmin"; 
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
            {/* Contenedor Maestro con tamaño bloqueado para que el diseño sea consistente */}
            <div style={{ 
                width: "550px", 
                height: "650px", 
                display: "flex" 
            }}>
                
                {/* PASO 1: REGISTRO (Nombre, Avatar, PIN) */}
                {step === 1 && (
                    <div className="w-100 h-100">
                        <ChildRegistration onNextStep={handleNext} onClose={handleClose} />
                    </div>
                )}

                {/* PASO 2: TAREAS (El que acabamos de pulir con los días y el +) */}
                {step === 2 && (
                    <div className="w-100 h-100">
                        <ChildTaskSetting 
                            onBack={handleBack} 
                            onNextStep={handleNext} 
                        />
                    </div>
                )}

                {/* PASO 3: METAS PEQUEÑAS (Privilegios cortos) */}
                {step === 3 && (
                    <div className="w-100 h-100">
                        {/* Asumimos que ChildSmallGoals tendrá un formato similar al de tareas */}
                        <ChildSmallGoals 
                            onBack={handleBack} 
                            onNextStep={handleNext} 
                        />
                    </div>
                )}

                {/* PASO 4: GRAN PREMIO (La Nintendo Switch / Bici / etc.) */}
                {step === 4 && (
                    <div className="w-100 h-100">
                        <ChildGoalSetting 
                            onBack={handleBack} 
                            onNextStep={(data) => {
                                console.log("Finalizando todo el proceso de registro:", data);
                                alert("¡Perfil de castor completado con éxito!");
                                handleClose(); 
                            }} 
                        />
                    </div>
                )}
            </div>
        </div>
    );
};