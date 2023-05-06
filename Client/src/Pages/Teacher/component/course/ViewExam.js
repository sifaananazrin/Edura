import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate,Link,useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from "../../../../api/axios"
import {config} from "../../../../Helpers/axiosTeacherEndpoints"
import Spinner from '../../../../component/Spinner';
import useStyles from "./CourseStyle";


function ViewExam() {


    const { id } = useParams();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([])
  const [selected, setSelected] = useState(null);
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);

 


  

  const fetchExamData = () => {
    setLoading(true);
    axios
      .get('/teacher/getexam', {
        params: {
          courseId: id,
        },
        headers: config.headers,
      })
      .then((response) => {
        setLoading(false);
        setCourses(response.data.found);
        console.log(response.data.found);
      })
      .catch((error) => {
        localStorage.removeItem('teachertoken');
        localStorage.removeItem('tid');
        console.log(error);
      });
  };
  
  useEffect(() => {
    fetchExamData();
  }, []);
  
  const handleRemove = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`/teacher/delectquestions/${id}`, config);
      if (response) {
        setLoading(false);
        fetchExamData(); // Call the function to fetch updated data
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleEdit =async (id) => {
    try {


      setLoading(true);
      const response = await axios.get(`/teacher/editexam/${id}`,config);
      setSelected(response.data);
      setLoading(false);
      console.log(response)
      navigate('/teacher/editExam', { state: { selected: response.data } });
    
    } catch (error) {
      console.log(error);
    }
  };




  
  const navigate = useNavigate();
  
 
 


  return (
    <>
    {loading ? (
      <Spinner loading={loading} />
    ) : (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.table} style={{width:"80%"}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>question</TableCell>
              <TableCell>Option A</TableCell>
              <TableCell>Option B</TableCell>
              <TableCell>Option C</TableCell>
              <TableCell>Option D</TableCell>
              <TableCell>Corrct</TableCell>
              <TableCell>Action</TableCell>
              {/* <TableCell>Exam</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {courses && courses.map((course,index) => (
              <TableRow key={course.id}>
                <TableCell component="th" scope="row">{index + 1}</TableCell>
                <TableCell>{course.question}</TableCell>
                <TableCell>{course.a}</TableCell>
                <TableCell>{course.b}</TableCell>
                <TableCell>{course.c}</TableCell>
                <TableCell>{course.d}</TableCell>
                <TableCell>Option:{course.correct.toUpperCase()}</TableCell>
                <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleEdit(course._id)} style={{ height: '40px' }}>
  Edit
</Button>

&nbsp;

 </TableCell>
 <TableCell>
 <Button
  className={classes.actionButton}
  variant="contained"
  color="secondary"
  onClick={() => handleRemove(course._id)}
>
  Remove
</Button>
</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
      )}
      </>
  );
}

export default ViewExam;
