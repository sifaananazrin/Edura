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


  const [loading, setLoading] = useState(false);
  const [course, setcourse] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showApprove, setShowApprove] = useState(true);
  const [showReject, setShowReject] = useState(true);
  const navigate = useNavigate(); // initialize useHistory
  const classes = useStyles();



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


  const handleApprove = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to approve the course",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willApprove) => {
      if (willApprove) {
        swal("The course has been approved!", {
          icon: "success",
        });
        approveCourse(id);
      } else {
        swal("The course was not approved");
      }
    });
  };
  
  const handleReject = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to reject the course",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willReject) => {
      if (willReject) {
        swal("The course has been rejected!", {
          icon: "success",
        });
        rejectCourse(id);
      } else {
        swal("The course was not rejected");
      }
    });
  };
  
  const approveCourse = async (id) => {
    try {
      const response = await axios.get(`/admin/approvecouser/${id}`, config);
      console.log(response);
      fetchData(); // calling fetchData function again
    } catch (error) {
      console.log(error);
    }
  };
  
  const rejectCourse = async (id) => {
    try {
      const response = await axios.get(`/admin/rejact/${id}`, config);
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
              <TableCell>status</TableCell>
              <TableCell>Approve</TableCell>
              {/* <TableCell>Reject</TableCell> */}
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
                <TableCell>{courses.status}</TableCell>
                <TableCell>
  {courses.status === "Approve" || courses.status === "rejected" ? (
    <span>Status updated</span>
  ) : (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleApprove(courses._id)}
      >
        Approve
      </Button>
      
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleReject(courses._id)}
      >
        Reject
      </Button>
    </>
  )}
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
