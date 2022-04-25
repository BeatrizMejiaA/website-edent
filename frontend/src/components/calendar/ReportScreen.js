import React, { useState, useEffect } from "react";

import Axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const Report = () => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getCalendar").then((response) => {
      //  console.log(response);
      setCalendar(response.data);
    });
  }, []);

  /*  useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await Axios.get(
            "http://localhost:3001/api/getCalendar"
          );
          setCalendar(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []); */

  return (
    <main>
      <h3 className="form__title2">Reporte de citas</h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell align="center">Paciente</StyledTableCell>
              <StyledTableCell align="center">Servicio</StyledTableCell>
              <StyledTableCell align="center">Fecha/Hora</StyledTableCell>
              <StyledTableCell align="center">Tel&eacute;fono</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {calendar.map((row) => (
              <StyledTableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.cita_id}
                </TableCell>

                <StyledTableCell align="center">{row.nombre_paciente}</StyledTableCell>
                <StyledTableCell align="center">{row.nombre_tratamiento}</StyledTableCell>
                <StyledTableCell align="center">{row.fecha}</StyledTableCell>
                <StyledTableCell align="center">{row.telefono}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
};
