import React from "react";
import tareasImg from "../assets/img/Tareas de casa.png";
import coin from "../assets/img/coin.png";
import { getTaskIcon } from "../Utils/getTaskIcon";

export const TaskSection = ({ tasks }) => {
    const tasksToday = tasks?.filter(t => t.is_today) || [];
    const firstTask = tasksToday[0];
    const taskEmoji = getTaskIcon(firstTask?.title || firstTask?.name);

    return (
        <>
            {/* 🟢 Esta es la estructura que ella diseñó en el HTML para su CSS */}
            <div className="task-summary-card__header">
                <div className="task-summary-card__label-container">
                    <span className="task-summary-card__badge">{tasks?.length || 0}</span>
                    <h2 className="task-summary-card__title">Tareas de casa</h2>
                </div>
                
                <div className="task-summary-card__label-container">
                    <span className="task-summary-card__badge" style={{ backgroundColor: '#a978df' }}>
                        {tasksToday.length}
                    </span>
                    <h2 className="task-summary-card__title">Hoy</h2>
                </div>
            </div>

            <div className="task-summary-card__content">
                <img 
                    className="task-summary-card__image" 
                    src={tareasImg} 
                    alt="Tareas de casa" 
                />
                
                <div style={{ fontSize: "3.5rem", marginBottom: "10px" }}>
                    {taskEmoji}
                </div>

                <p className="task-summary-card__task-name">
                    {firstTask?.title || firstTask?.name || "Pasear al perro"}
                </p>

                <p className="task-summary-card__reward">
                    +{firstTask?.coins || 10} 
                    <img className="task-summary-card__coin-icon" src={coin} alt="Moneda" />
                </p>
            </div>
        </>
    );
};