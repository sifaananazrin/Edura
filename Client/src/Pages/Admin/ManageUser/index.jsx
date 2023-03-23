import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import axios from '../../../api/axios';
import requests from '../../../api/request';
function ManageUser() {

  const config = {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(requests.getAllUsers, config);
        setUsers(response.data.users);
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchData();
  }, [config]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
  {users && users.map(user => (
    <TableRow key={user.id}>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      {/* <TableCell>{user.phone}</TableCell> */}
    </TableRow>
  ))}
</TableBody>

      </Table>
    </TableContainer>
  );
}

export default ManageUser;
