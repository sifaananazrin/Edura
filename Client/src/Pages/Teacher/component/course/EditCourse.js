// import { useState } from 'react';
import { useEffect,useState} from "react";
import React from 'react';
import { Container, TextField, Button, Select, MenuItem, InputLabel, Input, makeStyles } from '@material-ui/core';
import {config} from "../../../../Helpers/axiosTeacherEndpoints"
import axios from "../../../../api/axios"
import { useLocation ,useNavigate} from 'react-router-dom';
import Spinner from '../../../../component/Spinner';
import useStyles from "./CourseStyle";


const EditCourse = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.state.selected;
  const data = selected.course;
  // console.log(selected)

const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const [price, setprice] = useState(data.price);
  const [link, setlink] = useState(data.link);
  // const [image, setImage] = useState(data.image);
  // const [loading, setLoading] = useState(false);
  const [category, setcategory] = useState(data.category);
  // console.log(category)
  useEffect(() => {
    setLoading(true);
    axios
      .get("/teacher/categories",config)
      .then((response) => {
        setLoading(false);
        setCategories(response.data.categories);
       
      })
      .catch((error) => {
        localStorage.removeItem("teachertoken");
        localStorage.removeItem("tid");
        console.log(error);
      });
  }, []);

  const handleSubmit = async (id) => {
    // event.preventDefault();
    
    try {
      // Send a POST request to the server's API endpoint with the new category data
      setLoading(true);
      const response = await axios.put(`/teacher/editcoure/${id}`, {
        name: name,
        description: description,
        price:price,
        link:link,
        category:category,
      },config);
      if (response) {
        setLoading(false);
        navigate('/teacher/course');
        // window.location="/teacher/Course"
      }
  
      // Call the `onAddCategory` callback function with the new category data returned from the server
      // onAddCategory(response.data);
  
      // Clear the form input fields
      setName('');
      setDescription('');
      setprice('');
      setlink('');
      setcategory('');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (

    <>
    {loading ? (
      <Spinner loading={loading} />
    ) : (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <h2>Edit a Course</h2>
        <form className={classes.form} noValidate>
          <TextField
           value={name}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            onChange={(event) => setName(event.target.value)}
            label="Name"
            name="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={price}
            onChange={(event) => setprice(event.target.value)}
            id="price"
            label="Price"
            name="price"
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="discription"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            label="discription"
            name="discription"
          />
          <TextField
            variant="outlined"
            margin="normal"
            value={link}
            onChange={(event) => setlink(event.target.value)}
            required
            fullWidth
            id="courseLink"
            label="Course Link"
            name="courseLink"
          />
          {/* <InputLabel htmlFor="category">Category</InputLabel> */}
          <Select
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="category"
            name="category"
            displayEmpty
            value={category}
            defaultValue=""
          >
            <MenuItem value={category}>
              <em>Select a category</em>
            {categories &&
              categories.map((category) => (
                <MenuItem key={category._id} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
          
            </MenuItem>
          </Select>
          <InputLabel htmlFor="image">Image</InputLabel>
          <Input
            type="file"
            id="image"
            name="image"
            required
            fullWidth
            margin="normal"
            // inputProps={{ accept: 'image/*' }}
            // defaultValue={image[0].url}
          />
   <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '20px' }}
          onClick={() => handleSubmit(data._id)}
        >
          Edit Cousers
        </Button>

        </form>
      </div>
    </Container>
      )}
      </>
  );
};

export default EditCourse;
