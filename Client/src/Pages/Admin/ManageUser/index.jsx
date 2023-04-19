import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import axios from '../../../api/axios';
import requests from '../../../api/request';
import swal from 'sweetalert';
import {config} from "../../../Helpers/axiosAdminEndpoints"
function ManageUser() {
  // const config = {
  //   headers: {
  //     Authorization: `${localStorage.getItem("token")}`,
  //   },
  // };

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(requests.getAllUsers, config); 
      setUsers(response.data.users);
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
      text: "You want to Block the user ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("The User is Blocked!", {
          icon: "success",
        });
        block(id);
      } else {
        swal("The user not blocked");
      }
    });
  };

  const block=async(id)=>{
    try {


      
      const response = await axios.get(`/admin/status/${id}`, config);
      console.log(response)
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }
  

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
          {users &&
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                 
                <Button
  variant="contained"
  color={user.status=="Blocked"? "primary" : "secondary"}
  onClick={() => handleBlock(user._id)}
>
  {user.status==="Blocked"? "Unblock" : "Blocked"}
</Button>

                  
                 
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ManageUser;
