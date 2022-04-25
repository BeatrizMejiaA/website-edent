const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

// Variables de entorno
require("dotenv").config();
const app = express();

const PORT = process.env.PORT;
//console.log(process.env.DATABASE);

// mySql (mysql.createConnection)
/*const connection = mysql.createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE,
});*/

const db = mysql.createConnection({
  host: 'e-dent.mysql.database.azure.com',
  user: 'admin_leticia@e-dent',
  password: '#edent_2022',
  database: 'edent',
  port:3306
});

//var conn = mysql.createConnection({host: "e-dent.mysql.database.azure.com", user: "admin_leticia@e-dent", password: {your_password}, database: {your_database}, port: 3306);
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// end-points

/// get patient list
app.get("/api/getPatients", (req, res) => {
  const sqlgetPatients =
    "SELECT nombre_paciente as 'label',pacient_id as 'value' FROM pacientes";
  db.query(sqlgetPatients, (err, result) => {
    res.send(result);
    //console.log(result);
  });
});

/// get calendar
/// get patient list
app.get("/api/getCalendar", (req, res) => {
  const sqlgetCalendar =
    "select b.cita_id, a.nombre_paciente, c.nombre_tratamiento, b.fecha, a.telefono from pacientes as a inner join agenda as b on a.pacient_id = b.pacient_id inner join servicios as c on b.servicioId = c.servicioId";
  db.query(sqlgetCalendar, (err, result) => {
    res.send(result);
    console.log("ressss", result);
  });
});

app.get("/api/getCalendar2", (req, res) => {
  const sqlgetCalendar =
    "select  concat(a.nombre_paciente,' - ', c.nombre_tratamiento) as 'title', b.fecha AS 'startDate', DATE_ADD(b.fecha, INTERVAL 1 HOUR) AS 'endDate', b.cita_id as 'id', telefono as 'location' from pacientes as a inner join agenda as b on a.pacient_id = b.pacient_id inner join servicios as c on b.servicioId = c.servicioId";
  db.query(sqlgetCalendar, (err, result) => {
    res.send(result);
    console.log("ressss", result);
  });
});

/// get service list
app.get("/api/getServices", (req, res) => {
  const sqlgetServices =
    "SELECT nombre_tratamiento as 'label',servicioId as 'value' FROM servicios";
  db.query(sqlgetServices, (err, result) => {
    res.send(result);
    //console.log(result);
  });
});

/// agendar cita
app.post("/api/schedule", (req, res) => {
  const pacient_id = req.body.p_name;
  const fecha = req.body.date_time;
  const servicioId = req.body.treatment;
  const sqlInsert =
    "INSERT INTO agenda (pacient_id, fecha, servicioId) VALUES (?,?,?)";
  db.query(sqlInsert, [pacient_id, fecha, servicioId], (err, result) => {
    console.log(result);
  });
});

app.post("/api/insert", (req, res) => {
  const nombre_paciente = req.body.nombre_paciente;
  const correo = req.body.correo;
  const telefono = req.body.telefono;
  const sqlInsert =
    "INSERT INTO pacientes (nombre_paciente, correo, telefono) VALUES (?,?,?)";
  db.query(sqlInsert, [nombre_paciente, correo, telefono], (err, result) => {
    console.log(result);
  });
});

app.post("/api/registerService", (req, res) => {
  const nombre_tratamiento = req.body.nombre_tratamiento;
  const costo = req.body.costo;
  const sqlInsert =
    "INSERT INTO servicios (nombre_tratamiento, costo, observacion) VALUES (?,?,?)";
  db.query(sqlInsert, [nombre_tratamiento, costo, ""], (err, result) => {
    console.log(result);
  });
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
