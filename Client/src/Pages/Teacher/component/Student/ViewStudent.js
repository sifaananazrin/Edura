import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate,Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {config} from "../../../../Helpers/axiosTeacherEndpoints"
import axios from "../../../../api/axios"

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
  const [students, setstudents] = useState([])
  const [course, setcourse] = useState([])
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);
  const classes = useStyles();
 const teachername= localStorage.getItem("name")
 console.log(teachername)
   console.log(course.name)
  useEffect(() => {
    axios.get(`/teacher/getallusers?teachername=${teachername}`, config)
      .then(response => {
        console.log(response)
        setstudents(response.data.students);
        setcourse(response.data.course)
      })
      .catch(error => {
        console.log(error);
      });
  }, []); 

  // const handleRemove = async (id) => {
  //   try {
  //     const response = await axios.get(`http://localhost:5000/teacher/delectcoures/${id}`);
  //     if (response) {
  //       window.location.href = window.location.href;
  //     }
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const handleEdit = async (id) => {
  //   try {
  //     const response = await axios.get(`http://localhost:5000/teacher/editcoure/${id}`);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleAddCourse = () => {
  //   setShowAddCourseForm(true);
  // };

  const navigate = useNavigate();
  
  // function handleClick() {
  //   navigate('/teacher/edit-course');
  // }
 


  return (
    <div className={classes.root}>
      <div style={{ display: "flex" ,marginLeft:"900px",marginBottom:"20px"}}>
      {/* <Link to="/teacher/create-course">
          <Button variant="contained" style={{ backgroundColor: "#930050", color: "#ffffff" }}>
            Create Course
          </Button>
        </Link> */}
      </div>
      <TableContainer component={Paper} className={classes.table} style={{width:"80%"}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>ID</TableCell> */}
              <TableCell>Name</TableCell>
              <TableCell>email</TableCell>
              <TableCell>course name</TableCell>
              {/* <TableCell>Category</TableCell> */}
              {/* <TableCell>Link</TableCell> */}
              {/* <TableCell>Action</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            
          {students && students.map((student) => (
  <TableRow key={student.id}>
    <TableCell>{student.name}</TableCell>
    <TableCell>{student.email}</TableCell>
    <TableCell>
      {course.map(c => {
        if (c.user_id === student._id) {
          return c.name;
        }
        return "";
      })}
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
