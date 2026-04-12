import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Home = () => {
    const { store } = useGlobalReducer();

    return (
        <>
            {/* HERO */}
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        
                        {/* TEXTO */}
                        <div className="col-lg-6">
                            <h1 className="hero-title">
                                Aprende a manejar tu dinero jugando
                            </h1>

                            <div className="hero-buttons mt-4">
                                <Link
                                    className="btn btn-success me-3"
                                    to="/sign-in"
                                >
                                    INICIAR SESIÓN
                                </Link>

                                <Link
                                    className="btn btn-warning"
                                    to="/sign-up"
                                >
                                    REGISTRARSE
                                </Link>
                            </div>
                        </div>

                        {/* IMAGEN (castor) */}
                        <div className="col-lg-6 text-center">
                            <img
                                src="/src/assets/img/Castor-1.png"
                                alt="mascota"
                                className="hero-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* NOSOTROS */}
            <section className="about-section">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-8">
                            <h2>Nosotros</h2>
                            <p>
                                En FinQuest creemos que la educación financiera no debería ser complicada ni aburrida.
                                Nuestro objetivo es ayudarte a entender y mejorar tu relación con el dinero a través de experiencias interactivas,
                                decisiones reales y pequeños retos que generan cambios de verdad.
                            </p>
                            <p>
                                Somos un equipo enfocado en transformar conceptos complejos en aprendizajes prácticos,
                                para que cualquier persona —sin importar su nivel— pueda construir hábitos financieros más saludables.
                            </p>
                        </div>

                        <div className="col-lg-4 text-end">
                            <img
                                src="/src/assets/img/Castor-1.png"
                                alt="mascota"
                                className="about-img"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="features-section">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-md-4 col-lg-2">
                            <div className="feature-card">
                                <h5>Lista de tareas</h5>
                                <p>Crea tareas personalizadas y asigna valor en monedas.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-2">
                            <div className="feature-card">
                                <h5>Sistema de puntos</h5>
                                <p>Cada tarea completada suma monedas.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-2">
                            <div className="feature-card">
                                <h5>Niveles</h5>
                                <p>Motivación continua con logros.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-2">
                            <div className="feature-card">
                                <h5>Recompensas</h5>
                                <p>Canjea monedas por premios.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-2">
                            <div className="feature-card">
                                <h5>Progreso</h5>
                                <p>Visualiza hábitos financieros.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section text-center">
                <Link className="btn btn-success btn-lg" to="/sign-up">
                    EMPIEZA AHORA
                </Link>
            </section>
        </>
    );
};