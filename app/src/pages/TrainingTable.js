import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PieChart } from '@mui/x-charts';
import {Link} from 'react-router-dom';

export default function TrainingTable({ data }) {
  console.log(data);
  let ready = 0
  let notready = 0
  data.map((person) => {
    if(person.status == 'green')
      ready += 1
    else {notready += 1}
  })
  return (
    <>
    <center>
    <PieChart
    series={[
      {
        data: [
          { id: 0, value: ready, label: 'Ready', color: 'green' },
          { id: 1, value: notready, label: 'Not Ready', color: 'red' },
        ],
      },
    ]}
    width={500}
    height={300}
  />
    </center>
    <TableContainer component={Paper}>
      <Table sx={{ backgroundColor: '#d0e7b7', border: 2, borderRadius: 1, textAlign: 'center' }}>
        <TableHead sx={{ backgroundColor: '#899d73', border: 4, textAlign: 'center'}}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Training Type ID</TableCell>
            <TableCell align="center">Date Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ border: 2}}>
                {row.id}
              </TableCell>
              <TableCell align="center" sx={{ border: 2, textTransform: 'uppercase'}}>{row.status}</TableCell>
              <TableCell align="center" sx={{ border: 2}}>
                <Link to={`/training_type/${row["training_type_id"]}`}>
                  {row["training_type_id"]}
                </Link>
              </TableCell>
              <TableCell align="center" sx={{ border: 2}}>{row["date_completed"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
}
