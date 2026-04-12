import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";

import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: "clear_session", payload: "Sesion cerrada correctamente." });
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg nav-shell">
            <div className="container">
                <NavLink className="" to="/">
                    <img src={logo} alt="FinQuest Logo" className="logo"/>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <div className="navbar-nav gap-lg-2 ms-auto align-items-lg-center">
                        <NavLink className="nav-link" to="/">
                            Inicio
                        </NavLink>

                        <NavLink className="nav-link" to="/">
                            Nosotros
                        </NavLink>

                        <NavLink className="nav-link" to="/">
                            Contacto
                        </NavLink>

                        {store.token ? (
                            <>
                                <NavLink className="nav-link" to="parentadmin">
                                    Panel de control
                                </NavLink>
                                <NavLink className="nav-link" to="/profile">
                                    Mi perfil
                                </NavLink>
                                <button className="btn btn-ghost" onClick={handleLogout} type="button">
                                    Salir
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink className="btn btn-primary-soft" to="/sign-in">
                                    Iniciar Sesión
                                </NavLink>
                                <NavLink className="btn btn-primary-yellow" to="/sign-up">
                                    Registrarse
                                </NavLink>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};
