import React from 'react';
import axios from '../../api/axios';
import requests from '../../api/request';
import { Formik, Form } from 'formik';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { boxStyles,buttonStyle, divstyle,TextFieldColor } from './AdminStyle';

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
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values, actions) => {
    try {
      const response = await axios.post(requests.adminlogin, values);
      // console.log(response.data);
      if(response.data.success){
       
        // window.location="/admin/home"
        navigate("/admin/home")
        localStorage.setItem("admintoken",response.data.token)
        toast.success(response.data.message);
        // navigate("/admin/home")
      }else {
        toast.error(response.data.message);

      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={divstyle}>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form>
            <FormControl>
              <FormGroup>
                <Box
                
                  sx={boxStyles}
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
                    sx={TextFieldColor}
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
                    sx={TextFieldColor}
                  />
                  <Button
                    sx={buttonStyle}
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
