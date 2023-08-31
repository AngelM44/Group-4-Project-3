import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { PieChart } from '@mui/x-charts';

export default function PersonnelTable({data}) {
  let dep = 0
  let nodep = 0
  data.map((person) => {
    if (person['deployable'] == 'Yes')
    {
      dep += 1
    }
    else {
      nodep += 1
    }
  })
  return (
    <>
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
                <Link to={`/personnel/${row['id']}`}>
                {row['name']}
                </Link>
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
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: dep, label: 'Ready', color: 'green' },
            { id: 1, value: nodep, label: 'Not Ready', color: 'red' },
          ],
        },
      ]}
      width={500}
      height={300}
    />
    </>
  );
}
