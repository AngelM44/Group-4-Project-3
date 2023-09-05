import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TrainingTypeTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ backgroundColor: '#d0e7b7', border: 2, borderRadius: 1, textAlign: 'center' }}>
        <TableHead sx={{ backgroundColor: '#899d73', border: 4, textAlign: 'center'}}>
          <TableRow>
            <TableCell align="center" sx={{ border: 2 }}>ID</TableCell>
            <TableCell align="center" sx={{ border: 2 }}>Name</TableCell>
            <TableCell align="center" sx={{ border: 2 }}>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 2, textAlign: 'center' } }}
            >
              <TableCell component="th" scope="row" align="center" sx={{ border: 2 }}>
                {row.id}
              </TableCell>
              <TableCell align="center" sx={{ border: 2 }}>{row.name}</TableCell>
              <TableCell align="center" sx={{ border: 2 }}>{row["description"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
