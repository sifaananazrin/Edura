import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const AddCourse = () => {
  const [name, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/teacher/categories")
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCourseNameChange = (event) => {
    setCourseName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("link", link);
    formData.append("price", price);
    formData.append("image", image);

    axios
      .post("http://localhost:5000/teacher/addcourse", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        // Reset the form state
        setCourseName("");
        setDescription("");
        setCategory("");
        setLink("");
        setPrice("");
        setImage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "auto",
        gap: "20px",
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Course Name"
        variant="outlined"
        value={name}
        onChange={handleCourseNameChange}
      />

      <TextField
        label="Description"
        variant="outlined"
        value={description}
        onChange={handleDescriptionChange}
      />

      <FormControl variant="outlined" >
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          id="category-select"
          value={category}
          onChange={handleCategoryChange}
          label="Category"
        >
          {categories && categories.map((category) => (
            <MenuItem key={category._id} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select a category for the course</FormHelperText>
      </FormControl>

      <TextField
        label="Link"
        variant="outlined"
        value={link}
        onChange={handleLinkChange}
      />
      <TextField
  label="Price"
  variant="outlined"
  value={price}
  onChange={handlePriceChange}
/>


      <FormControl sx={{ mt: 1, mb: 1 }}>
        <input
          accept="image/*"
          id="image-upload"
          multiple
          type="file"
          onChange={handleImageChange}
        />
        <label htmlFor="image-upload">
          <Button variant="outlined" component="span">
            Upload Image
          </Button>
        </label>
      </FormControl>

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default AddCourse;
