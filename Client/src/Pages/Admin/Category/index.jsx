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
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate(); // initialize useHistory
  const classes = useStyles();
 

  useEffect(() => {
    async function fetchData() {
      try {

      

        setLoading(true);
        const response = await axios.get(requests.getAllCatory,config);
       
        setCategories(response.data.categories);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [setCategories]);

  const handleEdit =async (id) => {
    try {


      setLoading(false);
      const response = await axios.get(`/admin/editecategory/${id}`,config);
      setSelected(response.data);
      setLoading(true);
      console.log(response)
      navigate('/admin/editcategory', { state: { selected: response.data } });
    
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove=async(id)=>{
    try {


      setLoading(false);
      const response = await axios.get(`/admin/delectcategory/${id}`);
      if(response){
        setLoading(true);
        window.location="/admin/category"
      }
      console.log(response)
    
    } catch (error) {
      console.log(error);
    }
  }

  const handleAdd = () => {
    navigate('/admin/add-category'); // navigate to add-category route
  };

  return (
    <>
    {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div>
      <div className={classes.addButton}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAdd}
          className={classes.addCategoryButton}
        >
          Add Category
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {/* <TableCell>ID</TableCell> */}
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
            {categories && categories.map((category) => (
              <TableRow key={category.id}>
                {/* <TableCell>{category.id}</TableCell> */}
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.description}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(category._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRemove(category._id)}
                    className={classes.removeCategoryButton}
                  >
                    Remove
                  </Button>
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
