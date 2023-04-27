import { useState, useEffect } from 'react';
import {config} from "../../../Helpers/axiosAdminEndpoints"
import Spinner from '../../../component/Spinner';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  makeStyles,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';
import requests from '../../../api/request';
import swal from "sweetalert";


const useStyles = makeStyles({
  addButton: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  addCategoryButton: {
    marginRight: '0.5rem',
  },
  removeCategoryButton: {
    marginLeft: '0.5rem',
  },
});

function Category() {
  // const config = {
  //   headers: {
  //     Authorization: `${localStorage.getItem("token")}`,
  //   },
  // };

  const [loading, setLoading] = useState(false);
  const [course, setcourse] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate(); // initialize useHistory
  const classes = useStyles();
 

  // useEffect(() => {
  //   async function fetchData() {
  //     try {

      

  //       setLoading(true);
  //       const response = await axios.get("/admin/couser",config);
       
  //       setcourse(response.data.course);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchData();
  // }, [setcourse]);


  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/admin/couser", config);
      setcourse(response.data.course);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  const handleBlock = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to approve the teacher ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("The teacher is teacher!", {
          icon: "success",
        });
        block(id);
      } else {
        swal("The teacher not approve");
      }
    });
  };

  const block = async (id) => {
    try {
      const response = await axios.get(`/admin/approvecouser/${id}`, config);
      console.log(response);
      fetchData(); // calling fetchData function again
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // setLoading(true);
    fetchData();
  }, [config]);


  // const handleEdit =async (id) => {
  //   try {


  //     setLoading(false);
  //     const response = await axios.get(`/admin/editecategory/${id}`,config);
  //     setSelected(response.data);
  //     setLoading(true);
  //     console.log(response)
  //     navigate('/admin/editcategory', { state: { selected: response.data } });
    
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleRemove=async(id)=>{
  //   try {


  //     setLoading(false);
  //     const response = await axios.get(`/admin/delectcategory/${id}`);
  //     if(response){
  //       setLoading(true);
  //       window.location="/admin/category"
  //     }
  //     console.log(response)
    
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const handleAdd = () => {
  //   navigate('/admin/add-category'); // navigate to add-category route
  // };

  return (
    <>
    {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div>
      <div className={classes.addButton}>
        {/* <Button
          variant="contained"
          color="primary"
          onClick={handleAdd}
          className={classes.addCategoryButton}
        >
          Add Category
        </Button> */}
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {/* <TableCell>ID</TableCell> */}
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Video Link</TableCell>
              <TableCell>Teacher</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
            {course && course.map((courses) => (
              <TableRow key={courses.id}>
                {/* <TableCell>{category.id}</TableCell> */}
                <TableCell>{courses.name}</TableCell>
                <TableCell>{courses.description}</TableCell>
                <TableCell>{courses.link}</TableCell>
                <TableCell>{courses.teachername}</TableCell>
               
                <TableCell>
                <Button
                    variant="contained"
                    color={
                      courses.status == "pending" ? "primary" : "secondary"
                    }
                    onClick={() => handleBlock(courses._id)}
                  >
                    {courses.status === "pending" ? "approve" : "reject"}
                  </Button>
                  {/* <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRemove(courses._id)}
                    className={classes.removeCategoryButton}
                  >
                    Remove
                  </Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
)}
    </>
  );
}

export default Category;
