import React, { useState } from "react";
import cashtorImg from "../../assets/img/Cashtor.jpg";

/**
 * PASO 2: Configuración de la Meta (Diapo 8 del Canva)
 * @param {Function} onBack - Vuelve al registro (Paso 1)
 * @param {Function} onNextStep - Va a las tareas (Paso 3)
 */
export const ChildGoalSetting = ({ onBack, onNextStep }) => {
    const [goalName, setGoalName] = useState("");
    const [goalAmount, setGoalAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("🎯 Meta guardada:", { goalName, goalAmount });
        onNextStep();
    };

    return (
        <div className="card shadow-lg border-0 p-4 h-100 w-100 d-flex flex-column justify-content-center animate__animated animate__fadeIn" 
             style={{ borderRadius: "25px", backgroundColor: "#f0fdfa" }}>
            
            {/* Cabecera con Avatar (Igual que el éxito del paso 1) */}
            <div className="text-center mb-4">
                <div className="mb-3">
                    <img src={cashtorImg} alt="Cashtor" className="rounded-circle shadow-sm" 
                         style={{ width: "80px", height: "80px", border: "4px solid #32a89b" }} />
                </div>
                <h2 className="fw-bold" style={{ color: "#32a89b" }}>¿Cuál es su meta?</h2>
                <p className="text-secondary small">Ayuda a tu pequeño castor a visualizar su objetivo.</p>
            </div>

            <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-between">
                <div>
                    {/* Nombre de la Meta */}
                    <div className="mb-3 text-start">
                        <label className="form-label fw-bold" style={{ color: "#32a89b" }}>Nombre del objetivo</label>
                        <input 
                            type="text" 
                            className="form-control rounded-pill shadow-sm border-0 p-3" 
                            placeholder="Ej. Una Nintendo Switch, una Bici..."
                            value={goalName}
                            onChange={(e) => setGoalName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Cantidad de la Meta */}
                    <div className="mb-4 text-start">
                        <label className="form-label fw-bold" style={{ color: "#32a89b" }}>Precio o cantidad objetivo (€)</label>
                        <input 
                            type="number" 
                            className="form-control rounded-pill shadow-sm border-0 p-3" 
                            placeholder="0.00"
                            value={goalAmount}
                            onChange={(e) => setGoalAmount(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Botones alineados con el diseño general */}
                <div className="d-flex gap-3 mt-4">
                    <button 
                        type="button" 
                        className="btn btn-light rounded-pill w-50 fw-bold text-secondary p-3" 
                        onClick={onBack}
                    >
                        Atrás
                    </button>
                    <button 
                        type="submit" 
                        className="btn text-white rounded-pill w-50 fw-bold shadow-sm p-3"
                        style={{ backgroundColor: "#32a89b" }}
                        disabled={!goalName || !goalAmount}
                    >
                        Siguiente
                    </button>
                </div>
            </form>
        </div>
    );
};