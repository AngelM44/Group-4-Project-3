import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable(props) {
  console.log(props.data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{props.col3}</TableCell>
            <TableCell align="right">{props.col1}&nbsp;</TableCell>
            <TableCell align="right">{props.col2}&nbsp;</TableCell>
            <TableCell align="right">{props.col4}&nbsp;</TableCell>
            <TableCell align="right">{props.col5}&nbsp;</TableCell>
            <TableCell align="right">{props.col6}&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row[props.col1]}</TableCell>
              <TableCell align="right">{row[props.col2]}</TableCell>
              <TableCell align="right">{row[props.col4]}</TableCell>
              <TableCell align="right">{row[props.col5]}</TableCell>
              <TableCell align="right">{row[props.col6]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
