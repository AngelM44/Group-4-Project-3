import * as React from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useNavigate } from "react-router-dom";
import { PieChart } from '@mui/x-charts';

function deletePersonnel(id, navigate) {
  fetch(`http://localhost:8080/personnel/${id}`, {
    method: 'DELETE'
  })
  .then(response => {
    fetch(`http://localhost:8080/training/${id}`, {
      method: 'DELETE'
    })
  })
  .then (response => {
      fetch(`http://localhost:8080/medical/${id}`, {
    method: 'DELETE'
    })
  })
  .then(response => {
    navigate("/");
})
}
export default function PersonnelTable({ data }) {
  let dep = 0
  let nodep = 0
  data.map((person) => {
    if (person['deployable'] == 'Yes') {
      dep += 1
    }
    else {
      nodep += 1
    }
  })
  const navigate = useNavigate();
  return (
      <TableContainer component={Paper}>
        <Table sx={{ backgroundColor: '#d0e7b7', border: 2, borderRadius: 1, textAlign: 'center' }}>
          <TableHead sx={{ backgroundColor: '#899d73', border: 4, textAlign: 'center'}}>
            <TableRow>
              <TableCell>
                <AccountCircleIcon fontSize="large" />
              </TableCell>
              <TableCell align="center">Name</TableCell>
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
                sx={{ "&:last-child td, &:last-child th": { border: 2 } }}
              >
                <TableCell sx={{ border: 2 }}>
                  <Link to="/">
                    <Fab size="small" color="error" aria-label="minus" onClick={() => {deletePersonnel(row['id'], navigate)}}>
                      <RemoveIcon />
                    </Fab>
                  </Link>

                </TableCell>
                <TableCell align="center" sx={{ border: 2 }}>
                  <Link to={`/personnel/${row['id']}`}>
                    {row['name']}
                  </Link>
                </TableCell>

                {row["deployable"] === undefined ? null : (
                  <TableCell align="center" sx={{ border: 2, textTransform: 'uppercase'}}>{row["deployable"]}</TableCell>
                )}
                {row["id"] === undefined ? null : (
                  <TableCell align="center" sx={{ border: 2}}>{row["id"]}</TableCell>
                )}
                {row["DOD_number"] === undefined ? null : (
                  <TableCell align="center" sx={{ border: 2}}>{row["DOD_number"]}</TableCell>
                )}
                {row["medical_id"] === undefined ? null : (
                  <TableCell align="center" sx={{ border: 2}}>{row["medical_id"]}</TableCell>
                )}
                {row["training_id"] === undefined ? null : (
                  <TableCell align="center" sx={{ border: 2}}>
                    <Link to={`/training/${row["training_id"]}`}>
                      {row["training_id"]}
                    </Link>
                  </TableCell>
                )}
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <Link to={'/personnel/new'}>
                  <Fab size="small" color="primary" aria-label="add">
                    <AddIcon />
                  </Fab>
                </Link></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
  );
}
