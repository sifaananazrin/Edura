import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TeacherTable(props) {
  const classes = useStyles();
  const { teachers } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="teachers table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Department</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell component="th" scope="row">
                {teacher.name}
              </TableCell>
              <TableCell align="center">{teacher.email}</TableCell>
              <TableCell align="center">{teacher.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TeacherTable;
