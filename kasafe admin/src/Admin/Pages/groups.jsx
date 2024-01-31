import React from 'react';
import MiniDrawer from "../Components/sidebar";
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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CenteredTableContainer = styled(TableContainer)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '120px',
  maxHeight: 'calc(100vh - 160px)',
});

function createData(group, admin, contact, users) {
  return { group, admin, contact, users };
}

const groupRows = [
  createData('Group A', 'John Doe', 'john@example.com', 10),
  createData('Group B', 'Alice Smith', 'alice@example.com', 15),
  createData('Group C', 'Bob Johnson', 'bob@example.com', 8),
  // Add more groups and their information here
];

const Groups = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <MiniDrawer />
        <h1>All Groups</h1>
        <CenteredTableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Group</StyledTableCell>
                <StyledTableCell align="right">Admin</StyledTableCell>
                <StyledTableCell align="right">Contact</StyledTableCell>
                <StyledTableCell align="right">Users</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {groupRows.map((row) => (
                <StyledTableRow key={row.group}>
                  <StyledTableCell component="th" scope="row">
                    {row.group}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.admin}</StyledTableCell>
                  <StyledTableCell align="right">{row.contact}</StyledTableCell>
                  <StyledTableCell align="right">{row.users}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </CenteredTableContainer>
      </div>
    </>
  );
}

export default Groups;
