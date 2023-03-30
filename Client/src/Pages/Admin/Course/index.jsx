import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@material-ui/core';
import { useNavigate  } from 'react-router-dom';
import Teacher from '../../../Route/TeacherRouter';

function Course() {
  const [courses, setCourses] = useState([]);
  const navigate  = useNavigate (); // initialize useHistory

  useEffect(() => {
    // Fetch your table data from your API or data source
    const fetchCourses = async () => {
      const response = await fetch('/courses');
      const data = await response.json();
      setCourses(data);
    };
    fetchCourses();
  }, []);

  const handleEdit = (course) => {
    console.log('Editing course:', course);
  };

  const handleRemove = (course) => {
    console.log('Removing course:', course);
  };

  const handleAdd = () => {
    navigate('/teacher/add-course'); // navigate to add-course route
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add Course
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.id}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.description}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleEdit(course)}>
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleRemove(course)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Course;
