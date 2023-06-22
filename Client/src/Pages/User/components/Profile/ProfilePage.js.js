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
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const avatar = user.slice(0, 1);
  const handleEditProfile = () => {
    // Add your navigation logic here
    navigate("/user/edit-profile");
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
          avatar={<Avatar sx={{ width: 80, height: 80, fontSize: 40 }}>{avatar}</Avatar>}
          title={<Typography variant="h4">{user}</Typography>}
          subheader={
            <Typography variant="h6" color="textSecondary">
              {email}
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary">
            Phone: {phone}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Button variant="contained" size="large" fullWidth onClick={handleEditProfile}>
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfilePage;
