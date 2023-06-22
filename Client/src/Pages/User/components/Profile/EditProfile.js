import React, { useState } from "react";
import axios from "../../../../api/axios";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const EditPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [userId, setUserId] = useState(localStorage.getItem("uid"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [phone, setPhone] = useState(localStorage.getItem("phone"));
  const avatar = user.slice(0, 1);

  const handleSaveChanges = () => {
    const updatedData = {
      user: user,
      email: email,
      phone: phone,
      
    };

    axios
      .put(`/api/editProfile/${userId}`, updatedData)
      .then((response) => {
        // Handle the successful response from the backend
        console.log(response.data);
        navigate("/user/profile");
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card sx={{ width: 400 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ width: 80, height: 80, fontSize: 40 }}>{avatar}</Avatar>
          }
          title={<Typography variant="h4">{user}</Typography>}
          subheader={
            <Typography variant="h6" color="textSecondary">
              {email}
            </Typography>
          }
        />
        <CardContent>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name:</TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                      sx={{ mb: 2 }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email:</TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{ mb: 2 }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Phone:</TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      sx={{ mb: 2 }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Divider sx={{ my: 2 }} />
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EditPage;
