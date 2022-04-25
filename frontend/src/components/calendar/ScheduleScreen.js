import React, { useState, useEffect } from "react";
import Axios from "axios";

import Swal from 'sweetalert2';

export const Schedule = () => {
  const [name, setPatientName] = useState("");
  const [date_time, setDateTime] = useState("");
  const [service, setService] = useState("");

  const [patientsList, setPatientsList] = useState([]);
  const [serviceList, setServiceList] = useState([]);

  /* useEffect(() => {
    Axios.get("http://localhost:3001/api/getPatients").then((response) => {
      setPatientsList(response.data);
      //console.log(response);
    });
  }, []);*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await Axios.get(
          "http://localhost:3001/api/getPatients"
        );
        setPatientsList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await Axios.get(
          "http://localhost:3001/api/getServices"
        );
        setServiceList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const Schedule = () => {
    Axios.post("http://localhost:3001/api/schedule", {
      p_name: name,
      date_time: date_time,
      treatment: service,
    }).then(() => {
      Swal.fire('Error!!', 'error');
      alert("paciente agregado");
    });
  };

  console.log("first", patientsList);
  //const select = () => <Select
  // options={patientsList}
  // />;

  return (
    <>
      <h3 className="form__title2">Agendar Cita</h3>
      <form className="form__calendar">
        <div>
          <h4 className="auth__title">Seleccionar Paciente</h4>
          <select
            className="auth__input"
            name="name"
            onChange={(e) => {
              setPatientName(e.target.value);
            }}
          >
            <option defaultValue="1">Paciente ...</option>
            {patientsList.map((option) => (
              <option  key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div>
          <h4 className="auth__title">Seleccione Fecha</h4>
          <input
            type="datetime-local"
            placeholder="Seleccione fecha"
            name="date"
            className="auth__input"
            autoComplete="off"
            onChange={(e) => {
              setDateTime(e.target.value);
            }}
          />
        </div>

        <div>
          <h4 className="auth__title">Seleccione tipo de servicio</h4>
          <select
            className="auth__input"
            name="service"
            onChange={(e) => {
              setService(e.target.value);
            }}
          >
            <option defaultValue="1">Servicio ...</option>
            {serviceList.map((option) => (
              <option  key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
          onClick={Schedule}
        >
          Agendar
        </button>
      </form>
    </>
  );
};
