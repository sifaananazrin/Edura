import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import axios from '../../../api/axios';
// import requests from '../../../api/request';
import swal from 'sweetalert';
import {config} from "../../../Helpers/axiosAdminEndpoints"
import Spinner from "../../../component/Spinner";

function ManageTeacher() {


  const [teacher,  setTeacher] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/admin/teacher", config); 
      setTeacher(response.data.approvedTeachers);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchData();
  }, [config]);

  const handleBlock =  (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to Block the Teacher ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("The Teacherr is Blocked!", {
          icon: "success",
        });
        block(id);
      } else {
        swal("The teacher not blocked");
      }
    });
  };

  const block=async(id)=>{
    try {


      setLoading(true);
      const response = await axios.get(`/admin/blockteacher/${id}`, config);
      console.log(response)
      setLoading(false);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <>
    {loading ? (
      <Spinner loading={loading} />
    ) : (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>qualification</TableCell>
            <TableCell>Block/unblock</TableCell>
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
                <TableCell>{teachers.qualification}</TableCell>
                <TableCell>{teachers.IsBlock}</TableCell>
                <TableCell>{teachers.status}</TableCell>
                <TableCell>
                 
                <Button
  variant="contained"
  color={teachers.status=="Blocked"? "primary" : "secondary"}
  onClick={() => handleBlock(teachers._id)}
>
  {teachers.status==="Blocked"? "Unblock" : "Blocked"}
</Button>

                  
                 
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
 )}
 </>

  );
}

export default ManageTeacher;
