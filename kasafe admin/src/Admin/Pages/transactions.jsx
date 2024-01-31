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
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';

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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CenteredTableContainer = styled(TableContainer)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '120px',
});

function createData(name, email, phoneNumber, group, address) {
  return { name, email, phoneNumber, group, address };
}

const transactionsRows = [
  createData('John Doe', "john@gmail.com", "0788634525", "Group A", "Deposit"),
  createData('Alice Smith', "alice@gmail.com", "0789123456", "Group B", "Withdraw"),
  createData('John Doe', "john@gmail.com", "0788634525", "Group A", "Deposit"),
  createData('Alice Smith', "alice@gmail.com", "0789123456", "Group B", "Withdraw"),
  createData('John Doe', "john@gmail.com", "0788634525", "Group A", "Deposit"),
  createData('Alice Smith', "alice@gmail.com", "0789123456", "Group B", "Withdraw"),
  createData('John Doe', "john@gmail.com", "0788634525", "Group A", "Deposit"),
  createData('Alice Smith', "alice@gmail.com", "0789123456", "Group B", "Withdraw"),
  createData('John Doe', "john@gmail.com", "0788634525", "Group A", "Deposit"),
  createData('Alice Smith', "alice@gmail.com", "0789123456", "Group B", "Withdraw"),
  createData('John Doe', "john@gmail.com", "0788634525", "Group A", "Deposit"),
  createData('Alice Smith', "alice@gmail.com", "0789123456", "Group B", "Withdraw"),
  createData('John Doe', "john@gmail.com", "0788634525", "Group A", "Deposit"),
  createData('Alice Smith', "alice@gmail.com", "0789123456", "Group B", "Withdraw"),
  createData('John Doe', "john@gmail.com", "0788634525", "Group A", "Deposit"),
  createData('Alice Smith', "alice@gmail.com", "0789123456", "Group B", "Withdraw"),
  createData('John Doe', "john@gmail.com", "0788634525", "Group A", "Deposit"),
  createData('Alice Smith', "alice@gmail.com", "0789123456", "Group B", "Withdraw"),
];

const TransactionsPage = () => {
  return (
    <div className='container-home'>
      <div style={{ display: 'flex' }}>
        <MiniDrawer />
        <h1>Transactions</h1>
        <CenteredTableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>NAMES</StyledTableCell>
                <StyledTableCell align="right">EMAIL ADDRESS</StyledTableCell>
                <StyledTableCell align="right">PHONENUMBER</StyledTableCell>
                <StyledTableCell align="right">GROUP</StyledTableCell>
                <StyledTableCell align="right">TRANSACTION TYPE</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactionsRows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
                  <StyledTableCell align="right">{row.group}</StyledTableCell>
                  <StyledTableCell align="right">{row.address}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </CenteredTableContainer>
      </div>
      </div>
  );
}

export default TransactionsPage;
