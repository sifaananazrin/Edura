import React from "react";
import { useEffect,useState} from "react";
import {
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Input,
  makeStyles,
} from "@material-ui/core";
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(4),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  submitButton: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// const categories = [
//   'Arts & Crafts',
//   'Business',
//   'Computer Science',
//   'Cooking',
//   'Dance',
//   'Music',
//   'Photography',
//   'Sports',
//   'Writing'
// ];

const Form = () => {
  const classes = useStyles();
  const [name, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [teachername, setTeachername] = useState("");
  const [teacherid,setTeacher] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/teacher/categories")
      .then((response) => {
        setCategories(response.data.categories);
        setTeachername(localStorage.getItem("name"))
        setTeacher(localStorage.getItem("teachertoken"))
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
    formData.append("teachername", teachername);
    formData.append("teacherid", teachername);
    console.log(formData)


    axios
      .post("http://localhost:5000/teacher/addcourse", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        setCourseName("");
        setDescription("");
        setCategory("");
        setLink("");
        setPrice("");
        setImage("");

        if(response.data.success){
          window.location="/teacher/Course"
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <h2>Create a Course</h2>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={name}
            onChange={handleCourseNameChange}
            id="name"
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
            onChange={handlePriceChange}
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
            onChange={handleDescriptionChange}
            label="discription"
            name="discription"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={link}
            onChange={handleLinkChange}
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
            value={category}
            onChange={handleCategoryChange}
            name="category"
            displayEmpty
            defaultValue=""
          >
            <MenuItem value="">
              <em>Select a category</em>
            </MenuItem>
            {categories &&
              categories.map((category) => (
                <MenuItem key={category._id} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
          </Select>
          <InputLabel htmlFor="image">Image</InputLabel>
          <Input
            accept="image/*"
            type="file"
            id="image-upload"
            name="image"
            required
            fullWidth
            margin="normal"
            onChange={handleImageChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submitButton}
            style={{ backgroundColor: "#930050", color: "white" }}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Form;
