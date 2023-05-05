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
import { useLocation ,useNavigate} from 'react-router-dom';
// import useStyles from "./CourseFormStyle"
import {config} from "../../../../Helpers/axiosTeacherEndpoints"
import axios from "../../../../api/axios"
import Spinner from '../../../../component/Spinner';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

  


const Addexam = () => {
 

  const navigate = useNavigate();
  const location = useLocation();
  const cid = location.state.courseId;
  // console.log(selected)
  const intialValues = {
    list: "",
  };
  
  
  const [loading, setLoading] = useState(false); 
  const [formList, setFormList] = useState([]);
  const [formValues, setFormValues] = useState(intialValues);

 
    


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
  const formData = {
    courseId: cid,
    list: formList,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = {
      courseId: cid,
      list: formList,
    };
  
    setLoading(true);
  
    axios.post('/teacher/exam', formData, config)
      .then((response) => {
        setLoading(false);
        // console.log(response);
        navigate('/teacher/course');
        // Do something with the response data
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        // Handle the error
      });
  };
  

  return (

    <>
    {loading ? (
      <Spinner loading={loading} />
    ) : (
    <Container maxWidth="sm">
      <div>
        <h2>Add exam </h2>
        <form  noValidate onSubmit={handleSubmit}>
        <TextField
            name="list"
            className="rounded-lg shadow-md border-gray-400 appearance-none border w-[400px] py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            label="qustion"
            value={formValues.list}
            onChange={handleListChange}
            placeholder="Enter qustion detail"
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

export default Addexam;
