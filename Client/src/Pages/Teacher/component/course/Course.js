import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate,Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "../../../../api/axios"
import {config} from "../../../../Helpers/axiosTeacherEndpoints"


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
  },
  table: {
    minWidth: 650,
  },
});

function Course() {
  const [courses, setCourses] = useState([])
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    axios.get('/teacher/courses',config)
      .then(response => {
        setCourses(response.data.course);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); 

  const handleRemove = async (id) => {
    try {
      const response = await axios.get(`/teacher/delectcoures/${id}`,null, config);
      if (response) {
        window.location.href = window.location.href;
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`/teacher/editcoure/${id}`,null, config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddCourse = () => {
    setShowAddCourseForm(true);
  };

  const navigate = useNavigate();
  
  function handleClick() {
    navigate('/teacher/edit-course');
  }
 


  return (
    <div className={classes.root}>
      <div style={{ display: "flex" ,marginLeft:"900px",marginBottom:"20px"}}>
      <Link to="/teacher/create-course">
          <Button variant="contained" style={{ backgroundColor: "#930050", color: "#ffffff" }}>
            Create Course
          </Button>
        </Link>
      </div>
      <TableContainer component={Paper} className={classes.table} style={{width:"80%"}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses && courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell component="th" scope="row">{course.id}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.description}</TableCell>
                <TableCell>{course.price}</TableCell>
                <TableCell>{course.category}</TableCell>
                <TableCell>{course.link}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={handleClick}>
                    Edit
                  </Button>
                  &nbsp;
                  <Button variant="contained" color="secondary" onClick={() => handleRemove(course._id)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Course;
