import React, { useState } from "react";

import cashtorImg from "../assets/img/Cashtor.jpg";

export const ChildRegistration = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [pin, setPin] = useState("");
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // de momento uso esta imagen, hasta que tenga los castorcitos
    const avatars = [
        { id: 1, img: cashtorImg },
        { id: 2, img: cashtorImg },
        { id: 3, img: cashtorImg },
        { id: 4, img: cashtorImg }
    ];


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const childData = {
            name: name,
            age: age,
            pin: pin,
            avatar_id: selectedAvatar
        };


        console.log("🚀 Datos listos para enviar:", childData);

        setTimeout(() => {
            console.log("✅ Simulación de guardado completada para:", name);
            setIsSubmitting(false);
            alert(`¡Perfil de ${name} creado correctamente!`);
        }, 1500);
    };

    return (
        <div className="container py-5 d-flex justify-content-center">
            <div className="card shadow-lg border-0 p-4" style={{ maxWidth: "550px", borderRadius: "25px", backgroundColor: "#f0fdfa" }}>

                <h2 className="text-center mb-4" style={{ color: "#32a89b", fontWeight: "bold" }}>Crear Perfil del niño/a</h2>

                <form onSubmit={handleSubmit}>
                    {/* Campo Nombre */}
                    <div className="mb-3 text-start">
                        <label className="form-label fw-bold" style={{ color: "#32a89b" }}>Nombre del perfil</label>
                        <input
                            type="text"
                            className="form-control rounded-pill shadow-sm border-0"
                            placeholder="Nombre del niño/a"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="row">
                        {/* Campo Edad */}
                        <div className="col-4 mb-3 text-start">
                            <label className="form-label fw-bold" style={{ color: "#32a89b" }}>Edad</label>
                            <input
                                type="number"
                                className="form-control rounded-pill shadow-sm border-0"
                                placeholder="Edad"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </div>

                        {/* Campo PIN */}
                        <div className="col-8 mb-3 text-start">
                            <label className="form-label fw-bold" style={{ color: "#32a89b" }}>PIN del perfil niño/a</label>
                            <input
                                type="password"
                                className={`form-control rounded-pill shadow-sm border-0 ${pin.length > 0 && pin.length !== 4 ? "is-invalid" : ""}`}
                                placeholder="4 dígitos"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Selector de Avatar */}
                    <div className="mt-3 text-start">
                        <label className="form-label fw-bold" style={{ color: "#32a89b" }}>Selecciona tu avatar</label>
                        <div className="d-flex justify-content-between p-2">
                            {avatars.map((av) => (
                                <img
                                    key={av.id}
                                    src={av.img}
                                    alt="Avatar Cashtor"
                                    onClick={() => setSelectedAvatar(av.id)}
                                    className="rounded-circle"
                                    style={{
                                        width: "75px", height: "75px", cursor: "pointer", padding: "5px",
                                        border: selectedAvatar === av.id ? "4px solid #32a89b" : "2px solid transparent",
                                        transition: "transform 0.2s",
                                        transform: selectedAvatar === av.id ? "scale(1.1)" : "scale(1)"
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="d-flex gap-3 mt-5">
                        <button type="button" className="btn btn-light rounded-pill w-50 fw-bold text-secondary">
                            Saltar
                        </button>
                        <button
                            type="submit"
                            className="btn text-white rounded-pill w-50 fw-bold shadow-sm"
                            style={{ backgroundColor: "#32a89b" }}
                            disabled={isSubmitting || !name || !age || pin.length !== 4 || !selectedAvatar}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                    Guardando...
                                </>
                            ) : "Crear Perfil"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};