import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PieChart } from "@mui/x-charts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function PersonnelDetailsTable({ data }) {
  let ready = 0;
  let notready = 0;
  data.map((person) => {
    if (person.deployable === "Yes") ready += 1;
    else notready += 1;
  });
  return (
    <Box display="flex" justifyContent="center">
      <Card sx={{ maxWidth: 1000 }}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="center"
            style={{ backgroundColor: "#aed581" }}
          >
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: ready,
                      label: "Deployable",
                      color: "green",
                    },
                    {
                      id: 1,
                      value: notready,
                      label: "Not Deployable",
                      color: "red",
                    },
                  ],
                },
              ]}
              width={500}
              height={300}
            />
          </Box>
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
                sx={{
                  backgroundColor: "#899d73",
                  border: 4,
                  textAlign: "center",
                }}
              >
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
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    {row["deployable"] === undefined ? null : (
                      <TableCell align="center">{row["deployable"]}</TableCell>
                    )}
                    {row["id"] === undefined ? null : (
                      <TableCell align="center">{row["id"]}</TableCell>
                    )}
                    {row["DOD_number"] === undefined ? null : (
                      <TableCell align="center">{row["DOD_number"]}</TableCell>
                    )}
                    {row["medical_id"] === undefined ? null : (
                      <TableCell align="center">
                        <Link to={`/medical/${row["medical_id"]}`}>
                          {row["medical_id"]}
                        </Link>
                      </TableCell>
                    )}
                    {row["training_id"] === undefined ? null : (
                      <TableCell align="center">
                        <Link to={`/training/${row["training_id"]}`}>
                          {row["training_id"]}
                        </Link>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
