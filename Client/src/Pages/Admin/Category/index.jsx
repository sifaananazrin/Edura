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
import AdminRouter from '../../../Route/AdminRouter';

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
  const navigate = useNavigate(); // initialize useHistory
  const classes = useStyles();

  useEffect(() => {
    // Fetch your table data from your API or data source
    const fetchCategories = async () => {
      const response = await fetch('/categories');
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleEdit = (category) => {
    console.log('Editing category:', category);
  };

  const handleRemove = (category) => {
    console.log('Removing category:', category);
  };

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
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.id}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.description}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(category)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRemove(category)}
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
