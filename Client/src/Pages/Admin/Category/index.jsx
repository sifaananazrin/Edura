import { useState, useEffect } from 'react';
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
});

function Category() {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate(); // initialize useHistory
  const classes = useStyles();
 

  useEffect(() => {
    async function fetchData() {
      try {

      


        const response = await axios.get(requests.getAllCatory);
       
        setCategories(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [setCategories]);

  const handleEdit =async (id) => {
    try {


      
      const response = await axios.get(`/admin/editecategory/${id}`);
      setSelected(response.data);
      console.log(response)
      navigate('/admin/editcategory', { state: { selected: response.data } });
    
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove=async(id)=>{
    try {


      
      const response = await axios.get(`/admin/delectcategory/${id}`);
      if(response){
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
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Category;
