import React, {useState} from 'react'

import Axios from 'axios';
import Swal from 'sweetalert2';

export const  Patient = () => {

  const [name, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const createPatient = () => {
    Axios.post("http://localhost:3001/api/insert", {
      nombre_paciente: name,
      correo: email,
      telefono: phone,
    }).then(() => {
      
      alert("paciente agregado");
    });
  };

  return (
    <>
      <h3 className="form__title2">Crear Paciente</h3>
      <section className='"max-w-10/12 h-screen m-auto bg-rose-50 mt-3"'>
        <form action='#' className= "form__calendar">
        
          <input
            type="text"
            placeholder="Ingrese Nombre Completo"
            name="name"
            className="auth__input"
            autoComplete="off"
            onChange={(e) => {
              setPatientName(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Ingrese correo electronico"
            name="email"
            className="auth__input"
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Ingrese numero de telefono"
            name="phone"
            className="auth__input"
            autoComplete="off"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />

          <button
            type="submit"
            className="btn btn-primary btn-block mb-5"
            onClick={createPatient}
          >
            Crear paciente
          </button>
        </form>
      </section>
    </>
  );
}
