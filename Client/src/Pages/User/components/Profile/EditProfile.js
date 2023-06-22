import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

const EditPage = () => {
  const user = localStorage.getItem("user");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const avatar = user.slice(0, 1);

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
          avatar={<Avatar sx={{ width: 80, height: 80, fontSize: 40 }}>{avatar}</Avatar>}
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
                      defaultValue={user}
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
                      defaultValue={email}
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
                      defaultValue={phone}
                      sx={{ mb: 2 }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Divider sx={{ my: 2 }} />
          <Button variant="contained" size="large" fullWidth>
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EditPage;
