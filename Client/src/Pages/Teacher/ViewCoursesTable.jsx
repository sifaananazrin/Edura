import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from '@material-ui/core';
import AddCourseTable from './AddCourseFrom';

import {Link } from "react-router-dom"
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ViewCoursesTable() {
  const classes = useStyles();
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');

  const handleAddCourse = () => {
    // code to add the course
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="add course table">
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell>Course des</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <TextField
                label="Enter Course Name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Enter Course Code"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
              />
            </TableCell>
            <TableCell>
              
            <Button
        variant="contained"
        color="primary"
        component={Link}
        to="AddCourseTable"
      >
        Add Course
      </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ViewCoursesTable;
