import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import axios from '../../../api/axios';
import requests from '../../../api/request';
import swal from 'sweetalert';
import {config} from "../../../Helpers/axiosAdminEndpoints"

function Teacher() {
  // const config = {
  //   headers: {
  //     Authorization: `${localStorage.getItem("admintoken")}`,
  //   },
  // };

  const [teacher, setTeacher] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {

      


  //       const response = await axios.get(requests.getAllTeacher, config);
       
  //       setTeacher(response.data.teacher);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchData();
  // }, [config]);

  // const handleBlock =  (id) => {
  //   swal({
  //     title: "Are you sure?",
  //     text: "You want to approve the teacher ",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   })
  //   .then((willDelete) => {
  //     if (willDelete) {
  //       swal("The teacher is teacher!", {
  //         icon: "success",
  //       });
  //       block(id);
  //     } else {
  //       swal("The teacher not approve");
  //     }
  //   });
  // };

  // const block=async(id)=>{
  //   try {


      
  //     const response = await axios.get(`/admin/approve/${id}`, config);
  //     console.log(response)
     
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const fetchData = async () => {
    try {
      const response = await axios.get(requests.getAllTeacher, config);
      setTeacher(response.data.teacher);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleBlock = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to approve the teacher ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("The teacher is teacher!", {
          icon: "success",
        });
        block(id);
      } else {
        swal("The teacher not approve");
      }
    });
  };
  
  const block = async (id) => {
    try {
      const response = await axios.get(`/admin/approve/${id}`, config);
      console.log(response);
      fetchData(); // calling fetchData function again
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [config]);
  
  
  

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teacher &&
            teacher.map((teachers) => (
              <TableRow key={teachers.id}>
                <TableCell>{teachers.name}</TableCell>
                <TableCell>{teachers.email}</TableCell>
                <TableCell>{teachers.status}</TableCell>
                <TableCell>
                 
                <Button
  variant="contained"
  color={teachers.status=="pending"? "primary" : "secondary"}
  onClick={() => handleBlock(teachers._id)}
>
  {teachers.status==="pending"? "approve" : "reject"}
</Button>

                  
                 
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Teacher;
