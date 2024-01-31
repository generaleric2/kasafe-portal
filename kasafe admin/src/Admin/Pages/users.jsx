import React from 'react';
import MiniDrawer from "../Components/sidebar"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Adrian', "adri@gmail.com", "0788634525", "sebina savings", "Kawempe"),
  createData('Adrian', "adri@gmail.com", "0788634525", "sebina savings", "Kawempe"),
  createData('Adrian', "adri@gmail.com", "0788634525", "sebina savings", "Kawempe"),
  createData('Adrian', "adri@gmail.com", "0788634525", "sebina savings", "Kawempe"),
  createData('Adrian', "adri@gmail.com", "0788634525", "sebina savings", "Kawempe"),
  createData('Adrian', "adri@gmail.com", "0788634525", "sebina savings", "Kawempe"),
];

const CenteredTableContainer = styled(TableContainer)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '120px',
});

const Users = () => {
  return (
    <div style={{ display: 'flex' }}>
      <MiniDrawer />
      <h1>Registered Users</h1>
      <CenteredTableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>NAMES</StyledTableCell>
              <StyledTableCell align="right">EMAIL ADDRESS</StyledTableCell>
              <StyledTableCell align="right">PHONENUMBER</StyledTableCell>
              <StyledTableCell align="right">GROUP</StyledTableCell>
              <StyledTableCell align="right">ADDRESS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </CenteredTableContainer>
    </div>
  );
}

export default Users;
