import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function PersonnelDetailsTable({data}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Deployable</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">DOD_number</TableCell>
            <TableCell align="right">Medical_id</TableCell>
            <TableCell align="right">Training_id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {row['deployable'] === undefined ? null : <TableCell align="right">{row['deployable']}</TableCell>}
              {row['id'] === undefined ? null : <TableCell align="right">{row['id']}</TableCell>}
              {row['DOD_number'] === undefined ? null : <TableCell align="right">{row['DOD_number']}</TableCell>}
              {row['medical_id'] === undefined ? null : <TableCell align="right">{row['medical_id']}</TableCell>}
              {row['training_id'] === undefined ? null : <TableCell align="right">{row['training_id']}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
