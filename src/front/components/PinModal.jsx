import { useState } from "react";
import ReactDOM from "react-dom";

export const PinModal = ({ profile, onClose }) => {
  const [pin, setPin] = useState("");

  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Ingresa el PIN de {profile.name}</h2>
        <input
          type="password"
          maxLength={4}
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <div style={{ marginTop: "1rem" }}>
          <button onClick={() => alert(`PIN ingresado: ${pin}`)}>Entrar</button>
          <button onClick={onClose} style={{ marginLeft: "1rem" }}>Cerrar</button>
        </div>
      </div>
    </div>,
    document.body
  );
};