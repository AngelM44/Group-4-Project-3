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
      <center style={{ backgroundColor: "#aed581" }}>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: green, label: "Ready", color: "green" },
                { id: 1, value: red, label: "Not Ready", color: "#c62828" },
              ],
            },
          ]}
          width={500}
          height={300}
        />
      </center>
      <TableContainer component={Paper}>
        <Table
          sx={{
            backgroundColor: "#d0e7b7",
            border: 2,
            borderRadius: 1,
            textAlign: "center",
          }}
        >
          <TableHead
            sx={{ backgroundColor: "#899d73", border: 4, textAlign: "center" }}
          >
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Checkup Due By</TableCell>
              <TableCell align="center">Immunization Due</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                    px: 2,
                    textAlign: "center",
                  },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ border: 2, textAlign: "center" }}
                >
                  <Link to={`/medical/${row.id}`}>{row.id}</Link>
                </TableCell>
                <TableCell align="center" sx={{ border: 2 }}>
                  {row.name}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ border: 2, textTransform: "uppercase" }}
                >
                  {row.status}
                </TableCell>
                <TableCell align="center" sx={{ border: 2 }}>
                  {row["checkup due by"]}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ border: 2, textTransform: "uppercase" }}
                >
                  {row["immunization due"] ? "yes" : "no"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
