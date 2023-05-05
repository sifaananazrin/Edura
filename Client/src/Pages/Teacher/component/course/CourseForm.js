import React from "react";
import styled from 'styled-components';
// import { FormContainer, Form, SubmitButton } from './CourseFormStyle';
import { useNavigate} from 'react-router-dom';
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
import {config} from "../../../../Helpers/axiosTeacherEndpoints"
import axios from "../../../../api/axios"
import Spinner from '../../../../component/Spinner';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import useStyles from "./CourseFormStyle"
  


const Form = () => {
  const classes = useStyles();
  const intialValues = {
    list: "",
  };
  const navigate = useNavigate();
  const [name, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [teachername, setTeachername] = useState("");
  const [token,setToken] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [formList, setFormList] = useState([]);
  const [formValues, setFormValues] = useState(intialValues);

  // console.log(formValues)



  useEffect(() => {
    setLoading(true);
    axios.get("/teacher/categories",config)
      .then((response) => {
        setLoading(false);
        setCategories(response.data.categories);
        setTeachername(localStorage.getItem("name"))
        // setTeachername(localStorage.getItem("name"))
       setToken(localStorage.getItem("teachertoken"))
      //  console.log(token)
      })
      .catch((error) => {
        localStorage.removeItem("teachertoken");
        localStorage.removeItem("tid");
        console.log(error);
      });
  }, []);

  // console.log(formValues)
    
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

  const handleListChange = (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, list: value });
    // setFormValues({ ...formValues, list: value });
  };


  const handleAddList = (e) => {
    e.preventDefault();
    //!preventing the default  refreshing behavior when submitting the form
    setFormList([...formList, { list: formValues.list }]);
    setFormValues({ ...formValues, list: "" });
  };


  const handleDelete = (id) => {
    const ListFilter = formList.filter((list, index) => {
      return id !== index;
    });
    setFormList(ListFilter);
  };

  const renderedList = formList.map((list, index) => {
    return (
      <li
        key={index}
        className="bg-gray-100 flex  justify-between items-center py-2 px-4 rounded-lg mb-4"
      >
        <span className="text-gray-600 mr-4">{list.list}</span>
        <span className="text-gray-500 cursor-pointer hover:text-red-500">
        <IconButton onClick={() => handleDelete(index)}>
          <DeleteIcon />
        </IconButton>
        </span>
      </li>
    );
  });


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
    formData.append("token", token);
    formData.append("list", JSON.stringify(formList));

    console.log(formList)

    setLoading(true);
    axios
      .post("/teacher/addcourse", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },...config,
      })
      .then((response) => {
        console.log(response);
        setCourseName("");
        setDescription("");
        setCategory("");
        setLink("");
        setPrice("");
        setImage("");
        setLoading(false);
        if(response.data.success){
          navigate('/teacher/course');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (

    <>
    {loading ? (
      <Spinner loading={loading} />
    ) : (
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

{/* <label className="block text-white font-bold mb-2 " htmlFor="details">
            Details
          </label> */}
          <TextField
            name="list"
            className="rounded-lg shadow-md border-gray-400 appearance-none border w-[400px] py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            label="chapter"
            value={formValues.list}
            onChange={handleListChange}
            placeholder="Enter plan detail"
          />
          <button
            onClick={handleAddList}
            className="bg-custom-gym  text-white font-bold ml-6 py-2 px-6 rounded focus:outline-none focus:shadow-outline hover:bg-custom-head"
          >
            Add
          </button>

          <ul className="mt-3 max-h-24 overflow-y-auto scrollbar-thumb-black scrollbar-track-black">
            {renderedList}
          </ul>


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

)}
</>
  );
};

export default Form;




// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Form = styled.form`
//   width: 100%;
// `;

// const SubmitButton = styled.button`
//   /* styles for button */
// `;

// export { FormContainer, Form, SubmitButton };


