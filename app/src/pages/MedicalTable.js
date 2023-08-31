export default function MedicalTable({ data }) {
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PieChart } from '@mui/x-charts';
  import { Link } from "react-router-dom";

export default function MedicalTable({data}) {
  let green = 0
  let red = 0
  data.map((person) => {
    if (person.status == 'green'){
      green += 1
    }
    else {red += 1}
  })
  console.log(data.data);
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Checkup Due By</TableCell>
            <TableCell align="right">Immunization Due</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/medical/${row.id}`}>{row.id}</Link>
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row["checkup due by"]}</TableCell>
              <TableCell align="right">
                {row["immunization due"] ? "yes" : "no"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: green, label: 'Ready', color: 'green' },
            { id: 1, value: red, label: 'Not Ready', color: 'red' },
          ],
        },
      ]}
      width={500}
      height={300}
    />
    </>
  );
}
