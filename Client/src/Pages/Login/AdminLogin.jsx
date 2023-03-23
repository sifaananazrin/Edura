import React from 'react';
import axios from '../../api/axios';
import requests from '../../api/request';
import { Formik, Form } from 'formik';
import Swal from "sweetalert2";

import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(4, 'Password must be at least 8 characters'),
});

function AdminLogin() {
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values, actions) => {
    try {
      const response = await axios.post(requests.adminlogin, values);
      console.log(response.data);
      if(response.data.success){
        localStorage.setItem("token",response.data.token)
        window.location="/admin/home"
      }else {
        Swal.fire({
          icon: "error",
          title: "Invalid admin ID or Password",
          text: "admin is not found",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form>
            <FormControl>
              <FormGroup>
                <Box
                  padding={6}
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection="column"
                  width={400}
                  margin="auto"
                  alignContent={"center"}
                  sx={{
                    border: '1px solid #ccc',
                    borderRadius: 10,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    bgcolor: '#fff',
                  }}
                >
                  <Typography variant="h4" textAlign={"center"} sx={{ mb: 4 }}>
                    Login
                  </Typography>
                  <FormLabel sx={{ mt: 2 }}>Email</FormLabel>
                  <TextField
                    margin="normal"
                    variant="standard"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    sx={{ bgcolor: '#f9f9f9' }}
                  />
                  <FormLabel sx={{ mt: 2 }}>Password</FormLabel>
                  <TextField
                    margin="normal"
                    variant="standard"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    sx={{ bgcolor: '#f9f9f9' }}
                  />
                  <Button
                    sx={{
                      mt: 4,
                      borderRadius: 10,
                      bgcolor: "#2b2d42",
                      color: '#fff',
                      '&:hover': {
                        bgcolor: "#1d1f33",
                      },
                    }}
                    type='submit'
                    fullWidth
                    variant='contained'
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? 'Submitting...' : 'Login'}
                  </Button>
                </Box>
              </FormGroup>
            </FormControl>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AdminLogin;
