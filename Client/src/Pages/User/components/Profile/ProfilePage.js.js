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

const ProfilePage = () => {

  const user = localStorage.getItem('user');
  const email = localStorage.getItem('email');
  const phone = localStorage.getItem('phone');

  return (
    <Box sx={{ flexGrow: 1, m: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          {/* <Card>
            <CardHeader
              avatar={<Avatar>JD</Avatar>}
              title="John Doe"
              subheader="johndoe@example.com"
            />
            <CardContent>
              <Typography variant="body1" color="textSecondary">
                Some description about the user can be added here.
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                Edit Profile
              </Button>
            </CardContent>
          </Card> */}
        </Grid>
        <Grid item xs={12} sm={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Personal Information
              </Typography>
              <Divider />
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1">
                  <strong>Name:</strong> {user}
                </Typography>
                <Typography variant="body1">
                  <strong>Email:</strong> {email}
                </Typography>
                <Typography variant="body1">
                  <strong>Phone:</strong> {phone}
                </Typography>
                <Typography variant="body1">
                  {/* <strong>Address:</strong> 123 Main St, Anytown USA */}
                </Typography>
              </Box>
              <Button variant="contained" sx={{ mt: 2 }}>
                Edit Information
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
