import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../reducers/actions/auth";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const hanleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="form__sidenav">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span className="welcome"> Welcome {name}! </span>
        </h3>
        <button className="btn" onClick={hanleLogout}>
          Logout
        </button>
      </div>

      <a href="/patient">Crear Paciente</a>
      <a href="/schedule">Agendar cita</a>
      <a href="/agenda">Agenda</a>
      <a href="/report">Reporte de citas</a>
      <a href="/service">Registrar servicio</a>
    </div>
  );
};
