import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import AddCourse from "../Components/AddCourse"

function Shorts() {
  const [courses, setCourses] = useState([]);
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/teacher/courses')
      .then(response => {
        setCourses(response.data.course);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  const handleRemove=async(id)=>{
    try {


      
      const response = await axios.get(`http://localhost:5000/teacher/delectcoures/${id}`);
      if(response){
        window.location.href = window.location.href;

      }
      console.log(response)
    
    } catch (error) {
      console.log(error);
    }
  }

  
  const handleEdit =async (id) => {
    try {


      
      const response = await axios.get(`http://localhost:5000/teacher/editcoure/${id}`);
      // setSelected(response.data);
      console.log(response)
      // navigate('/admin/editcategory', { state: { selected: response.data } });
    
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddCourse = () => {
    setShowAddCourseForm(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '70px', sx: { maxWidth: 'lg' } }} style={{ width: "100%" }}>
      {showAddCourseForm ? (
        <AddCourse handleAddCourse={() => setShowAddCourseForm(false)} />
      ) : (
        <React.Fragment>
          <TableContainer component={Paper} style={{ width: "100%" }}>
            <Table>
              <TableHead>
                <TableRow>
                  {/* <TableCell>Course </TableCell> */}
                  <TableCell>Course Name</TableCell>
                  <TableCell>description</TableCell>
                  <TableCell>category</TableCell>
                  <TableCell>Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
  {courses && courses.map((course) => (
    <TableRow key={course.courseCode}>
      <TableCell>{course.name}</TableCell>
      <TableCell>{course.description}</TableCell>
      <TableCell>{course.category}</TableCell>
      <TableCell>{course.link}</TableCell>
      <TableCell>
        <Button  onClick={() => handleEdit(course._id)} variant="contained" color="primary" style={{ marginRight: '10px' }}>Edit</Button>
        <Button onClick={() => handleRemove(course._id)} variant="contained" color="secondary">Delete</Button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>
            </Table>
          </TableContainer>
          <Button variant="contained" color="primary" onClick={handleAddCourse} style={{ marginTop: '20px' }}>Add Course</Button>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Shorts;
