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
      <Table sx={{ backgroundColor: '#d0e7b7', border: 2, borderRadius: 1, textAlign: 'center' }}>
        <TableHead sx={{ backgroundColor: '#899d73', border: 4, textAlign: 'center'}}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Deployable</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">DOD_number</TableCell>
            <TableCell align="center">Medical_id</TableCell>
            <TableCell align="center">Training_id</TableCell>
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
              {row['deployable'] === undefined ? null : <TableCell align="center">{row['deployable']}</TableCell>}
              {row['id'] === undefined ? null : <TableCell align="center">{row['id']}</TableCell>}
              {row['DOD_number'] === undefined ? null : <TableCell align="center">{row['DOD_number']}</TableCell>}
              {row['medical_id'] === undefined ? null : <TableCell align="center">{row['medical_id']}</TableCell>}
              {row['training_id'] === undefined ? null : <TableCell align="center">{row['training_id']}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
