import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData(
    "Registration type",
    "Remisier",
    "Authorised Person",
    "Authorised Person"
  ),
  createData("Registration fees", "Rs. 5,000", "Rs. 25,000", "Rs. 25,000"),
  createData(
    "Ideal for",
    " Teachers, Influencers,salaried professionals",
    " Entrepreneurs, who have their own office",
    "Entrepreneurs, looking to startwith..."
  ),
  createData(
    "Partnership model",
    "Refer customers & get referral commission",
    "Add customers, provide assistance & get..",
    "Add customers, provide assistance & get.."
  ),
  createData("A/C opening app", "✔", "✔", "✔"),
  createData("Reports dashboard", "X", "✔", "✔"),
  createData("Trading Terminal", "X", "✔", "✔"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{""}</TableCell>
            <TableCell align="center">SALES PARTNERSHIP</TableCell>
            <TableCell align="center">SUB-BROKER (SELF SETUP)</TableCell>
            <TableCell align="center">SUB-BROKER (SWASTIKA SETUP)</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontWeight:"bold"}}>
                {row.name}
              </TableCell>
              <TableCell align="center" sx={{fontSize:"1rem", padding:"0.5rem 3rem"}}>{row.calories}</TableCell>
              <TableCell align="center" sx={{fontSize:"1rem"}}>{row.fat}</TableCell>
              <TableCell align="center" sx={{fontSize:"1rem"}}>{row.carbs}</TableCell>
              {/* <TableCell align="center" sx={{fontSize:"1rem"}}>{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
