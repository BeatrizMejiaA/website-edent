import React, {useState} from "react";

import Axios from 'axios';
import Swal from 'sweetalert2';

export const RegisterService = () => {
    const [treatmentName, setTreatmentName] = useState("");
    const [cost, setCost] = useState("");

    const registerService = () => {
        Axios.post("http://localhost:3001/api/registerService", {
          nombre_tratamiento: treatmentName,
          costo: cost
        }).then(() => {
          alert("paciente agregado");
        });
    };

    const register = () => {
      Axios.post("http://localhost:3001/api/registerService", {
        nombre_tratamiento: treatmentName,
        costo: cost
      })
      .then(function (response) {
        Swal.fire('success');
      })
      .catch(function (e) {
        console.log(e);
        Swal.fire('Error', e.message, 'error');
      });

    }
   

    return (
      <>
        <h3 className="form__title2">Registrar Servicio</h3>
        <section className='"max-w-10/12 h-screen m-auto bg-rose-50 mt-3"'>
          <form
            action="#"
            className="form__calendar"
          >
            <input
              type="text"
              placeholder="Ingrese Nombre de tratamiento"
              name="treatment"
              className="auth__input"
              autoComplete="off"
              onChange={(e) => {
                setTreatmentName(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Ingrese costo de tratamiento"
              name="cost"
              className="auth__input"
              autoComplete="off"
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />

           

            <button
              type="submit"
              className="btn btn-primary btn-block mb-5"
              onClick={register}
            >
              Registrar Servicio
            </button>
          </form>
        </section>
      </>
    );
}