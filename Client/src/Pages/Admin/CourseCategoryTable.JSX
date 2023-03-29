import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

function CourseCategoryTable() {
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    axios.get('/api/course-categories').then((response) => {
      setCourseCategories(response.data);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="course category table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courseCategories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.id}</TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CourseCategoryTable;
