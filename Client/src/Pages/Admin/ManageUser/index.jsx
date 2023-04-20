import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import axios from '../../../api/axios';
import requests from '../../../api/request';
import swal from 'sweetalert';
import {config} from "../../../Helpers/axiosAdminEndpoints"
import Spinner from "../../../component/Spinner";

function ManageUser() {


  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(requests.getAllUsers, config); 
      setUsers(response.data.users);
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


      setLoading(true);
      const response = await axios.get(`/admin/status/${id}`, config);
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
 )}
 </>

  );
}

export default ManageUser;
